import { Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import Logo from './Logo';

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com', icon: Instagram },
  { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: Linkedin },
  { label: 'YouTube', href: 'https://www.youtube.com', icon: Youtube },
  { label: 'X', href: 'https://x.com', icon: Twitter },
];

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Explore Courses', href: '#courses' },
  { label: 'About Us', href: '#why-us' },
];

const supportLinks = [
  { label: 'Help Center', key: 'help' },
  { label: 'FAQs', key: 'faqs' },
  { label: 'Privacy Policy', key: 'privacy' },
  { label: 'Terms & Conditions', key: 'terms' },
];

export default function Footer({ onSupport }) {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#home" aria-label="Crash the Course home">
              <Logo footer />
            </a>
            <p>
              Practical, expert-designed courses that help you build real skills and move toward
              the future you want.
            </p>
            <a className="footer__email" href="mailto:hello@crashthecourse.com">
              hello@crashthecourse.com
            </a>
            <div className="footer__socials" aria-label="Social media">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`${label} (opens in a new tab)`}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <nav className="footer__column" aria-label="Quick links">
            <h3>Quick Links</h3>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
              <li>
                <a href="mailto:hello@crashthecourse.com">Contact Us</a>
              </li>
            </ul>
          </nav>

          <nav className="footer__column" aria-label="Support">
            <h3>Support</h3>
            <ul>
              {supportLinks.map((link) => (
                <li key={link.key}>
                  <button type="button" onClick={() => onSupport(link.key)}>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="footer__bottom">
          <p>&copy; 2026 Crash the Course. All rights reserved.</p>
          <p className="footer__note">Learn. Build. Grow.</p>
        </div>
      </div>
    </footer>
  );
}
