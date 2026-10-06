import { Compass, BookOpen, Hammer, TrendingUp } from 'lucide-react';

export default function Experience() {
  const timeline = [
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
        >
          {/* Subtle Vertical Line */}
          <div
            style={{
              position: 'absolute',
              top: '16px',
              bottom: '16px',
              left: '20px',
              width: '2px',
              backgroundColor: 'var(--accent-lavender-border)',
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
            {timeline.map((item, idx) => (
              <div
                key={idx}
                style={{
                  position: 'relative',
                  paddingLeft: '56px',
                }}
              >
                {/* Timeline Dot */}
                <div
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
                  className="editorial-card"
                  style={{
                    padding: '28px 30px',
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
                      fontSize: '1.25rem',
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

        {/* Personal Values Area */}
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span className="section-eyebrow">CORE MINDSET</span>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.9rem',
                color: 'var(--text-dark)',
              }}
            >
              Guiding <span className="accent-text">Personal Values</span>
            </h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '20px',
            }}
          >
            {personalValues.map((val, vIdx) => (
              <div
                key={vIdx}
                className="editorial-card"
                style={{
                  padding: '24px 20px',
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
    </section>
  );
}
