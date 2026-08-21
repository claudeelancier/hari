import { motion } from 'framer-motion'
import {
  UserPlus,
  ClipboardCheck,
  Users,
  CalendarCheck,
  Wallet,
  Gauge,
  Medal,
} from 'lucide-react'
import Reveal from './ui/Reveal.jsx'
import { lifecycleSteps } from '../data/landingData.js'

const icons = [UserPlus, ClipboardCheck, Users, CalendarCheck, Wallet, Gauge, Medal]

export default function ProcessSection() {
  return (
    <section className="process" id="lifecycle">
      <div className="container">
        <Reveal className="process-head">
          <p className="section-kicker">HR LIFECYCLE</p>
          <h2 className="section-title">From hiring to payroll, all connected.</h2>
        </Reveal>
        <div className="timeline">
          <svg className="timeline-line" viewBox="0 0 1100 80" preserveAspectRatio="none" aria-hidden="true">
            <motion.path
              d="M20 40 C 90 10, 150 70, 220 40 S 350 10, 420 40 S 550 70, 620 40 S 750 10, 820 40 S 950 70, 1080 40"
              fill="none"
              stroke="#c7f21d"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </svg>
          {lifecycleSteps.map((step, i) => {
            const Icon = icons[i]
            return (
              <motion.article
                key={step.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.55 }}
              >
                <span className="step-orb">
                  <Icon size={18} />
                </span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
