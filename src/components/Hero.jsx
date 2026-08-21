import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  LayoutDashboard,
  Users,
  CalendarCheck,
  Palmtree,
  Wallet,
  Gauge,
  PieChart,
  Settings,
  ChevronDown,
  Bell,
} from 'lucide-react'
import { GhostButton, PrimaryButton } from './ui/Buttons.jsx'
import OrbitalGraphic from './ui/OrbitalGraphic.jsx'
import AnimatedCounter from './ui/AnimatedCounter.jsx'
import { AreaChart } from './charts/Charts.jsx'
import {
  dashboardNav,
  heroStats,
  leaveRequests,
  recentJoiners,
} from '../data/landingData.js'

const icons = [
  LayoutDashboard,
  Users,
  CalendarCheck,
  Palmtree,
  Wallet,
  Gauge,
  PieChart,
  Settings,
]

export default function Hero({ onDemo }) {
  const reduce = useReducedMotion()
  const wrap = useRef(null)
  const { scrollYProgress } = useScroll({
    target: wrap,
    offset: ['start start', 'end start'],
  })
  const dashY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 48])

  const lines = ['HR management', 'built around', 'your business.']

  return (
    <section className="hero" id="top" ref={wrap}>
      <div className="hero-inner">
        <div className="hero-copy">
          <h1 className="display">
            {lines.map((line, i) => (
              <motion.span
                key={line}
                className="display-line"
                initial={reduce ? false : { y: '110%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.18 + i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {line}
              </motion.span>
            ))}
          </h1>
          <motion.p
            className="hero-lead"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.62 }}
          >
            Manage recruitment, onboarding, employees, attendance, leave, payroll,
            compliance and appraisals from one platform.
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.78 }}
          >
            <PrimaryButton onClick={onDemo}>Book a Demo</PrimaryButton>
            <GhostButton play onClick={() => document.getElementById('platform')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore Platform
            </GhostButton>
          </motion.div>
        </div>

        <div className="hero-visual">
          <motion.div
            initial={reduce ? false : { scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.05, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <OrbitalGraphic />
          </motion.div>
          <motion.div style={{ y: dashY }} className="dash-float">
            <motion.div
              className="dashboard"
              initial={reduce ? false : { x: 72, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.95, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <DashboardMock />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function DashboardMock() {
  const [active, setActive] = useState('overview')
  return (
    <div className="dash">
      <aside className="dash-side">
        <span className="dash-logo">VH</span>
        {dashboardNav.map((item, i) => {
          const Icon = icons[i]
          return (
            <button
              key={item.id}
              className={active === item.id ? 'is-on' : ''}
              aria-label={item.label}
              title={item.label}
              onClick={() => setActive(item.id)}
            >
              <Icon size={16} />
            </button>
          )
        })}
      </aside>
      <div className="dash-main">
        <div className="dash-top">
          <div>
            <p className="tiny">VeltroHR</p>
            <strong>Overview</strong>
          </div>
          <button className="branch-pill" type="button">
            Head Office – Mumbai <ChevronDown size={14} />
          </button>
          <button className="icon-btn" type="button" aria-label="Notifications">
            <Bell size={15} />
          </button>
        </div>
        <div className="stat-grid">
          {heroStats.map((stat) => (
            <article key={stat.label} className="stat-card">
              <p>{stat.label}</p>
              <strong>
                <AnimatedCounter value={stat.value} />
              </strong>
            </article>
          ))}
        </div>
        <div className="dash-body">
          <article className="panel">
            <header>
              <span>Attendance Overview</span>
              <span className="muted tiny">This week</span>
            </header>
            <AreaChart className="area-chart" />
          </article>
            <article className="panel payroll-mini" title="May payroll has been processed">
            <header>Payroll Summary</header>
            <strong>
              <AnimatedCounter value="₹24565000" />
            </strong>
            <p className="muted tiny">May 2024 · processed</p>
            <div className="progress">
              <i />
            </div>
          </article>
          <article className="panel">
            <header>Leave Requests</header>
            <ul className="mini-list">
              {leaveRequests.map((row) => (
                <li key={row.name}>
                  <span className="avatar">{row.avatar}</span>
                  <div>
                    <strong>{row.name}</strong>
                    <p>{row.type}</p>
                  </div>
                  <em className={`tag ${row.status === 'Approved' ? 'ok' : 'wait'}`}>
                    {row.status}
                  </em>
                </li>
              ))}
            </ul>
          </article>
          <article className="panel">
            <header>Recent Joiners</header>
            <ul className="mini-list">
              {recentJoiners.map((row) => (
                <li key={row.name}>
                  <span className="avatar">{row.name.slice(0, 2)}</span>
                  <div>
                    <strong>{row.name}</strong>
                    <p>{row.role}</p>
                  </div>
                  <em className="muted tiny">{row.date}</em>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </div>
  )
}
