import { useState } from 'react';
import { Mail, ArrowUpRight, Copy, Check, Send, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const placeholderEmail = 'hello@hanahabtamu.dev';

  const handleCopy = () => {
    navigator.clipboard.writeText(placeholderEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
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
        {/* Wide Lavender Banner Requested by User */}
        <div
          style={{
            background: 'linear-gradient(135deg, #f4f0fd 0%, #ede8fc 50%, #fdfcff 100%)',
            border: '1px solid var(--accent-lavender-border)',
            borderRadius: 'var(--radius-xl)',
            padding: '48px 32px',
            textAlign: 'center',
            marginBottom: '45px',
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
              fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)',
              color: 'var(--text-dark)',
              marginBottom: '12px',
            }}
          >
            Have a project in mind?
          </h2>

          <p
            style={{
              fontSize: '1.15rem',
              color: 'var(--text-secondary)',
              maxWidth: '520px',
              margin: '0 auto 32px auto',
              lineHeight: 1.6,
            }}
          >
            Let's create something useful together.
          </p>

          <a
            href="mailto:hello@hanahabtamu.dev"
            className="btn btn-primary"
            style={{
              padding: '14px 34px',
              fontSize: '1rem',
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'flex-start',
          }}
        >
          {/* Left Column: Direct Outreach & Social Placeholders */}
          <div>
            <span className="section-eyebrow">GET IN TOUCH</span>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2rem',
                color: 'var(--text-dark)',
                marginBottom: '16px',
              }}
            >
              Start a Conversation
            </h3>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '28px' }}>
              Whether you want to discuss full-stack web applications, front-end design, or prospective opportunities, I would love to connect.
            </p>

            {/* Email Copy Card */}
            <div
              className="editorial-card"
              style={{
                padding: '18px 22px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px',
                marginBottom: '24px',
                backgroundColor: 'var(--bg-lavender-light)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--bg-lavender)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-purple)',
                  }}
                >
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                    EMAIL ADDRESS
                  </div>
                  <div style={{ fontWeight: 700, color: 'var(--text-dark)', fontSize: '0.96rem' }}>
                    {placeholderEmail}
                  </div>
                </div>
              </div>

              <button
                onClick={handleCopy}
                className="btn btn-secondary"
                style={{ padding: '8px 16px', fontSize: '0.82rem' }}
                title="Copy email to clipboard"
              >
                {copied ? <Check size={14} color="var(--accent-purple)" /> : <Copy size={14} />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
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
                href="mailto:hello@hanahabtamu.dev"
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
              padding: '36px',
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
