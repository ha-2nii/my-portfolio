import { useState } from 'react';
import { Mail, Phone, ArrowUpRight, Copy, Check, Send, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const placeholderEmail = 'hanahabtamu735@gmail.com';
  const phoneNumber = '+251703966240';
  const formattedPhone = '+251 703 966 240';

  const handleCopy = () => {
    navigator.clipboard.writeText(placeholderEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phoneNumber);
    setPhoneCopied(true);
    setTimeout(() => setPhoneCopied(false), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        {/* Editorial Collaboration Banner */}
        <div
          style={{
            background: 'linear-gradient(135deg, #F3ECE0 0%, #E9E1D0 50%, #FFFBF4 100%)',
            border: '1px solid var(--accent-lavender-border)',
            borderRadius: 'var(--radius-xl)',
            padding: 'clamp(28px, 6vw, 48px) clamp(16px, 4vw, 32px)',
            textAlign: 'center',
            marginBottom: '40px',
            boxShadow: 'var(--shadow-card)',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              fontWeight: 700,
              color: 'var(--accent-purple)',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              marginBottom: '12px',
            }}
          >
            <Sparkles size={16} />
            <span>COLLABORATION & OPPORTUNITIES</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.8rem, 4.5vw, 3.2rem)',
              color: 'var(--text-dark)',
              marginBottom: '12px',
            }}
          >
            Have a project in mind?
          </h2>

          <p
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
              color: 'var(--text-secondary)',
              maxWidth: '520px',
              margin: '0 auto 28px auto',
              lineHeight: 1.6,
            }}
          >
            Let's create something useful together.
          </p>

          <a
            href="mailto:hanahabtamu735@gmail.com"
            className="btn btn-primary"
            style={{
              padding: '13px 30px',
              fontSize: '0.96rem',
            }}
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={18} />
          </a>
        </div>

        {/* Contact Form & Placeholder Details Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: 'clamp(28px, 4vw, 40px)',
            alignItems: 'flex-start',
          }}
        >
          {/* Left Column: Direct Outreach & Social Placeholders */}
          <div>
            <span className="section-eyebrow">GET IN TOUCH</span>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.6rem, 3.5vw, 2rem)',
                color: 'var(--text-dark)',
                marginBottom: '14px',
              }}
            >
              Start a Conversation
            </h3>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '24px' }}>
              Whether you want to discuss full-stack web applications, front-end design, or prospective opportunities, I would love to connect.
            </p>

            {/* Email Copy Card */}
            <div
              className="editorial-card"
              style={{
                padding: '16px 20px',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
                marginBottom: '24px',
                backgroundColor: 'var(--bg-lavender-light)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: 0, flex: '1 1 200px' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--bg-lavender)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-purple)',
                    flexShrink: 0,
                  }}
                >
                  <Mail size={18} />
                </div>
                <div style={{ minWidth: 0, overflow: 'hidden' }}>
                  <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                    EMAIL ADDRESS
                  </div>
                  <div
                    style={{
                      fontWeight: 700,
                      color: 'var(--text-dark)',
                      fontSize: 'clamp(0.86rem, 2.5vw, 0.96rem)',
                      overflowWrap: 'anywhere',
                      wordBreak: 'break-all',
                    }}
                  >
                    {placeholderEmail}
                  </div>
                </div>
              </div>

              <button
                onClick={handleCopy}
                className="btn btn-secondary"
                style={{ padding: '8px 16px', fontSize: '0.82rem', minHeight: '38px', flexShrink: 0 }}
                title="Copy email to clipboard"
              >
                {copied ? <Check size={14} color="var(--accent-purple)" /> : <Copy size={14} />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Phone Number Card */}
            <div
              className="editorial-card"
              style={{
                padding: '16px 20px',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
                marginBottom: '24px',
                backgroundColor: 'var(--bg-lavender-light)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: 0, flex: '1 1 200px' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--bg-lavender)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-brown)',
                    flexShrink: 0,
                  }}
                >
                  <Phone size={18} />
                </div>
                <div style={{ minWidth: 0, overflow: 'hidden' }}>
                  <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                    PHONE NUMBER
                  </div>
                  <a
                    href={`tel:${phoneNumber}`}
                    style={{
                      fontWeight: 700,
                      color: 'var(--text-dark)',
                      fontSize: 'clamp(0.86rem, 2.5vw, 0.96rem)',
                      textDecoration: 'none',
                    }}
                  >
                    {formattedPhone}
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <a
                  href={`tel:${phoneNumber}`}
                  className="btn btn-secondary"
                  style={{ padding: '8px 14px', fontSize: '0.82rem', minHeight: '38px', flexShrink: 0 }}
                  title="Call phone number"
                >
                  <span>Call</span>
                </a>
                <button
                  onClick={handleCopyPhone}
                  className="btn btn-secondary"
                  style={{ padding: '8px 14px', fontSize: '0.82rem', minHeight: '38px', flexShrink: 0 }}
                  title="Copy phone to clipboard"
                >
                  {phoneCopied ? <Check size={14} color="var(--accent-purple)" /> : <Copy size={14} />}
                  <span>{phoneCopied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Social Placeholder Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="btn-icon"
                title="GitHub"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="btn-icon"
                title="LinkedIn"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href="mailto:hanahabtamu735@gmail.com"
                className="btn-icon"
                title="Email"
                aria-label="Send Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Right Column: Clean Contact Form */}
          <div
            className="editorial-card"
            style={{
              padding: 'clamp(20px, 4.5vw, 36px)',
              backgroundColor: '#ffffff',
              borderRadius: 'var(--radius-lg)',
            }}
          >
            <h4 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--text-dark)' }}>
              Send a Direct Note
            </h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '22px' }}>
              Leave your details below and I'll get back to you shortly.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label
                  htmlFor="name"
                  style={{
                    display: 'block',
                    fontSize: '0.84rem',
                    fontWeight: 600,
                    marginBottom: '6px',
                    color: 'var(--text-dark)',
                  }}
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-light)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    backgroundColor: 'var(--bg-lavender-light)',
                    transition: 'border-color var(--transition-fast)',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--accent-purple)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border-light)')}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  style={{
                    display: 'block',
                    fontSize: '0.84rem',
                    fontWeight: 600,
                    marginBottom: '6px',
                    color: 'var(--text-dark)',
                  }}
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-light)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    backgroundColor: 'var(--bg-lavender-light)',
                    transition: 'border-color var(--transition-fast)',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--accent-purple)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border-light)')}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  style={{
                    display: 'block',
                    fontSize: '0.84rem',
                    fontWeight: 600,
                    marginBottom: '6px',
                    color: 'var(--text-dark)',
                  }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  placeholder="What would you like to discuss?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-light)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    backgroundColor: 'var(--bg-lavender-light)',
                    resize: 'vertical',
                    transition: 'border-color var(--transition-fast)',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--accent-purple)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border-light)')}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  width: '100%',
                  padding: '13px',
                  marginTop: '6px',
                }}
              >
                <span>Send Message</span>
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Confirmation Toast */}
        {formSent && (
          <div className="toast-notice">
            <Check size={18} color="var(--accent-purple)" />
            <span>Thank you! Your message has been sent.</span>
          </div>
        )}
      </div>
    </section>
  );
}
