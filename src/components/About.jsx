import workspaceImg from '../assets/workspace.jpg';
import { ArrowDown, GraduationCap, MapPin, Sparkles } from 'lucide-react';

export default function About() {
  const stats = [
    { value: '1+', label: 'YEAR EXPERIENCE' },
    { value: 'MULTIPLE', label: 'WEB PROJECTS' },
    { value: 'FULL-STACK', label: 'DEVELOPMENT' },
    { value: 'CONTINUOUS', label: 'LEARNING' },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        {/* Main 2-Column About Narrative */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '50px',
            alignItems: 'center',
            marginBottom: '45px',
          }}
        >
          {/* Left Text Narrative */}
          <div>
            <span className="section-eyebrow">ABOUT ME</span>
            <h2
              style={{
                fontSize: 'clamp(2.4rem, 4.5vw, 3.4rem)',
                marginBottom: '26px',
                color: 'var(--text-dark)',
                lineHeight: 1.15,
              }}
            >
              Turning Ideas Into <br />
              <span className="accent-text">Real-World Solutions.</span>
            </h2>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '18px',
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.75,
                marginBottom: '36px',
              }}
            >
              <p>
                I'm <strong>Hana Habtamu</strong>, a third-year Information Systems student at Ambo University, Weliso Campus, and a full-stack developer with practical experience building web applications and management systems.
              </p>
              <p>
                I enjoy coding, exploring new technologies, and learning how things work. My development journey has given me experience across both frontend and backend development, while frontend development has become a particular interest because I enjoy designing interfaces and creating better user experiences.
              </p>
              <p>
                I believe good software isn't only about making something work — it's also about making it understandable, useful, responsive and enjoyable to use.
              </p>
            </div>

            {/* University & Location Badges */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
                marginBottom: '36px',
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 16px',
                  background: 'var(--bg-lavender)',
                  border: '1px solid var(--accent-lavender-border)',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'var(--accent-purple)',
                }}
              >
                <GraduationCap size={16} />
                <span>BSc in Information Systems • 3rd Year</span>
              </div>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 16px',
                  background: 'var(--bg-subtle)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                }}
              >
                <MapPin size={16} color="var(--accent-purple)" />
                <span>Ambo University, Weliso Campus</span>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <a
                href="#contact"
                className="btn btn-secondary"
                style={{
                  gap: '8px',
                  padding: '13px 26px',
                }}
              >
                <span>Download CV</span>
                <ArrowDown size={16} color="var(--accent-purple)" />
              </a>
            </div>
          </div>

          {/* Right Workspace Visual */}
          <div style={{ position: 'relative' }}>
            {/* Subtle decorative offset border box */}
            <div
              style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                right: '-16px',
                bottom: '-16px',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--accent-lavender-border)',
                backgroundColor: 'var(--bg-lavender-light)',
                zIndex: 0,
              }}
            />

            <div
              style={{
                position: 'relative',
                zIndex: 1,
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-card)',
                border: '1px solid var(--border-subtle)',
                backgroundColor: '#ffffff',
              }}
            >
              <img
                src={workspaceImg}
                alt="Hana Habtamu Development Workspace"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>

            {/* Small floating testimonial or design quote inspired by reference */}
            <div
              className="editorial-card"
              style={{
                position: 'absolute',
                bottom: '-20px',
                left: '-20px',
                zIndex: 2,
                padding: '18px 24px',
                maxWidth: '280px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: '#ffffff',
                border: '1px solid var(--accent-lavender-border)',
                boxShadow: 'var(--shadow-hover)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <Sparkles size={16} color="var(--accent-purple)" />
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: 'var(--accent-purple)',
                    textTransform: 'uppercase',
                  }}
                >
                  Philosophy
                </span>
              </div>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-dark)', lineHeight: 1.5, margin: 0 }}>
                "Good software is understandable, responsive and enjoyable to use."
              </p>
            </div>
          </div>
        </div>

        {/* Clean Editorial Statistics Area */}
        <div
          style={{
            borderTop: '1px solid var(--border-subtle)',
            borderBottom: '1px solid var(--border-subtle)',
            padding: '32px 0',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '30px',
          }}
        >
          {stats.map((item, idx) => (
            <div key={idx} style={{ textAlign: 'center', padding: '0 16px' }}>
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2.6rem',
                  fontWeight: 700,
                  color: 'var(--text-dark)',
                  lineHeight: 1.1,
                  marginBottom: '8px',
                }}
              >
                {item.value}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  color: 'var(--accent-purple)',
                  textTransform: 'uppercase',
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
