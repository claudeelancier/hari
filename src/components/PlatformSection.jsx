import { motion } from 'framer-motion'
import { Plus, Globe2, Star } from 'lucide-react'
import Reveal from './ui/Reveal.jsx'
import AnimatedCounter from './ui/AnimatedCounter.jsx'
import { Bars, DonutChart, MiniLine } from './charts/Charts.jsx'
import { images } from '../data/landingData.js'

const cardAnim = {
  hidden: { opacity: 0, y: 35, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1 },
}

export default function PlatformSection() {
  return (
    <section className="platform" id="platform">
      <div className="container">
        <div className="platform-head">
          <Reveal>
            <p className="section-kicker">PLATFORM</p>
            <h2 className="section-title">
              Everything your
              <br />
              HR team needs,
              <br />
              in one place.
            </h2>
            <span className="lime-rule" />
            <p className="muted platform-copy">
              Recruitment, employee records, attendance, payroll and appraisals sit
              together so your team never switches systems to finish a cycle.
            </p>
          </Reveal>
        </div>

        <motion.div
          className="bento"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.article className="bento-card recruit" variants={cardAnim} transition={{ duration: 0.65 }}>
            <div className="card-copy">
              <span className="num">01</span>
              <h3>Recruitment & Onboarding</h3>
              <p>Open roles, candidate pipelines and day-one joining packs in a single workflow.</p>
              <div className="recruit-meta">
                <div className="faces">
                  {['AM', 'PS', 'NK', 'RV'].map((f) => (
                    <span key={f}>{f}</span>
                  ))}
                </div>
                <strong>32 Open Positions</strong>
                <button className="plus" aria-label="Create position">
                  <Plus size={16} />
                </button>
              </div>
            </div>
            <img src={images.recruit} alt="HR professional reviewing candidate profiles on a laptop" />
          </motion.article>

          <motion.article className="bento-card employee-dark" variants={cardAnim} transition={{ duration: 0.7 }}>
            <span className="num light">02</span>
            <h3>Employee Management</h3>
            <p>Every profile, document and reporting line stays current across branches.</p>
            <div className="emp-split">
              <div className="emp-chip">
                <img src={images.arjun} alt="Arjun Mehta" />
                <div>
                  <strong>Arjun Mehta</strong>
                  <p>EMP-20418 · Engineering</p>
                  <p className="tiny">Joined 14 Jan 2021</p>
                </div>
              </div>
              <div className="donut-wrap">
                <DonutChart />
                <div className="donut-label">
                  <small>Total Employees</small>
                  <strong>
                    <AnimatedCounter value={1248} />
                  </strong>
                </div>
              </div>
            </div>
            <ul className="legend">
              <li>
                <i className="lime" /> Active
              </li>
              <li>
                <i className="cyan" /> On Leave
              </li>
              <li>
                <i className="mute" /> Inactive
              </li>
            </ul>
          </motion.article>

          <motion.article className="bento-card attendance" variants={cardAnim} transition={{ duration: 0.65 }}>
            <span className="num">03</span>
            <h3>Attendance & Leave</h3>
            <p>Shifts, presence and leave balances update before payroll is locked.</p>
            <Bars />
            <div className="week">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                <span key={`${d}-${i}`}>{d}</span>
              ))}
            </div>
          </motion.article>

          <motion.article className="bento-card payroll-card" variants={cardAnim} transition={{ duration: 0.65 }}>
            <span className="num">04</span>
            <p className="tiny">MAY 2024 PAYROLL</p>
            <h3>Payroll</h3>
            <p>Total Payroll</p>
            <strong className="money">
              <AnimatedCounter value="₹24565000" />
            </strong>
            <MiniLine className="mini-line" />
          </motion.article>

          <motion.article className="bento-card performance" variants={cardAnim} transition={{ duration: 0.65 }}>
            <span className="num">05</span>
            <h3>Performance & Appraisal</h3>
            <p>Goals, reviews and appraisal outcomes stay attached to the same employee record.</p>
            <div className="rating">
              <strong>4.5</strong>
              <div>
                <span>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} fill={i < 4 ? '#c7f21d' : 'none'} color="#c7f21d" />
                  ))}
                </span>
                <p className="tiny muted">Cycle average</p>
              </div>
            </div>
          </motion.article>

          <motion.article className="bento-card branch-mini" variants={cardAnim} transition={{ duration: 0.65 }}>
            <span className="num">06</span>
            <Globe2 className="card-icon" />
            <h3>Multi-Branch Management</h3>
            <p>Policies, headcount and payroll stay aligned across every location.</p>
          </motion.article>
        </motion.div>
      </div>
    </section>
  )
}
