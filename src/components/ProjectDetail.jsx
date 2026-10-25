import { useEffect } from 'react';
import { ArrowLeft, ArrowUpRight, CheckCircle2, Globe, ExternalLink, Lock, RotateCw, Layers, Calendar, UserCheck, ShieldCheck, ArrowRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/projects';

export default function ProjectDetail({ projectId, onBack }) {
  const projectIndex = projects.findIndex((p) => p.id === projectId);
  const project = projects[projectIndex] || projects[0];

  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : projects[projects.length - 1];
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : projects[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [projectId]);

  const handleNavigate = (targetId) => {
    window.location.hash = `#/project/${targetId}`;
  };

  return (
    <article className="project-detail-page" style={{ paddingTop: '100px', paddingBottom: '70px', minHeight: '100vh', backgroundColor: 'var(--bg-main)' }}>
      <div className="container" style={{ maxWidth: '1100px' }}>
        {/* Navigation Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '14px',
            marginBottom: '32px',
            paddingBottom: '18px',
            borderBottom: '1px solid var(--border-subtle)',
          }}
        >
          <button
            onClick={onBack}
            className="btn btn-secondary"
            style={{
              padding: '9px 18px',
              fontSize: '0.88rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
            }}
          >
            <ArrowLeft size={16} />
            <span>Back to Projects</span>
          </button>

          {/* Breadcrumbs */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.82rem',
              fontFamily: 'var(--font-mono)',
              color: 'var(--text-muted)',
            }}
          >
            <span
              onClick={onBack}
              style={{ cursor: 'pointer', textDecoration: 'underline' }}
            >
              Projects
            </span>
            <span>/</span>
            <span style={{ color: 'var(--text-dark)', fontWeight: 600 }}>
              {project.number} {project.title}
            </span>
          </div>
        </div>

        {/* Project Header */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '14px' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                fontWeight: 700,
                color: 'var(--color-brown)',
                backgroundColor: 'var(--bg-lavender)',
                border: '1px solid var(--accent-lavender-border)',
                padding: '4px 12px',
                borderRadius: 'var(--radius-full)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              Project {project.number} • {project.type}
            </span>

            {project.status && (
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.78rem',
                  fontFamily: 'var(--font-mono)',
                  color: project.status === 'Ongoing Project' ? '#92400E' : 'var(--accent-purple)',
                  backgroundColor: project.status === 'Ongoing Project' ? '#FEF3C7' : 'var(--bg-lavender)',
                  border: `1px solid ${project.status === 'Ongoing Project' ? '#FDE68A' : 'var(--accent-lavender-border)'}`,
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: 600,
                }}
              >
                <span
                  style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    backgroundColor: project.status === 'Ongoing Project' ? '#D97706' : '#2E7D32',
                  }}
                />
                <span>{project.status === 'Ongoing Project' ? 'Ongoing Project • In Active Development' : project.status}</span>
              </span>
            )}
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 5vw, 3.4rem)',
              color: 'var(--text-dark)',
              lineHeight: 1.16,
              marginBottom: '18px',
              letterSpacing: '-0.02em',
            }}
          >
            {project.title}
          </h1>

          <p
            style={{
              fontSize: 'clamp(1.02rem, 2.2vw, 1.2rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.68,
              maxWidth: '820px',
            }}
          >
            {project.description}
          </p>
        </div>

        {/* Large Desktop Browser Showcase Frame */}
        <div
          style={{
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            marginBottom: '48px',
            border: '1px solid var(--border-light)',
            backgroundColor: '#ffffff',
            boxShadow: '0 14px 40px rgba(17, 18, 13, 0.1)',
          }}
        >
          {/* Browser Chrome Header */}
          <div
            style={{
              backgroundColor: '#ECE5D8',
              padding: '12px 18px',
              borderBottom: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '14px',
            }}
          >
            {/* 3 Window Control Dots */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#FF5F56', display: 'inline-block' }} />
              <span style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#FFBD2E', display: 'inline-block' }} />
              <span style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#27C93F', display: 'inline-block' }} />
            </div>

            {/* Browser Controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)' }}>
              <span style={{ fontSize: '0.9rem', fontWeight: 700, opacity: 0.6 }}>&lt;</span>
              <span style={{ fontSize: '0.9rem', fontWeight: 700, opacity: 0.4 }}>&gt;</span>
              <RotateCw size={13} style={{ opacity: 0.6 }} />
            </div>

            {/* Address Bar */}
            <div
              style={{
                flex: 1,
                maxWidth: '480px',
                height: '32px',
                backgroundColor: '#ffffff',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 12px',
                fontSize: '0.8rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-dark)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', overflow: 'hidden' }}>
                <Lock size={13} color="#27C93F" />
                <span style={{ color: 'var(--text-muted)' }}>https://</span>
                <span style={{ fontWeight: 600 }}>{project.displayUrl || 'website.com'}</span>
              </div>
              {project.liveUrl && project.liveUrl !== '#' && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: 'var(--color-brown)', display: 'flex', alignItems: 'center' }}
                  title="Open live website in new tab"
                >
                  <ExternalLink size={14} />
                </a>
              )}
            </div>

            <div style={{ width: '40px' }} />
          </div>

          {/* Browser Content Screenshot */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              backgroundColor: 'var(--bg-lavender)',
              overflow: 'hidden',
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                maxHeight: '620px',
                objectFit: 'cover',
                objectPosition: 'top center',
              }}
            />
          </div>
        </div>

        {/* 2-Column In-Depth Project Details */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: 'clamp(28px, 4vw, 44px)',
            marginBottom: '54px',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Architecture & Features */}
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                color: 'var(--text-dark)',
                marginBottom: '16px',
              }}
            >
              System Architecture & Key Capabilities
            </h2>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '24px', fontSize: '0.98rem' }}>
              Engineered with clean architectural separation, robust database design, and intuitive user interfaces tailored to operational workflows.
            </p>

            {/* Highlights List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
              {project.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    padding: '14px 18px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: '#ffffff',
                    border: '1px solid var(--border-subtle)',
                    boxShadow: 'var(--shadow-subtle)',
                  }}
                >
                  <CheckCircle2 size={18} color="var(--color-brown)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.94rem', color: 'var(--text-dark)', lineHeight: 1.55 }}>
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            {/* Technical Execution Note */}
            <div
              style={{
                padding: '20px 24px',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: 'var(--bg-subtle)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '8px' }}>
                Engineering Focus
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Prioritized modular components, normalized database schemas, responsive cross-device views, and secure data validation across all endpoints.
              </p>
            </div>
          </div>

          {/* Right Column: Metadata & CTAs */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
          >
            {/* Project Quick Facts Card */}
            <div
              className="editorial-card"
              style={{
                padding: 'clamp(20px, 3.5vw, 28px)',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: '#ffffff',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: 'var(--text-dark)',
                  marginBottom: '18px',
                  paddingBottom: '12px',
                  borderBottom: '1px solid var(--border-subtle)',
                }}
              >
                Project Information
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
                <div>
                  <span style={{ display: 'block', fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '4px' }}>
                    Project Type
                  </span>
                  <span style={{ fontWeight: 600, color: 'var(--text-dark)', fontSize: '0.92rem' }}>
                    {project.type}
                  </span>
                </div>

                <div>
                  <span style={{ display: 'block', fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '4px' }}>
                    Status
                  </span>
                  <span
                    style={{
                      fontWeight: 600,
                      color: project.status === 'Ongoing Project' ? '#92400E' : 'var(--text-dark)',
                      fontSize: '0.92rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    <span
                      style={{
                        width: '7px',
                        height: '7px',
                        borderRadius: '50%',
                        backgroundColor: project.status === 'Ongoing Project' ? '#D97706' : '#2E7D32',
                      }}
                    />
                    {project.status === 'Ongoing Project' ? 'Ongoing • Active Development' : project.status}
                  </span>
                </div>

                <div>
                  <span style={{ display: 'block', fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '8px' }}>
                    Technology Stack
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="skill-tag"
                        style={{ fontSize: '0.76rem', padding: '4px 10px' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {project.liveUrl && project.liveUrl !== '#' ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                    style={{ width: '100%', textDecoration: 'none' }}
                  >
                    <Globe size={16} />
                    <span>Visit Live Website</span>
                    <ExternalLink size={14} />
                  </a>
                ) : (
                  <button
                    disabled
                    className="btn btn-secondary"
                    style={{ width: '100%', opacity: 0.8, cursor: 'default' }}
                  >
                    <span>Local / Active Portfolio Project</span>
                  </button>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary"
                    style={{ width: '100%', textDecoration: 'none' }}
                  >
                    <GithubIcon size={16} />
                    <span>View Source Code</span>
                    <ArrowUpRight size={14} />
                  </a>
                )}

                <a
                  href="#contact"
                  onClick={onBack}
                  className="btn btn-secondary"
                  style={{ width: '100%', textDecoration: 'none', borderStyle: 'dashed' }}
                >
                  <span>Discuss a Similar Project</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Pagination: Prev / Next Projects */}
        <div
          style={{
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: '36px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '18px',
          }}
        >
          {/* Previous Project Card */}
          <div
            onClick={() => handleNavigate(prevProject.id)}
            className="editorial-card"
            style={{
              padding: '18px 22px',
              borderRadius: 'var(--radius-lg)',
              cursor: 'pointer',
              backgroundColor: '#ffffff',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
            }}
          >
            <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
              ← Previous Project
            </span>
            <span style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-dark)' }}>
              {prevProject.title}
            </span>
          </div>

          {/* Next Project Card */}
          <div
            onClick={() => handleNavigate(nextProject.id)}
            className="editorial-card"
            style={{
              padding: '18px 22px',
              borderRadius: 'var(--radius-lg)',
              cursor: 'pointer',
              backgroundColor: '#ffffff',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              textAlign: 'right',
              gap: '6px',
            }}
          >
            <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
              Next Project →
            </span>
            <span style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-dark)' }}>
              {nextProject.title}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
