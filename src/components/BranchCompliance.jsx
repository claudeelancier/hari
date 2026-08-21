import { ArrowRight, FileSpreadsheet, ShieldCheck, Landmark, Receipt } from 'lucide-react'
import Reveal from './ui/Reveal.jsx'
import { branches, complianceItems } from '../data/landingData.js'

const icons = [FileSpreadsheet, ShieldCheck, Landmark, Receipt]

export default function BranchCompliance() {
  return (
    <section className="branch-compliance" id="solutions">
      <div className="container split-2">
        <Reveal className="branch-card">
          <h2 className="section-title compact">
            Built for growing and
            <br />
            multi-branch businesses.
          </h2>
          <p className="muted">
            Headcount, policies and payroll stay consistent from the Mumbai head office
            to every satellite branch — without duplicate records.
          </p>
          <div className="map-block">
            <IndiaMap />
            <ul className="branch-list">
              {branches.map((b) => (
                <li key={b.name}>
                  <div>
                    <strong>{b.name}</strong>
                    <p>{b.employees} employees</p>
                  </div>
                  <em className="tag ok">{b.status}</em>
                </li>
              ))}
            </ul>
          </div>
          <a className="text-link" href="#industries">
            View All Branches <ArrowRight size={15} />
          </a>
        </Reveal>

        <Reveal className="compliance-card" delay={0.08}>
          <h2 className="section-title compact">
            ESI & Payroll
            <br />
            Compliance Support
          </h2>
          <p className="muted">
            Statutory filings stay attached to the payroll run so EPF, ESI, professional
            tax and TDS reports are ready when you are.
          </p>
          <div className="comp-icons">
            {complianceItems.map((item, i) => {
              const Icon = icons[i]
              return (
                <div key={item.id}>
                  <Icon size={18} />
                  <span>{item.label}</span>
                </div>
              )
            })}
          </div>
          <article className="report-preview">
            <p className="tiny">Employee Contributions – May 2024</p>
            <ul>
              <li>
                <span>EPF</span>
                <strong>₹24,50,000</strong>
              </li>
              <li>
                <span>ESI</span>
                <strong>₹6,25,000</strong>
              </li>
              <li>
                <span>Professional Tax</span>
                <strong>₹1,20,000</strong>
              </li>
              <li className="total">
                <span>Total Contribution</span>
                <strong>₹35,70,000</strong>
              </li>
            </ul>
            <a className="text-link" href="#payroll">
              Download Report <ArrowRight size={15} />
            </a>
          </article>
        </Reveal>
      </div>
    </section>
  )
}

function IndiaMap() {
  return (
    <svg className="india-map" viewBox="0 0 220 260" role="img" aria-label="India map with branch locations">
      <path
        d="M110 18 C 128 22, 146 38, 152 58 C 160 78, 176 88, 178 108 C 182 132, 170 148, 166 168 C 160 196, 148 214, 128 232 C 118 242, 108 248, 102 250 C 90 236, 86 214, 74 198 C 58 176, 42 168, 38 148 C 34 124, 48 112, 52 92 C 56 70, 48 54, 62 38 C 78 22, 94 16, 110 18 Z"
        fill="#eef3e4"
        stroke="rgba(20,25,20,0.16)"
      />
      {[
        [78, 150],
        [96, 92],
        [118, 188],
        [86, 168],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="10" fill="#c7f21d" opacity="0.28" className="ping" />
          <circle cx={x} cy={y} r="4.5" fill="#111815" />
          <circle cx={x} cy={y} r="2.2" fill="#c7f21d" />
        </g>
      ))}
    </svg>
  )
}
