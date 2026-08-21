import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function OrbitalGraphic() {
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [18, -28])

  return (
    <motion.div ref={ref} className="orbital" style={{ y }} aria-hidden="true">
      <div className="orbital-core" />
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} className={`orbit-ring ring-${n}`} />
      ))}
      <span className="orbit-lime" />
      <span className="orbit-dot d1" />
      <span className="orbit-dot d2" />
      <span className="orbit-dot d3" />
      <span className="orbit-person p1" />
      <span className="orbit-person p2" />
      <span className="orbit-person p3" />
    </motion.div>
  )
}
