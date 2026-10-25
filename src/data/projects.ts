import type { Project } from '../types';
import orthodoxImg from '../assets/projects/orthodox.png';
import dentalImg from '../assets/projects/dental.png';
import ifsoImg from '../assets/projects/ifso.png';
import portfolioImg from '../assets/projects/portfolio.svg';

import mockupEotc from '../assets/projects/mockup-eotc.png';
import mockupDental from '../assets/projects/mockup-dental.png';
import mockupNgo from '../assets/projects/mockup-ngo.png';
import mockupPortfolio from '../assets/projects/mockup-portfolio.png';

export const projects: Project[] = [
  {
    id: 'eotc-platform',
    number: '01',
    title: 'Ethiopian Orthodox Tewahedo Church (EOTC) Platform',
    shortTitle: 'EOTC Church Platform',
    badge: 'FEATURED PROJECT',
    category: 'web',
    type: 'Community & Faith Portal',
    image: orthodoxImg,
    mockupImage: mockupEotc,
    displayUrl: 'eotc-platform.org',
    liveUrl: 'https://eotc-platform.vercel.app',
    liveLabel: 'Live website',
    githubUrl: 'https://github.com/hanahabtamu/eotc-platform',
    status: 'Ongoing Project',
    description:
      'A modern web platform for the Ethiopian Orthodox Tewahedo Church, providing information about the church, dioceses, and services. The system helps members stay connected and access resources easily.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'Tailwind CSS'],
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
    shortTitle: 'Nash Dental Clinic Website',
    badge: 'WEB APPLICATION',
    category: 'web',
    type: 'Healthcare Services Platform',
    image: dentalImg,
    mockupImage: mockupDental,
    displayUrl: 'nashdentalclinic.et',
    liveUrl: 'https://nashdentalclinic.vercel.app',
    liveLabel: 'Live site',
    githubUrl: 'https://github.com/hanahabtamu/nash-dental-clinic',
    status: 'Ongoing Project',
    description:
      'A modern, patient-first web presence currently in active development for the Nash Dental Clinic, making it easy for patients to learn about services and book appointments.',
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
    shortTitle: 'NGO Resource & Sponsorship Management',
    badge: 'SYSTEMS',
    category: 'systems',
    type: 'NGO Donor, Beneficiary & Staff MIS',
    image: ifsoImg,
    mockupImage: mockupNgo,
    displayUrl: 'ifso-system.org',
    liveUrl: 'https://ifso-management.org',
    liveLabel: 'Live site',
    githubUrl: 'https://github.com/hanahabtamu/ifso-ngo-management',
    status: 'Ongoing Project',
    description:
      'A web-based system to manage beneficiaries, sponsorships, donors and reports for NGOs.',
    technologies: ['Laravel', 'MySQL', 'JavaScript', 'Bootstrap'],
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
    shortTitle: 'Developer Portfolio',
    badge: 'PERSONAL PROJECT',
    category: 'personal',
    type: 'Personal Branding & Showcase',
    image: portfolioImg,
    mockupImage: mockupPortfolio,
    displayUrl: 'hanahabtamu.dev',
    liveUrl: '#',
    liveLabel: undefined,
    githubUrl: 'https://github.com/hanahabtamu/my-portfolio',
    status: 'Live Portfolio',
    description:
      'A personal portfolio website to showcase my skills, projects and experience as a web and mobile developer.',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    highlights: [
      'Refined editorial design system using Playfair Display, Plus Jakarta Sans, and lavender accents',
      'Data-driven project and capability architecture with dedicated full-page case studies',
      'Smooth CSS micro-animations, glassmorphism badges, and responsive layout',
      'Optimized lightweight build with Vite for high performance and fast load times',
    ],
  },
];
