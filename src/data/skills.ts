import type { SkillGroup } from '../types';

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend & Mobile application Development',
    subtitle: 'Crafting responsive web applications and touch-friendly mobile interfaces',
    skills: [
      { name: 'React', description: 'Functional components, hooks, state management & component lifecycle' },
      { name: 'Mobile App Development', description: 'Touch-friendly UI, mobile-first layouts & cross-device adaptation' },
      { name: 'JavaScript', description: 'Modern ES6+ syntax, asynchronous programming & DOM manipulation' },
      { name: 'HTML5 & CSS3', description: 'Semantic structure, Flexbox, Grid, custom styling & animations' },
    ],
  },
  {
    category: 'Backend & System Development',
    subtitle: 'Building reliable business logic, server systems & web APIs',
    skills: [
      { name: 'System Architecture', description: 'Information systems design, workflow automation & access controls' },
      { name: 'Laravel', description: 'MVC architecture, Eloquent ORM, routing, middleware & auth' },
      { name: 'PHP', description: 'Server-side scripting, object-oriented programming & system logic' },
      { name: 'REST APIs', description: 'API endpoint design, JSON data flow & client-server communication' },
    ],
  },
  {
    category: 'Database Management',
    subtitle: 'Structuring, storing & querying application datasets securely',
    skills: [
      { name: 'MySQL', description: 'Relational schema design, normalization, relationships & queries' },
      { name: 'PostgreSQL', description: 'Relational data modeling, indexing & structured transactions' },
      { name: 'Data Modeling', description: 'Entity relationship diagrams, business rules & query optimization' },
    ],
  },
  {
    category: 'Tools & Engineering Practices',
    subtitle: 'Development workflow, version control & problem solving',
    skills: [
      { name: 'Git & GitHub', description: 'Version control, repository management & team collaboration' },
      { name: 'System Analysis', description: 'Translating real-world organizational needs into software solutions' },
      { name: 'Mobile-First Design', description: 'Ensuring seamless performance and layout on mobile devices' },
    ],
  },
];
