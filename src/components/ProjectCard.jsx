import { useState } from 'react';
import { ArrowUpRight, X, CheckCircle2, Globe, ExternalLink, Lock, RotateCw } from 'lucide-react';
import { GithubIcon } from './Icons';

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
        {/* Realistic Browser Window Mockup Frame */}
        <div
          style={{
            borderBottom: '1px solid var(--border-subtle)',
            backgroundColor: '#F3EFE6',
            overflow: 'hidden',
          }}
        >
          {/* Browser Chrome Header */}
          <div
            style={{
              padding: '6px 10px',
              backgroundColor: '#ECE5D8',
              borderBottom: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '6px',
            }}
          >
            {/* 3 Window Control Dots */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#FF5F56', display: 'inline-block' }} />
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#FFBD2E', display: 'inline-block' }} />
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#27C93F', display: 'inline-block' }} />
            </div>

            {/* Browser Address Bar Pill */}
            <div
              style={{
                flex: 1,
                maxWidth: '160px',
                height: '18px',
                backgroundColor: 'rgba(255, 255, 255, 0.82)',
                borderRadius: '9999px',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4px',
                padding: '0 6px',
                fontSize: '0.62rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-secondary)',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              <Lock size={8} color="var(--accent-purple)" style={{ flexShrink: 0 }} />
              <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {project.displayUrl || 'website.com'}
              </span>
            </div>

            {/* Project Index Number */}
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                fontWeight: 700,
                color: 'var(--accent-purple)',
              }}
            >
              {project.number}
            </span>
          </div>

          {/* Browser Viewport */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '115px',
              overflow: 'hidden',
              backgroundColor: 'var(--bg-lavender)',
              cursor: 'pointer',
            }}
            onClick={() => setShowModal(true)}
            title="Click to view project details"
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
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
          </div>
        </div>

        {/* Project Details */}
        <div
          style={{
            padding: 'clamp(14px, 1.8vw, 18px)',
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '5px',
              }}
            >
              <span
                style={{
                  fontSize: '0.7rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--accent-purple)',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.07em',
                }}
              >
                {project.type}
              </span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(0.98rem, 1.1vw, 1.08rem)',
                color: 'var(--text-dark)',
                marginBottom: '8px',
                lineHeight: 1.3,
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                minHeight: '2.6em',
                cursor: 'pointer',
              }}
              onClick={() => setShowModal(true)}
              title={project.title}
            >
              {project.title}
            </h3>

            <p
              style={{
                fontSize: '0.82rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.5,
                marginBottom: '12px',
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                minHeight: '3.7em',
              }}
            >
              {project.description}
            </p>

            {/* Tech Badges */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '5px',
                marginBottom: '14px',
              }}
            >
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="skill-tag"
                  style={{
                    fontSize: '0.68rem',
                    padding: '2px 8px',
                    lineHeight: 1.3,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Row: Details & Live Website Link */}
          <div
            style={{
              paddingTop: '10px',
              borderTop: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '6px',
            }}
          >
            <button
              onClick={() => setShowModal(true)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-dark)',
                fontWeight: 600,
                fontSize: '0.8rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                cursor: 'pointer',
                padding: '2px 0',
                transition: 'color var(--transition-fast)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-purple)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-dark)')}
            >
              <span>Details</span>
              <ArrowUpRight size={13} />
            </button>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => {
                  if (project.liveUrl === '#') {
                    e.preventDefault();
                    setShowModal(true);
                  }
                }}
                style={{
                  fontSize: '0.74rem',
                  fontWeight: 600,
                  color: 'var(--accent-purple)',
                  backgroundColor: 'var(--bg-lavender)',
                  border: '1px solid var(--accent-lavender-border)',
                  borderRadius: 'var(--radius-full)',
                  padding: '3px 9px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  textDecoration: 'none',
                  transition: 'all var(--transition-fast)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-smoky-black)';
                  e.currentTarget.style.color = 'var(--color-floral-white)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--bg-lavender)';
                  e.currentTarget.style.color = 'var(--accent-purple)';
                }}
                title="Open live website demo"
              >
                <span>Live Site</span>
                <ExternalLink size={11} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Project Details Modal with Full Browser Frame */}
      {showModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            backgroundColor: 'rgba(17, 18, 13, 0.65)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'clamp(12px, 3vw, 24px)',
          }}
          onClick={() => setShowModal(false)}
        >
          <div
            className="editorial-card"
            style={{
              maxWidth: '720px',
              width: '100%',
              maxHeight: '92vh',
              overflowY: 'auto',
              backgroundColor: 'var(--bg-main)',
              borderRadius: 'clamp(16px, 3vw, 26px)',
              padding: 'clamp(18px, 4vw, 32px)',
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
                top: '16px',
                right: '16px',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'var(--bg-lavender)',
                border: '1px solid var(--accent-lavender-border)',
                color: 'var(--text-dark)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10,
              }}
            >
              <X size={18} />
            </button>

            {/* Realistic Desktop Browser Mockup in Modal */}
            <div
              style={{
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                marginBottom: '22px',
                border: '1px solid var(--border-light)',
                backgroundColor: '#ffffff',
                boxShadow: '0 8px 24px rgba(17, 18, 13, 0.08)',
              }}
            >
              {/* Full Desktop Browser Chrome Bar */}
              <div
                style={{
                  backgroundColor: '#ECE5D8',
                  padding: '9px 14px',
                  borderBottom: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                {/* 3 Dots */}
                <div style={{ display: 'flex', gap: '6px' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#FF5F56', display: 'inline-block' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#FFBD2E', display: 'inline-block' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#27C93F', display: 'inline-block' }} />
                </div>

                {/* Browser Controls */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, opacity: 0.6 }}>&lt;</span>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, opacity: 0.4 }}>&gt;</span>
                  <RotateCw size={11} style={{ opacity: 0.6 }} />
                </div>

                {/* Browser URL Input */}
                <div
                  style={{
                    flex: 1,
                    height: '26px',
                    backgroundColor: '#ffffff',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0 10px',
                    fontSize: '0.74rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-dark)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', overflow: 'hidden' }}>
                    <Lock size={11} color="#27C93F" />
                    <span style={{ color: 'var(--text-muted)' }}>https://</span>
                    <span style={{ fontWeight: 600 }}>{project.displayUrl || 'website.com'}</span>
                  </div>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: 'var(--accent-purple)', display: 'flex', alignItems: 'center' }}
                      title="Open in new window"
                    >
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>

              {/* Browser Webpage Content */}
              <div style={{ position: 'relative', width: '100%', maxHeight: 'clamp(200px, 35vw, 320px)', overflow: 'hidden', backgroundColor: 'var(--bg-lavender)' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover', objectPosition: 'top center' }}
                />
              </div>
            </div>

            {/* Header / Eyebrow with Status Badge */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
              <span className="section-eyebrow" style={{ marginBottom: 0 }}>
                {project.number} • {project.type}
              </span>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 600,
                  padding: '3px 10px',
                  backgroundColor: 'rgba(39, 201, 63, 0.12)',
                  color: '#1a7e2b',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid rgba(39, 201, 63, 0.3)',
                }}
              >
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#27C93F', display: 'inline-block' }} />
                {project.status || 'Live Website'}
              </span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.3rem, 3.5vw, 1.7rem)',
                color: 'var(--text-dark)',
                marginBottom: '12px',
              }}
            >
              {project.title}
            </h3>

            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '20px' }}>
              {project.description}
            </p>

            {/* Architecture Highlights */}
            <div style={{ marginBottom: '22px' }}>
              <h4 style={{ fontSize: '1rem', marginBottom: '12px', color: 'var(--text-dark)' }}>
                System Architecture & Capabilities
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
                {project.highlights.map((h, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '9px' }}>
                    <CheckCircle2 size={15} color="var(--accent-purple)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div style={{ marginBottom: '26px' }}>
              <h4 style={{ fontSize: '1rem', marginBottom: '10px', color: 'var(--text-dark)' }}>
                Technologies Used
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                {project.technologies.map((t, idx) => (
                  <span key={idx} className="skill-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Live CTAs & Close Button */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px',
                paddingTop: '16px',
                borderTop: '1px solid var(--border-subtle)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                    style={{ padding: '9px 20px', fontSize: '0.88rem', textDecoration: 'none', display: 'inline-flex', gap: '6px' }}
                  >
                    <Globe size={15} />
                    <span>Visit Live Website</span>
                    <ExternalLink size={13} />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary"
                    style={{ padding: '9px 18px', fontSize: '0.88rem', textDecoration: 'none', display: 'inline-flex', gap: '6px' }}
                  >
                    <GithubIcon size={15} />
                    <span>Source Code</span>
                  </a>
                )}
              </div>

              <button
                onClick={() => setShowModal(false)}
                style={{
                  background: 'none',
                  border: '1px solid var(--border-light)',
                  color: 'var(--text-secondary)',
                  padding: '8px 18px',
                  borderRadius: 'var(--radius-full)',
                  cursor: 'pointer',
                  fontSize: '0.86rem',
                  fontWeight: 500,
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
