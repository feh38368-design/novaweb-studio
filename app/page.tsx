import {
  ArrowDownRight,
  ArrowRight,
  Check,
  Code2,
  LayoutDashboard,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  ShoppingBag,
  Sparkles,
  Wrench,
  X
} from "lucide-react";

const services = [
  {
    icon: MonitorSmartphone,
    number: "01",
    title: "Business websites",
    description:
      "Responsive, polished websites that explain what you do and make it easy for customers to contact you."
  },
  {
    icon: ShoppingBag,
    number: "02",
    title: "Online stores",
    description:
      "Product pages and shopping experiences designed to help customers browse and enquire or buy."
  },
  {
    icon: LayoutDashboard,
    number: "03",
    title: "Dashboards & web apps",
    description:
      "Practical interfaces for managing customers, orders, content, and everyday business workflows."
  },
  {
    icon: Wrench,
    number: "04",
    title: "Website improvements",
    description:
      "Help with responsive layouts, bug fixes, new features, and improving an existing website."
  }
];

const process = [
  ["01", "Understand", "We clarify your goal, audience, required features, budget, and deadline."],
  ["02", "Plan & build", "You get a clear scope before development begins, with progress updates along the way."],
  ["03", "Review", "You review the work and request the revisions included in our agreement."],
  ["04", "Launch", "We prepare the finished site for launch and help connect your domain if needed."]
];

const projects = [
  {
    tag: "Web application · Demonstration project",
    title: "GiftGrip",
    description:
      "A gift-offer platform demonstrating user flows, dashboards, database-backed features, and admin workflows.",
    note: "Personal project",
    href: "https://giftgrip.vercel.app"
  },
  {
    tag: "Business website · Concept",
    title: "Northstar Goods",
    description:
      "A sample storefront concept showing how a small retail brand could present products and invite enquiries.",
    note: "Live demo",
    href: "https://shop-northstar.vercel.app"
  },
  {
    tag: "Dashboard · Concept",
    title: "ClearDesk",
    description:
      "A sample operations dashboard concept for organizing customers, orders, and day-to-day business activity.",
    note: "Concept demo · Ask about a build",
    href: "mailto:novawebstudio.digital@gmail.com?subject=Dashboard%20project%20inquiry%20%E2%80%94%20ClearDesk%20concept&body=Hi%20NovaWeb%20Studio%2C%0A%0AI%27d%20like%20to%20discuss%20a%20dashboard%20similar%20to%20the%20ClearDesk%20concept.%0A%0AFeatures%20I%20need%3A%0ABudget%20range%3A%0APreferred%20timeline%3A%0A%0AThank%20you."
  }
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-label"><span />{children}</p>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="NovaWeb Studio home">
          <span className="brand-mark"><Code2 size={21} strokeWidth={2.4} /></span>
          <span>novaweb<span className="brand-light"> studio</span></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#work">Our work</a>
          <a href="#process">Process</a>
          <a href="#pricing">Pricing</a>
        </nav>
        <a className="header-cta" href="#contact">Let&apos;s talk <ArrowRight size={16} /></a>
      </header>

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="availability"><span className="pulse-dot" /> OPEN FOR SELECT PROJECTS</div>
          <h1>Good ideas deserve <span className="gradient-text">great websites.</span></h1>
          <p className="hero-description">
            We help ambitious small businesses turn their ideas into clear, modern websites
            and useful web applications.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">Discuss your project <ArrowRight size={17} /></a>
            <a className="text-link" href="#work">Explore our work <ArrowDownRight size={17} /></a>
          </div>
          <div className="hero-proof">
            <div className="proof-icon"><Sparkles size={18} /></div>
            <p><strong>Thoughtful design. Practical development.</strong><span>Built around your goals, not unnecessary complexity.</span></p>
          </div>
        </div>
        <div className="hero-visual" aria-label="Decorative web design dashboard preview">
          <div className="visual-glow" />
          <div className="browser-card">
            <div className="browser-top"><div className="browser-dots"><i /><i /><i /></div><span>project-overview / 01</span><div className="browser-menu">•••</div></div>
            <div className="preview-content">
              <div className="preview-topline"><span className="tiny-kicker">WORKSPACE</span><span className="preview-live"><i /> LIVE PREVIEW</span></div>
              <h3>Make room<br />for what&apos;s next.</h3>
              <p>A clean digital home for your next big idea.</p>
              <div className="preview-button">Explore the concept <ArrowRight size={13} /></div>
              <div className="preview-stats">
                <div><span>DESIGN</span><strong>01</strong><div className="stat-line"><i /></div></div>
                <div><span>BUILD</span><strong>02</strong><div className="stat-line"><i /></div></div>
                <div><span>LAUNCH</span><strong>03</strong><div className="stat-line"><i /></div></div>
              </div>
            </div>
          </div>
          <div className="hero-index">Nº 001 <span>— DIGITAL EXPERIENCES</span></div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="section-wrap trust-inner">
          <span>SMALL TEAM ENERGY</span><i /><span>DIRECT COMMUNICATION</span><i /><span>BUILT FOR REAL PEOPLE</span><i /><span>RESPONSIVE BY DEFAULT</span>
        </div>
      </section>

      <section className="section-wrap section-block" id="services">
        <div className="section-heading">
          <div><SectionLabel>WHAT WE DO</SectionLabel><h2>Digital tools that <span className="gradient-text">move you forward.</span></h2></div>
          <p>From a first online presence to a custom dashboard, we focus on the right solution for the job.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return <article className="service-card" key={service.number}>
              <div className="service-top"><span className="service-icon"><Icon size={21} /></span><span>{service.number}</span></div>
              <h3>{service.title}</h3><p>{service.description}</p>
              <a href="#contact" aria-label={`Ask about ${service.title}`}>Discuss this service <ArrowRight size={15} /></a>
            </article>;
          })}
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-wrap section-block">
          <div className="section-heading">
            <div><SectionLabel>SELECTED WORK</SectionLabel><h2>A few ideas, <span className="gradient-text">made tangible.</span></h2></div>
            <p>These examples show the kind of work we can do. Concept projects are labelled clearly.</p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => <article className={`project-card project-${index + 1}`} key={project.title}>
              <div className="project-art">
                {index === 0 ? <div className="giftgrip-preview">
                  <div className="gg-browser-bar"><span className="gg-brand"><span className="gg-brand-icon">✦</span> GiftGrip</span><span className="gg-nav-lines"><i /><i /><i /></span><span className="gg-signin">Sign in</span></div>
                  <div className="gg-preview-body"><div className="gg-copy"><span className="gg-kicker">EXCLUSIVE REWARDS</span><strong>Big gifts.<br /><em>Real excitement.</em></strong><small>Discover gifts and track your rewards.</small><span className="gg-button">Explore gifts <ArrowRight size={9} /></span></div><div className="gg-gift-scene"><div className="gg-glow" /><div className="gg-gift-box"><i /><b /></div><div className="gg-bow"><i /><i /><b /></div><Sparkles className="gg-sparkle" size={15} /></div></div>
                  <div className="gg-bottom-row"><span><Check size={9} /> Gift claims</span><span><Check size={9} /> Delivery tracking</span><span><Check size={9} /> Secure flow</span></div>
                </div> :
                  index === 1 ? <div className="store-art"><span className="store-tag">NORTHSTAR / GOODS</span><div className="store-shapes"><i /><i /><i /></div><strong>Objects for<br />everyday living.</strong><span className="store-pill">VIEW COLLECTION ↗</span></div> :
                  <div className="dashboard-art"><div className="dash-sidebar"><b>cd.</b><i /><i /><i /><i /></div><div className="dash-main"><span>OVERVIEW</span><strong>Your workspace</strong><div className="dash-metrics"><i /><i /><i /></div><div className="dash-chart"><i /><i /><i /><i /><i /><i /><i /></div></div></div>}
                <span className="project-counter">0{index + 1} / 03</span>
              </div>
              <div className="project-info"><span className="project-tag">{project.tag}</span><h3>{project.title}</h3><p>{project.description}</p><div className="project-bottom"><span>{project.note}</span><a className="arrow-up-right" href={project.href} target={project.title === "ClearDesk" ? undefined : "_blank"} rel={project.title === "ClearDesk" ? undefined : "noreferrer"} aria-label={project.title === "ClearDesk" ? "Ask about building a dashboard like ClearDesk" : `Visit the live ${project.title} website`}><ArrowRight size={17} /></a></div></div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="section-wrap section-block process-section" id="process">
        <div className="section-heading">
          <div><SectionLabel>HOW WE WORK</SectionLabel><h2>Clear steps. <span className="gradient-text">No guesswork.</span></h2></div>
          <p>Good projects start with a shared understanding of what success looks like.</p>
        </div>
        <div className="process-grid">{process.map(([number, title, description]) => <article key={number} className="process-item"><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
      </section>

      <section className="pricing-section" id="pricing">
        <div className="section-wrap section-block">
          <div className="section-heading">
            <div><SectionLabel>STARTING POINTS</SectionLabel><h2>Simple starting <span className="gradient-text">packages.</span></h2></div>
            <p>Every project is different. These guide prices help start the conversation; a final quote follows a clear scope.</p>
          </div>
          <div className="pricing-grid">
            <article className="price-card"><span className="price-label">01 / QUICK START</span><h3>Landing page</h3><p className="price">$40<span>+ USD</span></p><p className="price-desc">A focused page for a product, service, or campaign.</p><ul><li><Check size={15} /> Responsive layout</li><li><Check size={15} /> Core content sections</li><li><Check size={15} /> Contact call-to-action</li></ul><a href="#contact">Ask about this package <ArrowRight size={15} /></a></article>
            <article className="price-card price-featured"><span className="popular-label">POPULAR START</span><span className="price-label">02 / BUSINESS</span><h3>Business website</h3><p className="price">$100<span>+ USD</span></p><p className="price-desc">A polished online home for a growing business.</p><ul><li><Check size={15} /> Up to 5 agreed pages</li><li><Check size={15} /> Mobile-friendly design</li><li><Check size={15} /> Contact form or enquiry link</li></ul><a href="#contact">Ask about this package <ArrowRight size={15} /></a></article>
            <article className="price-card"><span className="price-label">03 / CUSTOM BUILD</span><h3>Web application</h3><p className="price">From $150<span>+ USD</span></p><p className="price-desc">For dashboards and features that need more planning.</p><ul><li><Check size={15} /> Requirements discussion</li><li><Check size={15} /> Feature-based quote</li><li><Check size={15} /> Milestones agreed first</li></ul><a href="#contact">Discuss your requirements <ArrowRight size={15} /></a></article>
          </div>
          <p className="pricing-note">Prices are starting estimates, not fixed quotes. Domain registration, paid hosting, third-party services, and extra features are separate unless explicitly included in a written quote.</p>
        </div>
      </section>

      <section className="section-wrap contact-section" id="contact">
        <div className="contact-panel">
          <div className="contact-orb orb-one" /><div className="contact-orb orb-two" />
          <div className="contact-copy"><SectionLabel>HAVE A PROJECT IN MIND?</SectionLabel><h2>Let&apos;s build something <span className="gradient-text">useful.</span></h2><p>Tell us what you&apos;re trying to achieve. We&apos;ll discuss the scope, timeline, and a sensible next step.</p></div>
          <div className="contact-actions">
            <a className="button button-primary" href="mailto:novawebstudio.digital@gmail.com?subject=Website%20Project%20Inquiry%20%E2%80%94%20NovaWeb%20Studio&body=Hi%20NovaWeb%20Studio%2C%0A%0AI%27m%20interested%20in%20discussing%20a%20website%20project.%0A%0AProject%20type%3A%0ABusiness%20name%3A%0AWebsite%20or%20reference%20link%20%28if%20available%29%3A%0AFeatures%20I%20need%3A%0ABudget%20range%3A%0APreferred%20completion%20date%3A%0A%0APlease%20let%20me%20know%20the%20next%20steps.%0A%0AThank%20you%21">Email about a project <ArrowRight size={17} /></a>
            <span>Send a short brief and we’ll take it from there.</span>
          </div>
        </div>
      </section>

      <footer className="site-footer"><a className="brand" href="#home"><span className="brand-mark"><Code2 size={19} /></span><span>novaweb<span className="brand-light"> studio</span></span></a><p>Independent digital studio · Websites & web applications</p><a href="#home" className="back-top">BACK TO TOP ↑</a><small>© {new Date().getFullYear()} NovaWeb Studio. Independent web design & development.</small></footer>
    </main>
  );
}

function ArrowUpRightIcon() {
  return <span className="arrow-up-right"><ArrowRight size={17} /></span>;
}
