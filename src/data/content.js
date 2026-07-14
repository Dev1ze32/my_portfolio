export const profile = {
  name: 'Wendell Dave Anciso',
  role: 'Backend Developer',
  location: 'Cabuyao, Laguna, Philippines',
  email: 'wendell320910@gmail.com',
  phone: '+63 921 279 2054',
  linkedin: 'https://www.linkedin.com/in/wendell-dave-anciso-074729225',
  github: 'https://github.com/Dev1ze32',
};

export const nav = [
  { label: 'Services', href: '#services' },
  { label: 'Approach', href: '#approach' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
];

export const services = [
  {
    span: 'wide',
    title: 'From spreadsheet chaos to a single source of truth',
    body: 'Your team has outgrown what a spreadsheet can hold — duplicate tabs, broken formulas, and version-control-by-filename. I design and build a custom internal system around how your business actually runs, not around a generic template.',
    tag: 'CORE OFFER',
  },
  {
    span: 'square',
    title: 'Backend REST APIs',
    body: 'APIs that connect the tools your business already uses and automate the handoffs generic SaaS can\u2019t.',
    tag: 'API DEVELOPMENT',
  },
  {
    span: 'square',
    title: 'Production deployment',
    body: 'Dockerized apps, Nginx reverse proxies, live Ubuntu servers. Not a prototype — a system your team runs on daily.',
    tag: 'DEVOPS',
  },
  {
    span: 'square',
    title: 'Workflow automation',
    body: 'Google Apps Script, Excel/Sheets pipelines, and scheduled jobs that remove manual busywork from processes your team repeats every day.',
    tag: 'AUTOMATION',
  },
  {
    span: 'wide',
    title: 'AI chatbots & LLM workflows',
    body: 'RAG-backed assistants that answer from your company\u2019s own documents and data — not generic ChatGPT. I build the retrieval pipeline, engineer the prompts for consistent outputs, and hand off a system your team can maintain without an ML hire.',
    tag: 'AI / LLM',
  },
  {
    span: 'square',
    title: 'Communication platform bots',
    body: 'Your internal system\u2019s data, available where your team already talks. Discord, Viber, and Telegram bots that pull reports, check stock levels, or push approval notifications — no browser tab required.',
    tag: 'BOTS',
  },
];

export const approachSteps = [
  {
    n: '01',
    title: 'Discovery call',
    body: 'We talk through the actual workflow — the spreadsheet, the bottleneck, who touches what and when. No generic requirements doc.',
  },
  {
    n: '02',
    title: 'System design',
    body: 'I map the data model and API surface to your real process, then walk it past you before writing a line of production code.',
  },
  {
    n: '03',
    title: 'Build & deploy',
    body: 'Containerized with Docker, served behind Nginx, live on your own Ubuntu server — not a local demo.',
  },
  {
    n: '04',
    title: 'Train & handoff',
    body: 'I sit with your team on the live system, fix what\u2019s awkward, and hand off something they actually know how to run.',
  },
];

export const skillGroups = [
  {
    label: 'Backend & APIs',
    items: ['Python (building & consuming REST APIs)', 'Postman'],
  },
  {
    label: 'Programming',
    items: ['Python', 'SQL'],
  },
  {
    label: 'Infrastructure & cloud',
    items: ['Docker', 'Nginx reverse proxies', 'Live Ubuntu server deployment', 'Git'],
  },
  {
    label: 'Automation & AI',
    items: ['Excel / Google Sheets automation', 'Google Apps Script', 'Prompt engineering', 'RAG', 'LangGraph', 'LLM APIs'],
  },
];

export const projects = [
  {
    title: 'Pioneer Centralized Routing System API',
    summary:
      'A centralized routing database API built for a real manufacturing business, replacing a manual, spreadsheet-based tracking process with a system built around their own workflow.',
    points: [
      'Containerized with Docker; Nginx reverse proxy for a secure, production-grade rollout on a live Ubuntu server',
      'Pending-approval workflow, product revision tracking, and single-record Excel export — all requested directly by the client',
      'Owned through multiple live redeployments and user training sessions',
    ],
    stack: ['Python', 'Docker', 'Nginx', 'Ubuntu', 'REST API'],
    href: 'https://github.com/Dev1ze32/pioneer_centralized_routing_api',
    status: '200 OK',
    method: 'POST',
    endpoint: '/api/routing/entries',
  },
  {
    title: 'Faculty Scheduling System API',
    summary:
      'A backend REST API that streamlines academic scheduling and faculty management for a university department.',
    points: [
      'Lets professors digitally upload and process work declarations',
      'Resolves an administrative scheduling bottleneck that previously ran on manual paperwork',
    ],
    stack: ['Python', 'SQL', 'REST API'],
    href: 'https://github.com/Dev1ze32/schedule_system_api_v2',
    status: '200 OK',
    method: 'GET',
    endpoint: '/api/schedule/declarations',
  },
];

export const experience = [
  {
    role: 'Developer Intern',
    org: 'Pioneer Adhesives Inc.',
    time: 'Internship',
    points: [
      'Developed an end-to-end routing solution to centralize fragmented Excel spreadsheets into a single source of truth',
      'Designed and deployed a robust PostgreSQL database to manage critical product routing workflows',
      'Built a full-stack system comprising a custom REST API and frontend interface to streamline internal operations',
    ],
  },
  {
    role: 'Chatbot Builder Intern',
    org: 'SOFI AI Tech Solution Inc.',
    time: '1 month',
    points: [
      'Developed and refined AI chatbot workflows using prompt engineering to improve response accuracy and interaction flow',
      'Worked hands-on with LLMs, structuring prompts for consistent, reliable outputs',
      'Extracted and organized data into Excel spreadsheets to support automation pipelines and reporting',
      'Learned the end-to-end AI deployment process, from conversation design to iterating on output quality',
    ],
  },
];

export const education = {
  degree: 'Bachelor of Science in Computer Engineering',
  school: 'University of Cabuyao',
  detail: 'Expected graduation: 2027',
};

export const businessValue = {
  eyebrow: 'Why it matters to your bottom line',
  title: "You're not buying software. You're buying time and certainty back.",
  body: "Every hour your team spends reconciling spreadsheets, chasing the \u2018latest\u2019 version, or re-checking numbers by hand is an hour that isn\u2019t going toward the work that actually grows your business.",
  points: [
    {
      title: 'Stop losing hours to manual busywork',
      body: 'Every process that lives in a spreadsheet needs someone to update it, copy it, and double-check it by hand. A custom system does that automatically, so your team spends time on decisions, not data entry.',
      icon: 'Clock',
    },
    {
      title: 'Stop paying for spreadsheet mistakes',
      body: 'A single overwritten formula or an outdated copy of a file can cost real money \u2014 a missed approval, a duplicated order, a wrong number sent to a client. A structured system removes that risk at the source.',
      icon: 'ShieldCheck',
    },
    {
      title: 'One system everyone actually trusts',
      body: 'No more \u201cwhich version is correct\u201d across five email threads. Ops, management, and everyone in between look at the same live source of truth.',
      icon: 'Database',
    },
    {
      title: 'Built to grow with you, not against you',
      body: 'Off-the-shelf tools charge you more and bend less the bigger you get. A system built around your actual workflow scales with your team instead of forcing your team to work around it.',
      icon: 'TrendingUp',
    },
  ],
};
