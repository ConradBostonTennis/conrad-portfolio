import React from 'react'

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#top" className="nav-mark">CONRAD H. WILLIAMS <span>// ME</span></a>
        <div className="nav-links">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero-grid" aria-hidden="true" />
      <div className="wrap hero-inner">
        <span className="eyebrow">Winthrop, Massachusetts</span>
        <h1>Conrad H. Williams</h1>
        <div className="hero-role">
          <span>Senior Mechanical Engineer</span>
          <span>Product Designer</span>
          <span>Engineering Leader</span>
        </div>
        <p className="hero-tagline">
          Twenty years of turning hard mechanical problems into shipped products —
          from fleet-wide root cause analyses across Amazon's robotics network
          to industrial fluid systems, ultrasonic welding machines, and patent-pending tooling.
        </p>
        <div className="hero-meta">
          <div>
            <strong>500+</strong>
            stations supported across 30+ fulfillment centers
          </div>
          <div>
            <strong>20 yrs</strong>
            SolidWorks / 3D CAD modeling
          </div>
          <div>
            <strong>5+</strong>
            industries: robotics, fluid systems, ultrasonic welding, product design
          </div>
        </div>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">View Projects</a>
          <a className="btn btn-ghost" href="#contact">Get in Touch</a>
        </div>
      </div>
    </header>
  )
}

function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">01 — About</span>
          <h2>Engineering background, built on doing.</h2>
        </div>
        <div className="about-layout">
          <div className="about-text">
            <p>
              I'm a Senior Mechanical Engineer with two decades of hands-on design
              experience spanning robotics, industrial fluid systems, ultrasonic welding
              machinery, and product development. Currently supporting Amazon Robotics
              fulfillment systems through Goddard Technologies, leading sustaining
              engineering for sortation, end-of-arm tooling, and ASRS workstations.
            </p>
            <p>
              My background includes engineering management at Telsonic Solutions,
              where I owned the full product lifecycle from business case through release
              for industrial electro-mechanical and pneumatic systems. Before that, I spent
              eight years at Asahi America in mechanical engineering, developing new
              fluid handling products and designing manufacturing processes that reduced
              defect rates and improved production throughput.
            </p>
            <p>
              Outside of engineering, I enjoy cooking, tennis, travel, and the outdoors.
            </p>
            <div className="edu-block">
              <div className="edu-item">
                <span className="deg">B.S., Mechanical Engineering</span>
                <span className="school">Keene State College</span>
              </div>
              <div className="edu-item">
                <span className="deg">M.S., Innovation &amp; Entrepreneurship</span>
                <span className="school">UMass Lowell</span>
              </div>
            </div>
          </div>
          <div className="skills-panel" id="skills">
            <div className="skills-group">
              <h4>Engineering</h4>
              <div className="skill-tags">
                <span className="skill-tag">3D CAD / SolidWorks (20+ yrs)</span>
                <span className="skill-tag">GD&amp;T &amp; Tolerance Stack-Ups</span>
                <span className="skill-tag">FEA</span>
                <span className="skill-tag">Robotics &amp; Automation</span>
                <span className="skill-tag">Pneumatic Systems</span>
                <span className="skill-tag">DFM</span>
                <span className="skill-tag">FMEA</span>
                <span className="skill-tag">6-Sigma (Cmk / Cpk)</span>
                <span className="skill-tag">Fluid Systems</span>
                <span className="skill-tag">3D Printing &amp; Prototyping</span>
                <span className="skill-tag">EPDM Data Management</span>
              </div>
            </div>
            <div className="skills-group">
              <h4>Leadership &amp; Process</h4>
              <div className="skill-tags">
                <span className="skill-tag">Engineering Management</span>
                <span className="skill-tag">Cross-Functional Leadership</span>
                <span className="skill-tag">RCA &amp; TSB Authoring</span>
                <span className="skill-tag">Agile / ECO Process</span>
                <span className="skill-tag">Lean Manufacturing</span>
                <span className="skill-tag">Process Development &amp; SOP Writing</span>
                <span className="skill-tag">Sourcing &amp; Supply Chain</span>
                <span className="skill-tag">Product Lifecycle Management</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function StampRow({ label, value, big }) {
  return (
    <div className="stamp-row">
      <div className="label">{label}</div>
      <div className={`value ${big ? 'big' : ''}`}>{value}</div>
    </div>
  )
}

function ToteASRS() {
  return (
    <div className="project">
      <div className="project-stamp">
        <StampRow label="Role" value="Tech Lead / Product Owner — via Goddard Technologies" />
        <StampRow label="Scale" value="500 stations across network" />
        <StampRow label="Program" value="TOTE ASRS 2.5 & 3.0" />
      </div>
      <div className="project-body">
        <h3>TOTE ASRS Workstation — Redesign &amp; Cost Reduction</h3>
        <span className="project-client">Amazon Robotics · 2023 – 2024</span>

        <div className="subproject">
          <div className="subproject-head">
            <h4>TOTE ASRS 2.5 — DFM &amp; Cost Reduction (2023)</h4>
          </div>
          <p>
            Took ownership of a complex workstation system with no prior context
            and learned it entirely on the fly. Performed Design for
            Manufacturability analysis across all components, applying FEA where
            required, and redesigned parts for cost and simplicity — including
            combining multiple components into single parts where possible.
          </p>
          <div className="tag-row">
            {['DFM', 'FEA', 'Design', 'Project Management', 'Team Leadership', 'Task Delegation', 'BOMs', 'Agile'].map(t => (
              <span className="tag" key={t}>{t}</span>
            ))}
          </div>
        </div>

        <div className="subproject">
          <div className="subproject-head">
            <h4>TOTE ASRS 3.0 — Ground-Up Redesign (2024)</h4>
          </div>
          <p>
            Became product owner and led a full ground-up redesign of the 3.0
            station, incorporating all learnings from the 2.5 program. Led both
            the Amazon and Goddard engineering teams through the full release
            process in Agile, maintaining a tracker covering 100+ drawings with
            checklists and limiting each ECO to 20 parts for control. Reduced
            total part count by 50% and cut cost by an additional 20%.
          </p>
          <div className="tag-row">
            {['DFM', 'FEA', 'Design', 'Project Management', 'Sourcing', 'Manufacturing', 'Team Leadership', 'BOMs', 'Agile'].map(t => (
              <span className="tag" key={t}>{t}</span>
            ))}
          </div>
        </div>

        <div className="project-images">
          <img
            src="https://amazon-blogs-brightspot.s3.amazonaws.com/1b/58/1a5c0e9f45dea77882f8f6f115d5/hero-sequoia-2550px.jpg"
            alt="Fulfillment center floor with Sequoia robotic storage system"
          />
          <img
            src="https://amazon-blogs-brightspot.s3.amazonaws.com/44/e3/6cee7734475fb634b6388794b46d/inline-002-amazon-robotics-hou6-still2636.jpg"
            alt="Tote delivery workstation, Houston launch facility"
          />
          <img
            src="https://amazon-blogs-brightspot.s3.amazonaws.com/eb/24/6f6fe21b4c7a8fdc977b82f135b3/inline-003-amazon-robotics-hou6-still2780.jpg"
            alt="Employee at ergonomic Sequoia workstation power zone"
          />
          <img
            src="https://amazon-blogs-brightspot.s3.amazonaws.com/22/a8/522089f0479aba32f66a871d5a66/inline-007-amazon-robotics-hou6-still2885.jpg"
            alt="Close-up of employee at workstation human-machine interface"
          />
        </div>
        <div className="image-credit">Image courtesy of Amazon</div>
      </div>
    </div>
  )
}

function CardinalEoAT() {
  const subprojects = [
    {
      title: 'J6 Mounting Bolt RCA (2025)',
      body: 'Led first Root Cause Analysis effort on a critical issue of J6 mounting bolts loosening over time across the fleet. Identified root cause and resolved by transitioning to nylon patch bolts. Zero recurrences since deployment.',
      tags: ['RCA', 'Documentation', 'Testing & Validation', 'Sourcing', 'Supply Chain', 'TSB Writing', 'BOMs', 'Agile'],
    },
    {
      title: 'Slip Ring RCA & Redesign',
      body: 'Led a high-stakes RCA on a critical EoAT component — the slip ring — whose failure represented significant fleet risk. Triaged immediately by procuring and distributing spare slip rings to 30+ fulfillment centers. Conducted full RCA including OEM meetings and client presentations. Co-designed a new, more robust, backwards-compatible slip ring still in use across the fleet. Negotiated an RMA agreement with the OEM for free replacements, and implemented alarms and Andons to trigger automated repair response.',
      tags: ['RCA', 'Documentation', 'Design', 'Sourcing', 'Supply Chain', 'TSB Writing', 'BOMs', 'Agile'],
    },
    {
      title: 'Dresspack Damage RCA & Bracket Design',
      body: 'Identified and resolved dresspack damage occurring during normal operation — a high-risk issue due to months-long backorder status. Designed a custom bracket blocking the primary pinch point and distributed it to 30+ fulfillment centers covering 500+ stations, authoring the TSB and following up with each site to confirm installation.',
      tags: ['RCA', 'Documentation', 'Design', 'Supply Chain Distribution', 'TSB Writing'],
    },
    {
      title: 'Sticky Cup RCA',
      body: 'Tackled the most technically challenging RCA of tenure — a multi-system problem with simultaneous software, GCU, and hardware implications. Presented findings to Amazon Robotics Hardware Leads, identified both a primary and secondary root cause, and resolved through a combination of software updates and hardware replacements. Created alarms, Andons, and updated guidance across the fleet.',
      tags: ['RCA', 'Documentation', 'Design', 'Testing & Validation', 'TSB Writing', 'Cross-functional Leadership'],
    },
    {
      title: 'Pneumatics False Positives — Threshold Investigation',
      status: 'In Progress',
      body: 'Investigated pneumatics test false positives caused by thresholds set too high. Conducted on-site investigation at BOS3, identified lower threshold values, and discovered a secondary root cause — running the pneumatics test on all 28 stations simultaneously overloads the central vacuum system. Currently developing alert logic to trigger RME response on affected stations.',
      tags: ['RCA', 'On-site Investigation', 'Documentation', 'Process Improvement'],
    },
    {
      title: 'V5 Tubeless Manifold QC Issue',
      body: 'Called in to diagnose why 5% of EoATs were failing pneumatics testing on the assembly line. Rather than initiating a months-long RCA, investigated in a single day. Submitted suspect 3D-printed manifolds to CMM inspection and discovered dimensional deviations up to 600% out of spec. Directed the manufacturing team to implement supplier-level QC and RMA all non-conforming units — resolving the issue in days rather than months.',
      tags: ['RCA', 'CMM Inspection', 'Quality Control', 'Sourcing', 'Process Improvement'],
    },
  ]

  return (
    <div className="project">
      <div className="project-stamp">
        <StampRow label="Role" value="Tech Lead / Product Owner — via Goddard Technologies" />
        <StampRow label="Scale" value="500+ stations across 30+ fulfillment centers" />
        <StampRow label="Program" value="Cardinal EoAT" />
      </div>
      <div className="project-body">
        <h3>Cardinal End-of-Arm Tooling — RCA &amp; Engineering Improvements</h3>
        <span className="project-client">Amazon Robotics</span>

        {subprojects.map((s) => (
          <div className="subproject" key={s.title}>
            <div className="subproject-head">
              <h4>{s.title}</h4>
            </div>
            {s.status && <div style={{ marginBottom: 8 }}><span className="status-tag">{s.status}</span></div>}
            <p>{s.body}</p>
            <div className="tag-row">
              {s.tags.map(t => <span className="tag" key={t}>{t}</span>)}
            </div>
          </div>
        ))}

        <div className="project-images">
          <img
            src="https://amazon-blogs-brightspot.s3.amazonaws.com/07/2b/a30de91842d0a8d5c3cbe3296cac/about-amazon-hero-inline003-amazon-deliveringthefuture-shv1-robotics-roboticarms-2550x1434.jpg"
            alt="Cardinal and other Amazon robotic arms in action at a fulfillment center"
          />
        </div>
        <div className="image-credit">Image courtesy of Amazon</div>

        <div className="method-card">
          <span className="eyebrow">Methodology</span>
          <h4 style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '1.02rem', margin: 0 }}>
            A standardized 13-step RCA template
          </h4>
          <p style={{ color: 'var(--steel)', fontSize: '0.94rem', marginTop: 8 }}>
            Developed over this engagement and now in use across the KTLO team:
          </p>
          <div className="method-steps">
            {[
              'Problem Definition', 'Scope', 'Magnitude', 'Short-Term Mitigation',
              'Data Collection', 'Failure Mode ID', 'Hypothesis Generation', 'Hypothesis Testing',
              'Root Cause Definition', 'Corrective Actions', 'Verification', 'Standardization', 'Documentation & Close',
            ].map((step, i) => (
              <div key={step}><span className="num">{String(i + 1).padStart(2, '0')}</span>{step}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">02 — Selected Work</span>
          <h2>Featured projects.</h2>
          <p>
            Robotics maintenance engineering and root cause analysis supporting
            Amazon Robotics fulfillment systems across 30+ sites and 500+ workstations.
          </p>
        </div>
        <ToteASRS />
        <CardinalEoAT />
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">03 — Experience</span>
          <h2>Where I've worked.</h2>
        </div>
        <div className="timeline">

          <div className="tl-item">
            <div className="tl-period">2022 — Present</div>
            <div className="tl-role">
              <h3>Senior Mechanical Engineer — Technical Leader</h3>
              <span className="tl-org">Goddard Technologies / Amazon Robotics</span>
              <p>
                Contract sustaining engineering for sortation systems, end-of-arm
                tooling, and ASRS workstations supporting next-generation robotics
                fulfillment centers. Technical lead and product owner for KTLO team
                efforts including DFM redesigns, ECO releases, and fleet-wide RCA programs.
                Delegate work across Amazon work tickets and collaborate with multidisciplinary
                teams across engineering, software, and operations.
              </p>
            </div>
          </div>

          <div className="tl-item">
            <div className="tl-period">2017 — 2022</div>
            <div className="tl-role">
              <h3>Mechanical Engineering Manager</h3>
              <span className="tl-org">Telsonic Solutions</span>
              <p>
                Engineering manager and process owner for industrial electro-mechanical
                and pneumatic ultrasonic welding machines, tooling, and fixtures. Owned
                the full product lifecycle: Business Case → FMEA → Design → Prototype →
                Build → Test → Release. Implemented Lean Manufacturing, DFM, design review
                cycles, Cmk studies, and SOP development for assembly, manufacturing, and
                quality. Reduced machine and tooling cost by 25% through standardization
                and DFM. Increased project success rates by 50% through process development.
              </p>
              <div className="tag-row" style={{ marginTop: 10 }}>
                {['Lean Manufacturing', 'FMEA', 'DFM', 'Pneumatics', 'Ultrasonic Welding', 'SOP Development', 'Cmk / Cpk', 'Product Lifecycle'].map(t => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="tl-item">
            <div className="tl-period">2014 — Present</div>
            <div className="tl-role">
              <h3>Founder &amp; Principal Designer</h3>
              <span className="tl-org">Empirical Innovation</span>
              <p>
                Independent product design and development consultancy. Brings new
                product ideas through the full development process — 3D modeling for
                manufacturing, mold design, prototyping, patent drawings, and
                manufacturing drawings. Products span electro-mechanical and commercial
                markets, several with patents filed or pending.
              </p>
            </div>
          </div>

          <div className="tl-item">
            <div className="tl-period">2009 — 2017</div>
            <div className="tl-role">
              <h3>Mechanical Engineer</h3>
              <span className="tl-org">Asahi America</span>
              <p>
                Mechanical engineering across the full product development cycle for
                industrial fluid handling and water flow systems — conceptual design,
                mechanical design, drafting, assembly design, and BOM management using
                EPDM. Developed and implemented design processes to increase production
                throughput and lower defect rates using 6-Sigma and Lean methods. Led
                R&amp;D for new product development and improvement of existing fluid
                handling products. Developed a patent-pending handheld field tool that
                reduced offshore lead time significantly.
              </p>
              <div className="tag-row" style={{ marginTop: 10 }}>
                {['Fluid Systems', '6-Sigma', 'Lean', 'EPDM', 'R&D', 'DFM', 'Product Development', 'Patent Pending'].map(t => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="tl-item">
            <div className="tl-period">2003 — 2004</div>
            <div className="tl-role">
              <h3>Manufacturing Engineer — Internship</h3>
              <span className="tl-org">Flexcon Industries</span>
              <p>
                Applied 6-Sigma and Lean manufacturing engineering to improve
                production quality. Used SolidWorks FEA simulation to develop
                impact testers for extruded plastic material strength testing
                at varying temperatures and static loads. Reduced assembly line
                variability by 1,600 ppm through statistical analysis (Cpk) and
                process changes.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <div className="contact-grid">
          <div>
            <span className="eyebrow">04 — Contact</span>
            <h2 style={{ marginTop: 14 }}>Let's talk about your team's next hire.</h2>
            <p className="lede" style={{ marginTop: 16 }}>
              Open to Senior Mechanical Engineer and Mechanical Engineering
              Manager roles in the greater Boston area. Reach out by email or
              connect on LinkedIn.
            </p>
          </div>
          <div className="contact-links">
            <a className="contact-link" href="mailto:Conrad3sign@gmail.com">
              <span><span className="label">Email</span><br />Conrad3sign@gmail.com</span>
              <span className="arrow">→</span>
            </a>
            <a className="contact-link" href="https://www.linkedin.com/in/empiricalinnovation/" target="_blank" rel="noreferrer">
              <span><span className="label">LinkedIn</span><br />in/empiricalinnovation</span>
              <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="wrap">
      <span>© {new Date().getFullYear()} Conrad H. Williams</span>
      <span>Winthrop, MA</span>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  )
}
