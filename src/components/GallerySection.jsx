import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight, ChevronUp, Maximize2, X } from 'lucide-react';
import { LOOKBOOK_ITEMS } from '../data/salonData';

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [showAllLooks, setShowAllLooks] = useState(false);

  const categories = ['All', 'Hair', 'Skincare', 'Grooming', 'Nails', 'Bridal'];

  const filteredItems = LOOKBOOK_ITEMS.filter((item) => {
    if (activeFilter === 'All') return true;
    return item.category.toLowerCase() === activeFilter.toLowerCase();
  });

  // Limit initial display to 4 looks when viewing 'All' to keep scrolling minimal and elegant
  const INITIAL_LOOKS_COUNT = 4;
  const isCapped = activeFilter === 'All' && !showAllLooks;
  const displayedItems = isCapped
    ? filteredItems.slice(0, INITIAL_LOOKS_COUNT)
    : filteredItems;

  // Lightbox keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems]);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  // Assign asymmetric span
  const getColSpanClass = (index) => {
    const pattern = ['col-span-8', 'col-span-4', 'col-span-4', 'col-span-8', 'col-span-6', 'col-span-6', 'col-span-12'];
    return pattern[index % pattern.length];
  };

  return (
    <section id="lookbook" className="section-editorial section-editorial-darker">
      <div className="container">
        {/* Header */}
        <div className="lookbook-header-row">
          <div>
            <div className="eyebrow eyebrow-magenta">
              <span>EDITORIAL PORTFOLIO</span>
            </div>
            <h2 className="editorial-heading">
              The <span className="italic">Lookbook</span>
            </h2>
          </div>

          {/* Category Filters */}
          <div className="lookbook-filter-bar" role="tablist" aria-label="Portfolio filters">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveFilter(cat);
                  setShowAllLooks(false);
                }}
                className={`menu-tab-item lookbook-filter-btn ${activeFilter === cat ? 'active' : ''}`}
                role="tab"
                aria-selected={activeFilter === cat}
              >
                <span>{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Lookbook Grid */}
        <div className="lookbook-masonry">
          {displayedItems.map((item, index) => (
            <div
              key={item.id}
              className={`lookbook-card ${getColSpanClass(index)}`}
              onClick={() => openLightbox(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') openLightbox(index); }}
              aria-label={`View ${item.title}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="lookbook-img"
                loading="lazy"
                decoding="async"
              />

              <div className="lookbook-overlay">
                <span className="lookbook-cat-tag">
                  {item.category}
                </span>
                <h3 className="lookbook-item-title">
                  {item.title}
                </h3>
                <p className="lookbook-item-desc">
                  {item.description}
                </p>
                <div className="lookbook-expand-tag">
                  <Maximize2 size={12} style={{ color: 'var(--accent-magenta)' }} />
                  <span>Expand Visual</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 'Explore All Looks' Toggle Button */}
        {activeFilter === 'All' && filteredItems.length > INITIAL_LOOKS_COUNT && (
          <div className="lookbook-toggle-wrap">
            <button
              onClick={() => setShowAllLooks(!showAllLooks)}
              className="lookbook-toggle-btn"
              id="toggle-lookbook-visibility"
            >
              <span>{showAllLooks ? 'Show Curated Highlights' : `Explore Full Lookbook (${filteredItems.length} Visuals)`}</span>
              {showAllLooks ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
            </button>
          </div>
        )}
      </div>

      {/* Responsive Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          className="lightbox-backdrop"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="lightbox-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              aria-label="Close Lightbox"
              className="lightbox-close-btn"
            >
              <X size={18} />
            </button>

            {/* Main Image */}
            <img
              src={filteredItems[lightboxIndex].image}
              alt={filteredItems[lightboxIndex].title}
              className="lightbox-main-img"
            />

            {/* Nav Buttons */}
            <button
              onClick={prevImage}
              aria-label="Previous image"
              className="lightbox-nav-btn prev"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={nextImage}
              aria-label="Next image"
              className="lightbox-nav-btn next"
            >
              <ChevronRight size={20} />
            </button>

            {/* Caption */}
            <div className="lightbox-caption">
              <span className="lightbox-cat-badge">
                {filteredItems[lightboxIndex].category} • {lightboxIndex + 1} of {filteredItems.length}
              </span>
              <h3 className="lightbox-title">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="lightbox-desc">
                {filteredItems[lightboxIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
