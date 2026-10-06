import React, { useState, useEffect } from 'react';
import BrandLogo from './BrandLogo';

export default function Preloader({ onLoaded }) {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Lock scroll during loading screen
    document.body.style.overflow = 'hidden';

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFading(true);
            setTimeout(() => {
              setIsHidden(true);
              document.body.style.overflow = '';
              if (onLoaded) onLoaded();
            }, 550);
          }, 250);
          return 100;
        }
        const increment = Math.floor(Math.random() * 12) + 8;
        return Math.min(prev + increment, 100);
      });
    }, 40);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = '';
    };
  }, [onLoaded]);

  if (isHidden) return null;

  return (
    <div
      className={`luxury-preloader-overlay ${isFading ? 'is-fading' : ''}`}
      aria-label="Loading Experience"
      role="status"
    >
      {/* Ambient Neon Magenta Waves / Glow in Background */}
      <div className="preloader-neon-waves" />
      <div className="preloader-ambient-glow" />

      <div className="preloader-center-content">
        {/* Glowing Circular Logo Badge */}
        <div className="preloader-badge-container">
          <div className="preloader-badge-halo" />
          <img
            src="/images/logo.png"
            alt="The Wax Studio"
            className="preloader-exact-logo"
            decoding="async"
          />
        </div>

        {/* Downside Glowing Progress Filling Bar */}
        <div className="preloader-downside-bar-wrap">
          <div
            className="preloader-downside-bar-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}

