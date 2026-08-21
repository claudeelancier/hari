import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import FeatureTicker from './components/FeatureTicker.jsx'
import PlatformSection from './components/PlatformSection.jsx'
import PayrollSection from './components/PayrollSection.jsx'
import EmployeeRecord from './components/EmployeeRecord.jsx'
import BranchCompliance from './components/BranchCompliance.jsx'
import AISection from './components/AISection.jsx'
import ProcessSection from './components/ProcessSection.jsx'
import IndustriesSection from './components/IndustriesSection.jsx'
import FinalCTA from './components/FinalCTA.jsx'
import Footer from './components/Footer.jsx'
import DemoModal from './components/ui/DemoModal.jsx'

export default function App() {
  const [demoOpen, setDemoOpen] = useState(false)
  const [active, setActive] = useState('platform')

  useEffect(() => {
    const ids = ['platform', 'employee-record', 'payroll', 'ai', 'industries', 'resources']
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target?.id) {
          const map = {
            platform: 'platform',
            'employee-record': 'solutions',
            payroll: 'payroll',
            ai: 'ai',
            industries: 'industries',
            resources: 'resources',
          }
          setActive(map[visible.target.id] || 'platform')
        }
      },
      { threshold: 0.28, rootMargin: '-20% 0px -45% 0px' },
    )
    nodes.forEach((n) => observer.observe(n))
    return () => observer.disconnect()
  }, [])

  const openDemo = () => setDemoOpen(true)

  return (
    <div className="site">
      <Header onDemo={openDemo} active={active} />
      <main>
        <Hero onDemo={openDemo} />
        <FeatureTicker />
        <PlatformSection />
        <PayrollSection />
        <EmployeeRecord />
        <BranchCompliance />
        <AISection />
        <ProcessSection />
        <IndustriesSection />
        <FinalCTA onDemo={openDemo} />
      </main>
      <Footer />
      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </div>
  )
}
