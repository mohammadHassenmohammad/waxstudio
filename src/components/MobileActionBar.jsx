import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export default function MobileActionBar({ onOpenBooking }) {
  return (
    <div className="mobile-fixed-action-bar" aria-label="Mobile quick actions">
      <a
        href={`tel:${SALON_INFO.phones[0].tel}`}
        className="btn btn-secondary"
        style={{ flex: '1', padding: '10px 8px', fontSize: '0.72rem', gap: '6px' }}
        aria-label="Call salon"
      >
        <Phone size={13} style={{ color: 'var(--accent-magenta)' }} />
        <span>Call</span>
      </a>

      <a
        href={`https://wa.me/${SALON_INFO.phones[0].raw}?text=Hi%20The%20Wax%20Studio!%20I%20would%20like%20to%20inquire%20about%20booking%20an%20appointment.`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-secondary"
        style={{ flex: '1', padding: '10px 8px', fontSize: '0.72rem', gap: '6px' }}
        aria-label="WhatsApp salon"
      >
        <MessageSquare size={13} style={{ color: '#25D366' }} />
        <span>WhatsApp</span>
      </a>

      <button
        onClick={() => onOpenBooking()}
        className="btn btn-primary"
        style={{ flex: '2', padding: '10px 12px', fontSize: '0.75rem', gap: '6px' }}
        aria-label="Book appointment"
      >
        <Calendar size={13} />
        <span>Book Now</span>
      </button>
    </div>
  );
}
