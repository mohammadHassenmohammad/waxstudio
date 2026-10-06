import React, { useState } from 'react';
import { ArrowRight, Check, Clock, Copy, MapPin, Navigation, Phone } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export default function ContactSection({ onOpenBooking }) {
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(SALON_INFO.address.full);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const mapQuery = encodeURIComponent(`${SALON_INFO.name}, Chivukula Complex, A.V.Appa Rao Road, Rajahmundry, Andhra Pradesh`);
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

  return (
    <section id="contact" className="section-editorial section-editorial-darker">
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: '640px', marginBottom: '48px' }}>
          <div className="eyebrow eyebrow-magenta">
            <span>VISIT & CONNECT</span>
          </div>
          <h2 className="editorial-heading">
            Find the <span className="italic">Studio.</span>
          </h2>
          <p className="editorial-subtext" style={{ marginTop: '16px' }}>
            Conveniently located on A.V.Appa Rao Road, Rajahmundry. Appointments and personal consultations welcomed.
          </p>
        </div>

        {/* 3 Contact Columns */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px', marginBottom: '56px' }} className="contact-editorial-grid">
          {/* Col 1: Address */}
          <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '24px' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-magenta)' }}>
              Salon Address
            </span>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: '#fff', margin: '8px 0 12px 0', lineHeight: 1.4 }}>
              {SALON_INFO.address.line1}<br />
              {SALON_INFO.address.line2}<br />
              {SALON_INFO.address.city}, {SALON_INFO.address.pincode}
            </p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-minimal"
                style={{ padding: '6px 12px', fontSize: '0.72rem', gap: '6px' }}
              >
                <Navigation size={12} style={{ color: 'var(--accent-magenta)' }} />
                <span>Get Directions</span>
              </a>
              <button
                onClick={copyAddress}
                className="btn btn-outline-minimal"
                style={{ padding: '6px 12px', fontSize: '0.72rem', gap: '6px' }}
              >
                {copied ? <Check size={12} style={{ color: '#10b981' }} /> : <Copy size={12} />}
                <span>{copied ? 'Copied!' : 'Copy Address'}</span>
              </button>
            </div>
          </div>

          {/* Col 2: Direct Telephones */}
          <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '24px' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-magenta)' }}>
              Direct Telephones
            </span>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '8px 0 16px 0' }}>
              Direct line to our front desk concierge for inquiries and bookings.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {SALON_INFO.phones.map((phone, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(255, 255, 255, 0.02)', padding: '6px 12px', borderRadius: 'var(--radius-xs)', border: '1px solid var(--border-subtle)' }}>
                  <a href={`tel:${phone.tel}`} style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: '#fff', textDecoration: 'none' }}>
                    {phone.display}
                  </a>
                  <a href={`https://wa.me/${phone.raw}?text=Hi%20The%20Wax%20Studio!%20I%20would%20like%20to%20inquire%20about%20salon%20services.`} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.72rem', color: 'var(--accent-magenta)', textDecoration: 'none', fontWeight: 700, letterSpacing: '0.1em' }}>
                    WHATSAPP →
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Col 3: Hours & Hygiene */}
          <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '24px' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-magenta)' }}>
              Operating Hours
            </span>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: '#fff', margin: '8px 0 4px 0' }}>
              {SALON_INFO.hours}
            </p>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '14px' }}>
              Early bridal appointments scheduled upon request.
            </p>
            <div style={{ padding: '8px 12px', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xs)' }}>
              <p style={{ fontSize: '0.72rem', color: 'var(--text-dim)', lineHeight: 1.4 }}>
                ✓ Single-use hygiene capes & autoclaved tools for every guest.
              </p>
            </div>
          </div>
        </div>

        {/* Large Editorial CTA Box */}
        <div
          style={{
            border: '1px solid var(--border-medium)',
            background: 'var(--bg-surface)',
            padding: 'clamp(32px, 5vw, 64px)',
            borderRadius: 'var(--radius-xs)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px'
          }}
        >
          <div style={{ maxWidth: '580px' }}>
            <span className="eyebrow eyebrow-magenta">READY FOR YOUR NEXT LOOK?</span>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#fff', lineHeight: 1.15 }}>
              Begin your transformation with Rajahmundry’s master stylists.
            </h3>
          </div>

          <button
            onClick={() => onOpenBooking()}
            className="btn btn-primary"
            style={{ padding: '16px 36px', fontSize: '0.85rem' }}
          >
            <span>Book An Appointment</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 968px) {
          .contact-editorial-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
