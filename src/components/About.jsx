import workspaceImg from '../assets/workspace.jpg';
import { ArrowDown, GraduationCap, MapPin, Trophy, FileText, ExternalLink } from 'lucide-react';

export default function About() {
  const stats = [
    { value: '2ND', label: 'HACKATHON WINNER' },
    { value: '1+ YR', label: 'DEV EXPERIENCE' },
    { value: 'MULTIPLE', label: 'WEB & SYSTEM PROJECTS' },
    { value: '3RD YR', label: 'INFO SYSTEMS' },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        {/* Main 2-Column About Narrative */}
        <div
          className="about-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: 'clamp(32px, 5vw, 56px)',
            alignItems: 'center',
            marginBottom: '45px',
          }}
        >
          {/* Left Text Narrative */}
          <div>
            <span className="section-eyebrow">ABOUT ME</span>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
                marginBottom: '22px',
                color: 'var(--text-dark)',
                lineHeight: 1.16,
              }}
            >
              Turning Ideas Into <br />
              <span className="accent-text">Real-World Solutions.</span>
            </h2>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                fontSize: 'clamp(0.96rem, 2vw, 1.05rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.72,
                marginBottom: '32px',
              }}
            >
              <p>
                I'm <strong>Hana Habtamu</strong>, a third-year Information Systems student at Ambo University, Weliso Campus. As a <strong>system developer, website developer, backend and frontend developer, and mobile application developer</strong>, I build reliable software architectures, engaging web platforms, and practical digital solutions.
              </p>
              <p>
                My development experience spans the full lifecycle of modern software: architecting organizational management information systems, crafting intuitive frontend interfaces with React, designing secure backend APIs with Laravel and PHP, and developing user-friendly mobile applications.
              </p>
              <p>
                I believe good software isn't only about making code work — it's about solving real-world operational problems, optimizing performance, and making digital systems intuitive and enjoyable for users.
              </p>
            </div>

            {/* University & Location Badges */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
                marginBottom: '32px',
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
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  color: 'var(--accent-purple)',
                }}
              >
                <Trophy size={16} color="#D97706" />
                <span>2nd Place Winner • Cursor Hackathon Ambo</span>
              </div>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 16px',
                  background: 'var(--bg-lavender)',
                  border: '1px solid var(--accent-lavender-border)',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.84rem',
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
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                }}
              >
                <MapPin size={16} color="var(--accent-purple)" />
                <span>Ambo University, Weliso Campus</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
              <a
                href="/Hana_Habtamu_CV.pdf"
                download="Hana_Habtamu_CV.pdf"
                className="btn btn-primary"
                style={{
                  gap: '8px',
                  padding: '12px 24px',
                  textDecoration: 'none',
                }}
              >
                <ArrowDown size={16} />
                <span>Download CV</span>
              </a>

              <a
                href="/Hana_Habtamu_CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
                style={{
                  gap: '8px',
                  padding: '12px 20px',
                  textDecoration: 'none',
                }}
              >
                <FileText size={16} />
                <span>View CV</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>

          {/* Right Workspace Visual */}
          <div style={{ position: 'relative' }} className="about-visual-col">
            {/* Subtle decorative offset border box */}
            <div
              className="about-offset-border"
              style={{
                position: 'absolute',
                top: '14px',
                left: '14px',
                right: '-14px',
                bottom: '-14px',
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
                  height: 'auto',
                  maxHeight: '520px',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  display: 'block',
                }}
              />
            </div>
          </div>
        </div>

        {/* Clean Editorial Statistics Area */}
        <div
          className="grid-stats-responsive"
          style={{
            borderTop: '1px solid var(--border-subtle)',
            borderBottom: '1px solid var(--border-subtle)',
            padding: 'clamp(24px, 4vw, 36px) 0',
          }}
        >
          {stats.map((item, idx) => (
            <div key={idx} style={{ textAlign: 'center', padding: '0 8px' }}>
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2rem, 4.5vw, 2.6rem)',
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
                  fontSize: 'clamp(0.72rem, 1.8vw, 0.78rem)',
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

      <style>{`
        @media (max-width: 880px) {
          .about-offset-border {
            right: 0 !important;
            bottom: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
