import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';

function getProjectIdFromHash() {
  const hash = window.location.hash || '';
  if (hash.startsWith('#/project/')) {
    return hash.replace('#/project/', '').trim();
  }
  return null;
}

function App() {
  const [activeProjectId, setActiveProjectId] = useState(getProjectIdFromHash);

  useEffect(() => {
    const handleHashChange = () => {
      const projId = getProjectIdFromHash();
      setActiveProjectId(projId);

      // If returning to a section on home page, scroll to it smoothly
      if (!projId && window.location.hash) {
        const targetId = window.location.hash.replace('#', '');
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 60);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleBackToProjects = () => {
    window.location.hash = '#projects';
  };

  return (
    <div className="portfolio-app">
      <Navbar />
      <main id="main-content">
        {activeProjectId ? (
          <ProjectDetail
            projectId={activeProjectId}
            onBack={handleBackToProjects}
          />
        ) : (
          <>
            <Hero />
            <Skills />
            <Projects />
            <About />
            <Experience />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
