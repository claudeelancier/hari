import { motion, useReducedMotion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
}

export default function Reveal({
  children,
  className = '',
  delay = 0,
  as = 'div',
  amount = 0.25,
}) {
  const reduce = useReducedMotion()
  const Tag = motion[as] || motion.div
  if (reduce) return <div className={className}>{children}</div>
  return (
    <Tag
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  )
}
