import { useState, useRef } from 'react';
import {
  Smartphone,
  Layers,
  Database,
  Wrench,
  Monitor,
  LayoutGrid,
  ArrowRight,
  Cloud,
  Network,
  Share2,
  Users,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

import frontend3D from '../assets/skills/frontend-3d.png';
import backend3D from '../assets/skills/backend-3d.png';
import database3D from '../assets/skills/database-3d.jpg';
import tools3D from '../assets/skills/tools-3d.png';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');
  const scrollContainerRef = useRef(null);

  const filterTabs = [
    { id: 'all', label: 'All Skills', icon: <LayoutGrid size={15} /> },
    { id: 'frontend', label: 'Frontend', icon: <Monitor size={15} /> },
    { id: 'backend', label: 'Backend', icon: <Layers size={15} /> },
    { id: 'database', label: 'Database', icon: <Database size={15} /> },
    { id: 'tools', label: 'Tools', icon: <Wrench size={15} /> },
  ];

  const categories = [
    {
      id: 'frontend',
      tabLabel: 'Frontend',
      title: 'Frontend & Mobile application Development',
      titleBreak: (
        <>
          Frontend &amp; Mobile
          <br />
          application Development
        </>
      ),
      headerIcon: <Smartphone size={20} />,
      count: '4+',
      subtitle:
        'Crafting responsive web applications and touch-friendly mobile interfaces for seamless user experiences.',
      pills: [
        {
          name: 'React',
          customIcon: (
            <span style={{ color: '#00D8FF', display: 'flex' }}>
              <svg width="15" height="15" viewBox="-11.5 -10.23174 23 20.46348">
                <circle cx="0" cy="0" r="2.05" fill="#00D8FF" />
                <g stroke="#00D8FF" strokeWidth="1" fill="none">
                  <ellipse rx="11" ry="4.2" />
                  <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                  <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                </g>
              </svg>
            </span>
          ),
        },
        {
          name: 'React Native',
          customIcon: <Smartphone size={13} color="var(--color-brown, #73482C)" />,
        },
        {
          name: 'JavaScript',
          badge: 'JS',
          badgeBg: '#F7DF1E',
          textColor: '#000000',
        },
        {
          name: 'HTML5 & CSS3',
          badge: '5',
          badgeBg: '#E34F26',
          textColor: '#FFFFFF',
        },
      ],
      detailedSkills: [
        {
          name: 'React.js',
          tag: 'Frontend Library',
          description:
            'Functional components, custom hooks, reactive state management, virtual DOM reconciliation, and scalable component architecture.',
        },
        {
          name: 'React Native',
          tag: 'Mobile Development',
          description:
            'Cross-device responsive mobile user interfaces, gesture adaptation, and fluid layout optimization for handheld devices.',
        },
        {
          name: 'JavaScript (ES6+)',
          tag: 'Core Language',
          description:
            'Modern JavaScript syntax, async/await, Promises, API integrations, event handling, and dynamic client-side DOM manipulation.',
        },
        {
          name: 'HTML5 & Modern CSS3',
          tag: 'Structure & Styling',
          description:
            'Semantic web architecture, Flexbox, CSS Grid layouts, custom CSS design tokens, keyframe micro-animations, and responsive typography.',
        },
      ],
      renderVisual: (isDetail = false) => (
        <div style={{ width: '100%', height: '100%', backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img
            src={frontend3D}
            alt="React - Frontend & Mobile application development"
            style={{
              width: '75%',
              height: '75%',
              objectFit: 'contain',
              objectPosition: 'center',
              display: 'block',
              transition: 'transform 0.5s ease',
            }}
            className="skill-3d-visual-img"
          />
        </div>
      ),
    },
    {
      id: 'backend',
      tabLabel: 'Backend',
      title: 'Backend & System Development',
      titleBreak: (
        <>
          Backend &amp; System
          <br />
          Development
        </>
      ),
      headerIcon: <Layers size={20} />,
      count: '4+',
      subtitle: 'Building reliable business logic, server systems & web APIs.',
      pills: [
        {
          name: 'Laravel',
          customIcon: (
            <span style={{ color: '#FF2D20', display: 'flex' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.5 5.5l-9.5-5.5-9.5 5.5v13l9.5 5.5 9.5-5.5v-13zm-9.5 16.5l-8-4.6v-9.8l8 4.6v9.8zm1-9.8l8-4.6v9.8l-8 4.6v-9.8zm7.5-6.2l-7.5 4.3-7.5-4.3 7.5-4.3 7.5 4.3z" />
              </svg>
            </span>
          ),
        },
        {
          name: 'PHP',
          badge: 'php',
          badgeBg: '#777BB4',
          textColor: '#FFFFFF',
        },
        {
          name: 'System Architecture',
          customIcon: <Layers size={13} color="var(--color-brown, #73482C)" />,
        },
        {
          name: 'REST APIs',
          customIcon: <Cloud size={13} color="#2563EB" />,
        },
      ],
      detailedSkills: [
        {
          name: 'Laravel Framework',
          tag: 'Backend MVC',
          description:
            'MVC architecture, Eloquent ORM relations, database migrations, middleware security, auth guards, and automated validation rules.',
        },
        {
          name: 'PHP (Object-Oriented)',
          tag: 'Server Logic',
          description:
            'Object-oriented principles, modular classes, secure session handling, data serialization, and server-side business workflows.',
        },
        {
          name: 'System Architecture',
          tag: 'Information Systems',
          description:
            'Enterprise information system architecture, organizational management platforms, role-based permissions (RBAC), and audit logging.',
        },
        {
          name: 'RESTful API Engineering',
          tag: 'Web Services',
          description:
            'Robust REST API endpoints, standard JSON response contracts, status code handling, query filters, and client-server integration.',
        },
      ],
      renderVisual: (isDetail = false) => (
        <div style={{ width: '100%', height: '100%', backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img
            src={backend3D}
            alt="Laravel Backend Framework logo"
            style={{
              width: '80%',
              height: '80%',
              objectFit: 'contain',
              objectPosition: 'center',
              display: 'block',
              transition: 'transform 0.5s ease',
            }}
            className="skill-3d-visual-img"
          />
        </div>
      ),
    },
    {
      id: 'database',
      tabLabel: 'Database',
      title: 'Database Management',
      titleBreak: (
        <>
          Database
          <br />
          Management
        </>
      ),
      headerIcon: <Database size={20} />,
      count: '4+',
      subtitle: 'Structuring, storing & querying application datasets securely.',
      pills: [
        {
          name: 'MySQL',
          customIcon: (
            <span style={{ color: '#00758F', display: 'flex' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 14c4-7 12-7 16-2-4 0-6 4-10 4s-4-2-6-2z" />
              </svg>
            </span>
          ),
        },
        {
          name: 'PostgreSQL',
          customIcon: (
            <span style={{ color: '#336791', display: 'flex' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="8" fill="#336791" />
              </svg>
            </span>
          ),
        },
        {
          name: 'Data Modeling',
          customIcon: <Network size={13} color="var(--color-brown, #73482C)" />,
        },
      ],
      detailedSkills: [
        {
          name: 'MySQL Relational Database',
          tag: 'RDBMS',
          description:
            'Relational database design, foreign key integrity, indexed queries, normalization up to 3NF, and efficient joins across business tables.',
        },
        {
          name: 'PostgreSQL',
          tag: 'Relational Store',
          description:
            'Structured data modeling, transaction guarantees, data integrity constraints, indexing, and performant data retrieval.',
        },
        {
          name: 'Data Modeling & ER Diagrams',
          tag: 'Schema Engineering',
          description:
            'Entity relationship modeling, business rules translation, database schema optimization, and elimination of data redundancy.',
        },
      ],
      renderVisual: (isDetail = false) => (
        <img
          src={database3D}
          alt="Database management realistic layered storage cylinders"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block',
            transition: 'transform 0.5s ease',
          }}
          className="skill-3d-visual-img"
        />
      ),
    },
    {
      id: 'tools',
      tabLabel: 'Tools',
      title: 'Tools & Engineering Practices',
      titleBreak: (
        <>
          Tools &amp; Engineering
          <br />
          Practices
        </>
      ),
      headerIcon: <Wrench size={20} />,
      count: '4+',
      subtitle: 'Development workflow, version control & problem solving.',
      pills: [
        {
          name: 'Git & GitHub',
          customIcon: (
            <span style={{ color: '#F05032', display: 'flex' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2.6 10.59L10.6 2.6a2.4 2.4 0 0 1 3.4 0l8.4 8.4a2.4 2.4 0 0 1 0 3.4l-8.4 8.4a2.4 2.4 0 0 1-3.4 0l-8-8a2.4 2.4 0 0 1 0-3.41z" />
              </svg>
            </span>
          ),
        },
        {
          name: 'System Analysis',
          customIcon: <Share2 size={13} color="var(--color-brown, #73482C)" />,
        },
        {
          name: 'Mobile-First Design',
          customIcon: <Smartphone size={13} color="var(--text-dark)" />,
        },
        {
          name: 'Collaboration',
          customIcon: <Users size={13} color="var(--color-brown, #73482C)" />,
        },
      ],
      detailedSkills: [
        {
          name: 'Git & GitHub Version Control',
          tag: 'Version Control',
          description:
            'Repository branching strategies, feature branches, pull requests, merge conflict resolution, and collaborative code reviews.',
        },
        {
          name: 'Systems Analysis & Requirements',
          tag: 'System Engineering',
          description:
            'Analyzing organizational operational workflows, gathering functional requirements, and turning user needs into software specifications.',
        },
        {
          name: 'Mobile-First Responsive Design',
          tag: 'UX / Ergonomics',
          description:
            'Progressive enhancement, touch target optimization, adaptive viewport scaling, and performance on mobile devices.',
        },
        {
          name: 'Agile & Team Collaboration',
          tag: 'Methodology',
          description:
            'Hackathon rapid delivery, sprint planning, cross-functional developer collaboration, and clean documentation.',
        },
      ],
      renderVisual: (isDetail = false) => (
        <div style={{ width: '100%', height: '100%', backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img
            src={tools3D}
            alt="GitHub logo - Tools & Engineering Practices"
            style={{
              width: '70%',
              height: '70%',
              objectFit: 'contain',
              objectPosition: 'center',
              display: 'block',
              transition: 'transform 0.5s ease',
            }}
            className="skill-3d-visual-img"
          />
        </div>
      ),
    },
  ];

  const selectedCategory = categories.find((c) => c.id === activeTab);

  return (
    <section id="skills" className="section" style={{ backgroundColor: 'var(--bg-main)', position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ maxWidth: '1480px', position: 'relative' }}>
        {/* Top Header Row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
            marginBottom: '20px',
            position: 'relative',
          }}
        >
          {/* Left Narrative Heading */}
          <div style={{ maxWidth: '620px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  fontWeight: 600,
                }}
              >
                MY SKILLS &amp; TECHNOLOGIES
              </span>
              <span style={{ width: '42px', height: '1.5px', backgroundColor: 'var(--border-light)' }} />
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(2.1rem, 4.2vw, 3.2rem)',
                fontWeight: 700,
                color: 'var(--text-dark)',
                lineHeight: 1.15,
                marginBottom: '14px',
                letterSpacing: '-0.02em',
              }}
            >
              Tools I Use to Build <br />
              <span style={{ color: 'var(--color-brown, #73482C)', fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 600 }}>
                Great Digital Experiences
              </span>
            </h2>

            <p
              style={{
                fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              I work with modern technologies and frameworks to build scalable, user-friendly and high-performing web and mobile applications.
            </p>
          </div>

          {/* Right Filter Pills */}
          <div style={{ display: 'flex', alignItems: 'center', paddingTop: '8px' }}>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                padding: '6px',
                borderRadius: 'var(--radius-full)',
                border: '1px solid var(--border-subtle)',
                boxShadow: 'var(--shadow-subtle)',
              }}
            >
              {filterTabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '7px',
                      padding: '8px 16px',
                      borderRadius: 'var(--radius-full)',
                      border: isActive ? '1px solid var(--accent-lavender-border)' : '1px solid transparent',
                      backgroundColor: isActive ? 'var(--bg-lavender)' : 'transparent',
                      color: isActive ? 'var(--text-dark)' : 'var(--text-secondary)',
                      fontWeight: isActive ? 700 : 500,
                      fontSize: '0.86rem',
                      cursor: 'pointer',
                      transition: 'all var(--transition-fast)',
                      outline: 'none',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = 'var(--bg-lavender-light)';
                        e.currentTarget.style.color = 'var(--text-dark)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = 'var(--text-secondary)';
                      }
                    }}
                  >
                    <span style={{ display: 'flex', color: isActive ? 'var(--color-brown, #73482C)' : 'var(--text-muted)' }}>
                      {tab.icon}
                    </span>
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Skills Cards Track Container */}
        <div style={{ position: 'relative' }}>

          {/* VIEW MODE 1: ALL SKILLS (4-Column Horizontal Deck) */}
          {activeTab === 'all' && (
            <div
              ref={scrollContainerRef}
              className="skills-cards-track"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
                gap: 'clamp(14px, 1.8vw, 22px)',
                padding: '10px 0',
                overflowX: 'auto',
                scrollSnapType: 'x mandatory',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              {categories.map((cat) => (
                <div
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className="editorial-card skill-deck-card"
                  style={{
                    borderRadius: '24px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #ECE3D4',
                    boxShadow: '0 4px 20px rgba(17, 18, 13, 0.04)',
                    padding: '24px 20px 18px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minWidth: '270px',
                    scrollSnapAlign: 'start',
                    cursor: 'pointer',
                    transition: 'all var(--transition-normal)',
                  }}
                  title={`Click to view all ${cat.tabLabel} skills in detail`}
                >
                  <div>
                    {/* Header */}
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '14px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div
                          style={{
                            width: '44px',
                            height: '44px',
                            borderRadius: '50%',
                            backgroundColor: '#F5EFE4',
                            border: '1px solid #E6DCCF',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--color-brown, #73482C)',
                            flexShrink: 0,
                          }}
                        >
                          {cat.headerIcon}
                        </div>
                        <div>
                          <h3
                            style={{
                              fontFamily: 'var(--font-sans)',
                              fontSize: '1rem',
                              fontWeight: 700,
                              color: 'var(--text-dark)',
                              lineHeight: 1.25,
                            }}
                          >
                            {cat.titleBreak}
                          </h3>
                        </div>
                      </div>
                      <div style={{ textAlign: 'right', color: 'var(--text-muted)' }}>
                        <div style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>{cat.count}</div>
                        <ArrowRight size={13} style={{ opacity: 0.6 }} />
                      </div>
                    </div>

                    {/* Subtitle Description */}
                    <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: 1.5, minHeight: '44px', marginBottom: '16px' }}>
                      {cat.subtitle}
                    </p>

                    {/* Tech Pills */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px', marginBottom: '16px' }}>
                      {cat.pills.map((pill, idx) => (
                        <div key={idx} className="skill-pill">
                          {pill.customIcon}
                          {pill.badge && (
                            <span
                              style={{
                                backgroundColor: pill.badgeBg,
                                color: pill.textColor,
                                fontSize: '0.62rem',
                                fontWeight: 900,
                                padding: '1px 4px',
                                borderRadius: pill.badge === 'php' ? '9999px' : '2px',
                                fontFamily: 'var(--font-mono)',
                              }}
                            >
                              {pill.badge}
                            </span>
                          )}
                          <span>{pill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 3D Visual */}
                  <div
                    style={{
                      position: 'relative',
                      height: '160px',
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: '8px',
                      borderRadius: '14px',
                      overflow: 'hidden',
                      backgroundColor: '#FAF5ED',
                      border: '1px solid #ECE3D4',
                    }}
                  >
                    {cat.renderVisual(false)}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* VIEW MODE 2: FILTERED CATEGORY VIEW (List of Skills) */}
          {activeTab !== 'all' && selectedCategory && (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
                gap: 'clamp(20px, 3vw, 32px)',
                padding: '10px',
                alignItems: 'stretch',
              }}
            >
              {/* Left Column: Focused Category Card with 3D Illustration */}
              <div
                className="editorial-card"
                style={{
                  borderRadius: '24px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #ECE3D4',
                  boxShadow: 'var(--shadow-card)',
                  padding: '28px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        backgroundColor: '#F5EFE4',
                        border: '1px solid #E6DCCF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-brown, #73482C)',
                        flexShrink: 0,
                      }}
                    >
                      {selectedCategory.headerIcon}
                    </div>
                    <div>
                      <span
                        style={{
                          fontSize: '0.74rem',
                          fontFamily: 'var(--font-mono)',
                          textTransform: 'uppercase',
                          color: 'var(--color-brown, #73482C)',
                          fontWeight: 700,
                          letterSpacing: '0.08em',
                        }}
                      >
                        {selectedCategory.tabLabel} Specialization
                      </span>
                      <h3
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '1.25rem',
                          fontWeight: 700,
                          color: 'var(--text-dark)',
                          lineHeight: 1.25,
                        }}
                      >
                        {selectedCategory.title}
                      </h3>
                    </div>
                  </div>

                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '22px' }}>
                    {selectedCategory.subtitle}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                    {selectedCategory.pills.map((pill, idx) => (
                      <div key={idx} className="skill-pill" style={{ padding: '6px 14px', fontSize: '0.84rem' }}>
                        {pill.customIcon}
                        {pill.badge && (
                          <span
                            style={{
                              backgroundColor: pill.badgeBg,
                              color: pill.textColor,
                              fontSize: '0.66rem',
                              fontWeight: 900,
                              padding: '1px 5px',
                              borderRadius: pill.badge === 'php' ? '9999px' : '2px',
                              fontFamily: 'var(--font-mono)',
                            }}
                          >
                            {pill.badge}
                          </span>
                        )}
                        <span>{pill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  style={{
                    position: 'relative',
                    flex: 1,
                    minHeight: '280px',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#FAF5ED',
                    borderRadius: '18px',
                    border: '1px solid #ECE3D4',
                    overflow: 'hidden',
                    marginTop: '20px',
                  }}
                >
                  {selectedCategory.renderVisual(true)}
                </div>
              </div>

              {/* Right Column: Detailed List of Skills for this Category */}
              <div
                className="editorial-card"
                style={{
                  borderRadius: '24px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #ECE3D4',
                  boxShadow: 'var(--shadow-card)',
                  padding: '28px 26px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px', paddingBottom: '12px', borderBottom: '1px solid var(--border-subtle)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Sparkles size={16} color="var(--color-brown, #73482C)" />
                      <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-dark)' }}>
                        List of {selectedCategory.tabLabel} Technologies &amp; Practices
                      </h4>
                    </div>
                    <button
                      onClick={() => setActiveTab('all')}
                      className="btn btn-secondary"
                      style={{ padding: '5px 12px', fontSize: '0.78rem', minHeight: '30px' }}
                    >
                      View All
                    </button>
                  </div>

                  {/* The Detailed List */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {selectedCategory.detailedSkills.map((item, idx) => (
                      <div
                        key={idx}
                        style={{
                          padding: '14px 16px',
                          borderRadius: 'var(--radius-md)',
                          backgroundColor: 'var(--bg-lavender-light)',
                          border: '1px solid var(--border-subtle)',
                          transition: 'all var(--transition-fast)',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                          <span style={{ fontWeight: 700, fontSize: '0.96rem', color: 'var(--text-dark)' }}>
                            {item.name}
                          </span>
                          <span
                            style={{
                              fontSize: '0.7rem',
                              fontFamily: 'var(--font-mono)',
                              padding: '2px 8px',
                              borderRadius: 'var(--radius-full)',
                              backgroundColor: 'var(--bg-lavender)',
                              color: 'var(--color-brown, #73482C)',
                              fontWeight: 600,
                            }}
                          >
                            {item.tag}
                          </span>
                        </div>
                        <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Back to All Skills Pill */}
                <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <button
                    onClick={() => setActiveTab('all')}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--color-brown, #73482C)',
                      fontWeight: 700,
                      fontSize: '0.88rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      cursor: 'pointer',
                      padding: 0,
                    }}
                  >
                    <span>← Back to All 4 Categories</span>
                  </button>

                  <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                    Showing {selectedCategory.detailedSkills.length} {selectedCategory.tabLabel} skills
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Section Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            marginTop: '34px',
            paddingTop: '20px',
            borderTop: '1px solid var(--border-subtle)',
          }}
        >
          {/* Left Values Indicator */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.84rem',
              fontWeight: 600,
              color: 'var(--color-brown, #73482C)',
              letterSpacing: '0.04em',
            }}
          >
            <span style={{ fontSize: '0.9rem' }}>✦</span>
            <span>Better tools</span>
            <span style={{ opacity: 0.5 }}>→</span>
            <span>Better code</span>
            <span style={{ opacity: 0.5 }}>→</span>
            <span>Better products</span>
          </div>

          {/* Right Pagination Indicator */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              onClick={() => setActiveTab('all')}
              style={{
                width: activeTab === 'all' ? '28px' : '6px',
                height: activeTab === 'all' ? '2px' : '6px',
                backgroundColor: activeTab === 'all' ? 'var(--color-brown, #73482C)' : 'var(--border-light)',
                borderRadius: '2px',
                cursor: 'pointer',
              }}
            />
            {categories.map((cat) => (
              <span
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                style={{
                  width: activeTab === cat.id ? '16px' : '6px',
                  height: '6px',
                  borderRadius: activeTab === cat.id ? '3px' : '50%',
                  backgroundColor: activeTab === cat.id ? 'var(--color-brown, #73482C)' : 'var(--border-light)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                title={cat.tabLabel}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .skill-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          border-radius: 9999px;
          background-color: #FAF7F2;
          border: 1px solid #EAE2D5;
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--text-dark);
          transition: all var(--transition-fast);
        }
        .skill-pill:hover {
          border-color: var(--color-brown, #73482C);
          background-color: #FFFFFF;
          transform: translateY(-1px);
        }
        @media (max-width: 1080px) {
          .skills-cards-track {
            grid-template-columns: repeat(2, minmax(280px, 1fr)) !important;
          }
        }
        @media (max-width: 640px) {
          .skills-cards-track {
            display: flex !important;
            overflow-x: auto !important;
            scroll-snap-type: x mandatory !important;
            padding-bottom: 14px !important;
          }
          .skill-deck-card {
            min-width: 280px !important;
            flex: 0 0 280px !important;
          }
        }
      `}</style>
    </section>
  );
}
