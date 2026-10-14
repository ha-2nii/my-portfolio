import { ArrowRight, ArrowDown } from 'lucide-react';
import hanaImg from '../assets/hana-hero.jpg';

export default function Hero() {
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
      {/* 50/50 Two-column grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          width: '100%',
          minHeight: '100vh',
        }}
        className="hero-grid"
      >
        {/* Left Column — Text Introduction (50%) */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: 'clamp(100px, 11vw, 150px) clamp(24px, 5vw, 72px) clamp(40px, 6vw, 80px)',
            backgroundColor: '#ffffff',
          }}
          className="hero-text-col"
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
              marginBottom: '20px',
              width: 'fit-content',
            }}
          >
            <span>Hi, I'm Hana Habtamu</span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.8rem)',
              fontWeight: 700,
              lineHeight: 1.14,
              color: 'var(--text-dark)',
              marginBottom: '18px',
              letterSpacing: '-0.02em',
            }}
          >
            Engineering Systems, <br />
            <span className="accent-text">Web & Mobile Apps</span> <br />
            That Deliver Value.
          </h1>

          <p
            style={{
              fontSize: 'clamp(0.96rem, 2.2vw, 1.08rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              maxWidth: '520px',
              marginBottom: '22px',
            }}
          >
            I'm an Information Systems student, system developer, website developer, backend and frontend developer, and mobile application developer passionate about building reliable software systems, web platforms, and mobile apps.
          </p>

          {/* Specialization Role Badges */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              marginBottom: '32px',
            }}
          >
            <span className="skill-tag" style={{ fontSize: '0.78rem' }}>System Developer</span>
            <span className="skill-tag" style={{ fontSize: '0.78rem' }}>Website Developer</span>
            <span className="skill-tag" style={{ fontSize: '0.78rem' }}>Frontend Developer</span>
            <span className="skill-tag" style={{ fontSize: '0.78rem' }}>Backend Developer</span>
            <span className="skill-tag" style={{ fontSize: '0.78rem' }}>Mobile App Developer</span>
          </div>

          {/* Action Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '14px',
              alignItems: 'center',
              marginBottom: '40px',
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

        {/* Right Column — Photo fills exactly 100% of the right half with 0 padding */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            minHeight: '100vh',
            padding: 0,
            margin: 0,
            overflow: 'hidden',
          }}
          className="hero-image-col"
        >
          <img
            src={hanaImg}
            alt="Hana Habtamu - System, Web & Mobile Developer"
            style={{
              width: '100%',
              height: '100%',
              minHeight: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
              display: 'block',
              filter: 'contrast(1.05) brightness(0.97)',
            }}
          />
        </div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            min-height: auto !important;
          }
          .hero-image-col {
            height: clamp(420px, 70vh, 580px) !important;
            min-height: auto !important;
            width: 100% !important;
          }
          .hero-image-col img {
            width: 100% !important;
            height: 100% !important;
            object-fit: cover !important;
            object-position: center 20% !important;
          }
        }
      `}</style>
    </section>
  );
}
