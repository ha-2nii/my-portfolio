import { Layout, Server, Database, Lightbulb } from 'lucide-react';

export default function Capabilities() {
  const capabilities = [
    {
      number: '01',
      title: 'FRONTEND DEVELOPMENT',
      description:
        'Building responsive and interactive interfaces using React, JavaScript, HTML and CSS.',
      icon: <Layout size={24} color="var(--accent-purple)" />,
    },
    {
      number: '02',
      title: 'BACKEND DEVELOPMENT',
      description:
        'Developing application logic, APIs and server-side systems using Laravel and PHP.',
      icon: <Server size={24} color="var(--accent-purple)" />,
    },
    {
      number: '03',
      title: 'DATABASE MANAGEMENT',
      description:
        'Working with databases to organize, store and manage application data.',
      icon: <Database size={24} color="var(--accent-purple)" />,
    },
    {
      number: '04',
      title: 'PROBLEM SOLVING',
      description:
        'Turning real-world requirements into practical software solutions.',
      icon: <Lightbulb size={24} color="var(--accent-purple)" />,
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
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px',
          }}
        >
          {capabilities.map((cap, index) => (
            <div
              key={index}
              className="editorial-card"
              style={{
                padding: '34px 28px',
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
