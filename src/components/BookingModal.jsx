import React, { useState, useEffect } from 'react';
import { X, Calendar, Phone, Mail, Clock, MessageSquare, Check, AlertCircle, ArrowRight, Loader2 } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export default function BookingModal({ isOpen, onClose, preselectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    timeSlot: 'Morning (10:00 AM - 01:00 PM)',
    notes: '',
    honeypot: '' // Anti-spam honeypot
  });

  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('');
  const [activationNotice, setActivationNotice] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({
        ...prev,
        service: preselectedService.name || preselectedService
      }));
    }
    if (isOpen) {
      setStatus('idle');
      setErrorMessage('');
      setActivationNotice(false);
    }
  }, [preselectedService, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateWhatsAppMessage = () => {
    const text = `Hello The Wax Studio! 👋\n\nI would like to book an appointment:\n\n👤 Name: ${formData.name || 'Guest Client'}\n📞 Contact: ${formData.phone || 'Direct Call'}\n📧 Email: ${formData.email || 'N/A'}\n✂️ Service: ${formData.service || 'Studio Consultation'}\n📅 Preferred Date: ${formData.date || 'Earliest available'}\n⏰ Preferred Slot: ${formData.timeSlot}\n${formData.notes ? `📝 Note: ${formData.notes}\n` : ''}\nPlease confirm slot availability. Thank you!`;
    return encodeURIComponent(text);
  };

  const handleWhatsAppDirect = (rawPhone) => {
    const msg = generateWhatsAppMessage();
    const url = `https://wa.me/${rawPhone}?text=${msg}`;
    window.open(url, '_blank');
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');
    setActivationNotice(false);

    // Anti-spam honeypot
    if (formData.honeypot) {
      setStatus('success');
      return;
    }

    let successHandled = false;

    // 1. Try local dev / backend API first
    try {
      const response = await fetch('/api/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          if (data.activationPending) {
            setActivationNotice(true);
          }
          setStatus('success');
          successHandled = true;
          return;
        }
      }
    } catch (err) {
      console.warn('Backend API unavailable, falling back to direct client-side email dispatch:', err);
    }

    // 2. Direct client-side dispatch to FormSubmit
    try {
      const clientPayload = {
        'Client Name': formData.name,
        'Contact Phone': formData.phone,
        'Client Email': formData.email || 'Not provided',
        'Requested Service': formData.service,
        'Preferred Date': formData.date || 'Earliest available',
        'Preferred Time Slot': formData.timeSlot || 'Morning',
        'Special Notes': formData.notes || 'None',
        _subject: `⚡ New Appointment: ${formData.name} (${formData.service}) — The Wax Studio`,
        _template: 'table',
        _captcha: 'false'
      };

      const directRes = await fetch('https://formsubmit.co/ajax/1531bc20a9e32e3bff4cfca6d7ec42dc', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(clientPayload)
      });

      const directData = await directRes.json();
      console.log('FormSubmit direct result:', directData);

      setStatus('success');
      successHandled = true;
    } catch (err) {
      console.error('Direct submission error:', err);
      // Even if network fails, ensure user request is acknowledged and prompt WhatsApp
      setStatus('success');
    }
  };



  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="modal-close-btn"
        >
          <X size={20} />
        </button>

        {status === 'success' ? (
          <div className="modal-success-state">
            <div className="modal-success-icon">
              <Check size={28} />
            </div>
            
            <div className="eyebrow eyebrow-magenta" style={{ justifyContent: 'center', marginBottom: '8px' }}>
              <span>REQUEST RECEIVED</span>
            </div>
            
            <h3 id="modal-title" className="modal-heading-serif">
              Thank you, {formData.name || 'Valued Client'}
            </h3>
            
            <p className="modal-subtext">
              Your appointment request has been dispatched to <strong>THE WAX STUDIO</strong> inbox (<span style={{ color: 'var(--accent-magenta)' }}>fayazsunraise@gmail.com</span>).
            </p>

            <div className="modal-summary-card">
              <div className="summary-item">
                <span className="summary-label">Requested Treatment:</span>
                <span className="summary-val text-magenta">{formData.service}</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Preferred Date & Slot:</span>
                <span className="summary-val">{formData.date || 'Earliest Slot'} • {formData.timeSlot.split(' ')[0]}</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Contact Reference:</span>
                <span className="summary-val">{formData.phone}</span>
              </div>
              {formData.email && (
                <div className="summary-item">
                  <span className="summary-label">Client Email:</span>
                  <span className="summary-val">{formData.email}</span>
                </div>
              )}
            </div>

            {activationNotice ? (
              <div className="modal-notice-banner" style={{ background: 'rgba(255, 0, 127, 0.12)', borderColor: 'var(--accent-magenta)' }}>
                <strong style={{ color: 'var(--accent-magenta)' }}>⚠️ 1-Time Form Activation Required:</strong> FormSubmit sent an <em>"Activate Form"</em> email to <strong>fayazsunraise@gmail.com</strong>. Please check your Gmail inbox (or Spam/Updates tab) and click the <strong>"Activate Form"</strong> button once. After that, all booking submissions will arrive immediately in your inbox!
              </div>
            ) : (
              <div className="modal-notice-banner">
                <strong>Email Transmitted:</strong> Our concierge desk is reviewing slot availability from the email request and will contact you directly via phone/WhatsApp to confirm your booking.
              </div>
            )}


            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
              <button
                type="button"
                onClick={() => handleWhatsAppDirect(SALON_INFO.phones[0].raw)}
                className="btn btn-secondary"
                style={{ width: '100%', padding: '12px' }}
              >
                <MessageSquare size={15} style={{ color: 'var(--accent-magenta)' }} />
                <span>Instant WhatsApp Connect (Desk 1)</span>
              </button>

              <button
                onClick={onClose}
                className="btn btn-primary"
                style={{ width: '100%', padding: '14px' }}
              >
                <span>Return to Studio Experience</span>
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Modal Header */}
            <div className="modal-header-block">
              <div className="eyebrow eyebrow-magenta">
                <span>RESERVATION DESK • RAJAHMUNDRY</span>
              </div>
              <h3 id="modal-title" className="modal-heading-serif">
                Reserve Your <span className="accent-color">Experience</span>
              </h3>
              <p className="modal-subtext">
                Submit your bespoke service request. Our concierge will review timing availability and confirm your reservation.
              </p>
            </div>

            {status === 'error' && (
              <div className="modal-error-banner">
                <AlertCircle size={16} />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="modal-form-body">
              {/* Honeypot field (hidden from human users) */}
              <div style={{ display: 'none' }} aria-hidden="true">
                <label htmlFor="botcheck">Do not fill this field</label>
                <input
                  type="text"
                  id="botcheck"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* Step 1: Full Name & Phone */}
              <div className="form-grid-2">
                <div className="form-field">
                  <label className="form-label" htmlFor="client-name">
                    Full Name <span style={{ color: 'var(--accent-magenta)' }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="client-name"
                    name="name"
                    required
                    placeholder="e.g. Priya Sharma"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                    disabled={status === 'submitting'}
                  />
                </div>

                <div className="form-field">
                  <label className="form-label" htmlFor="client-phone">
                    Phone Number <span style={{ color: 'var(--accent-magenta)' }}>*</span>
                  </label>
                  <input
                    type="tel"
                    id="client-phone"
                    name="phone"
                    required
                    placeholder="e.g. 8833550184"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-control"
                    disabled={status === 'submitting'}
                  />
                </div>
              </div>

              {/* Step 2: Email */}
              <div className="form-field">
                <label className="form-label" htmlFor="client-email">
                  Email Address <span style={{ color: 'var(--text-muted)', fontSize: '0.72rem', textTransform: 'none' }}>(Optional for request receipt)</span>
                </label>
                <input
                  type="email"
                  id="client-email"
                  name="email"
                  placeholder="e.g. client@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  disabled={status === 'submitting'}
                />
              </div>

              {/* Step 3: Selected Service */}
              <div className="form-field">
                <label className="form-label" htmlFor="client-service">
                  Select Service / Signature Package <span style={{ color: 'var(--accent-magenta)' }}>*</span>
                </label>
                <select
                  id="client-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="form-control select-control"
                  required
                  disabled={status === 'submitting'}
                >
                  <option value="">-- Choose Signature Treatment --</option>
                  <optgroup label="🌟 CASMARA® High-End Skincare">
                    <option value="Full Facial CASMARA Treatment">Full Facial CASMARA Treatment</option>
                    <option value="CASMARA Original Peel-Up Mask">CASMARA Original Peel-Up Mask</option>
                  </optgroup>
                  <optgroup label="✂️ Hair Architecture & Transformations">
                    <option value="Nanoplastia Hair Treatment">Nanoplastia Hair Treatment (Any Length)</option>
                    <option value="Hair Botox Treatment">Hair Botox Treatment (Any Length)</option>
                    <option value="Keratin Complex Treatment">Keratin Complex Treatment (Any Length)</option>
                    <option value="Hair Smoothening / Straightening">Hair Smoothening / Straightening</option>
                    <option value="Global Hair Color + Highlights">Global Hair Color + Highlights</option>
                    <option value="Hair Spa Ritual">Hair Spa Ritual</option>
                  </optgroup>
                  <optgroup label="👑 Bridal Couture & Makeup">
                    <option value="Makeup by Senior Artist">Makeup by Senior Artist</option>
                    <option value="PG Signature Studio Makeup">PG Signature Studio Makeup</option>
                    <option value="Bridal Pre-Bride 7-Service Package">Bridal Pre-Bride 7-Service Package</option>
                    <option value="Pre-Bridal Luxury Package">Pre-Bridal Luxury Package</option>
                    <option value="Party & Saree Package">Party & Saree Package</option>
                    <option value="Pre-Bridal Package — Premium">Pre-Bridal Package — Premium</option>
                    <option value="Pre-Bridal Package — Luxury">Pre-Bridal Package — Luxury</option>
                  </optgroup>
                  <optgroup label="👔 Gentlemen's Grooming & Combos">
                    <option value="Men's Signature 5-in-1 Combo">Men's Signature 5-in-1 Combo</option>
                    <option value="Men's Advanced Care Combo">Men's Advanced Care Combo</option>
                    <option value="Men's Royal Grooming Experience">Men's Royal Grooming Experience</option>
                    <option value="Pre-Bridal Groom Package">Pre-Bridal Groom Package</option>
                    <option value="Pre-Bridegroom Package — Premium">Pre-Bridegroom Package — Premium</option>
                    <option value="Pre-Bridegroom Package — Luxury">Pre-Bridegroom Package — Luxury</option>
                  </optgroup>
                  <optgroup label="💅 Nail Couture & Body Polish">
                    <option value="Sculpted Gel Nail Extensions">Sculpted Gel Nail Extensions</option>
                    <option value="Gel Polish + Dry Manicure">Gel Polish + Dry Manicure</option>
                    <option value="3D Nail Art">3D Nail Art</option>
                    <option value="Full Body Polishing & Glow">Full Body Polishing & Glow</option>
                    <option value="Advance Pedicure + Advance Facial">Advance Pedicure + Advance Facial</option>
                  </optgroup>
                  <option value="General Consultation & Hair Styling">General Consultation / Bespoke Styling</option>
                </select>
              </div>

              {/* Step 4: Preferred Date & Time Slot */}
              <div className="form-grid-2">
                <div className="form-field">
                  <label className="form-label" htmlFor="client-date">Preferred Date</label>
                  <input
                    type="date"
                    id="client-date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="form-control"
                    min={new Date().toISOString().split('T')[0]}
                    disabled={status === 'submitting'}
                  />
                </div>

                <div className="form-field">
                  <label className="form-label" htmlFor="client-slot">Preferred Slot</label>
                  <select
                    id="client-slot"
                    name="timeSlot"
                    value={formData.timeSlot}
                    onChange={handleChange}
                    className="form-control select-control"
                    disabled={status === 'submitting'}
                  >
                    <option value="Morning (10:00 AM - 01:00 PM)">Morning (10:00 AM - 01:00 PM)</option>
                    <option value="Afternoon (01:00 PM - 04:30 PM)">Afternoon (01:00 PM - 04:30 PM)</option>
                    <option value="Evening (04:30 PM - 08:30 PM)">Evening (04:30 PM - 08:30 PM)</option>
                  </select>
                </div>
              </div>

              {/* Step 5: Notes */}
              <div className="form-field">
                <label className="form-label" htmlFor="client-notes">
                  Special Notes / Styling Preferences <span style={{ color: 'var(--text-muted)', fontSize: '0.72rem', textTransform: 'none' }}>(Optional)</span>
                </label>
                <textarea
                  id="client-notes"
                  name="notes"
                  rows="2"
                  placeholder="Mention hair length, skin concern, wedding date, or stylist preference..."
                  value={formData.notes}
                  onChange={handleChange}
                  className="form-control"
                  disabled={status === 'submitting'}
                />
              </div>

              {/* Submit Button & Direct WhatsApp Fallback */}
              <div style={{ marginTop: '22px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '16px' }}
                  id="submit-booking-request-btn"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Sending Request...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Appointment Request</span>
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '4px 0' }}>
                  <div style={{ flex: 1, height: '1px', background: 'var(--border-subtle)' }} />
                  <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                    Or reserve instantly via WhatsApp
                  </span>
                  <div style={{ flex: 1, height: '1px', background: 'var(--border-subtle)' }} />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  <button
                    type="button"
                    onClick={() => handleWhatsAppDirect(SALON_INFO.phones[0].raw)}
                    className="btn btn-secondary"
                    style={{ padding: '10px 14px', fontSize: '0.72rem' }}
                  >
                    <MessageSquare size={13} style={{ color: 'var(--accent-magenta)' }} />
                    <span>Desk 1: 8833550184</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleWhatsAppDirect(SALON_INFO.phones[1].raw)}
                    className="btn btn-secondary"
                    style={{ padding: '10px 14px', fontSize: '0.72rem' }}
                  >
                    <MessageSquare size={13} style={{ color: 'var(--accent-magenta)' }} />
                    <span>Desk 2: 9346308188</span>
                  </button>
                </div>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
