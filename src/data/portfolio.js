export const personal = {
  name: 'Sandra Sæbø', initials: 'SS',
  role: 'Interaction Designer & Web Developer',
  bio: "Bachelor's in Interaction Design & Web Development. Studied fashion design at Beckmans.",
  bio2: "An eye for digital form — where every detail is intentional.",
  location: 'Stockholm', email: 'sandra.saeboe@gmail.com',
  github: 'https://github.com/sandrasaeboe', linkedin: 'https://www.linkedin.com/in/sandra-sæbø-08556b270/',
  available: 'Now',
};

export const projects = [
  { id:1, index:'01', title:'Webdesign', role:'Web Design, Frontend Development', year:'2026',
    desc:'An editorial portfolio site for a Stockholm-based fine-line tattoo artist. A monochrome, gallery-first experience built around an infinite-looping coverflow gallery and a direct, form-free booking flow.',
    tech:['React','CSS','Scroll Snap Carousel','Responsive Design'], what:"A quiet gallery for ink that's meant to last.", link: 'https://emelinn.vercel.app' },
  { id:2, index:'02', title:'Motion', role:'Component Design, Frontend Engineering', year:'2026',
    desc:'A physics-based UI component library. Every component driven by spring physics and inertia. Fully documented with TypeScript types and live demos.',
    tech:['React','TypeScript','Spring Physics','Storybook'], what:'UI that moves like it has mass.', link:'https://motion-ui-that-moves.vercel.app' },
  { id:3, index:'03', title:'Spiral', role:'UX Design, Full Stack Development', year:'2026',
    desc:'A mental health app that catches spiraling thoughts before they take over. An AI layer reads what you write and offers grounding advice in the moment, while daily check-ins track energy, sleep and mood to surface patterns over time. A guided breathing exercise helps regulate the nervous system when things feel like too much.',
    tech:['React','AI-Assisted Insights','Data Visualization','Design System'], what:'A pause, built into the spiral.', link:'https://spiral-app-ss.vercel.app' },
];

export const skills = [
  { cat:'Design',   items:['Figma','Interaction Design','UX / UI Design','Adobe Creative Suite','Prototyping','Design Systems','Editorial Design','Typography'] },
  { cat:'Frontend', items:['React','TypeScript','CSS / SCSS','Three.js','Canvas API'] },
  { cat:'Process',  items:['UX Research', 'User Testing', 'Information Architecture', 'Accessibility', 'Git', 'Iterative Design'] },
];

export const experience = [
  { role:'UX Design',   company:'CozyVintage', period:'2021 - 2022', desc:'Designed and developed the company website, focusing on layout, visual structure, and user experience. Supported digital marketing through content and visual updates.' },
  { role:'Frontend Developer', company:'Freelance',    period:'2023 – Now',  desc:'Built websites for businesses. Full ownership from wireframe to deployed product.' },
  
];
