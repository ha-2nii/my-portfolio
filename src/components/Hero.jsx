import profileImg from '../assets/profile.jpg';
import { ArrowRight, ArrowDown } from 'lucide-react';

export default function Hero() {
  const floatingSkills = [
    { name: 'React', top: '18%', left: '8%', delay: '0s' },
    { name: 'Laravel', top: '30%', right: '6%', delay: '1.2s' },
    { name: 'JavaScript', bottom: '28%', left: '6%', delay: '2.4s' },
    { name: 'HTML & CSS', bottom: '14%', right: '8%', delay: '3.6s' },
  ];

  return (
    <section
      id="home"
      style={{
        paddingTop: '0',
        paddingBottom: '0',
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'stretch',
        overflow: 'hidden',
      }}
    >
      {/* Full viewport grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          width: '100%',
          minHeight: '100vh',
        }}
        className="hero-grid"
      >
        {/* Left Column — Text Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: 'clamp(120px, 14vw, 170px) clamp(24px, 5vw, 80px) clamp(60px, 8vw, 100px)',
          }}
        >
          {/* Eyebrow Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              backgroundColor: 'var(--bg-lavender)',
              border: '1px solid var(--accent-lavender-border)',
              borderRadius: 'var(--radius-full)',
              color: 'var(--accent-purple)',
              fontSize: '0.85rem',
              fontWeight: 600,
              marginBottom: '26px',
              width: 'fit-content',
            }}
          >
            <span>Hi, I'm Hana Habtamu 👋</span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.6rem, 4.5vw, 4rem)',
              fontWeight: 700,
              lineHeight: 1.12,
              color: 'var(--text-dark)',
              marginBottom: '22px',
              letterSpacing: '-0.02em',
            }}
          >
            Building Modern <br />
            <span className="accent-text">Web Experiences</span> <br />
            That Make an Impact.
          </h1>

          <p
            style={{
              fontSize: '1.08rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              maxWidth: '480px',
              marginBottom: '36px',
            }}
          >
            I'm an Information Systems student and full-stack developer passionate about creating useful, responsive and user-friendly web applications.
          </p>

          {/* Action Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              alignItems: 'center',
              marginBottom: '48px',
            }}
          >
            <a href="#projects" className="btn btn-primary">
              <span>View My Work</span>
              <ArrowRight size={17} />
            </a>

            <a href="#about" className="btn btn-secondary">
              <span>About Me</span>
            </a>
          </div>

          {/* Scroll Down Indicator */}
          <div>
            <a href="#capabilities" className="scroll-indicator">
              <ArrowDown size={14} color="var(--accent-purple)" />
              <span>SCROLL DOWN</span>
            </a>
          </div>
        </div>

        {/* Right Column — Full-Height Photo, starts below navbar */}
        <div
          style={{
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: 'var(--bg-lavender)',
            display: 'flex',
            alignItems: 'stretch',
            justifyContent: 'center',
            paddingTop: '80px',
          }}
          className="hero-image-col"
        >
          {/* Lavender background fill */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(160deg, #e9e2fb 0%, #f0ecfd 50%, #f8f6ff 100%)',
              zIndex: 0,
            }}
          />

          {/* Profile Image — fills full column height */}
          <img
            src={profileImg}
            alt="Hana Habtamu — Full-Stack Developer"
            style={{
              position: 'relative',
              zIndex: 1,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 10%',
              display: 'block',
              mixBlendMode: 'multiply',
              filter: 'contrast(1.04) brightness(1.02)',
            }}
          />

          {/* Bottom soft fade so image blends into white below */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '140px',
              background: 'linear-gradient(to top, var(--bg-lavender) 0%, transparent 100%)',
              zIndex: 2,
              pointerEvents: 'none',
            }}
          />

          {/* Floating skill pills */}
          {floatingSkills.map((skill, index) => (
            <div
              key={index}
              className="floating-pill"
              style={{
                top: skill.top,
                bottom: skill.bottom,
                left: skill.left,
                right: skill.right,
                animationDelay: skill.delay,
                zIndex: 3,
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent-purple)',
                  flexShrink: 0,
                }}
              />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile responsive override */}
      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            min-height: auto !important;
          }
          .hero-image-col {
            height: 55vw !important;
            min-height: 280px !important;
            max-height: 420px !important;
            order: -1;
          }
        }
      `}</style>
    </section>
  );
}
