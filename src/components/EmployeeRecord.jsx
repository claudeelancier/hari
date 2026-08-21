import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Phone, Star } from 'lucide-react'
import Reveal from './ui/Reveal.jsx'
import AnimatedCounter from './ui/AnimatedCounter.jsx'
import { SparkBars } from './charts/Charts.jsx'
import { images } from '../data/landingData.js'

export default function EmployeeRecord() {
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [18, -18])

  return (
    <section className="employee-record" id="employee-record" ref={ref}>
      <div className="container record-grid">
        <Reveal>
          <p className="section-kicker">EMPLOYEE RECORD</p>
          <h2 className="section-title">
            One complete
            <br />
            employee record.
          </h2>
          <p className="muted">
            Personal details, attendance, leave, payroll and performance stay attached
            to a single profile so managers never hunt across tools.
          </p>
        </Reveal>

        <div className="record-stage">
          <motion.article className="float-card att-card" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p>Attendance</p>
            <strong>
              <AnimatedCounter value={25} /> present days
            </strong>
            <SparkBars />
          </motion.article>

          <motion.article className="float-card leave-card" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}>
            <p>Available Leave</p>
            <ul>
              <li>
                Casual <strong>6</strong>
              </li>
              <li>
                Earned <strong>12</strong>
              </li>
              <li>
                Sick <strong>5</strong>
              </li>
            </ul>
          </motion.article>

          <motion.div className="portrait-wrap" style={{ y }}>
            <img src={images.priya} alt="Priya Sharma, HR Manager" />
            <div className="portrait-caption">
              <strong>Priya Sharma</strong>
              <span>HR Manager</span>
            </div>
          </motion.div>

          <motion.article className="float-card pay-card" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <p>Payroll</p>
            <small>Net Pay</small>
            <strong>
              <AnimatedCounter value="₹80750" />
            </strong>
          </motion.article>

          <motion.article className="float-card perf-card" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.14 }}>
            <p>Performance</p>
            <small>Current Rating</small>
            <strong>4.5 / 5</strong>
            <span className="stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={13} fill={i < 4 ? '#c7f21d' : 'none'} color="#c7f21d" />
              ))}
            </span>
          </motion.article>

          <motion.article className="float-card details-card" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.18 }}>
            <p>Personal details</p>
            <ul>
              <li>ID · EMP-11802</li>
              <li>
                <Mail size={13} /> priya.sharma@veltrohr.com
              </li>
              <li>
                <Phone size={13} /> +91 98200 44118
              </li>
              <li>Department · Human Resources</li>
              <li>Joined · 03 Mar 2019</li>
              <li>Reports to · Ankit Rao</li>
            </ul>
          </motion.article>
        </div>
      </div>
    </section>
  )
}
