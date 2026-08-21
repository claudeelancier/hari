import { useEffect, useMemo, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

function parseValue(value) {
  if (typeof value === 'number') {
    return { target: value, prefix: '', suffix: '', decimals: 0, indian: true }
  }
  const raw = String(value)
  const prefix = raw.match(/^[^\d]*/)?.[0] ?? ''
  const withoutPrefix = raw.slice(prefix.length)
  const suffixMatch = withoutPrefix.match(/[^\d,]+$/)
  const suffix = suffixMatch ? suffixMatch[0] : ''
  const numeric = withoutPrefix.slice(0, withoutPrefix.length - suffix.length).replace(/,/g, '')
  const decimals = numeric.includes('.') ? numeric.split('.')[1].length : 0
  return {
    target: Number(numeric) || 0,
    prefix,
    suffix,
    decimals,
    indian: true,
  }
}

function formatNumber(n, decimals, indian) {
  if (decimals > 0) return n.toFixed(decimals)
  const rounded = Math.round(n)
  return indian
    ? new Intl.NumberFormat('en-IN').format(rounded)
    : new Intl.NumberFormat('en-US').format(rounded)
}

export default function AnimatedCounter({
  value,
  duration = 1400,
  className = '',
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const parsed = useMemo(() => parseValue(value), [value])
  const [display, setDisplay] = useState(
    `${parsed.prefix}${formatNumber(0, parsed.decimals, parsed.indian)}${parsed.suffix}`,
  )
  const reduceMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    if (!inView) return
    if (reduceMotion) {
      setDisplay(
        `${parsed.prefix}${formatNumber(parsed.target, parsed.decimals, parsed.indian)}${parsed.suffix}`,
      )
      return undefined
    }

    const start = performance.now()
    let frame = 0
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      const current = parsed.target * eased
      setDisplay(
        `${parsed.prefix}${formatNumber(current, parsed.decimals, parsed.indian)}${parsed.suffix}`,
      )
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, parsed, duration, reduceMotion])

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}
