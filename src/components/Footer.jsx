import { Facebook, Instagram, Linkedin } from 'lucide-react'
import { footerColumns } from '../data/landingData.js'

export default function Footer() {
  return (
    <footer className="footer" id="resources">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a className="logo light" href="#top">
            <span className="logo-mark" aria-hidden="true" />
            VeltroHR
          </a>
          <p>HR management built around your business.</p>
        </div>
        {footerColumns.map((col) => (
          <div key={col.title}>
            <h3>{col.title}</h3>
            <ul>
              {col.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="footer-connect" id="contact">
          <h3>Stay Connected</h3>
          <div className="socials">
            <a href="https://www.linkedin.com" aria-label="LinkedIn" target="_blank" rel="noreferrer">
              <Linkedin size={16} />
            </a>
            <a href="https://www.instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer">
              <Instagram size={16} />
            </a>
            <a href="https://www.facebook.com" aria-label="Facebook" target="_blank" rel="noreferrer">
              <Facebook size={16} />
            </a>
          </div>
          <p>+91 22 4155 2090</p>
          <p>hello@veltrohr.com</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} VeltroHR. All rights reserved.</p>
      </div>
    </footer>
  )
}
