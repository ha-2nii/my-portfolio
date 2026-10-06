import orthodoxImg from '../assets/projects/orthodox.png';
import dentalImg from '../assets/projects/dental.png';
import ifsoImg from '../assets/projects/ifso.png';
import portfolioImg from '../assets/projects/portfolio.svg';

export const projects = [
  {
    id: 'eotc-platform',
    number: '01',
    title: 'Ethiopian Orthodox Tewahedo Church (EOTC) Platform',
    type: 'Community & Faith Portal',
    image: orthodoxImg,
    description:
      'A comprehensive web platform for the Ethiopian Orthodox Tewahedo Church featuring scripture study, church locator, spiritual resources, hierarchy directory, and member management.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'Tailored UI'],
    highlights: [
      'Interactive scripture explorer with multilingual resources and daily verses',
      'Global church directory with interactive mapping and localized finder',
      'Community news, hierarchy governance profiles, and academic publications',
      'Secure donation workflows and administrative role controls',
    ],
  },
  {
    id: 'dental-clinic-website',
    number: '02',
    title: 'Nash Dental Clinic Website',
    type: 'Healthcare Services Platform',
    image: dentalImg,
    description:
      'A modern, patient-first web presence for Nash Dental Clinic, featuring service directories, specialist doctor profiles, online consultation booking, and multi-channel patient contact.',
    technologies: ['React', 'JavaScript', 'HTML5', 'CSS3'],
    highlights: [
      'Interactive appointment reservation flow with real-time slot selection',
      'Multi-channel contact integration (WhatsApp, Telehealth, Direct Calling)',
      'Service catalog with detailed dental procedures and technology showcases',
      'Mobile-first responsive architecture with smooth animations',
    ],
  },
  {
    id: 'ngo-resource-management',
    number: '03',
    title: 'Integrated NGO Resource & Sponsorship Management System',
    type: 'NGO Donor, Beneficiary & Staff MIS',
    image: ifsoImg,
    description:
      'A robust management information system for the Integrated Family Service Organization (IFSO) connecting foreign donors with vulnerable families, tracking sponsorships, disbursements, and staff visits.',
    technologies: ['React', 'Laravel', 'MySQL', 'Analytics'],
    highlights: [
      'Foreign sponsor & family pairing dashboard with real-time funding statistics',
      'Payment channel breakdown (Bank Transfer, Telebirr, CBE, Cash) and audit logs',
      'Beneficiary case management with status tracking across Addis Ababa programs',
      'Staff field visits, correspondence logs, and annual reporting generation',
    ],
  },
  {
    id: 'portfolio-website',
    number: '04',
    title: 'Personal Developer Portfolio',
    type: 'Personal Branding & Showcase',
    image: portfolioImg,
    description:
      'A bespoke portfolio website designed and engineered from the ground up to showcase my journey as an Information Systems student and full-stack developer with an editorial aesthetic.',
    technologies: ['React', 'Vite', 'CSS3', 'JavaScript'],
    highlights: [
      'Refined editorial design system using Playfair Display, Plus Jakarta Sans, and lavender accents',
      'Data-driven project and capability architecture with interactive modal case studies',
      'Smooth CSS micro-animations, glassmorphism badges, and responsive layout',
      'Optimized lightweight build with Vite for high performance and fast load times',
    ],
  },
];
