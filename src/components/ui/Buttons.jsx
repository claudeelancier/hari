import { ArrowRight, Play } from 'lucide-react'

export function PrimaryButton({ children, onClick, type = 'button', className = '' }) {
  return (
    <button type={type} className={`btn btn-primary ${className}`} onClick={onClick}>
      <span>{children}</span>
      <ArrowRight size={16} strokeWidth={2.2} className="btn-arrow" />
    </button>
  )
}

export function GhostButton({ children, onClick, type = 'button', className = '', play = false }) {
  return (
    <button type={type} className={`btn btn-ghost ${className}`} onClick={onClick}>
      {play ? (
        <span className="play-orb" aria-hidden="true">
          <Play size={12} fill="currentColor" />
        </span>
      ) : null}
      <span>{children}</span>
    </button>
  )
}
