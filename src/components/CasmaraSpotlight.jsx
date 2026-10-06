import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export default function CasmaraSpotlight({ onOpenBooking }) {
  const casmaraProtocols = [
    {
      title: "RGnerin Treatment",
      desc: "Regenerating & anti-wrinkle Botox-effect protocol with glycolic and lactic peeling."
    },
    {
      title: "Infinity Treatment",
      desc: "Holistic sensory rejuvenation activating cell genomics and DNA repair mechanisms."
    },
    {
      title: "Skin Sensations",
      desc: "Multivitamin & mineral complex (Vitamins A, C, E, minerals & 24K Gold particles)."
    },
    {
      title: "Goji Treatment",
      desc: "Super-antioxidant facial harnessing certified organic Tibetan Goji berry extract."
    }
  ];

  return (
    <section id="casmara" className="section-editorial section-editorial-darker">
      <div className="container">
        <div className="editorial-split-2">
          {/* Left Column: Text & Benefits */}
          <div className="casmara-content-col">
            <div className="eyebrow eyebrow-magenta">
              <span>EXCLUSIVE EUROPEAN DERMO-COSMETICS • SPAIN</span>
            </div>

            <h2 className="editorial-heading casmara-main-heading">
              CASMARA
            </h2>
            <p className="casmara-tagline">
              Cosmética Sin Límites — Cosmetics Without Limits
            </p>

            <p className="editorial-subtext casmara-subtext">
              <strong>THE WAX STUDIO</strong> is proud to introduce genuine Spanish laboratory skincare to Rajahmundry.
              Inventor of the world-famous <strong>Original Algae Peel-Off Facial Mask</strong> that cools the skin by up to 6°C, providing instant cellular drainage on eyelids, lips, face, and neck.
            </p>

            {/* Factual Clinical Benefits */}
            <div className="casmara-benefits-list">
              <div className="casmara-benefit-item">
                <CheckCircle2 size={16} className="casmara-benefit-icon" />
                <span>Brightens and noticeably firms up facial skin & contours</span>
              </div>
              <div className="casmara-benefit-item">
                <CheckCircle2 size={16} className="casmara-benefit-icon" />
                <span>Reduces skin blemishes and sun-induced hyperpigmentation</span>
              </div>
              <div className="casmara-benefit-item">
                <CheckCircle2 size={16} className="casmara-benefit-icon" />
                <span>Boosts natural collagen and elastin fiber synthesis</span>
              </div>
              <div className="casmara-benefit-item">
                <CheckCircle2 size={16} className="casmara-benefit-icon" />
                <span>AgeDefense Pro&Prebiotic Technology (Anti-Âge Global 360°)</span>
              </div>
            </div>

            {/* Treatment Protocol Highlights */}
            <div className="casmara-highlights-grid">
              <div className="casmara-highlight-card">
                <span className="casmara-highlight-badge text-magenta">
                  Full 6-Phase Protocol
                </span>
                <h4 className="casmara-highlight-title">
                  Monodose Infusion
                </h4>
                <p className="casmara-highlight-desc">Complete single-use sterile ampoules</p>
              </div>

              <div className="casmara-highlight-card">
                <span className="casmara-highlight-badge text-gold">
                  Algae Peel-Off Mask
                </span>
                <h4 className="casmara-highlight-title">
                  Cryo-Drainage
                </h4>
                <p className="casmara-highlight-desc">Eyes, lips & facial contour sculpting</p>
              </div>
            </div>

            <button
              onClick={() => onOpenBooking({ name: "Facial Casmara Treatment", category: "casmara" })}
              className="btn btn-primary casmara-cta-btn"
            >
              <span>Reserve Casmara Treatment</span>
              <ArrowRight size={15} />
            </button>
          </div>

          {/* Right Column: Imagery & Monodose Boxes */}
          <div className="casmara-visual-col">
            <div className="casmara-hero-img-wrap">
              <img
                src="/images/casmara_1.png"
                alt="CASMARA High Fashion Cosmetics Spain"
                className="casmara-hero-img"
                loading="lazy"
                decoding="async"
              />
              <div className="casmara-floating-badge">
                <ShieldCheck size={14} style={{ color: 'var(--accent-gold)' }} />
                <span>100% Genuine Spanish Lab Skincare</span>
              </div>
            </div>

            <div className="casmara-boxes-grid">
              {casmaraProtocols.map((proto, idx) => (
                <div
                  key={idx}
                  className="casmara-protocol-card"
                >
                  <p className="casmara-protocol-title">
                    {proto.title}
                  </p>
                  <p className="casmara-protocol-desc">
                    {proto.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
