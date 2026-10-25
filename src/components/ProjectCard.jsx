import { ArrowUpRight, ExternalLink, Lock } from 'lucide-react';

export default function ProjectCard({ project }) {
  const openProjectPage = () => {
    window.location.hash = `#/project/${project.id}`;
  };

  return (
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
          onClick={openProjectPage}
          title="Click to view full project page"
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
              marginBottom: '6px',
              gap: '6px',
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
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {project.type}
            </span>

            {project.status === 'Ongoing Project' && (
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '0.64rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#92400E',
                  backgroundColor: '#FEF3C7',
                  border: '1px solid #FDE68A',
                  padding: '1px 7px',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}
              >
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#D97706' }} />
                <span>Ongoing</span>
              </span>
            )}
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
            onClick={openProjectPage}
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
            onClick={openProjectPage}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--color-brown)',
              fontWeight: 600,
              fontSize: '0.8rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              cursor: 'pointer',
              padding: '2px 0',
              transition: 'color var(--transition-fast)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-brown-hover)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-brown)')}
          >
            <span>Details</span>
            <ArrowUpRight size={13} />
          </button>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target={project.liveUrl === '#' ? '_self' : '_blank'}
              rel="noreferrer"
              onClick={(e) => {
                if (project.liveUrl === '#') {
                  e.preventDefault();
                  openProjectPage();
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
                e.currentTarget.style.backgroundColor = 'var(--color-brown)';
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
  );
}
