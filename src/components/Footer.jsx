import React from 'react';
import { ArrowRight, ChevronRight, MapPin, Phone } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

import BrandLogo from './BrandLogo';

export default function Footer({ onOpenBooking }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-editorial">
      <div className="container">
        {/* Massive Brand Watermark */}
        <div className="footer-massive-brand">
          THE <span>WAX</span> STUDIO
        </div>

        <div className="footer-grid-layout">
          {/* Brand Col */}
          <div className="footer-col-brand">
            <div className="footer-logo-wrap">
              <BrandLogo size="default" showSubtitle={true} />
            </div>

            <p className="footer-brand-desc">
              Rajahmundry’s high-fashion salon offering avant-garde hair transformations, authentic European CASMARA® facials, precision beard designing, and couture bridal makeup.
            </p>

            <button
              onClick={() => onOpenBooking()}
              className="btn btn-primary footer-book-btn"
            >
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="footer-col-nav">
            <h5 className="footer-col-heading">
              Quick Navigation
            </h5>
            <ul className="footer-nav-list">
              {[
                { name: 'About The Studio', href: '#about' },
                { name: 'Services & Menu', href: '#services' },
                { name: 'CASMARA Skincare', href: '#casmara' },
                { name: 'Bridal Studio', href: '#bridal' },
                { name: 'The Lookbook', href: '#lookbook' },
                { name: 'Catalog & PDFs', href: '#catalog' },
                { name: 'Why Choose Us', href: '#why-us' },
                { name: 'Contact & Directions', href: '#contact' },
              ].map((link, idx) => (
                <li key={idx} className="footer-nav-item">
                  <a
                    href={link.href}
                    className="footer-nav-link"
                  >
                    <ChevronRight size={12} style={{ color: 'var(--accent-magenta)', flexShrink: 0 }} />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Verified Guidelines & Location */}
          <div className="footer-col-details">
            <h5 className="footer-col-heading">
              Studio Guidelines & Details
            </h5>
            <div className="footer-details-group">
              <a
                href="https://maps.google.com/?q=The+Wax+Studio+Rajahmundry"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-detail-row footer-link-interactive"
              >
                <MapPin size={15} style={{ color: 'var(--accent-magenta)', flexShrink: 0, marginTop: '3px' }} />
                <span>2nd Floor, 82-2-2, Chivukula Complex, Vidyut Nagar Colony, A.V.Appa Rao Road, Rajahmundry - 533103</span>
              </a>

              <a
                href={`tel:${SALON_INFO.phones[0].tel}`}
                className="footer-detail-row footer-link-interactive"
              >
                <Phone size={15} style={{ color: 'var(--accent-magenta)', flexShrink: 0 }} />
                <span>8833550184 / 9346308188</span>
              </a>

              <div className="footer-guidelines-card">
                <p className="footer-guidelines-text">
                  ✓ All haircuts include texture consultation, wash & blowdry.<br />
                  ✓ 24hr color patch test advised for first-time clients.<br />
                  ✓ Kids haircuts apply for age 10 and below.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom-bar">
          <p>© {currentYear} THE WAX STUDIO. Premium Unisex Salon. All rights reserved.</p>
          <p>Rajahmundry, East Godavari, Andhra Pradesh, India.</p>
        </div>
      </div>
    </footer>
  );
}
