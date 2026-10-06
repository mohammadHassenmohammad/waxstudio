import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Scissors, Award, CheckCircle2 } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export default function BrandIntro({ onOpenBooking }) {
  return (
    <section id="about" className="section-editorial section-editorial-darker about-section-wrap">
      <div className="container">
        <div className="about-editorial-grid">
          {/* Left Column: Visual Showcase Frame */}
          <div className="about-visual-column">
            <div className="about-image-card">
              <img
                src="/images/editorial/editorial_salon_interior.jpg"
                alt="The Wax Studio Architectural Salon Interior Rajahmundry"
                className="about-main-img"
                loading="lazy"
                decoding="async"
              />

              <div className="about-image-overlay" />

              {/* Floating Luxury Badge */}
              <div className="about-floating-badge">
                <Sparkles size={14} className="text-magenta" />
                <span>Rajahmundry's Flagship Unisex Studio</span>
              </div>

              {/* Bottom Quick Metric Bar */}
              <div className="about-metric-strip">
                <div className="about-metric-item">
                  <span className="metric-val text-magenta">100%</span>
                  <span className="metric-lbl">Authentic Brands</span>
                </div>
                <div className="about-metric-divider" />
                <div className="about-metric-item">
                  <span className="metric-val">10 AM - 8:30 PM</span>
                  <span className="metric-lbl">All 7 Days Open</span>
                </div>
                <div className="about-metric-divider" />
                <div className="about-metric-item">
                  <span className="metric-val text-magenta">Unisex</span>
                  <span className="metric-lbl">Private Suites</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text & Feature Pillars */}
          <div className="about-content-column">
            <div className="eyebrow eyebrow-magenta" style={{ marginBottom: '10px' }}>
              <span>ABOUT THE WAX STUDIO</span>
            </div>

            <h2 className="editorial-heading" style={{ marginBottom: '16px', lineHeight: 1.15 }}>
              The Art of <br />
              <em className="text-magenta">Looking Your Best.</em>
            </h2>

            <p className="about-lead-text">
              At <strong>THE WAX STUDIO</strong>, grooming is elevated into a refined craft. Located at Vidyut Nagar Colony, Rajahmundry, our studio combines runway hair styling with clinical European dermo-cosmetics and bespoke bridal couture.
            </p>

            {/* 3 Compact Feature Pillars */}
            <div className="about-pillars-grid">
              <div className="about-pillar-card">
                <div className="pillar-icon-box">
                  <Award size={18} />
                </div>
                <div className="pillar-content">
                  <h4 className="pillar-title">Certified Global Formulations</h4>
                  <p className="pillar-desc">
                    100% original imported products from <strong>CASMARA Spain, Wella, Sebastian, Label.m & Dermalogica</strong>.
                  </p>
                </div>
              </div>

              <div className="about-pillar-card">
                <div className="pillar-icon-box">
                  <Scissors size={18} />
                </div>
                <div className="pillar-content">
                  <h4 className="pillar-title">Master Unisex Stylists</h4>
                  <p className="pillar-desc">
                    Personalized hair texture diagnosis, precision cutting, beard sculpting, and clinical facials.
                  </p>
                </div>
              </div>

              <div className="about-pillar-card">
                <div className="pillar-icon-box">
                  <ShieldCheck size={18} />
                </div>
                <div className="pillar-content">
                  <h4 className="pillar-title">Sterile Hygiene Standards</h4>
                  <p className="pillar-desc">
                    Hospital-grade sanitized tools, single-use disposable kits, and private consultation comfort.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Group */}
            <div className="about-actions-group">
              <button
                onClick={() => onOpenBooking()}
                className="btn btn-primary"
              >
                <span>Reserve Appointment</span>
                <ArrowRight size={15} />
              </button>

              <a
                href="#services"
                className="btn btn-secondary"
              >
                <span>Explore Services</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

