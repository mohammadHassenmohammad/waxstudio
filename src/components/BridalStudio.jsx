import React, { useState } from 'react';
import { ArrowRight, Check, Crown, Star } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export default function BridalStudio({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState('bride');

  return (
    <section id="bridal" className="section-editorial">
      <div className="container">
        {/* Header */}
        <div className="bridal-header-row">
          <div>
            <div className="eyebrow eyebrow-gold">
              <span>BRIDAL & CEREMONIAL COUTURE</span>
            </div>
            <h2 className="editorial-heading">
              The Bridal <span className="italic">Studio</span>
            </h2>
          </div>

          <div className="luxury-tab-switcher" role="tablist" aria-label="Bridal vs Groom Couture">
            <button
              onClick={() => setActiveTab('bride')}
              className={`luxury-tab-btn ${activeTab === 'bride' ? 'active' : ''}`}
              role="tab"
              aria-selected={activeTab === 'bride'}
              id="tab-bride"
            >
              <Crown size={14} />
              <span>Bridal & Pre-Bride</span>
            </button>
            <button
              onClick={() => setActiveTab('groom')}
              className={`luxury-tab-btn ${activeTab === 'groom' ? 'active' : ''}`}
              role="tab"
              aria-selected={activeTab === 'groom'}
              id="tab-groom"
            >
              <Star size={14} />
              <span>Groom & Pre-Groom</span>
            </button>
          </div>
        </div>

        {/* Bridal Studio Tiers */}
        {activeTab === 'bride' ? (
          <div className="tab-pane-fade" key="bride-tab-content">

            {/* 2 Main Studio Makeup Cards */}
            <div className="bridal-grid-split" style={{ marginBottom: '48px' }}>
              {/* Senior Artist */}
              <div className="bridal-feature-card">
                <div className="bridal-card-header">
                  <div>
                    <span className="bridal-eyebrow text-muted">Studio Tier</span>
                    <h3 className="bridal-card-title">Makeup by Senior Artist</h3>
                  </div>
                  <span className="bridal-tier-badge">Bespoke Consultation</span>
                </div>

                <p className="bridal-card-desc">
                  High-definition wedding & reception styling executed with international cosmetic brands.
                </p>

                <ul className="bridal-inclusions-list">
                  {[
                    'High-Definition Event Makeup',
                    'Custom Sculpted Hair Architecture',
                    'Designer Saree / Outfit Draping',
                    'Regular False Eyelashes Included',
                    'Complimentary Nail Paint Change'
                  ].map((inc, i) => (
                    <li key={i} className="bridal-inclusion-item">
                      <Check size={14} style={{ color: 'var(--accent-magenta)', flexShrink: 0 }} />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => onOpenBooking({ name: "Makeup by Senior Artist" })}
                  className="btn btn-secondary bridal-action-btn"
                >
                  <span>Book Senior Artist Makeup</span>
                </button>
              </div>

              {/* PG Signature Flagship */}
              <div className="bridal-feature-card bridal-signature-card">
                <div className="bridal-card-header">
                  <div>
                    <span className="bridal-eyebrow text-gold">Flagship Artistry</span>
                    <h3 className="bridal-card-title">PG Signature Studio Makeup</h3>
                  </div>
                  <span className="bridal-tier-badge badge-gold">Signature Master</span>
                </div>

                <p className="bridal-card-desc">
                  The peak of bridal couture. Airbrushing included with no extra surcharge.
                </p>

                <ul className="bridal-inclusions-list">
                  {[
                    'Master Makeup Artistry (No Extra Charge for Airbrushing)',
                    'Advanced Bridal Hair Architecture & Padding',
                    'Precision Ceremonial Saree / Lehenga Draping',
                    'Luxury Mink / Silk False Eyelashes Included',
                    'Coloured Non-Powered Aesthetic Lenses Included',
                    'Nail Paint Change & Finishing Touch'
                  ].map((inc, i) => (
                    <li key={i} className="bridal-inclusion-item">
                      <Check size={14} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => onOpenBooking({ name: "PG Signature Studio Makeup" })}
                  className="btn btn-gold bridal-action-btn"
                >
                  <span>Book PG Signature Experience</span>
                </button>
              </div>
            </div>

            {/* Pre-Bridal Featured Package Cards */}
            <div className="prebridal-cards-grid">
              <div className="prebridal-pkg-card">
                <span className="bridal-eyebrow text-magenta">7-Service Package</span>
                <h4 className="prebridal-pkg-title">Pre-Bride Glow</h4>
                <p className="prebridal-pkg-desc">
                  Haircut, Hair Spa, Advance Facial, Full Body Bleaching, Luxury Pedicure & Manicure, Face & Neck De-Tan, Under Eye Care.
                </p>
                <button
                  onClick={() => onOpenBooking({ name: "Bridal Pre-Bride 7-Service Package" })}
                  className="editorial-link prebridal-select-btn"
                >
                  <span>Select Package</span>
                  <ArrowRight size={13} />
                </button>
              </div>

              <div className="prebridal-pkg-card prebridal-popular-card">
                <span className="bridal-eyebrow text-magenta">Signature Package</span>
                <h4 className="prebridal-pkg-title">Pre-Bridal Luxury</h4>
                <p className="prebridal-pkg-desc">
                  Luxury Facial, Body De-Tan, Painless Cartridge Bodywax, Manicure/Pedicure, Hairspa + Cut, Full Body Polishing & Threading.
                </p>
                <button
                  onClick={() => onOpenBooking({ name: "Pre-Bridal Luxury Package" })}
                  className="editorial-link prebridal-select-btn"
                >
                  <span>Select Package</span>
                  <ArrowRight size={13} />
                </button>
              </div>

              <div className="prebridal-pkg-card">
                <span className="bridal-eyebrow text-gold">Complete Event Glam</span>
                <h4 className="prebridal-pkg-title">Party & Saree Package</h4>
                <p className="prebridal-pkg-desc">
                  Radiance Facial, Manicure/Pedicure, Full Arms Waxing, Designer Hairdo, Event Makeup, and Traditional Saree Draping.
                </p>
                <button
                  onClick={() => onOpenBooking({ name: "Party & Occasion Complete Glam" })}
                  className="editorial-link prebridal-select-btn"
                >
                  <span>Select Package</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Groom & Pre-Bridegroom Tab */
          <div className="tab-pane-fade" key="groom-tab-content">
            <div className="groom-packages-grid">
              <div className="groom-pkg-card">
                <span className="bridal-eyebrow text-magenta">Wedding Groom Essential</span>
                <h3 className="groom-pkg-title">Pre-Bridal Groom Package</h3>
                <p className="groom-pkg-desc">
                  Anti-Pollution Facial, Face De-Tan, Hands De-Tan, Haircut + Shave, Restorative Hairspa, Manicure & Pedicure.
                </p>
                <button
                  onClick={() => onOpenBooking({ name: "Pre-Bridal Groom Package" })}
                  className="btn btn-secondary groom-action-btn"
                >
                  <span>Book Groom Package</span>
                </button>
              </div>

              <div className="groom-pkg-card">
                <span className="bridal-eyebrow text-gold">Seasoul / Gold / Diamond</span>
                <h3 className="groom-pkg-title">Pre Bridegroom — Premium</h3>
                <p className="groom-pkg-desc">
                  Seasoul/Gold Facial, Premium Shave/Beard Shape Up, Deluxe Mani & Pedi, 60-min Body/Hair Spa, Global Colour/Cap Highlights, Senior Stylist Cut.
                </p>
                <button
                  onClick={() => onOpenBooking({ name: "Pre-Bridegroom Package — Premium" })}
                  className="btn btn-outline-minimal groom-action-btn"
                >
                  <span>Book Premium Package</span>
                </button>
              </div>

              <div className="groom-pkg-card groom-luxury-card">
                <span className="bridal-eyebrow text-gold">Dermalogica / Comfort Zone</span>
                <h3 className="groom-pkg-title">Pre Bridegroom — Luxury</h3>
                <p className="groom-pkg-desc">
                  Dermalogica/Comfort Zone Facial, Luxury Shave & Beard Design, Luxury Mani/Pedi, Luxury Body Polish or Protein Treatment, Top Stylist Cut.
                </p>
                <button
                  onClick={() => onOpenBooking({ name: "Pre-Bridegroom Package — Luxury" })}
                  className="btn btn-gold groom-action-btn"
                >
                  <span>Book Luxury Package</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Venue Service Note */}
        <div className="venue-service-strip">
          <p className="venue-service-text">
            📍 <strong>Venue Makeup:</strong> Available across Rajahmundry (RJY) & Outstation / Destination Weddings (Travel & accommodation customized).
          </p>
          <button
            onClick={() => onOpenBooking({ name: "Venue Wedding Makeup Consultation" })}
            className="editorial-link venue-inquire-btn"
          >
            <span>Inquire Venue Dates</span>
            <ArrowRight size={13} />
          </button>
        </div>
    </div>
  </section>
);
}

