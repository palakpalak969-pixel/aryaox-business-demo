
import { useEffect, useRef, useState } from 'react';
import './App.css';

const ASSETS = {
  emblem:
    'https://conference.railanalysis.com/wp-content/uploads/2026/03/8-award-logo-2.png',
  awardWall:
    'https://conference.railanalysis.com/wp-content/uploads/2026/01/2026-are-as-under_-Nomination-Award-logo-graphic-Google-Slides-2-scaled.png',
  photos: [
    'https://conference.railanalysis.com/wp-content/uploads/2026/02/DSC01191-1024x683.jpg',
    'https://conference.railanalysis.com/wp-content/uploads/2026/02/DSC02211-1024x683.jpg',
    'https://conference.railanalysis.com/wp-content/uploads/2026/02/DSC01138-1024x683.jpg',
    'https://conference.railanalysis.com/wp-content/uploads/2026/02/DSC00919-1024x683.jpg',
    'https://conference.railanalysis.com/wp-content/uploads/2026/02/DSC00755-1024x683.jpg',
    'https://conference.railanalysis.com/wp-content/uploads/2026/02/DSC00895-1024x683.jpg',
    'https://conference.railanalysis.com/wp-content/uploads/2026/02/DSC00818-1024x683.jpg',
    'https://conference.railanalysis.com/wp-content/uploads/2026/02/DSC00797-1024x683.jpg',
  ],
};

const WINNERS = [
  ['SAIL', 'Strategic Steel Contribution towards National Rail Connectivity'],
  ['IRCON', 'High-Altitude Rail Electrification'],
  ['RITES', 'Sustainable Engineering for Rail Sector'],
  ['IRCTC', 'Digital Excellence in Passenger Ticketing Security'],
  ['CRIS', 'Digital Transformation for Rail Sector'],
  ['Kolkata Metro', 'India’s First Underwater Metro Line'],
  ['Kochi Metro', 'Green Mobility for Transit Systems'],
  ['Integral Coach Factory', 'Indigenous Semi-High-Speed Trainset Engineering'],
  ['Vossloh India', 'Rail Tracks, Sleepers, Parts and Components'],
  ['Knorr-Bremse India', 'Underframe Components & Engineering'],
  ['Hitachi Rail', 'IT / IoT Solutions – Digital India'],
  ['Alstom Transport India', 'Rolling Stock Parts & Components'],
  ['Siemens Mobility', 'Safety, Security, Fire & Station Solutions'],
  ['Tata Consultancy Services', 'New Technology Introduction'],
  ['Autodesk India', 'BIM, GIS Mapping and Monitoring Solutions'],
  ['Fluid Controls', 'Rail Analysis Achiever of the Year'],
];

const SESSIONS = [
  {
    number: '01',
    title: 'Driving the Next Generation of Rail & Metro',
    subtitle: 'Rolling Stock · Manufacturing · Engineering',
    details: [
      'Next-generation rolling stock manufacturing',
      'Advanced rolling stock design and energy efficiency',
      'Indigenization and Make in India',
      'Track, sleeper, underframe and bogie engineering',
      'Advanced manufacturing and fabrication technologies',
    ],
  },
  {
    number: '02',
    title: 'Enabling the Future',
    subtitle: 'Safety · Automation · Predictive Maintenance',
    details: [
      'Kavach and advanced railway safety technologies',
      'AI-enabled predictive maintenance',
      'Smart mobility through AI and IoT',
      'Industrial automation and robotics',
      'Passenger comfort and energy-efficient HVAC',
    ],
  },
  {
    number: '03',
    title: 'Digital Railways & Intelligent Infrastructure',
    subtitle: 'AI · Signalling · Connectivity · Sustainability',
    details: [
      'Artificial intelligence for railway operations',
      'Digital twins and asset lifecycle management',
      'Smart signalling and railway connectivity',
      'Smart stations and sustainable mobility',
      'Electrification and renewable energy integration',
    ],
  },
  {
    number: '04',
    title: 'Rail & Metro Awards and Felicitation Ceremony',
    subtitle: 'Innovation · Excellence · Industry Recognition',
    details: [
      'Rolling stock and manufacturing',
      'Infrastructure and engineering',
      'Safety and digitalisation',
      'Signalling and sustainability',
      'Passenger-centric solutions',
    ],
  },
];

const MOMENTS = [
  {
    image: ASSETS.photos[0],
    title: 'The summit experience',
    label: 'THE 2026 EDITION',
    number: '01',
  },
  {
    image: ASSETS.photos[1],
    title: 'Recognising excellence',
    label: 'AWARDS & FELICITATION',
    number: '02',
  },
  {
    image: ASSETS.photos[2],
    title: 'Industry in focus',
    label: 'TECHNOLOGY & INNOVATION',
    number: '03',
  },
  {
    image: ASSETS.photos[3],
    title: 'Celebrating achievement',
    label: 'THE AWARD WINNERS',
    number: '04',
  },
  {
    image: ASSETS.photos[4],
    title: 'Ideas and conversations',
    label: 'INDUSTRY NETWORKING',
    number: '05',
  },
  {
    image: ASSETS.photos[5],
    title: 'The people behind progress',
    label: 'INDUSTRY LEADERS',
    number: '06',
  },
];

const TESTIMONIALS = [
  {
    quote:
      'It’s always a pleasure to work with your team and happy to see the work you do for the mobility sector.',
    company: 'Alstom',
  },
  {
    quote:
      'Thanks for this wonderful opportunity and prestigious recognition.',
    company: 'Hitachi Rail',
  },
  {
    quote:
      'Congratulations to you and the entire Rail Analysis Team for an incredible event. It was well organised.',
    company: 'Webtec',
  },
  {
    quote:
      'We have returned to Italy safely and thanks for the fantastic event.',
    company: 'Railc Italia',
  },
];

function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (!('IntersectionObserver' in window)) {
      element.classList.add('is-visible');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('is-visible');
          observer.unobserve(element);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function Eyebrow({ children, light = false }) {
  return (
    <div className={`eyebrow ${light ? 'eyebrow-light' : ''}`}>
      <span className="eyebrow-line" />
      {children}
    </div>
  );
}

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true">{diagonal ? '↗' : '→'}</span>;
}

function Counter({ value, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let frame;
    let started = false;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started) return;
      started = true;

      const duration = 1600;
      const start = performance.now();

      const animate = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4);
        setCount(Math.round(value * eased));

        if (progress < 1) {
          frame = requestAnimationFrame(animate);
        }
      };

      frame = requestAnimationFrame(animate);
      observer.disconnect();
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <span ref={ref} className="counter-number">
      {count.toLocaleString('en-IN')}
      {suffix}
    </span>
  );
}

function RailGraphic() {
  return (
    <div className="rail-graphic" aria-hidden="true">
      <div className="rail-graphic-glow" />
      <div className="rail-track">
        <div className="rail-track-line rail-track-left" />
        <div className="rail-track-line rail-track-right" />
        {Array.from({ length: 13 }).map((_, index) => (
          <span
            key={index}
            className="rail-sleeper"
            style={{ '--i': index }}
          />
        ))}
      </div>
      <div className="rail-graphic-label">
        <span>RAIL / 2027</span>
        <span>ENGINEERING THE FUTURE</span>
      </div>
    </div>
  );
}

function DataVisual() {
  const bars = [34, 48, 40, 68, 57, 82, 72, 96, 87, 100];

  return (
    <div className="data-visual" aria-label="Illustrative rail industry data graphic">
      <div className="data-visual-top">
        <span>INDUSTRY MOMENTUM</span>
        <span className="data-live">RAIL / METRO</span>
      </div>
      <div className="data-chart">
        <div className="chart-y-labels">
          <span>100</span>
          <span>75</span>
          <span>50</span>
          <span>25</span>
          <span>00</span>
        </div>
        <div className="chart-bars">
          {bars.map((height, index) => (
            <div className="chart-bar-wrap" key={index}>
              <span
                className="chart-bar"
                style={{
                  '--bar-height': `${height}%`,
                  '--bar-delay': `${index * 90}ms`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="chart-x-labels">
        <span>ENGINEERING</span>
        <span>TECHNOLOGY</span>
        <span>INFRASTRUCTURE</span>
      </div>
      <p className="chart-disclaimer">
        VISUAL REPRESENTATION · NOT MEASURED INDUSTRY DATA
      </p>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSession, setActiveSession] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activePhoto, setActivePhoto] = useState(null);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = activePhoto !== null ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [activePhoto]);

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === 'Escape') setActivePhoto(null);
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <main className="ra-site" id="top">
      {/* ANNOUNCEMENT */}
      <div className="ra-announcement">
        <span className="announcement-dot" />
        <span>THE 8TH EDITION · 29 JANUARY 2027</span>
        <a href="#register">
          BE PART OF THE SUMMIT <Arrow diagonal />
        </a>
      </div>

      {/* HEADER */}
      <header className="ra-header">
        <a href="#top" className="ra-brand" aria-label="Rail Analysis Summit">
          <img src={ASSETS.emblem} alt="8th Rail Analysis Innovation and Excellence Summit 2027" />
          <span className="brand-divider" />
          <span className="brand-name">
            <strong>RAIL ANALYSIS</strong>
            <small>INNOVATION & EXCELLENCE SUMMIT</small>
          </span>
        </a>

        <button
          className="ra-menu-toggle"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>

        <nav className={`ra-nav ${menuOpen ? 'ra-nav-open' : ''}`}>
          <a href="#summit" onClick={closeMenu}>The Summit</a>
          <a href="#conference" onClick={closeMenu}>Conference</a>
          <a href="#awards" onClick={closeMenu}>Awards</a>
          <a href="#gallery" onClick={closeMenu}>Gallery</a>
          <a href="#partners" onClick={closeMenu}>Industry</a>
          <a className="ra-nav-cta" href="#register" onClick={closeMenu}>
            Register <Arrow diagonal />
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="ra-hero">
        <div className="hero-photo">
          <img src={ASSETS.photos[0]} alt="Rail Analysis 2026 summit event stage" />
        </div>
        <div className="hero-shade" />
        <div className="hero-grain" />
        <div className="hero-orbit hero-orbit-one" />
        <div className="hero-orbit hero-orbit-two" />

        <div className="hero-content">
          <Eyebrow light>INDIA'S RAIL & METRO INDUSTRY GATHERING</Eyebrow>
          <div className="hero-edition">THE 8TH EDITION / NEW DELHI</div>
          <h1>
            WHERE THE
            <br />
            INDUSTRY
            <br />
            <em>moves forward.</em>
          </h1>
          <p className="hero-description">
            Celebrating innovation and excellence in the rail and metro industry.
            Bringing together the people, organisations and ideas shaping
            tomorrow's mobility.
          </p>

          <div className="hero-actions">
            <a className="ra-button ra-button-gold" href="#register">
              Explore the summit <Arrow diagonal />
            </a>
            <a className="ra-button ra-button-glass" href="#gallery">
              Discover past editions <Arrow />
            </a>
          </div>
        </div>

        <div className="hero-emblem">
          <img src={ASSETS.emblem} alt="" />
        </div>

        <div className="hero-bottom">
          <div className="hero-detail">
            <span>DATE</span>
            <strong>29 JANUARY 2027</strong>
          </div>
          <div className="hero-detail">
            <span>VENUE</span>
            <strong>HOTEL LE MÉRIDIEN, NEW DELHI</strong>
          </div>
          <div className="hero-detail">
            <span>TIME</span>
            <strong>09:30 AM — 05:30 PM</strong>
          </div>
          <a href="#summit" className="hero-scroll">
            SCROLL TO EXPLORE <span>↓</span>
          </a>
        </div>
        <div className="hero-index">RA / 08 — 2027</div>
      </section>

      {/* EVENT STRIP */}
      <section className="ra-strip">
        <div className="strip-track">
          {Array.from({ length: 4 }).map((_, index) => (
            <span key={index}>
              RAIL & METRO <b>✳</b> INNOVATION <b>✳</b> EXCELLENCE <b>✳</b>
              ENGINEERING <b>✳</b> INDUSTRY RECOGNITION <b>✳</b>
            </span>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="ra-intro ra-section" id="summit">
        <Reveal className="intro-heading">
          <Eyebrow>THE SUMMIT</Eyebrow>
          <h2>
            A meeting point
            <br />
            for the <em>rail industry.</em>
          </h2>
        </Reveal>

        <Reveal className="intro-copy" delay={120}>
          <span className="section-number">01 / ABOUT THE EVENT</span>
          <p className="intro-lead">
            One platform. The people shaping the future of rail and metro.
          </p>
          <p>
            The Rail Analysis Innovation & Excellence Summit brings India's
            railway decision-makers, companies and associates together to
            exchange ideas, build connections and recognise outstanding
            performance across the sector.
          </p>
          <p>
            From rolling stock and infrastructure to intelligent systems and
            sustainable mobility, the summit celebrates the technologies and
            people taking the industry forward.
          </p>
          <a
            href="https://www.railanalysis.com/"
            target="_blank"
            rel="noreferrer"
            className="ra-text-link"
          >
            Discover Rail Analysis <Arrow diagonal />
          </a>
        </Reveal>
      </section>

      {/* INDUSTRY NUMBERS */}
      <section className="ra-numbers">
        <div className="numbers-heading">
          <Eyebrow light>THE INDUSTRY UNDER ONE ROOF</Eyebrow>
          <span>SUMMIT / 2027</span>
        </div>
        <div className="numbers-grid">
          <Reveal className="number-card">
            <span className="number-index">01</span>
            <strong><Counter value={500} suffix="+" /></strong>
            <p>Rail & metro industry leaders</p>
            <span className="number-line" />
          </Reveal>
          <Reveal className="number-card" delay={100}>
            <span className="number-index">02</span>
            <strong><Counter value={8} /></strong>
            <p>Edition of the summit</p>
            <span className="number-line" />
          </Reveal>
          <Reveal className="number-card" delay={200}>
            <span className="number-index">03</span>
            <strong><Counter value={4} /></strong>
            <p>Conference sessions</p>
            <span className="number-line" />
          </Reveal>
          <Reveal className="number-card" delay={300}>
            <span className="number-index">04</span>
            <strong><Counter value={1} /></strong>
            <p>Day of ideas and recognition</p>
            <span className="number-line" />
          </Reveal>
        </div>
        <p className="numbers-note">
          500+ is the organiser's published networking figure. Other figures
          refer to the 2027 edition and its published programme.
        </p>
      </section>

      {/* GRAPH / INDUSTRY */}
      <section className="ra-industry-visual">
        <div className="industry-visual-copy">
          <Reveal>
            <Eyebrow>AN INDUSTRY IN MOTION</Eyebrow>
            <h2>
              Progress is
              <br />
              <em>built together.</em>
            </h2>
            <p>
              A platform connecting rail and metro decision-makers, rolling
              stock manufacturers, infrastructure developers, technology
              providers and engineering specialists.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <DataVisual />
          </Reveal>
        </div>
        <div className="industry-visual-photo">
          <img src={ASSETS.photos[2]} alt="Rail industry technology showcased at the summit" />
          <div className="photo-coordinate">RA / INDUSTRY SHOWCASE / 2026</div>
          <div className="photo-side-label">ENGINEERING THE NEXT ERA</div>
        </div>
      </section>

      {/* CONFERENCE */}
      <section className="ra-conference ra-section" id="conference">
        <Reveal className="conference-heading">
          <Eyebrow>THE 2027 CONFERENCE</Eyebrow>
          <h2>
            Four conversations.
            <br />
            <em>One connected future.</em>
          </h2>
          <p>
            Explore the summit's published themes and technical discussions.
          </p>
        </Reveal>

        <div className="conference-layout">
          <div className="session-tabs">
            {SESSIONS.map((session, index) => (
              <button
                type="button"
                key={session.number}
                className={`session-tab ${activeSession === index ? 'active' : ''}`}
                onClick={() => setActiveSession(index)}
              >
                <span>{session.number}</span>
                <strong>{session.title}</strong>
                <i>{activeSession === index ? '−' : '+'}</i>
              </button>
            ))}
          </div>

          <div className="session-detail" key={activeSession}>
            <div className="session-detail-top">
              <span>SESSION {SESSIONS[activeSession].number}</span>
              <span>RA / 2027</span>
            </div>
            <h3>{SESSIONS[activeSession].title}</h3>
            <p className="session-subtitle">{SESSIONS[activeSession].subtitle}</p>
            <div className="session-list">
              {SESSIONS[activeSession].details.map((detail, index) => (
                <div className="session-topic" key={detail}>
                  <span>0{index + 1}</span>
                  {detail}
                </div>
              ))}
            </div>
            <a className="ra-text-link" href="#register">
              Be part of the conversation <Arrow diagonal />
            </a>
            <div className="session-watermark">
              {SESSIONS[activeSession].number}
            </div>
          </div>
        </div>
      </section>

      {/* 3D RAIL INSTALLATION */}
      <section className="ra-rail-section">
        <div className="rail-section-copy">
          <Eyebrow light>THE NETWORK / THE FUTURE</Eyebrow>
          <h2>
            Connecting
            <br />
            <em>what's next.</em>
          </h2>
          <p>
            From physical infrastructure to intelligent systems, the railway
            ecosystem is evolving through collaboration, engineering and
            innovation.
          </p>
        </div>
        <RailGraphic />
        <div className="rail-section-index">02 — 04 / THE INDUSTRY</div>
      </section>

      {/* AWARDS */}
      <section className="ra-awards ra-section" id="awards">
        <div className="awards-intro">
          <Reveal>
            <Eyebrow>THE RAIL & METRO AWARDS</Eyebrow>
            <h2>
              Recognising
              <br />
              <em>those who move us forward.</em>
            </h2>
            <p>
              The summit's awards celebrate organisations and professionals
              whose technologies, achievements and expertise are advancing
              the rail and metro sector.
            </p>
            <a
              className="ra-text-link"
              href="https://conference.railanalysis.com/list-of-winners-2026/"
              target="_blank"
              rel="noreferrer"
            >
              View the 2026 winners <Arrow diagonal />
            </a>
          </Reveal>
          <div className="awards-emblem">
            <img src={ASSETS.emblem} alt="8th Rail Analysis Innovation and Excellence Summit emblem" />
          </div>
        </div>

        <div className="awards-photo-stage">
          <img src={ASSETS.photos[1]} alt="Award presentation at the 2026 Rail Analysis Summit" />
          <div className="awards-photo-caption">
            <span>THE 7TH EDITION / 2026</span>
            <strong>Celebrating industry achievement.</strong>
          </div>
          <div className="awards-photo-number">RA / 07</div>
        </div>

        <div className="winner-heading">
          <div>
            <Eyebrow>THE 2026 HONOUREES</Eyebrow>
            <h3>Recognised for excellence.</h3>
          </div>
          <span>SELECTED RECIPIENTS / 2026</span>
        </div>

        <div className="winner-grid">
          {WINNERS.map(([company, award], index) => (
            <Reveal className="winner-card" delay={(index % 4) * 70} key={company}>
              <span className="winner-number">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <strong>{company}</strong>
                <p>{award}</p>
              </div>
              <span className="winner-star">✳</span>
            </Reveal>
          ))}
        </div>
        <p className="winner-footnote">
          Selected 2026 award recipients. Recognition titles are shortened
          for display; refer to the official winners list for full descriptions.
        </p>
      </section>

      {/* AWARD COMPANIES IMAGE WALL */}
      <section className="ra-company-wall" id="partners">
        <div className="company-wall-heading">
          <Reveal>
            <Eyebrow light>THE INDUSTRY COMMUNITY</Eyebrow>
            <h2>
              A network of
              <br />
              <em>industry achievers.</em>
            </h2>
            <p>
              The official 2026 award and nomination company showcase.
              Organisations are presented as featured in Rail Analysis'
              published material.
            </p>
          </Reveal>
          <div className="company-wall-mark">RA / 2026</div>
        </div>
        <div className="company-wall-image">
          <img
            src={ASSETS.awardWall}
            alt="Company logos featured in the Rail Analysis 2026 award and nomination showcase"
            loading="lazy"
          />
        </div>
        <a
          className="company-wall-link"
          href="https://conference.railanalysis.com/winners-2026/"
          target="_blank"
          rel="noreferrer"
        >
          Explore award recipients <Arrow diagonal />
        </a>
      </section>

      {/* GALLERY */}
      <section className="ra-gallery ra-section" id="gallery">
        <Reveal className="gallery-heading">
          <Eyebrow>PAST EDITIONS / IN PICTURES</Eyebrow>
          <h2>
            The moments.
            <br />
            <em>The people. The recognition.</em>
          </h2>
          <p>
            A look back at the conversations, celebrations and connections
            from the 2026 summit.
          </p>
        </Reveal>

        <div className="gallery-grid">
          {MOMENTS.map((moment, index) => (
            <Reveal
              className={`gallery-card gallery-card-${index + 1}`}
              delay={(index % 3) * 80}
              key={moment.number}
            >
              <button
                type="button"
                onClick={() => setActivePhoto(moment)}
                aria-label={`View ${moment.title}`}
              >
                <img src={moment.image} alt={moment.title} loading="lazy" />
                <span className="gallery-card-overlay" />
                <span className="gallery-card-index">{moment.number} / 06</span>
                <span className="gallery-card-caption">
                  <small>{moment.label}</small>
                  <strong>{moment.title}</strong>
                </span>
                <span className="gallery-card-open">↗</span>
              </button>
            </Reveal>
          ))}
        </div>
        <a
          className="ra-text-link gallery-more"
          href="https://conference.railanalysis.com/"
          target="_blank"
          rel="noreferrer"
        >
          Explore the official summit website <Arrow diagonal />
        </a>
      </section>

      {/* TESTIMONIALS */}
      <section className="ra-testimonials">
        <div className="testimonial-heading">
          <Eyebrow light>VOICES FROM THE INDUSTRY</Eyebrow>
          <h2>
            Built on
            <br />
            <em>real connections.</em>
          </h2>
        </div>
        <div className="testimonial-panel">
          <span className="testimonial-quote-mark">“</span>
          <p>{TESTIMONIALS[activeTestimonial].quote}</p>
          <div className="testimonial-bottom">
            <strong>{TESTIMONIALS[activeTestimonial].company}</strong>
            <span>SUMMIT TESTIMONIAL</span>
          </div>
          <div className="testimonial-controls">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() =>
                setActiveTestimonial(
                  (activeTestimonial - 1 + TESTIMONIALS.length) %
                    TESTIMONIALS.length
                )
              }
            >
              ←
            </button>
            <span>
              0{activeTestimonial + 1} <i>/</i> 0{TESTIMONIALS.length}
            </span>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() =>
                setActiveTestimonial(
                  (activeTestimonial + 1) % TESTIMONIALS.length
                )
              }
            >
              →
            </button>
          </div>
        </div>
      </section>

      {/* EVENT DETAILS */}
      <section className="ra-event-details ra-section" id="register">
        <div className="event-details-copy">
          <Reveal>
            <Eyebrow>BE PART OF THE NEXT EDITION</Eyebrow>
            <h2>
              Meet the
              <br />
              <em>rail industry.</em>
            </h2>
            <p>
              Join decision-makers, manufacturers, infrastructure specialists
              and innovators at the 8th Rail Analysis Innovation & Excellence
              Summit.
            </p>
          </Reveal>
        </div>
        <div className="event-details-card">
          <img src={ASSETS.emblem} alt="" />
          <div className="event-detail-row">
            <span>DATE</span>
            <strong>29 January 2027</strong>
          </div>
          <div className="event-detail-row">
            <span>TIME</span>
            <strong>09:30 AM – 05:30 PM</strong>
          </div>
          <div className="event-detail-row">
            <span>VENUE</span>
            <strong>Hotel Le Méridien, New Delhi</strong>
          </div>
          <div className="event-detail-row">
            <span>EDITION</span>
            <strong>8th Rail Analysis Summit</strong>
          </div>
          <a
            className="ra-button ra-button-gold event-contact"
            href="mailto:conference@railanalysis.com"
          >
            Contact the organisers <Arrow diagonal />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="ra-footer" id="contact">
        <div className="footer-main">
          <div className="footer-brand">
            <img src={ASSETS.emblem} alt="Rail Analysis Summit 2027" />
            <p>
              Celebrating innovation and excellence in the rail and metro
              industry.
            </p>
          </div>
          <div className="footer-column">
            <span>EXPLORE</span>
            <a href="#summit">The Summit</a>
            <a href="#conference">Conference</a>
            <a href="#awards">Awards</a>
            <a href="#gallery">Gallery</a>
          </div>
          <div className="footer-column">
            <span>CONTACT</span>
            <a href="tel:+919811979598">+91 9811979598</a>
            <a href="mailto:conference@railanalysis.com">
              conference@railanalysis.com
            </a>
            <p>New Delhi, India</p>
          </div>
          <div className="footer-column">
            <span>OFFICIAL WEBSITE</span>
            <a href="https://www.railanalysis.com/" target="_blank" rel="noreferrer">
              Rail Analysis India <Arrow diagonal />
            </a>
            <a href="https://conference.railanalysis.com/" target="_blank" rel="noreferrer">
              Summit website <Arrow diagonal />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>RAIL ANALYSIS INNOVATION & EXCELLENCE SUMMIT / 2027</span>
          <a href="#top">BACK TO TOP ↑</a>
        </div>
      </footer>

      {/* PHOTO LIGHTBOX */}
      {activePhoto && (
        <div
          className="ra-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.title}
          onClick={() => setActivePhoto(null)}
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={() => setActivePhoto(null)}
            aria-label="Close image"
          >
            ×
          </button>
          <div className="lightbox-content" onClick={(event) => event.stopPropagation()}>
            <img src={activePhoto.image} alt={activePhoto.title} />
            <div>
              <span>{activePhoto.label}</span>
              <strong>{activePhoto.title}</strong>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
