import React, { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp, BookOpen, Search, Sparkles } from 'lucide-react';
import { MENU_CATEGORIES, SALON_SERVICES, BRIDAL_ALACARTE_MENU } from '../data/salonData';

export default function ServicesSection({ onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showRateCard, setShowRateCard] = useState(false);
  const [searchFilter, setSearchFilter] = useState('');
  const [showAllServices, setShowAllServices] = useState(false);

  const filteredServices = SALON_SERVICES.filter((srv) => {
    const matchesCategory = activeCategory === 'all' || srv.category === activeCategory;
    const matchesSearch =
      srv.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
      srv.tagline.toLowerCase().includes(searchFilter.toLowerCase()) ||
      srv.description.toLowerCase().includes(searchFilter.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Limit displayed services to 5 by default when viewing 'All' to keep scrolling minimal
  const INITIAL_DISPLAY_COUNT = 5;
  const isCapped = activeCategory === 'all' && !searchFilter && !showAllServices;
  const displayedServices = isCapped
    ? filteredServices.slice(0, INITIAL_DISPLAY_COUNT)
    : filteredServices;

  return (
    <section id="services" className="section-editorial">
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '32px' }}>
          <div className="eyebrow eyebrow-magenta">
            <span>CURATED SERVICES & RITUALS</span>
          </div>
          <h2 className="editorial-heading">
            Signature <span className="italic">Services</span> & Rituals
          </h2>
        </div>


        {/* Category Tabs & Quick Search Controls */}
        <div className="services-nav-search-wrap">
          <div className="menu-tab-nav">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setShowAllServices(false);
                }}
                className={`menu-tab-item ${activeCategory === cat.id ? 'active' : ''}`}
                id={`cat-tab-${cat.id}`}
              >
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Quick Search & Full Menu Button */}
          <div className="services-search-row">
            <div className="services-search-input-box">
              <Search size={14} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
              <input
                type="text"
                placeholder="Search services or treatments..."
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                className="services-search-input"
                aria-label="Search services"
              />
              {searchFilter && (
                <button
                  onClick={() => setSearchFilter('')}
                  className="services-search-clear-btn"
                  aria-label="Clear search"
                >
                  Clear
                </button>
              )}
            </div>

            <button
              onClick={() => setShowRateCard(!showRateCard)}
              className="btn btn-outline-minimal alacarte-toggle-btn"
              id="toggle-full-rate-card"
            >
              <BookOpen size={14} style={{ color: 'var(--accent-magenta)' }} />
              <span>{showRateCard ? 'Hide A-La-Carte Menu' : 'View Full A-La-Carte Menu'}</span>
              {showRateCard ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
          </div>
        </div>

        {/* Full A-La-Carte Menu Accordion */}
        {showRateCard && (
          <div
            style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-medium)',
              borderRadius: 'var(--radius-md)',
              padding: 'clamp(20px, 3.5vw, 36px)',
              marginBottom: '36px',
              animation: 'fadeIn 0.3s ease-out'
            }}
          >
            <div style={{ marginBottom: '20px' }}>
              <span className="eyebrow eyebrow-gold">OFFICIAL STUDIO MENU</span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: '#FFFFFF' }}>
                Complete Studio & Bridal A-La-Carte Menu
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Bespoke unisex hair architecture, clinical skin rituals, and ceremonial bridal couture.
              </p>
            </div>

            <div
              className="alacarte-grid-menu"
            >
              {BRIDAL_ALACARTE_MENU.map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 16px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-xs)'
                  }}
                >
                  <span style={{ fontSize: '0.85rem', color: '#FFFFFF', fontWeight: 600 }}>{item.service}</span>
                  <button
                    onClick={() => onOpenBooking({ name: item.service })}
                    className="editorial-link"
                    style={{ background: 'none', border: 'none', borderBottom: '1px solid var(--accent-magenta)', cursor: 'pointer', fontSize: '0.72rem' }}
                  >
                    <span>Inquire</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Service Menu Rows (Michelin / Editorial Style) */}
        {filteredServices.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '50px 20px' }}>
            <p style={{ color: 'var(--text-muted)' }}>No services found matching "{searchFilter}".</p>
            <button
              onClick={() => { setSearchFilter(''); setActiveCategory('all'); }}
              className="btn btn-outline-minimal"
              style={{ marginTop: '16px' }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="service-list-container">
            {displayedServices.map((srv) => (
              <article key={srv.id} className="service-row-item">
                {/* Left: Service Details */}
                <div className="service-row-name-wrap">
                  <div className="service-row-title-row">
                    <h3 className="service-row-name">{srv.name}</h3>
                    {srv.badge && <span className="service-badge-pill">{srv.badge}</span>}
                    {srv.lengthTag && <span className="service-length-pill">{srv.lengthTag}</span>}
                  </div>

                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                    {srv.tagline}
                  </p>

                  <p className="service-row-desc">{srv.description}</p>

                  {srv.includes && srv.includes.length > 0 && (
                    <div className="service-row-includes">
                      {srv.includes.map((inc, i) => (
                        <span key={i} className="service-inc-tag">{inc}</span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right: Booking Action */}
                <div className="service-row-price-wrap">
                  <button
                    onClick={() => onOpenBooking(srv)}
                    className="btn btn-primary"
                    style={{ padding: '10px 20px', fontSize: '0.74rem' }}
                    aria-label={`Book ${srv.name}`}
                  >
                    <span>Book Treatment</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}


        {/* Minimal 'Show More / Show All Services' Toggle Button */}
        {activeCategory === 'all' && !searchFilter && filteredServices.length > INITIAL_DISPLAY_COUNT && (
          <div className="services-view-all-wrap">
            <button
              onClick={() => setShowAllServices(!showAllServices)}
              className="services-view-all-btn"
              id="services-toggle-view-all"
            >
              <span>{showAllServices ? 'Show Top Signature Services' : `View All Services (${filteredServices.length} Treatments)`}</span>
              {showAllServices ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
