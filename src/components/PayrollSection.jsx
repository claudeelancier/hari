import { motion } from 'framer-motion'
import {
  BadgeIndianRupee,
  Percent,
  MinusCircle,
  Landmark,
  CalendarOff,
  Award,
} from 'lucide-react'
import Reveal from './ui/Reveal.jsx'
import AnimatedCounter from './ui/AnimatedCounter.jsx'
import { LineChart } from './charts/Charts.jsx'
import { payrollFeatures, payrollEmployees, contributions, attendanceSummary } from '../data/landingData.js'

const icons = [BadgeIndianRupee, Percent, MinusCircle, Landmark, CalendarOff, Award]

export default function PayrollSection() {
  return (
    <section className="payroll-dark" id="payroll">
      <div className="container payroll-layout">
        <Reveal className="payroll-intro">
          <p className="section-kicker light">PAYROLL</p>
          <h2 className="section-title light">
            Payroll that
            <br />
            follows your rules.
          </h2>
          <p className="muted light-muted">
            Calculate, comply and pay the way your business works — salary structures,
            statutory deductions and appraisals included.
          </p>
          <div className="pay-icons">
            {payrollFeatures.map((item, i) => {
              const Icon = icons[i]
              return (
                <div key={item.id} className="pay-icon">
                  <span>
                    <Icon size={18} />
                  </span>
                  <p>{item.label}</p>
                </div>
              )
            })}
          </div>
        </Reveal>

        <div className="payroll-visual">
          <motion.div
            className="pay-graph"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <LineChart className="wide-line" glow />
          </motion.div>

          <motion.article
            className="pay-report"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="tiny">Payroll Report – May 2024</p>
            <h3>Net Pay</h3>
            <strong>
              <AnimatedCounter value="₹18732400" />
            </strong>
            <dl>
              <div>
                <dt>Total Employees</dt>
                <dd>
                  <AnimatedCounter value={1248} />
                </dd>
              </div>
              <div>
                <dt>Total Deductions</dt>
                <dd>
                  <AnimatedCounter value="₹812600" />
                </dd>
              </div>
              <div>
                <dt>Employer CTC</dt>
                <dd>
                  <AnimatedCounter value="₹21945000" />
                </dd>
              </div>
            </dl>
          </motion.article>

          <motion.article
            className="pay-table"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <table>
              <thead>
                <tr>
                  <th>Employee</th>
                  <th>Net Pay</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {payrollEmployees.map((row) => (
                  <tr key={row.name}>
                    <td>
                      <strong>{row.name}</strong>
                      <span>{row.role}</span>
                    </td>
                    <td>{row.netPay}</td>
                    <td>
                      <em className="ok">{row.status}</em>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.article>

          <div className="pay-side">
            <motion.article
              className="contrib"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.12 }}
            >
              <h3>Contributions</h3>
              <ul>
                {contributions.map((row) => (
                  <li key={row.label}>
                    <span>{row.label}</span>
                    <strong>{row.value}</strong>
                  </li>
                ))}
                <li className="total">
                  <span>Total</span>
                  <strong>₹35,70,000</strong>
                </li>
              </ul>
            </motion.article>
            <motion.article
              className="attend-sum"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.18 }}
            >
              <h3>Attendance Summary</h3>
              <ul>
                {attendanceSummary.map((row) => (
                  <li key={row.label}>
                    <span>{row.label}</span>
                    <strong>{row.value}</strong>
                  </li>
                ))}
              </ul>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  )
}
