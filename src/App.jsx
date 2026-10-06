import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandIntro from './components/BrandIntro';
import ServicesSection from './components/ServicesSection';
import CasmaraSpotlight from './components/CasmaraSpotlight';
import BridalStudio from './components/BridalStudio';
import GallerySection from './components/GallerySection';
import CatalogSection from './components/CatalogSection';
import WhyUs from './components/WhyUs';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MobileActionBar from './components/MobileActionBar';
import BookingModal from './components/BookingModal';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // High-performance 120 FPS hardware-accelerated scroll progress bar
  useEffect(() => {
    let ticking = false;
    const bar = document.getElementById('scroll-progress-bar');

    const updateProgress = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0 && bar) {
        const progress = Math.min(Math.max(window.scrollY / totalHeight, 0), 1);
        bar.style.transform = `scaleX(${progress})`;
        if (window.scrollY > 20) {
          bar.classList.add('is-visible');
        } else {
          bar.classList.remove('is-visible');
        }
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  // Butter-smooth Scroll Reveal Animation Observer
  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          // Once animated, keep visible for performance
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.1
    });

    const elementsToAnimate = document.querySelectorAll(
      '.section-editorial, .service-row-item, .lookbook-card, .catalog-card, .why-column, .bridal-grid-split > div, .contact-editorial-grid > div'
    );

    elementsToAnimate.forEach((el) => {
      el.classList.add('scroll-reveal-item');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleOpenBooking = (service = null) => {
    setSelectedService(service);
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
    setSelectedService(null);
  };

  return (
    <div className={`app-root ${isLoaded ? 'page-is-loaded' : ''}`}>
      {/* Luxury Loading Animation Screen */}
      <Preloader onLoaded={() => setIsLoaded(true)} />

      {/* Hardware-Accelerated 120 FPS Scroll Progress Bar */}
      <div id="scroll-progress-bar" style={{ transform: 'scaleX(0)' }} />

      {/* Global Navigation */}

      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main id="main-content">
        {/* Cinematic Fullscreen Hero — 100% visible on 720p/1080p without scrolling */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Brand Editorial Intro */}
        <BrandIntro onOpenBooking={() => handleOpenBooking()} />

        {/* Signature Services & Rate Card Menu */}
        <ServicesSection onOpenBooking={(srv) => handleOpenBooking(srv)} />

        {/* CASMARA Spain Dermo-Cosmetics Spotlight */}
        <CasmaraSpotlight onOpenBooking={(srv) => handleOpenBooking(srv)} />

        {/* The Bridal Studio & Groom Couture */}
        <BridalStudio onOpenBooking={(srv) => handleOpenBooking(srv)} />

        {/* The Lookbook Portfolio */}
        <GallerySection />

        {/* Official Downloadable Publications & Catalogs */}
        <CatalogSection onOpenBooking={(srv) => handleOpenBooking(srv)} />

        {/* The Wax Studio Distinction */}
        <WhyUs onOpenBooking={() => handleOpenBooking()} />

        {/* Visit & Connect / Direct Contact */}
        <ContactSection onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Mobile Bottom Fixed Action Bar */}
      <MobileActionBar onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
        preselectedService={selectedService}
      />
    </div>
  );
}
