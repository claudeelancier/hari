import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { PrimaryButton } from './Buttons.jsx'

export default function DemoModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="demo-title"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={onClose} aria-label="Close dialog">
              <X size={18} />
            </button>
            <p className="section-kicker">BOOK A DEMO</p>
            <h2 id="demo-title">See VeltroHR configured for your business.</h2>
            <p className="muted">
              Share a few details and we’ll walk you through recruitment, payroll, attendance
              and compliance on a live workspace.
            </p>
            <form
              className="demo-form"
              onSubmit={(e) => {
                e.preventDefault()
                onClose()
              }}
            >
              <label>
                Work email
                <input type="email" required placeholder="you@company.com" />
              </label>
              <label>
                Company
                <input type="text" required placeholder="Company name" />
              </label>
              <label>
                Team size
                <select defaultValue="100-500">
                  <option>1–50</option>
                  <option>50–100</option>
                  <option>100-500</option>
                  <option>500+</option>
                </select>
              </label>
              <PrimaryButton type="submit">Request demo</PrimaryButton>
            </form>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
