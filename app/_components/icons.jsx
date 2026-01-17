import {
  Brush,
  Globe,
  Zap,
  Image as ImageIcon,
  Sparkles,
  FileText,
  Info,
  Link,
  Sigma,
} from 'lucide-react'

export function BrushIcon(props) {
  return <Brush size={24} strokeWidth={1.5} {...props} />
}

export function GlobeIcon(props) {
  return <Globe size={24} strokeWidth={1.5} {...props} />
}

export function LightningIcon(props) {
  return <Zap size={24} strokeWidth={1.5} {...props} />
}

export function PictureIcon(props) {
  return <ImageIcon size={24} strokeWidth={1.5} {...props} />
}

export function StarsIcon(props) {
  return <Sparkles size={24} strokeWidth={1.5} {...props} />
}

export function DocumentIcon(props) {
  return <FileText size={24} strokeWidth={1.5} {...props} />
}

export function InformationCircleIcon(props) {
  return <Info size={24} strokeWidth={1.5} {...props} />
}

export function LinkIcon(props) {
  return <Link size={24} strokeWidth={1.5} {...props} />
}

export function FormulaIcon(props) {
  return <Sigma size={24} strokeWidth={1.5} {...props} />
}
