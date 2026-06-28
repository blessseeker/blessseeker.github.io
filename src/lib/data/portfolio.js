export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' }
];

export const accountLinks = {
  github: 'https://github.com/blessseeker',
  linkedin: 'https://www.linkedin.com/in/kamaludin-khoir/',
  email: 'mailto:kamal@hiberinlabs.com'
};

export const socialLinks = [
  { label: 'GitHub', icon: 'github', href: accountLinks.github, newTab: true },
  {
    label: 'LinkedIn',
    icon: 'linkedin',
    href: accountLinks.linkedin,
    newTab: true
  },
  { label: 'Email', icon: 'mail', href: accountLinks.email, newTab: false }
];

export const experiences = [
  {
    role: 'Software Engineer -> Senior Software Engineer',
    company: 'Red Dot Payment',
    period: '2022 - Present',
    points: [
      'Developing and maintaining high-performance payment gateway solutions processing thousands of daily transactions.',
      'Integrating international payment methods and ensuring compliance with stringent fintech security standards.',
      'Collaborating with cross-functional teams in an agile environment to deliver product features on schedule.'
    ]
  },
  {
    role: 'Fullstack Web Developer',
    company: 'Indifa Teknologi Optima',
    period: '2018 - 2021',
    points: [
      'Architected and built scalable enterprise web applications from the ground up using PHP and modern JavaScript frameworks.',
      'Optimized database queries and backend infrastructure to reduce load times by 40%.',
      'Mentored junior developers and established code review processes to improve overall code quality.'
    ]
  },
  {
    role: 'Web Programming Teacher',
    company: 'SMK Terpadu Bojongnangka',
    period: '2018 - 2019',
    summary:
      'Instructed students in foundational web technologies including HTML, CSS, JavaScript, and introductory backend concepts, preparing them for industry certifications and entry-level positions.'
  },
  {
    role: 'Web Programming Teacher',
    company: 'SMK Alhuda Sadananya',
    period: '2015 - 2017',
    summary:
      'Developed curriculum and taught programming fundamentals. Organized student hackathons to encourage practical application of theoretical knowledge.'
  }
];

export const projects = [
  {
    title: 'Hiberin Labs',
    category: 'Software Lab & R&D',
    image: '/portfolio/avif/hero-labs.avif',
    alt: 'Abstract architectural render with geometric structures and cyan lighting accents.',
    description:
      'A dedicated space for exploring ideas in software, automation, AI, and modular digital products before they become client-ready systems.',
    tags: ['Open Source', 'R&D'],
    href: 'https://hiberinlabs.com'
  },
  {
    title: 'Hibersunda',
    category: 'Fullstack Application',
    image: '/portfolio/avif/labs-hibersunda.avif',
    alt: 'Minimal top-down desk setup with a keyboard, notebook, mug, and monochrome lighting.',
    description:
      'An API that allows you to learn Undak Usuk Basa in Sundanese language.',
    tags: ['SvelteKit', 'Go'],
    href: 'https://hibersunda.hiberinlabs.com'
  },
  {
    title: 'Hiber AI Telegram Smart Bot',
    category: 'AI Assistant Chat Bot',
    image: '/portfolio/avif/labs-telegram-smart-bot.avif',
    alt: 'Minimal top-down desk setup with a keyboard, notebook, mug, and monochrome lighting.',
    description:
      'A Telegram bot that uses AI to provide smart responses, automate tasks, and integrate with external services for enhanced user interaction and productivity.',
    tags: [
      'FastAPI',
      'PostgreSQL',
      'SvelteKit',
      'Telegram Bot API',
      'OpenAI API',
      'AI Chat Bot'
    ],
    href: null
  }
];

export const capabilityGroups = [
  {
    title: 'Backend & APIs',
    icon: 'terminal',
    skills: [
      'PHP / Laravel / Codeigniter',
      'Node.js',
      'Java / Spring Boot',
      'REST APIs',
      'SQL / NoSQL'
    ]
  },
  {
    title: 'Cloud & DevOps',
    icon: 'cloud',
    skills: ['Docker', 'AWS', 'CI/CD Pipelines', 'Linux Admin']
  },
  {
    title: 'Collaboration',
    icon: 'group',
    skills: ['Scrum / Agile', 'Git Flow', 'Code Review']
  },
  {
    title: 'AI-Adaptive Workflow',
    icon: 'ai',
    skills: ['LLM Integration', 'Prompt Engineering', 'AI-Assisted Dev']
  }
];

export const educationItems = [
  {
    title: 'S1 Teknik Informatika',
    meta: 'Graduated 2016',
    icon: 'school'
  },
  {
    title: 'Professional Scrum Master I (PSM I)',
    meta: 'Scrum.org - 2025',
    icon: 'verified'
  }
];
