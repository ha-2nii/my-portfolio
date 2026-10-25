import { useState } from 'react';
import { ArrowUpRight, Lock } from 'lucide-react';
import { projects } from '../data/projects';

function ProjectBrowserFrame({ project, height = '180px', onClick }) {
  return (
    <div
      onClick={onClick}
      title="Click to view full project page"
      style={{
        borderRadius: '18px',
        overflow: 'hidden',
        border: '1px solid #ECE2D4',
        backgroundColor: '#FFFFFF',
        boxShadow: '0 4px 18px rgba(17, 18, 13, 0.05)',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        transition: 'all 0.3s ease',
      }}
      className="project-mockup-wrapper"
    >
      {/* Browser Chrome Header */}
      <div
        style={{
          padding: '7px 12px',
          backgroundColor: '#EDE5D7',
          borderBottom: '1px solid #E2D7C5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '8px',
        }}
      >
        {/* 3 Window Control Dots */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FF5F56', display: 'inline-block' }} />
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FFBD2E', display: 'inline-block' }} />
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#27C93F', display: 'inline-block' }} />
        </div>

        {/* Address Bar */}
        <div
          style={{
            flex: 1,
            maxWidth: '220px',
            height: '20px',
            backgroundColor: 'rgba(255, 255, 255, 0.88)',
            borderRadius: '9999px',
            border: '1px solid #DDD1BF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '5px',
            padding: '0 8px',
            fontSize: '0.64rem',
            fontFamily: 'var(--font-mono)',
            color: 'var(--text-secondary)',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          <Lock size={9} color="var(--color-brown, #73482C)" style={{ flexShrink: 0 }} />
          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {project.displayUrl || 'website.com'}
          </span>
        </div>

        {/* Index Number */}
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            fontWeight: 700,
            color: 'var(--color-brown, #73482C)',
          }}
        >
          {project.number}
        </span>
      </div>

      {/* Browser Viewport with original crisp picture */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: height,
          overflow: 'hidden',
          backgroundColor: '#FAF7F0',
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
            transition: 'transform 0.4s ease',
          }}
          className="project-mockup-img"
        />
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All' },
    { id: 'web', label: 'Web Applications' },
    { id: 'systems', label: 'Systems' },
    { id: 'personal', label: 'Personal' },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const eotc = projects.find((p) => p.id === 'eotc-platform');
  const dental = projects.find((p) => p.id === 'dental-clinic-website');
  const ngo = projects.find((p) => p.id === 'ngo-resource-management');
  const portfolio = projects.find((p) => p.id === 'portfolio-website');

  const openProject = (id) => {
    window.location.hash = `#/project/${id}`;
  };

  return (
    <section
      id="projects"
      className="section"
      style={{
        backgroundColor: 'var(--bg-main, #FFFBF4)',
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(60px, 8vw, 100px) 0',
      }}
    >
      <div className="container" style={{ maxWidth: '1480px' }}>
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '24px',
            flexWrap: 'wrap',
            marginBottom: 'clamp(36px, 5vw, 52px)',
          }}
        >
          {/* Left Title & Subtitle */}
          <div style={{ maxWidth: '620px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '10px',
              }}
            >
              <span
                style={{
                  fontSize: '0.74rem',
                  fontFamily: 'var(--font-mono)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.14em',
                  color: 'var(--color-brown, #73482C)',
                  fontWeight: 700,
                }}
              >
                MY WORK
              </span>
              <span
                style={{
                  width: '26px',
                  height: '1.5px',
                  backgroundColor: 'var(--color-brown, #73482C)',
                  opacity: 0.5,
                  display: 'inline-block',
                }}
              />
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.1rem, 4vw, 3.2rem)',
                fontWeight: 700,
                color: 'var(--text-dark, #11120D)',
                lineHeight: 1.15,
                margin: '0 0 14px 0',
                letterSpacing: '-0.02em',
              }}
            >
              Selected Projects<br />
              I've{' '}
              <span
                style={{
                  fontStyle: 'italic',
                  fontWeight: 400,
                  color: 'var(--color-brown, #73482C)',
                }}
              >
                Worked On
              </span>
            </h2>

            <p
              style={{
                color: 'var(--text-secondary, #565449)',
                fontSize: 'clamp(0.9rem, 1.3vw, 0.98rem)',
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              Here are some of the projects I've worked on — from web applications to
              systems and personal projects. Each one helped me grow, solve real
              problems and build better digital experiences.
            </p>
          </div>

          {/* Right: Filter Pills & Handwritten Note */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: '16px',
            }}
          >
            {/* Filter Pills */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                backgroundColor: 'rgba(238, 230, 218, 0.65)',
                padding: '5px',
                borderRadius: '9999px',
                border: '1px solid rgba(216, 203, 185, 0.5)',
              }}
            >
              {filterTabs.map((tab) => {
                const isActive = activeFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveFilter(tab.id)}
                    style={{
                      border: 'none',
                      backgroundColor: isActive ? 'var(--color-brown, #73482C)' : 'transparent',
                      color: isActive ? '#FFFFFF' : 'var(--text-secondary, #565449)',
                      padding: '7px 18px',
                      borderRadius: '9999px',
                      fontSize: '0.84rem',
                      fontWeight: isActive ? 600 : 500,
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                      boxShadow: isActive ? '0 2px 10px rgba(115, 72, 44, 0.25)' : 'none',
                    }}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Turn ideas into real solutions cursive annotation */}
            <div
              className="projects-cursive-note"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                marginRight: '12px',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-cursive, Caveat, cursive)',
                  fontSize: '1.15rem',
                  color: 'var(--color-brown, #73482C)',
                  lineHeight: 1.15,
                  transform: 'rotate(-4deg)',
                  textAlign: 'right',
                }}
              >
                Turn ideas<br />into real solutions
              </span>
              <svg
                width="46"
                height="32"
                viewBox="0 0 46 32"
                fill="none"
                style={{ marginTop: '2px', marginRight: '24px' }}
              >
                <path
                  d="M40 4C32 12 18 16 6 25"
                  stroke="var(--color-brown, #73482C)"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M10 17L5 25L14 26"
                  stroke="var(--color-brown, #73482C)"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PROJECTS LAYOUT                                                           */}
        {/* ========================================================================= */}

        {activeFilter === 'all' ? (
          /* ALL VIEW: Exact layout matching design screenshot */
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {/* 01: FEATURED PROJECT CARD (Full Width) */}
            {eotc && (
              <div
                className="editorial-card project-card-featured"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '26px',
                  border: '1px solid #ECE3D4',
                  boxShadow: 'var(--shadow-card, 0 4px 24px rgba(17, 18, 13, 0.05))',
                  padding: 'clamp(20px, 2.5vw, 28px)',
                  display: 'grid',
                  gridTemplateColumns: 'minmax(0, 1.25fr) minmax(0, 1fr)',
                  gap: 'clamp(20px, 3.2vw, 40px)',
                  alignItems: 'center',
                }}
              >
                {/* Browser Viewport Left Column with Original Picture */}
                <ProjectBrowserFrame
                  project={eotc}
                  height="250px"
                  onClick={() => openProject(eotc.id)}
                />

                {/* Details Right Column */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {/* Category Eyebrow & Number */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '10px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.74rem',
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        color: 'var(--color-brown, #73482C)',
                        textTransform: 'uppercase',
                      }}
                    >
                      {eotc.badge || 'FEATURED PROJECT'}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.92rem',
                        fontWeight: 600,
                        color: 'var(--text-muted, #7A7869)',
                      }}
                    >
                      | 01
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    onClick={() => openProject(eotc.id)}
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(1.5rem, 2.2vw, 1.95rem)',
                      fontWeight: 700,
                      color: 'var(--text-dark, #11120D)',
                      lineHeight: 1.2,
                      margin: '0 0 14px 0',
                      cursor: 'pointer',
                    }}
                  >
                    {eotc.shortTitle || eotc.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '0.92rem',
                      color: 'var(--text-secondary, #565449)',
                      lineHeight: 1.62,
                      margin: '0 0 20px 0',
                    }}
                  >
                    {eotc.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px',
                      marginBottom: '26px',
                    }}
                  >
                    {eotc.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        style={{
                          backgroundColor: '#F5EFE4',
                          color: '#654B38',
                          padding: '4px 13px',
                          borderRadius: '9999px',
                          fontSize: '0.78rem',
                          fontWeight: 600,
                          border: '1px solid #ECE2D4',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '18px', flexWrap: 'wrap' }}>
                    <button
                      onClick={() => openProject(eotc.id)}
                      className="btn"
                      style={{
                        backgroundColor: 'var(--color-brown, #73482C)',
                        color: '#FFFFFF',
                        padding: '10px 22px',
                        borderRadius: '9999px',
                        fontSize: '0.86rem',
                        fontWeight: 600,
                        border: 'none',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        boxShadow: '0 3px 12px rgba(115, 72, 44, 0.25)',
                      }}
                    >
                      <span>View project</span>
                      <ArrowUpRight size={15} />
                    </button>

                    {eotc.liveUrl && (
                      <a
                        href={eotc.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          color: 'var(--text-dark, #11120D)',
                          fontSize: '0.88rem',
                          fontWeight: 600,
                          textDecoration: 'none',
                          transition: 'color 0.2s ease',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-brown, #73482C)')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-dark, #11120D)')}
                      >
                        <span>{eotc.liveLabel || 'Live website'}</span>
                        <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* 02 & 03: TWO COLUMN ROW */}
            <div
              className="projects-two-col-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                gap: '24px',
              }}
            >
              {/* Card 02: Nash Dental Clinic Website */}
              {dental && (
                <div
                  className="editorial-card project-card-compact"
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '24px',
                    border: '1px solid #ECE3D4',
                    boxShadow: 'var(--shadow-card, 0 4px 24px rgba(17, 18, 13, 0.05))',
                    padding: '22px',
                    display: 'grid',
                    gridTemplateColumns: 'minmax(0, 1.05fr) minmax(0, 1.25fr)',
                    gap: '18px',
                    alignItems: 'center',
                  }}
                >
                  {/* Left Browser Mockup with Original Picture */}
                  <ProjectBrowserFrame
                    project={dental}
                    height="170px"
                    onClick={() => openProject(dental.id)}
                  />

                  {/* Right Details */}
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '8px',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.68rem',
                          fontWeight: 700,
                          letterSpacing: '0.12em',
                          color: 'var(--color-brown, #73482C)',
                          textTransform: 'uppercase',
                        }}
                      >
                        {dental.badge || 'WEB APPLICATION'}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.84rem',
                          fontWeight: 600,
                          color: 'var(--text-muted, #7A7869)',
                        }}
                      >
                        02
                      </span>
                    </div>

                    <h3
                      onClick={() => openProject(dental.id)}
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: 'var(--text-dark, #11120D)',
                        lineHeight: 1.25,
                        margin: '0 0 10px 0',
                        cursor: 'pointer',
                      }}
                    >
                      {dental.shortTitle || dental.title}
                    </h3>

                    <p
                      style={{
                        fontSize: '0.84rem',
                        color: 'var(--text-secondary, #565449)',
                        lineHeight: 1.55,
                        margin: '0 0 14px 0',
                      }}
                    >
                      {dental.description}
                    </p>

                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '6px',
                        marginBottom: '16px',
                      }}
                    >
                      {dental.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          style={{
                            backgroundColor: '#F5EFE4',
                            color: '#654B38',
                            padding: '3px 10px',
                            borderRadius: '9999px',
                            fontSize: '0.74rem',
                            fontWeight: 600,
                            border: '1px solid #ECE2D4',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <button
                        onClick={() => openProject(dental.id)}
                        style={{
                          background: 'none',
                          border: 'none',
                          padding: 0,
                          color: 'var(--color-brown, #73482C)',
                          fontSize: '0.84rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                        }}
                      >
                        <span>View project</span>
                        <ArrowUpRight size={13} />
                      </button>

                      {dental.liveUrl && (
                        <a
                          href={dental.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: 'var(--text-dark, #11120D)',
                            fontSize: '0.84rem',
                            fontWeight: 600,
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                          }}
                        >
                          <span>{dental.liveLabel || 'Live site'}</span>
                          <ArrowUpRight size={13} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Card 03: NGO Resource & Sponsorship Management */}
              {ngo && (
                <div
                  className="editorial-card project-card-compact"
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '24px',
                    border: '1px solid #ECE3D4',
                    boxShadow: 'var(--shadow-card, 0 4px 24px rgba(17, 18, 13, 0.05))',
                    padding: '22px',
                    display: 'grid',
                    gridTemplateColumns: 'minmax(0, 1.05fr) minmax(0, 1.25fr)',
                    gap: '18px',
                    alignItems: 'center',
                  }}
                >
                  {/* Left Browser Mockup with Original Picture */}
                  <ProjectBrowserFrame
                    project={ngo}
                    height="170px"
                    onClick={() => openProject(ngo.id)}
                  />

                  {/* Right Details */}
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '8px',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.68rem',
                          fontWeight: 700,
                          letterSpacing: '0.12em',
                          color: 'var(--color-brown, #73482C)',
                          textTransform: 'uppercase',
                        }}
                      >
                        {ngo.badge || 'SYSTEMS'}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.84rem',
                          fontWeight: 600,
                          color: 'var(--text-muted, #7A7869)',
                        }}
                      >
                        03
                      </span>
                    </div>

                    <h3
                      onClick={() => openProject(ngo.id)}
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: 'var(--text-dark, #11120D)',
                        lineHeight: 1.25,
                        margin: '0 0 10px 0',
                        cursor: 'pointer',
                      }}
                    >
                      {ngo.shortTitle || ngo.title}
                    </h3>

                    <p
                      style={{
                        fontSize: '0.84rem',
                        color: 'var(--text-secondary, #565449)',
                        lineHeight: 1.55,
                        margin: '0 0 14px 0',
                      }}
                    >
                      {ngo.description}
                    </p>

                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '6px',
                        marginBottom: '16px',
                      }}
                    >
                      {ngo.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          style={{
                            backgroundColor: '#F5EFE4',
                            color: '#654B38',
                            padding: '3px 10px',
                            borderRadius: '9999px',
                            fontSize: '0.74rem',
                            fontWeight: 600,
                            border: '1px solid #ECE2D4',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <button
                        onClick={() => openProject(ngo.id)}
                        style={{
                          background: 'none',
                          border: 'none',
                          padding: 0,
                          color: 'var(--color-brown, #73482C)',
                          fontSize: '0.84rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                        }}
                      >
                        <span>View project</span>
                        <ArrowUpRight size={13} />
                      </button>

                      {ngo.liveUrl && (
                        <a
                          href={ngo.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: 'var(--text-dark, #11120D)',
                            fontSize: '0.84rem',
                            fontWeight: 600,
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                          }}
                        >
                          <span>{ngo.liveLabel || 'Live site'}</span>
                          <ArrowUpRight size={13} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 04: PERSONAL PROJECT (Full Width) */}
            {portfolio && (
              <div
                className="editorial-card project-card-horizontal"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '24px',
                  border: '1px solid #ECE3D4',
                  boxShadow: 'var(--shadow-card, 0 4px 24px rgba(17, 18, 13, 0.05))',
                  padding: '22px 28px',
                  display: 'grid',
                  gridTemplateColumns: 'minmax(0, 240px) minmax(0, 1fr) auto',
                  gap: 'clamp(20px, 3vw, 36px)',
                  alignItems: 'center',
                }}
              >
                {/* Left Browser Mockup with Original Picture */}
                <ProjectBrowserFrame
                  project={portfolio}
                  height="150px"
                  onClick={() => openProject(portfolio.id)}
                />

                {/* Center Details */}
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      marginBottom: '6px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        color: 'var(--color-brown, #73482C)',
                        textTransform: 'uppercase',
                      }}
                    >
                      {portfolio.badge || 'PERSONAL PROJECT'}
                    </span>
                  </div>

                  <h3
                    onClick={() => openProject(portfolio.id)}
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: 'var(--text-dark, #11120D)',
                      lineHeight: 1.25,
                      margin: '0 0 8px 0',
                      cursor: 'pointer',
                    }}
                  >
                    {portfolio.shortTitle || portfolio.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.84rem',
                      color: 'var(--text-secondary, #565449)',
                      lineHeight: 1.55,
                      margin: '0 0 12px 0',
                    }}
                  >
                    {portfolio.description}
                  </p>

                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '6px',
                    }}
                  >
                    {portfolio.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        style={{
                          backgroundColor: '#F5EFE4',
                          color: '#654B38',
                          padding: '3px 10px',
                          borderRadius: '9999px',
                          fontSize: '0.74rem',
                          fontWeight: 600,
                          border: '1px solid #ECE2D4',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Action */}
                <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '14px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.84rem',
                      fontWeight: 600,
                      color: 'var(--text-muted, #7A7869)',
                    }}
                  >
                    04
                  </span>
                  <button
                    onClick={() => openProject(portfolio.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      color: 'var(--color-brown, #73482C)',
                      fontSize: '0.86rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <span>View project</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* FILTERED VIEW (When Web Applications, Systems, or Personal is selected) */
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))',
              gap: '24px',
            }}
          >
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="editorial-card project-card-compact"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '24px',
                  border: '1px solid #ECE3D4',
                  boxShadow: 'var(--shadow-card, 0 4px 24px rgba(17, 18, 13, 0.05))',
                  padding: '24px',
                  display: 'grid',
                  gridTemplateColumns: 'minmax(0, 1.05fr) minmax(0, 1.35fr)',
                  gap: '20px',
                  alignItems: 'center',
                }}
              >
                {/* Left Browser Mockup with Original Picture */}
                <ProjectBrowserFrame
                  project={project}
                  height="170px"
                  onClick={() => openProject(project.id)}
                />

                {/* Right Details */}
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '8px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        color: 'var(--color-brown, #73482C)',
                        textTransform: 'uppercase',
                      }}
                    >
                      {project.badge || project.type}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.84rem',
                        fontWeight: 600,
                        color: 'var(--text-muted, #7A7869)',
                      }}
                    >
                      {project.number}
                    </span>
                  </div>

                  <h3
                    onClick={() => openProject(project.id)}
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: 'var(--text-dark, #11120D)',
                      lineHeight: 1.25,
                      margin: '0 0 10px 0',
                      cursor: 'pointer',
                    }}
                  >
                    {project.shortTitle || project.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.84rem',
                      color: 'var(--text-secondary, #565449)',
                      lineHeight: 1.55,
                      margin: '0 0 14px 0',
                    }}
                  >
                    {project.description}
                  </p>

                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '6px',
                      marginBottom: '16px',
                    }}
                  >
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        style={{
                          backgroundColor: '#F5EFE4',
                          color: '#654B38',
                          padding: '3px 10px',
                          borderRadius: '9999px',
                          fontSize: '0.74rem',
                          fontWeight: 600,
                          border: '1px solid #ECE2D4',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <button
                      onClick={() => openProject(project.id)}
                      style={{
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        color: 'var(--color-brown, #73482C)',
                        fontSize: '0.84rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      <span>View project</span>
                      <ArrowUpRight size={13} />
                    </button>

                    {project.liveUrl && project.liveUrl !== '#' && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: 'var(--text-dark, #11120D)',
                          fontSize: '0.84rem',
                          fontWeight: 600,
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                        }}
                      >
                        <span>{project.liveLabel || 'Live site'}</span>
                        <ArrowUpRight size={13} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Section Bottom Footer Row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '36px',
            paddingTop: '20px',
            borderTop: '1px solid rgba(220, 205, 185, 0.4)',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.82rem',
              color: 'var(--text-muted, #7A7869)',
              letterSpacing: '0.02em',
            }}
          >
            — Always learning, always building.
          </span>

          {/* 3 Pagination / Carousel indicator dots */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-brown, #73482C)',
                display: 'inline-block',
              }}
            />
            <span
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                backgroundColor: '#D8CFBD',
                display: 'inline-block',
              }}
            />
            <span
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                backgroundColor: '#D8CFBD',
                display: 'inline-block',
              }}
            />
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        .project-mockup-wrapper:hover .project-mockup-img {
          transform: scale(1.03);
        }

        @media (max-width: 960px) {
          .project-card-featured {
            grid-template-columns: 1fr !important;
          }
          .projects-two-col-grid {
            grid-template-columns: 1fr !important;
          }
          .project-card-horizontal {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 640px) {
          .project-card-compact {
            grid-template-columns: 1fr !important;
          }
          .projects-cursive-note {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
