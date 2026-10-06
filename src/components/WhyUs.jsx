import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function WhyUs({ onOpenBooking }) {
  const pillars = [
    {
      num: "01",
      title: "Personalized Architecture",
      desc: "Every haircut and texture transformation begins with an in-depth diagnosis of your hair structure, scalp health, and facial contours."
    },
    {
      num: "02",
      title: "Authentic Formulations",
      desc: "Zero generic substitutes. Exclusively utilizing certified products from CASMARA Spain, Wella Professionals, Sebastian, and Dermalogica."
    },
    {
      num: "03",
      title: "Dedicated Unisex Sanctuary",
      desc: "Thoughtfully zoned luxury suites for men and women, ensuring supreme privacy, disposable protective capes, and sterilized equipment."
    },
    {
      num: "04",
      title: "Transparent Craftsmanship",
      desc: "Personalized consultations with bespoke beauty advice. Our master stylists and certified colorists bring runway-grade precision to every appointment."
    }
  ];

  return (
    <section id="why-us" className="section-editorial">
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: '680px', marginBottom: '56px' }}>
          <div className="eyebrow eyebrow-magenta">
            <span>THE WAX STUDIO DISTINCTION</span>
          </div>
          <h2 className="editorial-heading">
            Crafted for <span className="italic">Distinction.</span>
          </h2>
          <p className="editorial-subtext" style={{ marginTop: '16px' }}>
            Elevating salon standards in Rajahmundry through technical mastery, premium products, and uncompromising client respect.
          </p>
        </div>

        {/* 4 Column Editorial Layout */}
        <div className="why-editorial-grid">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="why-column">
              <span className="why-editorial-num">{pillar.num}</span>
              <h3 className="why-column-title">{pillar.title}</h3>
              <p className="why-column-desc">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
