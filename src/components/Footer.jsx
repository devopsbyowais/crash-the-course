import { Facebook, Instagram, Linkedin } from 'lucide-react';
import Logo from './Logo';

// Facebook page for Crash the Course.
const FACEBOOK_PAGE_URL = 'https://www.facebook.com/profile.php?id=61596257138311';

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/crashthecourse01/',
    icon: Instagram,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com',
    icon: Linkedin,
  },
  {
    label: 'Facebook',
    href: FACEBOOK_PAGE_URL,
    icon: Facebook,
  },
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
            <a className="footer__email" href="mailto:info@crashthecourse.com">
              info@crashthecourse.com
            </a>
            <div className="footer__socials" aria-label="Social media">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href || undefined}
                  target={href ? '_blank' : undefined}
                  rel={href ? 'noreferrer noopener' : undefined}
                  aria-label={href ? `${label} (opens in a new tab)` : label}
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
