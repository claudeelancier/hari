import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Sparkles } from 'lucide-react'
import { aiCards, aiSuggestions } from '../data/landingData.js'
import { DonutChart } from './charts/Charts.jsx'

export default function AISection() {
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(aiSuggestions[0])

  return (
    <section className="ai-section" id="ai">
      <div className="container ai-grid">
        <div className="ai-copy">
          <p className="section-kicker on-orange">AI POWERED</p>
          <h2 className="section-title light">
            HR, with
            <br />
            intelligence
            <br />
            built in.
          </h2>
          <p>
            AI features that save time, spot risk and help you make better people
            decisions.
          </p>
        </div>

        <motion.article
          className="ai-chat"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <header>
            <Sparkles size={16} />
            Veltro AI Assistant
          </header>
          <p className="chat-hello">How can I help you today?</p>
          <div className="chips">
            {aiSuggestions.map((item) => (
              <button
                key={item}
                className={active === item ? 'is-on' : ''}
                onClick={() => {
                  setActive(item)
                  setQuery(item)
                }}
              >
                {item}
              </button>
            ))}
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault()
            }}
          >
            <label className="sr-only" htmlFor="ai-ask">
              Ask the assistant
            </label>
            <input
              id="ai-ask"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask anything..."
            />
            <button type="submit" aria-label="Send">
              <ArrowUpRight size={16} />
            </button>
          </form>
        </motion.article>

        <div className="ai-orbit">
          {aiCards.map((card, i) => (
            <motion.article
              key={card.id}
              className={`ai-float f${i + 1}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 * i }}
            >
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </motion.article>
          ))}
          <motion.article
            className="ai-float risk"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.32 }}
          >
            <div className="risk-donut">
              <DonutChart size={92} thickness={10} />
              <span>Low</span>
            </div>
            <div>
              <h3>Turnover Risk</h3>
              <p>Workforce risk stays low this quarter.</p>
            </div>
          </motion.article>
          <svg className="ai-lines" viewBox="0 0 320 420" aria-hidden="true">
            <path
              d="M40 40 C 120 80, 180 90, 280 70"
              fill="none"
              stroke="rgba(255,255,255,0.35)"
              strokeDasharray="3 6"
            />
            <path
              d="M30 160 C 110 170, 160 210, 270 200"
              fill="none"
              stroke="rgba(255,255,255,0.35)"
              strokeDasharray="3 6"
            />
            <path
              d="M50 300 C 140 280, 200 330, 280 310"
              fill="none"
              stroke="rgba(255,255,255,0.35)"
              strokeDasharray="3 6"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
