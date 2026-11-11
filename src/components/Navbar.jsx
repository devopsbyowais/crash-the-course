import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const navItems = [
  { label: 'Home', href: '#home', key: 'home' },
  { label: 'Explore Courses', href: '#courses', key: 'courses' },
  { label: 'About Us', href: '#why-us', key: 'why-us' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);

      const marker = window.scrollY + 160;
      let current = 'home';

      navItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section && section.offsetTop <= marker) {
          current = item.key;
        }
      });

      const whySection = document.querySelector('#why-us');
      if (whySection && window.scrollY > whySection.offsetTop + whySection.offsetHeight - 120) {
        current = '';
      }

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    const mediaQuery = window.matchMedia('(min-width: 1081px)');
    const onChange = (event) => {
      if (event.matches) setMenuOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    mediaQuery.addEventListener('change', onChange);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      mediaQuery.removeEventListener('change', onChange);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`.trim()}>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <div className="container navbar__inner">
        <a className="navbar__brand" href="#home" aria-label="Crash the Course home" onClick={closeMenu}>
          <Logo />
        </a>

        <nav
          id="primary-navigation"
          className={`navbar__nav ${menuOpen ? 'is-open' : ''}`.trim()}
          aria-label="Primary navigation"
        >
          <ul className="navbar__links">
            {navItems.map((item) => (
              <li key={item.key}>
                <a
                  href={item.href}
                  className={activeSection === item.key ? 'is-active' : ''}
                  aria-current={activeSection === item.key ? 'page' : undefined}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="navbar__toggle"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}
