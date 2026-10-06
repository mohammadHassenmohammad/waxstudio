import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, ArrowRight } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';
import BrandLogo from './BrandLogo';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let ticking = false;
    let lastScrolled = false;

    const sections = ['home', 'about', 'services', 'casmara', 'bridal', 'lookbook', 'catalog', 'contact'];

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isNowScrolled = window.scrollY > 30;
          if (isNowScrolled !== lastScrolled) {
            lastScrolled = isNowScrolled;
            setScrolled(isNowScrolled);
          }

          // Optimized section check with dynamic viewport threshold
          const scrollPos = window.scrollY + 220;
          for (let i = sections.length - 1; i >= 0; i--) {
            const el = document.getElementById(sections[i]);
            if (el && scrollPos >= el.offsetTop) {
              setActiveSection(sections[i]);
              break;
            }
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);


  // Curated, luxury desktop navigation links (well proportioned to prevent any overlap)
  const desktopNavLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'CASMARA', href: '#casmara', id: 'casmara' },
    { label: 'Bridal', href: '#bridal', id: 'bridal' },
    { label: 'Lookbook', href: '#lookbook', id: 'lookbook' },
    { label: 'Catalog', href: '#catalog', id: 'catalog' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  // Full navigation items for mobile fullscreen menu
  const mobileNavLinks = [
    { label: 'Home', href: '#home', id: 'home', num: '01' },
    { label: 'About', href: '#about', id: 'about', num: '02' },
    { label: 'Services', href: '#services', id: 'services', num: '03' },
    { label: 'CASMARA', href: '#casmara', id: 'casmara', num: '04' },
    { label: 'Bridal', href: '#bridal', id: 'bridal', num: '05' },
    { label: 'Lookbook', href: '#lookbook', id: 'lookbook', num: '06' },
    { label: 'Catalog & PDFs', href: '#catalog', id: 'catalog', num: '07' },
    { label: 'Experience', href: '#why-us', id: 'why-us', num: '08' },
    { label: 'Contact', href: '#contact', id: 'contact', num: '09' },
  ];

  return (
    <>
      <header className={`site-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="nav-grid">
            {/* Brand Logo & Name (Column 1 - Left with guaranteed breathing room) */}
            <a href="#home" className="nav-brand-wrap" aria-label="The Wax Studio Home" onClick={() => setActiveSection('home')}>
              <BrandLogo size="default" showSubtitle={true} />
            </a>

            {/* Desktop Nav Links (Column 2 - Centered with balanced spacing) */}
            <nav className="desktop-navigation-wrapper">
              <ul className="nav-desktop-links">
                {desktopNavLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      onClick={() => setActiveSection(link.id)}
                      className={`nav-desktop-link ${activeSection === link.id ? 'active' : ''}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* CTAs Right (Column 3 - Right) */}
            <div className="nav-actions-right">
              <button
                onClick={() => onOpenBooking()}
                className="btn btn-primary nav-book-btn"
                id="nav-book-appointment-btn"
              >
                <span>Book Appointment</span>
              </button>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="mobile-nav-toggle-btn"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-nav-fullscreen">
          <div className="mobile-nav-header">
            <BrandLogo size="small" showSubtitle={true} />
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              className="mobile-close-btn"
            >
              <X size={24} />
            </button>
          </div>

          <ul className="mobile-nav-list">
            {mobileNavLinks.map((link) => (
              <li key={link.id} className="mobile-nav-item">
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={activeSection === link.id ? 'active' : ''}
                >
                  <span className="mobile-nav-num">{link.num}</span>
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mobile-nav-actions">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="btn btn-primary"
              style={{ width: '100%', padding: '16px' }}
            >
              <span>Book An Appointment</span>
              <ArrowRight size={16} />
            </button>
            <a
              href={`tel:${SALON_INFO.phones[0].tel}`}
              className="btn btn-secondary"
              style={{ width: '100%', padding: '14px' }}
            >
              <Phone size={15} style={{ color: 'var(--accent-magenta)' }} />
              <span>Call Desk: {SALON_INFO.phones[0].display}</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
