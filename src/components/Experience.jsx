import { useState } from 'react';
import { Compass, BookOpen, Hammer, TrendingUp, Trophy, Award, ExternalLink, X } from 'lucide-react';
import hackathonImg from '../assets/hackathon.jpg';

export default function Experience() {
  const [showPhotoModal, setShowPhotoModal] = useState(false);

  const timeline = [
    {
      badge: 'Award • 2nd Place 🏆',
      title: 'Cursor Hackathon Ambo University',
      subtitle: 'Competition Winner & Certificate of Achievement',
      description:
        'Won 2nd place and certificate of achievement in the competitive Cursor Hackathon at Ambo University. Collaborated with a team of developers to architect, prototype, and pitch innovative software solutions under rapid hackathon timeframes.',
    },
    {
      badge: 'Present',
      title: 'Full-Stack Development',
      subtitle: 'Management Systems & Web Applications',
      description:
        'Actively designing, developing, and deploying practical management information systems and database-driven web applications using React, Laravel, and MySQL.',
    },
    {
      badge: 'Current',
      title: 'Information Systems Student',
      subtitle: 'Ambo University — Weliso Campus (3rd Year)',
      description:
        'Pursuing a BSc in Information Systems with strong focus on database management, systems analysis & design, software engineering methodologies, and user experience.',
    },
    {
      badge: '1+ Year',
      title: 'Web Development Experience',
      subtitle: 'Hands-on Full-Stack & UI Practice',
      description:
        'Over a year of dedicated practical experience building real-world web applications, structuring APIs, creating responsive interfaces, and writing clean, maintainable code.',
    },
  ];

  const personalValues = [
    {
      icon: <BookOpen size={20} color="var(--accent-purple)" />,
      title: 'LEARNING',
      description: 'I enjoy learning new technologies and continuously improving my skills.',
    },
    {
      icon: <Compass size={20} color="var(--accent-purple)" />,
      title: 'EXPLORING',
      description: "I'm curious about how things work and enjoy exploring new ideas.",
    },
    {
      icon: <Hammer size={20} color="var(--accent-purple)" />,
      title: 'CREATING',
      description: 'I enjoy turning ideas into functional websites and systems.',
    },
    {
      icon: <TrendingUp size={20} color="var(--accent-purple)" />,
      title: 'IMPROVING',
      description: "I'm continuously working on becoming a better developer and building better solutions.",
    },
  ];

  return (
    <section id="experience" className="section" style={{ backgroundColor: 'var(--bg-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">DEVELOPMENT JOURNEY</span>
          <h2 className="section-title">
            Experience & <span className="accent-text">Milestones</span>
          </h2>
          <p className="section-subtitle">
            My path as an Information Systems student and hands-on full-stack developer.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div
          style={{
            maxWidth: '780px',
            margin: '0 auto 45px auto',
            position: 'relative',
          }}
          className="timeline-container"
        >
          {/* Subtle Vertical Line */}
          <div
            className="timeline-track"
            style={{
              position: 'absolute',
              top: '16px',
              bottom: '16px',
              left: '20px',
              width: '2px',
              backgroundColor: 'var(--accent-lavender-border)',
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(24px, 4vw, 36px)' }}>
            {timeline.map((item, idx) => (
              <div
                key={idx}
                className="timeline-item"
                style={{
                  position: 'relative',
                  paddingLeft: '56px',
                }}
              >
                {/* Timeline Dot */}
                <div
                  className="timeline-dot"
                  style={{
                    position: 'absolute',
                    left: '12px',
                    top: '16px',
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    backgroundColor: '#ffffff',
                    border: '3px solid var(--accent-purple)',
                    boxShadow: '0 0 0 4px var(--accent-lavender)',
                  }}
                />

                {/* Timeline Card */}
                <div
                  className="editorial-card timeline-card"
                  style={{
                    padding: 'clamp(20px, 3.5vw, 28px) clamp(16px, 3.5vw, 30px)',
                    backgroundColor: '#ffffff',
                    borderRadius: 'var(--radius-lg)',
                  }}
                >
                  <div
                    style={{
                      display: 'inline-flex',
                      padding: '4px 12px',
                      borderRadius: 'var(--radius-full)',
                      backgroundColor: 'var(--bg-lavender)',
                      border: '1px solid var(--accent-lavender-border)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      color: 'var(--accent-purple)',
                      marginBottom: '12px',
                    }}
                  >
                    {item.badge}
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)',
                      fontWeight: 700,
                      color: 'var(--text-dark)',
                      marginBottom: '4px',
                    }}
                  >
                    {item.title}
                  </h3>

                  <div
                    style={{
                      fontSize: '0.94rem',
                      fontWeight: 600,
                      color: 'var(--accent-purple)',
                      marginBottom: '12px',
                    }}
                  >
                    {item.subtitle}
                  </div>

                  <p
                    style={{
                      fontSize: '0.94rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hackathon Award Spotlight Showcase */}
        <div
          className="editorial-card"
          style={{
            maxWidth: '840px',
            margin: '0 auto 52px auto',
            padding: 'clamp(20px, 3.5vw, 32px)',
            backgroundColor: '#ffffff',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--accent-lavender-border)',
            boxShadow: 'var(--shadow-card)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: 'clamp(20px, 3.5vw, 32px)',
            alignItems: 'center',
          }}
        >
          {/* Photo Preview Frame */}
          <div
            style={{
              position: 'relative',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(17, 18, 13, 0.08)',
              border: '1px solid var(--border-subtle)',
              backgroundColor: 'var(--bg-lavender)',
              cursor: 'pointer',
            }}
            onClick={() => setShowPhotoModal(true)}
            title="Click to view full hackathon photo"
          >
            <img
              src={hackathonImg}
              alt="Hana Habtamu - 2nd Place Cursor Hackathon Ambo University"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                objectFit: 'cover',
                maxHeight: '300px',
                transition: 'transform var(--transition-smooth)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
            {/* Award Floating Badge */}
            <div
              style={{
                position: 'absolute',
                top: '12px',
                left: '12px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '5px 12px',
                backgroundColor: 'rgba(255, 255, 255, 0.94)',
                backdropFilter: 'blur(8px)',
                borderRadius: 'var(--radius-full)',
                border: '1px solid var(--border-light)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                fontWeight: 700,
                color: 'var(--accent-purple)',
              }}
            >
              <Trophy size={14} color="#D97706" />
              <span>2nd Place Award</span>
            </div>
          </div>

          {/* Award Narrative Details */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <span
                style={{
                  padding: '3px 10px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'rgba(217, 119, 6, 0.12)',
                  color: '#B45309',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  border: '1px solid rgba(217, 119, 6, 0.28)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                }}
              >
                <Award size={13} />
                <span>HACKATHON WINNER</span>
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.74rem',
                  color: 'var(--text-muted)',
                }}
              >
                Ambo University
              </span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.3rem, 2.8vw, 1.7rem)',
                color: 'var(--text-dark)',
                marginBottom: '10px',
                lineHeight: 1.25,
              }}
            >
              2nd Place Winner — <br />
              <span className="accent-text">Cursor Hackathon Ambo</span>
            </h3>

            <p
              style={{
                fontSize: '0.92rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                marginBottom: '16px',
              }}
            >
              Honored with 2nd place and certificate of achievement in the competitive Cursor Hackathon at Ambo University. Teamed up to design, engineer, and pitch practical software solutions under intense hackathon deadlines, showcasing rapid prototyping, problem solving, and modern development workflows.
            </p>

            {/* Credential Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '18px' }}>
              <span className="skill-tag" style={{ fontSize: '0.72rem', padding: '3px 9px' }}>Certificate of Achievement</span>
              <span className="skill-tag" style={{ fontSize: '0.72rem', padding: '3px 9px' }}>Rapid Software Engineering</span>
              <span className="skill-tag" style={{ fontSize: '0.72rem', padding: '3px 9px' }}>Team Collaboration</span>
            </div>

            <button
              onClick={() => setShowPhotoModal(true)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--accent-purple)',
                fontWeight: 600,
                fontSize: '0.86rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer',
                padding: 0,
                transition: 'gap var(--transition-fast)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.gap = '9px')}
              onMouseLeave={(e) => (e.currentTarget.style.gap = '6px')}
            >
              <ExternalLink size={14} />
              <span>View Full Award Photo</span>
            </button>
          </div>
        </div>

        {/* Personal Values Area */}
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <span className="section-eyebrow">CORE MINDSET</span>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.6rem, 3.5vw, 2rem)',
                color: 'var(--text-dark)',
              }}
            >
              Guiding <span className="accent-text">Personal Values</span>
            </h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 210px), 1fr))',
              gap: 'clamp(16px, 2.5vw, 20px)',
            }}
          >
            {personalValues.map((val, vIdx) => (
              <div
                key={vIdx}
                className="editorial-card"
                style={{
                  padding: 'clamp(20px, 3.5vw, 24px) clamp(16px, 3vw, 20px)',
                  backgroundColor: '#ffffff',
                  borderRadius: 'var(--radius-md)',
                  textAlign: 'left',
                }}
              >
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--bg-lavender)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px',
                  }}
                >
                  {val.icon}
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    color: 'var(--accent-purple)',
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                  }}
                >
                  {val.title}
                </div>

                <p
                  style={{
                    fontSize: '0.88rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.55,
                    margin: 0,
                  }}
                >
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hackathon Photo Full Lightbox Modal */}
      {showPhotoModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            backgroundColor: 'rgba(17, 18, 13, 0.75)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'clamp(14px, 3vw, 28px)',
          }}
          onClick={() => setShowPhotoModal(false)}
        >
          <div
            className="editorial-card"
            style={{
              maxWidth: '820px',
              width: '100%',
              backgroundColor: '#ffffff',
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-hover)',
              position: 'relative',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              style={{
                padding: '14px 20px',
                borderBottom: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: 'var(--bg-lavender)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Trophy size={16} color="#D97706" />
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    color: 'var(--text-dark)',
                  }}
                >
                  Cursor Hackathon Ambo • 2nd Place Winner
                </span>
              </div>
              <button
                onClick={() => setShowPhotoModal(false)}
                aria-label="Close photo"
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-dark)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Photo Viewport */}
            <div style={{ backgroundColor: '#11120D', maxHeight: '72vh', overflow: 'hidden' }}>
              <img
                src={hackathonImg}
                alt="Cursor Hackathon Ambo University 2nd Place Winners"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '72vh',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </div>

            {/* Modal Footer Caption */}
            <div
              style={{
                padding: '14px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '10px',
                backgroundColor: '#ffffff',
              }}
            >
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', margin: 0 }}>
                Hana Habtamu and fellow winners receiving certificates and recognition at Ambo University.
              </p>
              <button
                onClick={() => setShowPhotoModal(false)}
                className="btn btn-secondary"
                style={{ padding: '6px 16px', fontSize: '0.82rem', minHeight: '34px' }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 600px) {
          .timeline-track {
            left: 9px !important;
          }
          .timeline-item {
            padding-left: 32px !important;
          }
          .timeline-dot {
            left: 2px !important;
            width: 16px !important;
            height: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
