import React from 'react';

export default function BrandLogo({ size = 'default', showSubtitle = true }) {
  return (
    <div className={`brand-logo-component size-${size}`}>
      {/* Authentic Circle Badge */}
      <img
        src="/images/logo.png"
        alt="The Wax Studio Authentic Logo"
        className="brand-logo-img"
        decoding="async"
      />

      {/* Styled Brand Typography matching Logo Identity */}
      <div className="brand-logo-text-wrap">
        <div className="brand-logo-title-text">
          THE <span className="brand-logo-highlight">WAX</span> STUDIO
        </div>

        {showSubtitle && (
          <div className="brand-logo-subtitle-text">
            PREMIUM UNISEX SALON
          </div>
        )}
      </div>
    </div>
  );
}

