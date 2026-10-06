import { skillGroups } from '../data/skills';
import { Layout, Server, Database, Wrench, Check } from 'lucide-react';

const categoryIcons = {
  'Frontend Development': <Layout size={20} color="var(--accent-purple)" />,
  'Backend Development': <Server size={20} color="var(--accent-purple)" />,
  'Database Management': <Database size={20} color="var(--accent-purple)" />,
  'Tools & Practices': <Wrench size={20} color="var(--accent-purple)" />,
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">TECHNICAL TOOLKIT</span>
          <h2 className="section-title">
            Skills & <span className="accent-text">Technologies</span>
          </h2>
          <p className="section-subtitle">
            Core technologies and tools I utilize to design, build, and maintain full-stack web applications.
          </p>
        </div>

        {/* Skill Groups Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '28px',
          }}
        >
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="editorial-card"
              style={{
                padding: '32px 26px',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--bg-lavender)',
                      border: '1px solid var(--accent-lavender-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {categoryIcons[group.category]}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '1.05rem',
                        fontWeight: 700,
                        color: 'var(--text-dark)',
                      }}
                    >
                      {group.category}
                    </h3>
                  </div>
                </div>

                <p
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.5,
                    marginBottom: '22px',
                  }}
                >
                  {group.subtitle}
                </p>

                {/* Skills list */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {group.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      style={{
                        padding: '12px 14px',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: 'var(--bg-lavender-light)',
                        border: '1px solid var(--border-subtle)',
                        transition: 'border-color var(--transition-fast)',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginBottom: '4px',
                        }}
                      >
                        <span
                          style={{
                            fontWeight: 700,
                            fontSize: '0.94rem',
                            color: 'var(--text-dark)',
                          }}
                        >
                          {skill.name}
                        </span>
                        <Check size={14} color="var(--accent-purple)" />
                      </div>
                      <p
                        style={{
                          fontSize: '0.82rem',
                          color: 'var(--text-muted)',
                          lineHeight: 1.45,
                          margin: 0,
                        }}
                      >
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
