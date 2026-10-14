import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      const sections = ['home', 'about', 'projects', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 130;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 880 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: 'all 0.3s ease',
          backgroundColor: 'rgba(255, 251, 244, 0.94)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: isScrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
          padding: isScrolled ? '12px 0' : '18px 0',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
          }}
        >
          {/* Logo & Subtitle */}
          <a
            href="#home"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              textDecoration: 'none',
              flexShrink: 1,
              minWidth: 0,
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 800,
                fontSize: 'clamp(0.96rem, 3.8vw, 1.15rem)',
                letterSpacing: '0.04em',
                color: 'var(--text-dark)',
                lineHeight: 1.15,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              HANA HABTAMU
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(0.62rem, 2.2vw, 0.72rem)',
                fontWeight: 600,
                letterSpacing: '0.12em',
                color: 'var(--accent-purple)',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
              }}
            >
              SYSTEM, WEB & MOBILE DEVELOPER
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav
            className="desktop-nav"
            style={{
              display: 'none',
              alignItems: 'center',
              gap: 'clamp(20px, 2.5vw, 36px)',
            }}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  style={{
                    fontSize: '0.92rem',
                    fontWeight: 500,
                    color: isActive ? 'var(--accent-purple)' : 'var(--text-secondary)',
                    transition: 'color var(--transition-fast)',
                    position: 'relative',
                    padding: '6px 0',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-purple)')}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = isActive ? 'var(--accent-purple)' : 'var(--text-secondary)')
                  }
                >
                  {link.name}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '2px',
                        backgroundColor: 'var(--accent-purple)',
                        borderRadius: '2px',
                      }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="desktop-cta" style={{ display: 'none', alignItems: 'center' }}>
            <a
              href="#contact"
              className="btn btn-primary"
              style={{
                padding: '9px 20px',
                fontSize: '0.88rem',
              }}
            >
              <span>Let's Talk</span>
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="mobile-toggle"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '42px',
              height: '42px',
              borderRadius: 'var(--radius-sm)',
              background: 'var(--bg-lavender)',
              border: '1px solid var(--accent-lavender-border)',
              color: 'var(--text-dark)',
              cursor: 'pointer',
              flexShrink: 0,
            }}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        {isMobileMenuOpen && (
          <div
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: 'var(--bg-main)',
              borderBottom: '1px solid var(--border-light)',
              boxShadow: 'var(--shadow-card)',
              padding: '20px clamp(16px, 4vw, 28px) 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              maxHeight: 'calc(100vh - 75px)',
              overflowY: 'auto',
              animation: 'drawerSlideDown 0.25s ease-out',
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: activeSection === link.href.substring(1) ? 'var(--accent-purple)' : 'var(--text-dark)',
                  padding: '12px 16px',
                  borderRadius: 'var(--radius-sm)',
                  background:
                    activeSection === link.href.substring(1) ? 'var(--bg-lavender)' : 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span>{link.name}</span>
                {activeSection === link.href.substring(1) && (
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--accent-purple)',
                    }}
                  />
                )}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn btn-primary"
              style={{ width: '100%', marginTop: '8px', minHeight: '44px' }}
            >
              <span>Let's Talk</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        )}

        <style>{`
          @keyframes drawerSlideDown {
            from {
              opacity: 0;
              transform: translateY(-8px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @media (min-width: 880px) {
            .desktop-nav { display: flex !important; }
            .desktop-cta { display: flex !important; }
            .mobile-toggle { display: none !important; }
          }
        `}</style>
      </header>

      {/* Backdrop for mobile drawer */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99,
            backgroundColor: 'rgba(17, 18, 13, 0.45)',
            backdropFilter: 'blur(3px)',
            WebkitBackdropFilter: 'blur(3px)',
          }}
          aria-hidden="true"
        />
      )}
    </>
  );
}
