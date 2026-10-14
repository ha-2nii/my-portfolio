import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-subtle)',
        backgroundColor: '#ffffff',
        padding: 'clamp(36px, 4vw, 48px) 0 24px 0',
      }}
    >
      <div className="container">
        {/* 4-Column Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 210px), 1fr))',
            gap: 'clamp(28px, 4vw, 40px)',
            paddingBottom: '30px',
            borderBottom: '1px solid var(--border-subtle)',
          }}
        >
          {/* Column 1: Brand */}
          <div>
            <div style={{ marginBottom: '16px' }}>
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 800,
                  fontSize: '1.2rem',
                  letterSpacing: '0.04em',
                  color: 'var(--text-dark)',
                  lineHeight: 1.2,
                }}
              >
                HANA HABTAMU
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  color: 'var(--accent-purple)',
                  textTransform: 'uppercase',
                }}
              >
                SYSTEM, WEB & MOBILE DEVELOPER
              </div>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.6 }}>
              System developer, website developer, backend & frontend developer, and mobile application developer.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--accent-purple)',
                marginBottom: '18px',
              }}
            >
              QUICK LINKS
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.92rem' }}>
              {['Home', 'About', 'Projects', 'Skills', 'Experience', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  style={{
                    color: 'var(--text-secondary)',
                    transition: 'color var(--transition-fast)',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--accent-purple)')}
                  onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Technologies */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--accent-purple)',
                marginBottom: '18px',
              }}
            >
              TECHNOLOGIES
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
              <span>React</span>
              <span>Laravel</span>
              <span>JavaScript</span>
              <span>HTML & CSS</span>
              <span>MySQL</span>
            </div>
          </div>

          {/* Column 4: Contact Placeholders */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--accent-purple)',
                marginBottom: '18px',
              }}
            >
              CONTACT
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <div>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', display: 'block' }}>
                  EMAIL
                </span>
                <a
                  href="mailto:hanahabtamu735@gmail.com"
                  style={{ color: 'var(--text-dark)', fontWeight: 500 }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--accent-purple)')}
                  onMouseLeave={(e) => (e.target.style.color = 'var(--text-dark)')}
                >
                  hanahabtamu735@gmail.com
                </a>
              </div>

              <div>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', display: 'block' }}>
                  PHONE
                </span>
                <span>+251 900 000 000</span>
              </div>

              <div style={{ display: 'flex', gap: '10px', marginTop: '6px' }}>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-icon"
                  style={{ width: '36px', height: '36px' }}
                  aria-label="GitHub Profile"
                >
                  <GithubIcon size={16} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-icon"
                  style={{ width: '36px', height: '36px' }}
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Back to Top */}
        <div
          style={{
            paddingTop: '20px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
            fontSize: '0.85rem',
            color: 'var(--text-muted)',
          }}
        >
          <div>
            © 2026 Hana Habtamu. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="btn-icon"
            style={{
              backgroundColor: 'var(--bg-lavender)',
              border: '1px solid var(--accent-lavender-border)',
              color: 'var(--accent-purple)',
            }}
            title="Back to Top"
            aria-label="Back to Top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
