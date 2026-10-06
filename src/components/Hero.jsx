import React from 'react';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export default function Hero({ onOpenBooking }) {
  return (
    <section id="home" className="hero-editorial">
      {/* Cinematic Full-Bleed Backdrop Image */}
      <img
        src="/images/editorial/editorial_hero.jpg"
        alt="The Wax Studio Luxury Salon Ambience"
        className="hero-backdrop-image"
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />

      {/* Cinematic Contrast Vignette */}
      <div className="hero-vignette" />

      <div className="container">
        <div className="hero-grid-layout">
          {/* Text Content Left */}
          <div className="hero-text-col">
            <div className="eyebrow eyebrow-magenta">
              <span>{SALON_INFO.subtitle} • RAJAHMUNDRY</span>
            </div>

            <h1 className="hero-main-title">
              YOUR LOOK.<br />
              <span className="pink-accent">YOUR STATEMENT.</span>
            </h1>

            <p className="hero-lead-text">
              Welcome to <strong>THE WAX STUDIO</strong> — Rajahmundry’s high-fashion salon destination.
              Specializing in avant-garde hair architecture, restorative Nanoplastia & Botox treatments,
              authentic European <strong>CASMARA®</strong> dermo-cosmetics, and master bridal couture.
            </p>

            <div className="hero-btn-row">
              <button
                onClick={() => onOpenBooking()}
                className="btn btn-primary"
                id="hero-book-appointment-btn"
              >
                <span>Book Appointment</span>
                <ArrowRight size={15} />
              </button>

              <a
                href="#services"
                className="btn btn-secondary"
                id="hero-view-menu-btn"
              >
                <span>Explore Services</span>
              </a>
            </div>

            {/* Editorial Quick Markers */}
            <div className="hero-markers-row">
              <div className="hero-marker-item">
                <span className="marker-title">100% UNISEX</span>
                <p className="marker-sub">Dedicated Styling Suites</p>
              </div>

              <div className="hero-marker-item border-left">
                <span className="marker-title text-magenta">CASMARA® SPAIN</span>
                <p className="marker-sub">Original Algae Peel-Off</p>
              </div>

              <div className="hero-marker-item border-left">
                <span className="marker-title text-gold">BRIDAL COUTURE</span>
                <p className="marker-sub">Studio & Destination Artistry</p>
              </div>
            </div>
          </div>

          {/* Editorial Portrait Frame Right */}
          <div className="hero-portrait-frame">
            <div className="hero-portrait-inner">
              <img
                src="/images/page_1.png"
                alt="High-Fashion Editorial Styling at The Wax Studio"
                className="hero-portrait-img"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hero-scroll-indicator-bar">
          <a href="#about" className="hero-scroll-link">
            <span>SCROLL TO EXPLORE</span>
            <ChevronDown size={14} style={{ color: 'var(--accent-magenta)' }} />
          </a>

          <span className="hero-location-brand">
            THE WAX STUDIO • RAJAHMUNDRY
          </span>
        </div>
      </div>
    </section>
  );
}
