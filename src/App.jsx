import React, { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  Check,
  Code2,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Play,
  ShieldCheck,
  Sparkles,
  Sun,
  X,
} from 'lucide-react';

const navItems = ['About', 'Experience', 'Skills', 'Work', 'Contact'];
const sectionIds = ['about', 'experience', 'skills', 'work', 'resume', 'contact'];

const skills = [
  {
    title: 'Testing',
    items: ['Functional', 'Regression', 'Smoke', 'Sanity', 'Integration', 'Exploratory', 'UAT', 'End-to-End', 'Database Testing'],
  },
  {
    title: 'Automation',
    items: ['Selenium WebDriver', 'Java', 'TestNG', 'Cucumber', 'Playwright with TypeScript'],
  },
  {
    title: 'API & Database',
    items: ['Postman', 'REST APIs', 'GraphQL APIs', 'SQL', 'MySQL', 'MongoDB'],
  },
  {
    title: 'CRM',
    items: ['Salesforce CRM', 'Microsoft Dynamics 365'],
  },
  {
    title: 'Tools',
    items: ['Jira', 'Zephyr', 'Jenkins', 'Git', 'GitHub', 'Confluence', 'Chrome DevTools', 'Draw.io'],
  },
  {
    title: 'Methodologies',
    items: ['Agile Scrum', 'SDLC', 'STLC', 'Defect Lifecycle Management', 'Defect Triage'],
  },
  {
    title: 'AI & Problem Solving',
    items: ['AI-Assisted Testing', 'Prompt Engineering for Testing', 'Root Cause Analysis'],
    wide: true,
  },
];

const roles = [
  {
    title: 'QA Engineer',
    company: 'Dhan AI',
    domain: 'Telecom & CRM',
    period: 'May 2025 — Present',
    current: true,
    points: [
      { text: 'Own QA across the delivery lifecycle, from requirement analysis and test planning through release validation.' },
      { strong: 'Designed and executed 2,000+ test cases', text: ' spanning functional, regression, integration, API, and end-to-end coverage.' },
      { strong: 'Automated 190+ API scenarios', text: ' in Postman, including chained workflows, data-driven validation, and pricing and business-rule checks.' },
      { text: 'Built UI automation with Playwright, TypeScript, and the Page Object Model to strengthen regression coverage.' },
      { text: 'Established QA process for a product built from the ground up — test planning, traceability, defect management, and release validation.' },
      { text: 'Partner with engineering, architecture, and product teams to surface risk and drive complex defects to resolution.' },
    ],
    tags: ['Playwright', 'TypeScript', 'Postman', 'API automation', 'AI-assisted testing'],
  },
  {
    title: 'Associate QA Engineer',
    company: 'Accenture',
    domain: 'Enterprise web applications',
    period: 'June 2023 — June 2024',
    current: false,
    points: [
      { text: 'Delivered end-to-end QA for customer-facing web applications in an Agile environment.' },
      { strong: 'Designed and executed 100+ test cases', text: ' across functional, regression, integration, and end-to-end scenarios.' },
      { text: 'Built and maintained UI automation with Selenium WebDriver, Java, TestNG, and Cucumber.' },
      { text: 'Translated business requirements into positive, negative, boundary, and end-to-end test scenarios.' },
      { text: 'Tracked defects through the full lifecycle and validated fixes with development teams.' },
      { text: 'Improved regression coverage through reusable automation components.' },
    ],
    tags: ['Selenium WebDriver', 'Java', 'TestNG', 'Cucumber', 'Agile'],
  },
];

const projects = [
  {
    period: 'May 2025 — Present',
    title: 'Telecom Customer Self-Service Portal',
    text: 'Tested telecom onboarding, service management, and customer account workflows, including API validation, backend verification, and release-readiness testing.',
    tags: ['Telecom', 'API testing', 'Backend validation'],
  },
  {
    period: 'April 2026',
    title: 'Sentence Surgeon',
    text: 'Tested an AI-powered text-correction application through exploratory and end-to-end testing, using AI-assisted techniques to expand coverage and identify edge cases.',
    tags: ['AI-assisted testing', 'Exploratory', 'End-to-end'],
  },
  {
    period: 'September 2023 — June 2024',
    title: 'Enterprise Vacation & Resort Booking',
    text: 'Automated booking validation and promotional-offer scenarios, tested across multiple environments, and supported release-validation activities.',
    tags: ['Selenium', 'Java', 'Release validation'],
  },
];

const resumeFile = 'Sireesha Kandula - Resume.pdf';
const resumeHref = `${import.meta.env.BASE_URL}assets/${encodeURIComponent(resumeFile)}`;

const wrap = 'mx-auto w-[calc(100%_-_32px)] max-w-[560px] md:w-[calc(100%_-_48px)] md:max-w-[1120px]';const eyebrow = 'font-mono text-[10px] uppercase tracking-label text-accent-2';
const sectionPad = 'py-[75px] md:py-[112px]';
const tagClass = 'rounded-sm bg-surface-2 px-[9px] py-1.5 font-mono text-[9px] text-muted';
const cardBase = 'rounded-md border border-line';
const primaryButton =
  'inline-flex min-h-[42px] items-center justify-center gap-2 rounded-[5px] bg-gradient-to-r from-accent to-[#6a9bff] px-[17px] text-xs font-bold text-white shadow-button transition-transform hover:-translate-y-0.5';
const quietButton =
  'inline-flex min-h-[42px] items-center justify-center gap-2 rounded-[5px] border border-line px-[17px] text-xs font-bold text-muted transition-all hover:-translate-y-0.5 hover:border-accent hover:text-content';

function SectionHeading({ number, title, note }) {
  return (
    <div className="mb-7 flex flex-wrap items-baseline gap-x-4 gap-y-3 md:mb-11 md:flex-nowrap">
      <span className={eyebrow}>{number} /</span>
      <h2 className="m-0 text-[27px] tracking-[-0.06em] md:text-sectionTitle">{title}</h2>
      {note ? <span className="w-full text-[11px] text-muted md:ml-auto md:w-auto">{note}</span> : null}
    </div>
  );
}

function App() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  }, [dark]);

  useEffect(() => {
    const updateActiveSection = () => {
      const marker = window.scrollY + window.innerHeight * 0.3;
      const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
      let current = sectionIds[0];

      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (!element) return;
        const top = element.getBoundingClientRect().top + window.scrollY;
        if (top <= marker) current = id;
      });

      setActiveSection(atBottom ? sectionIds[sectionIds.length - 1] : current);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const navLinkClass = (isActive) =>
    [
      'relative px-3 py-3 transition-colors hover:text-content focus-visible:text-content md:p-0',
      isActive
        ? "rounded-md bg-accent/[0.12] text-content md:rounded-none md:bg-transparent md:after:absolute md:after:-bottom-[7px] md:after:left-0 md:after:right-0 md:after:h-0.5 md:after:rounded-sm md:after:bg-gradient-to-r md:after:from-accent md:after:to-accent-2 md:after:content-['']"
        : '',
    ].join(' ');

  return (
    <div className="overflow-x-clip">
      <a className="fixed left-4 top-[-50px] z-20 rounded bg-content px-4 py-2.5 text-bg focus:top-2.5" href="#main">
        Skip to content
      </a>

      <header className="sticky top-0 z-50 border-b border-line bg-header backdrop-blur-xl">
        <div className={`${wrap} relative flex h-[67px] items-center justify-between md:h-[78px]`}>
          <a className="flex items-center gap-[11px] text-[13px] font-bold tracking-[-0.02em]" href="#home" aria-label="Sireesha Kandula home">
            <span className="grid h-[31px] w-[31px] place-items-center rounded-[9px] bg-gradient-to-br from-accent to-accent-2 text-[11px] text-white">SK</span>
            <span>Sireesha Kandula</span>
          </a>

          <button
            className="grid place-items-center p-1.5 text-muted hover:text-content md:hidden"
            type="button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <nav
            className={`${menuOpen ? 'flex' : 'hidden'} absolute left-0 right-0 top-[62px] flex-col items-stretch rounded-md border border-line bg-surface p-2 text-xs font-semibold text-muted shadow-menu md:static md:flex md:flex-row md:items-center md:gap-[27px] md:rounded-none md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
            aria-label="Primary navigation"
          >
            {navItems.map((item) => {
              const id = item.toLowerCase();
              const isActive = activeSection === id;
              return (
                <a key={item} href={`#${id}`} className={navLinkClass(isActive)} aria-current={isActive ? 'true' : undefined} onClick={closeMenu}>
                  {item}
                </a>
              );
            })}
            <a
              href="#resume"
              className={`flex items-center gap-[5px] px-3 py-3 text-content transition-colors md:border-b md:border-accent md:p-0 md:pb-[3px] ${
                activeSection === 'resume' ? 'rounded-md bg-accent/[0.12] md:rounded-none md:border-b-2 md:bg-transparent' : ''
              }`}
              aria-current={activeSection === 'resume' ? 'true' : undefined}
              onClick={closeMenu}
            >
              Resume <ArrowUpRight size={14} />
            </a>
            <button
              className="grid w-fit place-items-center p-3 text-muted hover:text-content md:p-1.5"
              type="button"
              onClick={() => setDark(!dark)}
              aria-label={`Switch to ${dark ? 'light' : 'dark'} theme`}
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </nav>
        </div>
      </header>

      <main id="main">
        <section id="about">
          <div id="home" className={`${wrap} grid items-center gap-10 pb-[60px] pt-[58px] md:min-h-[600px] md:grid-cols-[1.03fr_0.97fr] md:pb-[76px] md:pt-[30px]`}>
            <div className="md:pt-[18px]">
              <div className={`${eyebrow} flex items-center gap-[9px]`}>
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-positive shadow-[0_0_0_4px_rgba(123,224,173,.1)]" />
                Open to new opportunities
              </div>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-label text-accent-2">QA ENGINEER / SDET / BA-READY</p>
              <h1 className="my-[22px] text-display-sm font-extrabold md:text-display">
                I build confidence
                <br />
                <em className="not-italic text-accent">before release.</em>
              </h1>
              <p className="max-w-lede text-base leading-[1.8] text-muted">
                I enjoy breaking things to understand them better, thinking beyond the happy path, and uncovering the gaps that can impact real users.
              </p>
              <div className="mb-6 mt-[30px] flex items-center gap-[13px]">
                <a className={primaryButton} href="#work">
                  Explore my work <ArrowUpRight size={17} />
                </a>
                <a className={quietButton} href="#contact">
                  <Mail size={17} /> Get in touch
                </a>
              </div>
              
            </div>

            <div className="relative mt-[30px] grid min-h-[420px] place-items-center md:mt-0 md:min-h-[430px]" aria-label="Quality engineering capability overview">
              <div className="absolute h-[390px] w-[390px] rounded-full bg-[radial-gradient(circle,rgba(92,157,255,.19),rgba(124,112,255,.06)_47%,transparent_70%)] blur-[7px]" />
              <div className="absolute h-[430px] w-[430px] rounded-full border border-accent/30" />
              <div className="absolute h-[330px] w-[330px] rotate-45 skew-x-[10deg] rounded-full border border-accent-2/20" />

              <div className="z-10 w-[87%] rounded-[9px] border border-line bg-surface-2/90 p-[22px] shadow-card backdrop-blur-lg md:w-[365px]">
                <div className="flex justify-between font-mono text-[9px] uppercase tracking-label text-muted">
                  <span>Quality system</span>
                  <span className="flex items-center gap-1.5 text-positive">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-positive" /> Live
                  </span>
                </div>
                <div className="flex items-center gap-[17px] pb-6 pt-[27px]">
                  <div className="text-[53px] font-extrabold tracking-tightest">
                    QA<span className="text-accent">+</span>
                  </div>
                  <div>
                    <strong className="block text-sm">Confidence by design</strong>
                    <small className="mt-1.5 block text-[11px] text-muted">Every layer has a signal.</small>
                  </div>
                </div>
                <div className="border-t border-line">
                  {['UI automation', 'API validation', 'Data integrity'].map((signal, index) => (
                    <div className="flex min-h-[45px] items-center gap-2.5 border-b border-line text-xs" key={signal}>
                      <span className="grid h-[21px] w-[21px] place-items-center rounded-full bg-positive/10 text-positive">
                        <Check size={13} />
                      </span>
                      <span>{signal}</span>
                      <b className="ml-auto font-mono text-[10px] font-normal text-muted">{['Playwright', 'Coverage', 'SQL'][index]}</b>
                    </div>
                  ))}
                </div>
                <div className="mb-2.5 mt-[23px] flex gap-1">
                  <span className="h-1 flex-1 rounded bg-accent" />
                  <span className="h-1 flex-1 rounded bg-accent" />
                  <span className="h-1 flex-1 rounded bg-accent" />
                  <span className="h-1 flex-1 rounded bg-accent" />
                  <span className="h-1 flex-1 rounded bg-accent-2" />
                  <span className="h-1 flex-1 rounded bg-line" />
                  <span className="h-1 flex-1 rounded bg-line" />
                </div>
                <div className="flex justify-between text-[10px] text-muted">
                  <span>Release readiness</span>
                  <strong className="font-medium text-positive">Continuous</strong>
                </div>
              </div>

              <div className="absolute right-1 top-12 z-20 hidden items-center gap-[7px] rounded-md border border-line bg-surface-2 px-[13px] py-2.5 text-[10px] shadow-float md:flex">
                <Code2 size={15} className="text-accent-2" /> Automation first
              </div>
              <div className="absolute bottom-12 left-0 z-20 hidden items-center gap-[7px] rounded-md border border-line bg-surface-2 px-[13px] py-2.5 text-[10px] shadow-float md:flex">
                <Sparkles size={15} className="text-accent-2" /> Clear signals
              </div>
            </div>
          </div>

          <div className="border-y border-line bg-surface">
            <div className={`${wrap} grid grid-cols-2 items-center gap-[25px] py-7 md:min-h-[124px] md:grid-cols-[repeat(3,1fr)_1.65fr] md:py-0`}>
              {[
                ['2+', 'years in QA'],
                ['2', 'quality-focused teams'],
                ['3', 'featured projects'],
              ].map(([value, label]) => (
                <div key={label} className="md:flex md:items-baseline md:gap-2.5">
                  <strong className="text-[28px] tracking-tightest">{value}</strong>
                  <span className="mt-1.5 block text-[11px] text-muted md:mt-0">{label}</span>
                </div>
              ))}
              <p className="col-span-2 m-0 border-t border-line pt-5 text-xs leading-[1.7] text-muted md:col-span-1 md:border-l md:border-t-0 md:pl-[31px] md:pt-0">
                Good testing is not a gate at the end.
                <br />
                <b className="font-semibold text-content">It is a practice throughout.</b>
              </p>
            </div>
          </div>

          <div className={`${wrap} ${sectionPad}`}>
            <SectionHeading number="01" title="About" note="The approach behind the work" />
            <div className="grid gap-[45px] md:grid-cols-2 md:gap-[100px]">
              <div>
                <p className="mb-[23px] max-w-[450px] text-[27px] leading-[1.25] tracking-[-0.055em] md:text-[30px]">
                  I translate complex product behavior into <span className="text-accent">clear, testable confidence.</span>
                </p>
                <p className="max-w-[450px] text-sm leading-[1.85] text-muted">
                  My experience spans functional, regression, backend, API, integration, and automation testing. I work across CRM workflows, enterprise systems, and release validation to help teams identify risk early and deliver dependable software.
                </p>
              </div>
              <div className="border-t border-line">
                {[
                  ['01', 'Be curious', 'Explore beyond the happy path and understand why a system behaves the way it does.'],
                  ['02', 'Make it repeatable', 'Turn valuable checks into automation that gives teams fast, useful feedback.'],
                  ['03', 'Communicate clearly', 'Make risks, defects, and decisions easy for the whole team to act on.'],
                ].map(([num, title, text]) => (
                  <div key={num} className="grid grid-cols-[34px_1fr] border-b border-line pb-[18px] pt-5">
                    <span className="font-mono text-[10px] text-accent-2">{num}</span>
                    <h3 className="mb-[5px] text-sm">{title}</h3>
                    <p className="col-start-2 m-0 max-w-[350px] text-xs leading-[1.65] text-muted">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className={`border-y border-line bg-surface ${sectionPad}`}>
          <div className={wrap}>
            <SectionHeading number="02" title="Experience" note="A record of reliable delivery" />
            <div className="grid gap-4">
              {roles.map((role) => (
                <article
                  key={role.company}
                  className={`rounded-md border p-[21px] transition-all hover:translate-x-1 md:px-[29px] md:pb-[23px] md:pt-[26px] ${
                    role.current ? 'border-accent/40 bg-gradient-to-br from-accent/10 to-transparent' : 'border-line hover:border-accent'
                  }`}
                >
                  <div className="mb-[19px] flex font-mono text-[9px] uppercase tracking-label text-muted md:mb-[27px]">
                    {role.current ? <span className="text-positive">Current role</span> : null}
                    <span className="ml-auto">{role.period}</span>
                  </div>

                  <div className="grid gap-5 md:grid-cols-[minmax(0,230px)_1fr] md:gap-[34px]">
                    <div>
                      <h3 className="mb-[7px] text-xl tracking-[-0.04em]">{role.title}</h3>
                      <p className="text-xs text-accent-2">
                        {role.company} <span className="mx-[5px] text-muted">·</span> {role.domain}
                      </p>
                    </div>

                    <ul className="m-0 grid list-none gap-2.5 p-0">
                      {role.points.map((point) => (
                        <li
                          key={(point.strong || '') + point.text}
                          className="relative pl-[18px] text-xs leading-[1.7] text-muted before:absolute before:left-0 before:top-[8px] before:h-[4px] before:w-[4px] before:rounded-full before:bg-accent-2 before:content-['']"
                        >
                          {point.strong ? <strong className="font-semibold text-content">{point.strong}</strong> : null}
                          {point.text}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-[23px] flex flex-wrap gap-[7px]">
                    {role.tags.map((tag) => (
                      <span key={tag} className={tagClass}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className={`${wrap} ${sectionPad}`}>
          <SectionHeading number="03" title="Capabilities" note="Tools are the how. Thinking is the why." />
          <div className="grid grid-cols-1 border-l border-t border-line sm:grid-cols-2 md:grid-cols-3">
            {skills.map((skill, index) => (
              <article
                key={skill.title}
                className={`border-b border-r border-line p-5 transition-colors hover:bg-surface md:p-[22px] ${
                  skill.wide ? 'sm:col-span-2 md:col-span-3' : ''
                }`}
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[10px] text-accent-2">0{index + 1}</span>
                  <h3 className="m-0 text-[15px] tracking-[-0.03em]">{skill.title}</h3>
                </div>
                <ul className="m-0 mt-4 flex list-none flex-wrap gap-[7px] p-0">
                  {skill.items.map((item) => (
                    <li key={item} className={tagClass}>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <h3 className="mb-4 text-[19px] tracking-[-0.04em]">Education</h3>
            <div className="grid grid-cols-1 items-start gap-3 border-b border-line py-6 md:grid-cols-[180px_minmax(0,1fr)_140px] md:gap-8">
              <p className="m-0 font-mono text-[13px] font-semibold tracking-wide text-accent-2">2019 - 2023</p>
              <div>
                <h4 className="m-0 text-[16px] font-semibold leading-snug">B.Tech in Computer Science and Engineering</h4>
                <p className="mb-0 mt-2 text-[13px] text-muted">ISTS Women&apos;s Engineering College</p>
              </div>
              <p className="m-0 text-[11px] text-muted md:pt-1 md:text-right">Graduate</p>
            </div>
          </div>
        </section>

        <section id="work" className={`border-y border-line bg-surface ${sectionPad}`}>
          <div className={wrap}>
            <SectionHeading number="04" title="Projects" note="Practical quality engineering across domains" />
            <div className="grid gap-[15px] md:grid-cols-3">
              {projects.map((project) => (
                <article key={project.title} className="flex min-h-[285px] flex-col rounded-md border border-line bg-gradient-to-br from-accent/10 to-transparent p-6 transition-all hover:-translate-y-1 hover:border-accent md:min-h-[305px]">
                  <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-label text-muted">
                    <span className="grid h-[34px] w-[34px] place-items-center rounded-full bg-accent text-white">
                      <Play size={15} />
                    </span>
                    <span>{project.period}</span>
                  </div>
                  <h3 className="mb-[13px] mt-7 text-[19px] leading-[1.3] tracking-[-0.04em]">{project.title}</h3>
                  <p className="m-0 text-xs leading-[1.72] text-muted">{project.text}</p>
                  <div className="mt-auto flex flex-wrap gap-[7px] pt-5">
                    {project.tags.map((tag) => (
                      <span key={tag} className={tagClass}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12 pt-8">
              <h3 className="mb-4 text-[19px] tracking-[-0.04em]">Certifications</h3>
              <div className="grid gap-[15px] md:grid-cols-2">
                <div className={`${cardBase} p-6`}>
                  <h4 className="mb-1.5 mt-0 text-[15px]">Accenture Tech Expressway</h4>
                  <p className="m-0 text-[11px] text-muted">Completed six months of QA Engineer training at Accenture.</p>
                </div>
                <div className={`${cardBase} p-6`}>
                                    <h4 className="mb-1.5 mt-0 text-[15px]">Fundamentals of Generative AI</h4>
                  <p className="m-0 text-[11px] text-muted">Certification covering foundational concepts in generative AI.</p>
                  <a className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold text-accent-2 hover:text-content" href="https://www.guvi.in/verify-certificate?id=K02I78PZ33635M11k1" target="_blank" rel="noreferrer">Verify certificate <ArrowUpRight size={14} /></a>
                </div>
              </div>
            </div>          </div>
        </section>




        <section id="resume" className={`${wrap} grid items-center gap-[45px] py-20 md:grid-cols-2 md:gap-[50px] md:py-[115px]`}>
          <div>
            <span className={eyebrow}>Ready when you are</span>
            <h2 className="my-[19px] text-[47px] leading-[1.05] tracking-[-0.065em]">
              Let&apos;s make quality
              <br />
              <em className="not-italic text-accent">visible.</em>
            </h2>
            <p className="mb-[25px] text-[13px] text-muted">
              For the full experience, tools, education, and professional background, view or download my latest resume.
            </p>
            <div className="flex flex-wrap items-center gap-[13px]">
              <a className={primaryButton} href={resumeHref} target="_blank" rel="noreferrer">
                <ExternalLink size={17} /> View resume
              </a>
              <a className={quietButton} href={resumeHref} download={resumeFile}>
                <Download size={17} /> Download resume
              </a>
            </div>
          </div>
          <div className="relative h-[295px] w-[245px] rotate-[4deg] justify-self-center border border-line bg-surface-2 p-5 shadow-resume md:justify-self-end">
            <div className="pointer-events-none absolute inset-[9px] border border-line" />
            <div className="flex justify-between font-mono text-[8px] uppercase tracking-label text-muted">
              <span className="text-base font-bold text-accent">SK</span>
              <span>Resume / 2026</span>
            </div>
            <div className="mb-5 mt-[62px] flex flex-col gap-1.5">
              <i className="h-[3px] w-[88%] bg-line" />
              <i className="h-[3px] w-[62%] bg-line" />
              <i className="h-[3px] w-[74%] bg-line" />
              <i className="h-[3px] w-[48%] bg-line" />
              <i className="h-[3px] w-[80%] bg-line" />
            </div>
            <strong className="block text-[26px] leading-[0.95] tracking-tightest text-content">
              Sireesha
              <br />
              Kandula
            </strong>
            <small className="font-mono text-[8px] uppercase tracking-label text-accent">QA Engineer</small>
          </div>
        </section>

        <section
          id="contact"
          className="bg-[radial-gradient(circle_at_78%_15%,rgba(92,157,255,.2),transparent_35%),linear-gradient(115deg,#171c36,#242251_70%,#151832)] py-[75px] text-white md:py-[98px]"
        >
          <div className={`${wrap} grid gap-[45px] md:grid-cols-2 md:gap-20`}>
            <div>
              <span className="font-mono text-[10px] uppercase tracking-label text-[#a9b5ff]">05 / Contact</span>
              <h2 className="mb-0 mt-5 text-[47px] leading-none tracking-tightest md:text-[54px]">
                Have a quality
                <br />
                <em className="not-italic text-accent">challenge?</em>
              </h2>
            </div>
            <div className="pt-[27px]">
              <p className="max-w-[360px] text-[13px] leading-[1.8] text-[#c1c6da]">
                I&apos;m open to conversations about QA engineering, automation, API testing, CRM quality, and building more reliable products.
              </p>
              <a className="mb-[30px] mt-5 inline-flex items-center gap-[9px] border-b border-[#8588df] pb-2 text-sm tracking-[-0.04em] text-white md:text-lg" href="mailto:sireesha.kandula2001@gmail.com">
                sireesha.kandula2001@gmail.com <ArrowUpRight size={18} />
              </a>
              <div className="flex gap-[22px]">
                <a className="flex items-center gap-[7px] text-[11px] text-[#c1c6da] hover:text-white" href="https://github.com/SireeshaKandula23" target="_blank" rel="noreferrer">
                  <Github size={17} /> GitHub
                </a>
                <a className="flex items-center gap-[7px] text-[11px] text-[#c1c6da] hover:text-white" href="https://www.linkedin.com/in/sireesha-kandula/" target="_blank" rel="noreferrer">
                  <Linkedin size={17} /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={`${wrap} flex min-h-[70px] flex-wrap items-center justify-between gap-3 py-5 text-[10px] text-muted md:flex-nowrap md:py-0`}>
        <span>© 2026 Sireesha Kandula</span>
        <span>Designed for clarity. Built for confidence.</span>
        <a className="text-content" href="#home">
          Back to top ↑
        </a>
      </footer>
    </div>
  );
}

export default App;


