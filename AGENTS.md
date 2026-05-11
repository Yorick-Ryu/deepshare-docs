# AGENTS.md

## Development Preview

Use the Next.js development server when editing pages, layouts, styles, or MDX content:

```bash
npm run dev
```

Open the local URL printed by Next.js, usually:

```text
http://localhost:3000
```

This mode is best for fast iteration. It does not fully represent the final static export output.

## Static Build Preview

Use the static preview command when checking the exported site, SEO output, sitemap, robots.txt, Pagefind search index, or behavior that depends on the generated `out/` directory:

```bash
npm run preview:static
```

This command runs the production build first, then serves `out/` on:

```text
http://localhost:4173
```

`npm run preview:static` can take longer than `npm run dev` because it runs `next build` and the `postbuild` steps:

- image optimization
- Pagefind index generation
- sitemap and robots.txt generation

Prefer this mode before shipping SEO/GEO-related changes or changes that may behave differently in static export.
