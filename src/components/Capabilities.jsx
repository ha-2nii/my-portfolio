import { Layers, Globe, Server, Smartphone } from 'lucide-react';

export default function Capabilities() {
  const capabilities = [
    {
      number: '01',
      title: 'SYSTEM DEVELOPMENT',
      description:
        'Architecting robust information systems, organizational databases, and automated management software.',
      icon: <Layers size={24} color="var(--accent-purple)" />,
    },
    {
      number: '02',
      title: 'WEBSITE & FRONTEND',
      description:
        'Building modern, responsive, and high-performance web applications using React, JavaScript, HTML5 and CSS3.',
      icon: <Globe size={24} color="var(--accent-purple)" />,
    },
    {
      number: '03',
      title: 'BACKEND DEVELOPMENT',
      description:
        'Developing server-side architecture, secure business logic, and RESTful APIs using Laravel, PHP and MySQL.',
      icon: <Server size={24} color="var(--accent-purple)" />,
    },
    {
      number: '04',
      title: 'MOBILE APP DEVELOPMENT',
      description:
        'Engineering intuitive, touch-friendly mobile application interfaces and responsive cross-device experiences.',
      icon: <Smartphone size={24} color="var(--accent-purple)" />,
    },
  ];

  return (
    <section id="capabilities" className="section" style={{ backgroundColor: 'var(--bg-subtle)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">CORE CAPABILITIES</span>
          <h2 className="section-title">
            Balanced Expertise in <span className="accent-text">Design & Engineering</span>
          </h2>
          <p className="section-subtitle">
            Combining structured systems thinking with an eye for clean visual organization and user-friendly digital products.
          </p>
        </div>

        {/* 4 Capability Cards */}
        <div className="grid-cols-4-responsive">
          {capabilities.map((cap, index) => (
            <div
              key={index}
              className="editorial-card"
              style={{
                padding: 'clamp(24px, 4.5vw, 34px) clamp(18px, 4vw, 28px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: 'var(--radius-lg)',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '24px',
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--bg-lavender)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid var(--accent-lavender-border)',
                    }}
                  >
                    {cap.icon}
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
                      color: 'var(--text-muted)',
                      fontWeight: 600,
                    }}
                  >
                    {cap.number}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    color: 'var(--text-dark)',
                    marginBottom: '12px',
                    textTransform: 'uppercase',
                  }}
                >
                  {cap.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.94rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                  }}
                >
                  {cap.description}
                </p>
              </div>

              <div
                style={{
                  marginTop: '24px',
                  height: '2px',
                  width: '32px',
                  backgroundColor: 'var(--accent-lavender-border)',
                  transition: 'width var(--transition-fast), background-color var(--transition-fast)',
                }}
                className="card-line"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
