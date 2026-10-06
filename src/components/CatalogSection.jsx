import React, { useState } from 'react';
import { Download, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

const DOCUMENTS = [
  {
    id: 'casmara',
    title: 'CASMARA® Spain Catalog',
    coverImage: '/images/casmara_1.png',
    pdfUrl: '/documents/Casmara_Dermocosmetics_Catalog.pdf',
    fileName: 'Casmara_Dermocosmetics_Catalog.pdf'
  },
  {
    id: 'menu',
    title: 'Studio Service Menu',
    coverImage: '/images/page_1.png',
    pdfUrl: '/documents/The_Wax_Studio_Official_Menu.pdf',
    fileName: 'The_Wax_Studio_Official_Menu.pdf'
  },
  {
    id: 'jeannot',
    title: 'Jeannot Ceuticals Barcelona',
    coverImage: '/images/jeannot_cover.png',
    pdfUrl: '/documents/Jeannot_Ceuticals_Catalog.pdf',
    fileName: 'Jeannot_Ceuticals_Catalog.pdf'
  },
  {
    id: 'hydrafacial',
    title: 'Clinical Hydrafacial MD',
    coverImage: '/images/hydrafacial_cover.png',
    pdfUrl: '/documents/Hydrafacial_Clinical_Menu.pdf',
    fileName: 'Hydrafacial_Clinical_Menu.pdf'
  },
  {
    id: 'olaplex',
    title: 'Olaplex Bond Multiplier',
    coverImage: '/images/olaplex_cover.png',
    pdfUrl: '/documents/Olaplex_Treatment_Catalog.pdf',
    fileName: 'Olaplex_Treatment_Catalog.pdf'
  },
  {
    id: 'system-pro',
    title: 'System Professional (Wella)',
    coverImage: '/images/system_pro_cover.png',
    pdfUrl: '/documents/System_Professional_Catalog.pdf',
    fileName: 'System_Professional_Catalog.pdf'
  },
  {
    id: 'beauty-garage',
    title: 'Beauty Garage Professional',
    coverImage: '/images/beauty_garage_cover.png',
    pdfUrl: '/documents/Beauty_Garage_Catalog.pdf',
    fileName: 'Beauty_Garage_Catalog.pdf'
  }
];

export default function CatalogSection() {
  const [showAll, setShowAll] = useState(false);
  const displayedDocuments = showAll ? DOCUMENTS : DOCUMENTS.slice(0, 2);

  return (
    <section id="catalog" className="section-editorial section-editorial-darker">
      <div className="container">
        {/* Simple Header */}
        <div className="simple-catalog-header">
          <div className="eyebrow eyebrow-gold">
            <span>OFFICIAL PUBLICATIONS & CATALOGS</span>
          </div>
          <h2 className="editorial-heading">
            Official <span className="italic">Catalogs</span>
          </h2>
        </div>

        {/* Small frontpage documents grid */}
        <div className={`doc-frontpage-grid ${!showAll ? 'doc-grid-initial-two' : ''}`}>
          {displayedDocuments.map((doc) => (
            <div key={doc.id} className="doc-frontpage-card">
              <a
                href={doc.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="doc-cover-wrapper"
                title={`Open ${doc.title}`}
              >
                <img
                  src={doc.coverImage}
                  alt={`${doc.title} Frontpage`}
                  className="doc-cover-img"
                  loading="lazy"
                />
                <div className="doc-cover-overlay">
                  <div className="doc-quick-view-badge">
                    <ExternalLink size={15} />
                    <span>View PDF</span>
                  </div>
                </div>
              </a>

              <div className="doc-frontpage-info">
                <h3 className="doc-frontpage-title">{doc.title}</h3>
                <div className="doc-action-buttons">
                  <a
                    href={doc.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary doc-btn"
                  >
                    <ExternalLink size={13} style={{ color: 'var(--accent-magenta)' }} />
                    <span>Open</span>
                  </a>

                  <a
                    href={doc.pdfUrl}
                    download={doc.fileName}
                    className="btn btn-primary doc-btn"
                  >
                    <Download size={13} />
                    <span>Download</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Look More Toggle Button */}
        {DOCUMENTS.length > 2 && (
          <div className="catalog-show-more-wrapper">
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn btn-secondary catalog-show-more-btn"
              id="catalog-show-more-toggle"
            >
              <span>{showAll ? 'Show Less' : `Show More Catalogs (${DOCUMENTS.length - 2} More)`}</span>
              {showAll ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}




