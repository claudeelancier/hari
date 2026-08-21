export function AreaChart({ className = '', accent = '#9fcb00' }) {
  return (
    <svg className={className} viewBox="0 0 280 92" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={accent} stopOpacity="0.35" />
          <stop offset="100%" stopColor={accent} stopOpacity="0.02" />
        </linearGradient>
      </defs>
      <path
        d="M0 70 C 28 62, 40 48, 62 52 C 90 58, 108 28, 136 34 C 164 40, 178 18, 206 22 C 228 25, 246 12, 280 16 L 280 92 L 0 92 Z"
        fill="url(#areaFill)"
      />
      <path
        className="chart-stroke"
        d="M0 70 C 28 62, 40 48, 62 52 C 90 58, 108 28, 136 34 C 164 40, 178 18, 206 22 C 228 25, 246 12, 280 16"
        stroke={accent}
        strokeWidth="2.2"
        fill="none"
      />
    </svg>
  )
}

export function LineChart({ className = '', glow = false }) {
  return (
    <svg className={className} viewBox="0 0 520 160" fill="none" aria-hidden="true">
      <g opacity="0.18" stroke="#d7ead0">
        {Array.from({ length: 6 }).map((_, i) => (
          <line key={`h-${i}`} x1="0" y1={20 + i * 24} x2="520" y2={20 + i * 24} />
        ))}
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`v-${i}`} x1={20 + i * 60} y1="8" x2={20 + i * 60} y2="152" />
        ))}
      </g>
      <path
        className={glow ? 'chart-stroke chart-glow' : 'chart-stroke'}
        d="M8 118 C 48 112, 72 96, 102 90 C 140 82, 168 48, 210 54 C 252 60, 278 28, 324 36 C 368 44, 392 22, 436 18 C 468 16, 492 32, 512 28"
        stroke="#c7f21d"
        strokeWidth="2.6"
        fill="none"
      />
      {[
        [102, 90],
        [210, 54],
        [324, 36],
        [436, 18],
        [512, 28],
      ].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="4.2" fill="#c7f21d" />
      ))}
    </svg>
  )
}

export function MiniLine({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 140 40" fill="none" aria-hidden="true">
      <path
        className="chart-stroke"
        d="M2 28 C 18 26, 24 16, 38 18 C 54 21, 62 8, 80 12 C 96 16, 108 6, 138 9"
        stroke="#9fcb00"
        strokeWidth="2"
      />
    </svg>
  )
}

export function DonutChart({ size = 148, thickness = 16 }) {
  const r = (size - thickness) / 2
  const c = 2 * Math.PI * r
  const segs = [
    { color: '#c7f21d', pct: 0.72 },
    { color: '#5ad4e6', pct: 0.16 },
    { color: '#3d4a44', pct: 0.12 },
  ]
  let offset = 0
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth={thickness}
      />
      {segs.map((seg) => {
        const dash = `${c * seg.pct} ${c}`
        const el = (
          <circle
            key={seg.color}
            className="donut-seg"
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke={seg.color}
            strokeWidth={thickness}
            strokeDasharray={dash}
            strokeDashoffset={-offset}
            strokeLinecap="butt"
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
          />
        )
        offset += c * seg.pct
        return el
      })}
    </svg>
  )
}

export function Bars({ values = [46, 72, 38, 84, 58, 66, 40] }) {
  return (
    <div className="bar-row" aria-hidden="true">
      {values.map((v, i) => (
        <span key={i} className="bar-col">
          <i style={{ height: `${v}%` }} />
        </span>
      ))}
    </div>
  )
}

export function SparkBars({ values = [18, 22, 16, 24, 20, 26, 19] }) {
  const max = Math.max(...values)
  return (
    <svg viewBox="0 0 120 36" className="spark-bars" aria-hidden="true">
      {values.map((v, i) => {
        const h = (v / max) * 30
        return (
          <rect
            key={i}
            x={i * 17}
            y={36 - h}
            width="11"
            height={h}
            rx="2"
            fill={i === 5 ? '#c7f21d' : '#d7e3c4'}
          />
        )
      })}
    </svg>
  )
}
