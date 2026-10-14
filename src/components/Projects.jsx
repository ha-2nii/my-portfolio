import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="section" style={{ backgroundColor: 'var(--bg-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">PORTFOLIO</span>
          <h2 className="section-title">
            My <span className="accent-text">Recent Work</span>
          </h2>
          <p className="section-subtitle">
            A selection of systems and web applications I've built.
          </p>
        </div>

        {/* Project Grid - 4 Horizontal Projects */}
        <div className="projects-horizontal-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
      <style>{`
        .projects-horizontal-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: clamp(14px, 1.8vw, 22px);
          align-items: stretch;
        }

        @media (max-width: 1024px) {
          .projects-horizontal-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
          }
        }

        @media (max-width: 580px) {
          .projects-horizontal-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }
      `}</style>
    </section>
  );
}
