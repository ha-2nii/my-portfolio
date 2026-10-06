import { useState } from 'react';
import { ArrowUpRight, X, CheckCircle2 } from 'lucide-react';

export default function ProjectCard({ project }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="editorial-card"
        style={{
          display: 'flex',
          flexDirection: 'column',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          backgroundColor: '#ffffff',
          position: 'relative',
        }}
      >
        {/* Project Image Frame */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '240px',
            overflow: 'hidden',
            backgroundColor: 'var(--bg-lavender)',
            borderBottom: '1px solid var(--border-subtle)',
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top center',
              transition: 'transform var(--transition-smooth)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          />

          {/* Project Number Badge (Inspired by reference) */}
          <div
            style={{
              position: 'absolute',
              top: '16px',
              left: '16px',
              width: '36px',
              height: '36px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'rgba(255, 255, 255, 0.92)',
              backdropFilter: 'blur(8px)',
              border: '1px solid var(--border-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              fontWeight: 700,
              color: 'var(--accent-purple)',
            }}
          >
            {project.number}
          </div>
        </div>

        {/* Project Details */}
        <div
          style={{
            padding: '28px',
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div
              style={{
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--accent-purple)',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '8px',
              }}
            >
              {project.type}
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.45rem',
                color: 'var(--text-dark)',
                marginBottom: '12px',
                lineHeight: 1.3,
              }}
            >
              {project.title}
            </h3>

            <p
              style={{
                fontSize: '0.94rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                marginBottom: '22px',
              }}
            >
              {project.description}
            </p>

            {/* Tech Badges */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginBottom: '26px',
              }}
            >
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="skill-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action button */}
          <div style={{ paddingTop: '16px', borderTop: '1px solid var(--border-subtle)' }}>
            <button
              onClick={() => setShowModal(true)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--accent-purple)',
                fontWeight: 600,
                fontSize: '0.92rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer',
                padding: '4px 0',
                transition: 'gap var(--transition-fast)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.gap = '10px')}
              onMouseLeave={(e) => (e.currentTarget.style.gap = '6px')}
            >
              <span>View Project</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      {showModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            backgroundColor: 'rgba(15, 23, 42, 0.55)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
          onClick={() => setShowModal(false)}
        >
          <div
            className="editorial-card"
            style={{
              maxWidth: '680px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              backgroundColor: '#ffffff',
              borderRadius: 'var(--radius-xl)',
              padding: '36px',
              position: 'relative',
              boxShadow: 'var(--shadow-hover)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              aria-label="Close project modal"
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: 'var(--bg-lavender)',
                border: '1px solid var(--accent-lavender-border)',
                color: 'var(--text-dark)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <X size={18} />
            </button>

            {/* Modal Image */}
            <div
              style={{
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                marginBottom: '24px',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                style={{ width: '100%', maxHeight: '340px', objectFit: 'cover', objectPosition: 'top center' }}
              />
            </div>

            <span className="section-eyebrow" style={{ marginBottom: '8px' }}>
              {project.number} • {project.type}
            </span>

            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.8rem',
                color: 'var(--text-dark)',
                marginBottom: '14px',
              }}
            >
              {project.title}
            </h3>

            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '24px' }}>
              {project.description}
            </p>

            {/* Architecture Highlights */}
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '1.05rem', marginBottom: '14px', color: 'var(--text-dark)' }}>
                System Architecture & Capabilities
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {project.highlights.map((h, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <CheckCircle2 size={16} color="var(--accent-purple)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div style={{ marginBottom: '28px' }}>
              <h4 style={{ fontSize: '1.05rem', marginBottom: '12px', color: 'var(--text-dark)' }}>
                Technologies Used
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {project.technologies.map((t, idx) => (
                  <span key={idx} className="skill-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Close CTA */}
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button
                onClick={() => setShowModal(false)}
                className="btn btn-primary"
                style={{ padding: '10px 24px' }}
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
