import { promises as fs } from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const IMAGE_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg', '.webp', '.avif'])
const MIN_BYTES_TO_REPLACE = 512

async function walkFiles(dirPath) {
  const entries = await fs.readdir(dirPath, { withFileTypes: true })
  const files = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(dirPath, entry.name)
      if (entry.isDirectory()) return walkFiles(entryPath)
      return entry.isFile() ? [entryPath] : []
    })
  )
  return files.flat()
}

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase()
  if (!IMAGE_EXTENSIONS.has(ext)) return { changed: false, savedBytes: 0 }

  const original = await fs.readFile(filePath)
  let pipeline = sharp(original)

  if (ext === '.png') {
    pipeline = pipeline.png({
      compressionLevel: 9,
      effort: 10,
      adaptiveFiltering: true,
      palette: true,
      quality: 78,
      colours: 128
    })
  } else if (ext === '.jpg' || ext === '.jpeg') {
    pipeline = pipeline.jpeg({ quality: 78, mozjpeg: true, progressive: true })
  } else if (ext === '.webp') {
    pipeline = pipeline.webp({ quality: 76, effort: 6 })
  } else if (ext === '.avif') {
    pipeline = pipeline.avif({ quality: 50, effort: 6 })
  }

  const optimized = await pipeline.toBuffer()
  const savedBytes = original.length - optimized.length

  if (savedBytes >= MIN_BYTES_TO_REPLACE) {
    await fs.writeFile(filePath, optimized)
    return { changed: true, savedBytes }
  }

  return { changed: false, savedBytes: 0 }
}

async function main() {
  const targetArg = process.argv[2] ?? 'out/images'
  const imagesDir = path.resolve(process.cwd(), targetArg)

  try {
    await fs.access(imagesDir)
  } catch {
    console.log(`[optimize-images] skip: ${targetArg} does not exist`)
    return
  }

  const files = await walkFiles(imagesDir)
  let checkedCount = 0
  let optimizedCount = 0
  let totalSavedBytes = 0

  for (const filePath of files) {
    checkedCount += 1
    const result = await optimizeImage(filePath)
    if (result.changed) {
      optimizedCount += 1
      totalSavedBytes += result.savedBytes
    }
  }

  const savedKB = (totalSavedBytes / 1024).toFixed(2)
  console.log(
    `[optimize-images] checked ${checkedCount} files in ${targetArg}, optimized ${optimizedCount}, saved ${savedKB} KB`
  )
}

main().catch((error) => {
  console.error('[optimize-images] failed:', error)
  process.exitCode = 1
})
