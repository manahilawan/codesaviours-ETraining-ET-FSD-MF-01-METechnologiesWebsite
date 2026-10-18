import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight, Sun, BatteryCharging, Zap, Building2,
  DraftingCompass, Cable, Menu, X, Phone, Mail,
  ChevronRight, Leaf, CheckCircle2
} from 'lucide-react';
import './styles.css';

const services = [
  { icon: Sun, title: 'Solar PV', text: 'Practical solar solutions designed around your energy needs.' },
  { icon: BatteryCharging, title: 'Energy Storage (BESS)', text: 'Energy storage strategies for reliability and peak shaving.' },
  { icon: Zap, title: 'Electrical Engineering', text: 'Electrical planning, assessments and engineering support.' },
  { icon: Cable, title: 'EV Charging', text: 'Charging infrastructure from grid assessment to charger.' },
  { icon: Building2, title: 'Civil & Structural', text: 'Thoughtful structural and civil engineering solutions.' },
  { icon: DraftingCompass, title: 'Architecture & Design', text: 'Building design support with function and clarity in mind.' }
];

const nav = ['Home', 'About', 'Services', 'EV Charging', 'Training', 'Projects', 'Blog', 'Contact'];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('Home');
  const [formSent, setFormSent] = useState(false);
  const [formError, setFormError] = useState('');

  const go = (name) => {
    setActive(name);
    setMenuOpen(false);
    document.getElementById(name.toLowerCase().replaceAll(' ', '-'))
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  const submit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: data.get('name'),
      email: data.get('email'),
      phone: data.get('phone'),
      interest: data.get('interest'),
      message: data.get('message')
    };

    setFormError('');
    setFormSent(false);

    try {
      const response = await fetch('http://localhost:5000/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Submission failed.');
      }

      form.reset();
      setFormSent(true);
    } catch (error) {
      setFormError(error.message || 'Could not submit your enquiry.');
    }
  };

  return (
    <div>
      <div className="topbar">
        <span><Phone size={14} /> 0316 6379325</span>
        <span><Mail size={14} /> Contact ME Technologies</span>
        <span className="top-note">Engineering • Energy • Training</span>
      </div>

      <header className="header">
        <a className="brand" href="#home" onClick={() => setActive('Home')}>
          <span className="brand-mark"><Zap size={22} /></span>
          <span>ME <b>TECHNOLOGIES</b><small>ENGINEERING & TRAINING</small></span>
        </a>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? 'nav open' : 'nav'}>
          {nav.map(n => (
            <button key={n} className={active === n ? 'nav-link selected' : 'nav-link'} onClick={() => go(n)}>
              {n}
            </button>
          ))}
          <button className="btn btn-small" onClick={() => go('Contact')}>
            Get a Quote <ArrowUpRight size={16} />
          </button>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse"></span> ENGINEERING A BETTER TOMORROW</div>
            <h1>Smart Engineering Today.<br /><em>Sustainable Tomorrow.</em></h1>
            <p className="hero-sub">Engineering consultancy and practical training for a world moving toward smarter, cleaner energy.</p>
            <div className="hero-actions">
              <button className="btn" onClick={() => go('Contact')}>Discuss your project <ArrowUpRight size={18} /></button>
              <button className="btn btn-ghost" onClick={() => go('Training')}>Explore training <ChevronRight size={18} /></button>
            </div>
            <div className="trust-row">
              <div className="avatars"><i>M</i><i>E</i><i>T</i></div>
              <span>Engineering expertise with a sustainable mindset</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="sun-glow"></div>
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>
            <div className="solar-art">
              <div className="sun-disc"></div>
              <div className="panel panel-back"></div>
              <div className="panel panel-front">
                <span></span><span></span><span></span>
                <span></span><span></span><span></span>
              </div>
              <div className="ground"></div>
              <div className="floating-card">
                <Leaf size={19} />
                <span><b>Built for tomorrow</b><small>Smarter energy choices</small></span>
              </div>
            </div>
            <div className="visual-label">ENERGY • INNOVATION • IMPACT</div>
          </div>

          <div className="hero-bottom">
            <span>01 / ENGINEERING</span>
            <span>Designed for real-world needs <ArrowUpRight size={15} /></span>
          </div>
        </section>

        <section className="stats">
          <div><strong>06</strong><span>Consulting disciplines</span></div>
          <div><strong>AC 7–22 <small>kW</small></strong><span>EV charging range</span></div>
          <div><strong>360 <small>kW</small></strong><span>DC fast charging up to</span></div>
          <div><strong>01</strong><span>Goal: a sustainable future</span></div>
        </section>

        <section className="section" id="services">
          <div className="section-head">
            <div>
              <div className="eyebrow">WHAT WE DO</div>
              <h2>Engineering for <em>what’s next.</em></h2>
            </div>
            <p>From energy systems to building design, we bring technical thinking to complex challenges.</p>
          </div>

          <div className="service-grid">
            {services.map((s, i) => (
              <article className="service-card" key={s.title}>
                <div className="service-icon"><s.icon size={23} /></div>
                <span className="card-index">0{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <button className="text-link" onClick={() => go(s.title === 'EV Charging' ? 'EV Charging' : 'Contact')}>
                  Explore service <ArrowUpRight size={16} />
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="process">
          <div className="eyebrow">A CLEAR PATH FORWARD</div>
          <h2>Good work starts with <em>a good process.</em></h2>
          <div className="steps">
            {['Consultation', 'Site survey', 'Design & proposal', 'Installation', 'Ongoing support'].map((s, i) => (
              <div className="step" key={s}>
                <span>0{i + 1}</span><b>{s}</b>
                {i < 4 && <ChevronRight className="step-arrow" />}
              </div>
            ))}
          </div>
        </section>

        <section className="feature-section" id="ev-charging">
          <div className="feature-art">
            <div className="charger">
              <div className="charger-screen"><Zap size={27} /><span>READY</span></div>
              <div className="charger-name">ME / CHARGE</div>
              <div className="charger-cable"></div>
            </div>
            <div className="feature-chip"><BatteryCharging size={18} /> Smarter charging ecosystems</div>
          </div>

          <div className="feature-copy">
            <div className="eyebrow">MOBILITY, REIMAGINED</div>
            <h2>Ready for the <em>electric shift.</em></h2>
            <p>Explore end-to-end EV charging setups that bring together grid assessment, battery storage, solar integration and smart monitoring.</p>
            <ul>
              <li><CheckCircle2 /> AC charging: 7–22 kW</li>
              <li><CheckCircle2 /> DC fast charging up to 360 kW</li>
              <li><CheckCircle2 /> Solar PV, BESS and EMS integration</li>
              <li><CheckCircle2 /> Multi-standard charging support</li>
            </ul>
            <button className="btn" onClick={() => go('Contact')}>Discuss EV charging <ArrowUpRight size={17} /></button>
          </div>
        </section>

        <section className="training" id="training">
          <div>
            <div className="eyebrow">LEARN WITH PURPOSE</div>
            <h2>Build skills that <em>move you forward.</em></h2>
            <p>Online Solar Design Training for undergraduate students and fresh graduates, with practical exposure to PVsyst and SketchUp.</p>
            <div className="tool-pills">
              <span>PVsyst · Simulation</span>
              <span>SketchUp · 3D design</span>
              <span>Online learning</span>
            </div>
            <button className="btn btn-light" onClick={() => go('Contact')}>Ask about the course <ArrowUpRight size={17} /></button>
          </div>

          <div className="training-visual">
            <div className="course-sheet">
              <div className="course-top">SOLAR DESIGN / 101</div>
              <div className="course-sun"></div>
              <div className="mini-panels"><i></i><i></i><i></i><i></i><i></i><i></i></div>
              <div className="course-foot"><b>Design the future.</b><span>Learn • Model • Improve</span></div>
            </div>
            <div className="round-stamp">LEARN<br />BY DOING</div>
          </div>
        </section>

        <section className="section sample" id="projects">
          <div className="section-head">
            <div>
              <div className="eyebrow">WORK IN PRACTICE</div>
              <h2>Ideas into <em>real outcomes.</em></h2>
            </div>
            <p>Illustrative project concepts for demonstrating the type of solutions the team can develop. These are samples, not verified client projects.</p>
          </div>

          <div className="project-grid">
            <article className="project-card">
              <div className="project-image solar-img"><span>SAMPLE CONCEPT</span></div>
              <div className="project-meta">RENEWABLE ENERGY · RESIDENTIAL</div>
              <h3>10 kW Residential Solar Concept</h3>
              <p>Sample concept · Faisalabad</p>
            </article>
            <article className="project-card">
              <div className="project-image ev-img"><span>SAMPLE CONCEPT</span></div>
              <div className="project-meta">E-MOBILITY · COMMERCIAL</div>
              <h3>Workplace EV Charging Plan</h3>
              <p>Sample concept · Commercial site</p>
            </article>
            <article className="project-card">
              <div className="project-image building-img"><span>SAMPLE CONCEPT</span></div>
              <div className="project-meta">ENGINEERING · BUILDINGS</div>
              <h3>Integrated Building Design</h3>
              <p>Sample concept · Mixed-use building</p>
            </article>
          </div>
        </section>

        <section className="blog-strip" id="blog">
          <div>
            <div className="eyebrow">FIELD NOTES</div>
            <h2>Ideas worth <em>sharing.</em></h2>
          </div>
          <div className="blog-item">
            <span>01 / SOLAR</span>
            <b>Solar design: start with the site, not the panels.</b>
            <ArrowUpRight />
          </div>
          <div className="blog-item">
            <span>02 / MOBILITY</span>
            <b>What to consider before installing an EV charger.</b>
            <ArrowUpRight />
          </div>
          <div className="blog-item">
            <span>03 / STORAGE</span>
            <b>How battery storage can support energy planning.</b>
            <ArrowUpRight />
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-copy">
            <div className="eyebrow">LET’S BUILD SOMETHING BETTER</div>
            <h2>Have a project in <em>mind?</em></h2>
            <p>Tell us what you’re planning. Start a conversation about engineering services or solar design training.</p>
            <div className="contact-detail">
              <Phone />
              <span><small>CALL / WHATSAPP</small><b>0316 6379325</b></span>
            </div>
            <div className="contact-detail">
              <Mail />
              <span><small>SOCIAL</small><b>ME Technologies on LinkedIn</b></span>
            </div>
          </div>

          <form className="contact-form" onSubmit={submit}>
            <div className="form-title">Tell us a little about it.</div>
            <p>All fields marked * are required.</p>

            <label>Full name *<input name="name" required placeholder="Your name" /></label>

            <div className="form-row">
              <label>Email *<input name="email" required type="email" placeholder="you@example.com" /></label>
              <label>Phone<input name="phone" type="tel" placeholder="+92" /></label>
            </div>

            <label>
              I'm interested in *
              <select name="interest" required defaultValue="">
                <option value="" disabled>Select an option</option>
                <option>Engineering consultancy</option>
                <option>EV charging</option>
                <option>Solar design training</option>
                <option>Other</option>
              </select>
            </label>

            <label>
              Project details *
              <textarea name="message" required rows="3" placeholder="Tell us about your requirements..."></textarea>
            </label>

            <button className="btn" type="submit">Send enquiry <ArrowUpRight size={17} /></button>

            {formSent && (
              <div className="form-success">
                <CheckCircle2 size={18} /> Your enquiry was submitted successfully!
              </div>
            )}

            {formError && <div className="form-success">{formError}</div>}
          </form>
        </section>

        <section className="quote-band" id="quote">
          <div>
            <span className="eyebrow">YOUR NEXT STEP STARTS HERE</span>
            <h2>Let’s make the smart choice.</h2>
          </div>
          <button className="btn btn-light" onClick={() => go('Contact')}>Get a quote <ArrowUpRight /></button>
        </section>

        <section className="about-anchor" id="about">
          <div className="eyebrow">ABOUT ME TECHNOLOGIES</div>
          <p>ME Technologies is presented in this concept as an engineering consultancy and training company focused on electrical engineering, renewable energy, EV charging, and design. Confirm and update company story, mission, vision, team, and office details with verified client information before final submission.</p>
        </section>
      </main>

      <footer>
        <div className="footer-brand">
          <span className="brand-mark"><Zap size={22} /></span>
          <span>ME <b>TECHNOLOGIES</b><small>ENGINEERING & TRAINING</small></span>
        </div>
        <p>Smart Engineering Today. Sustainable Tomorrow.</p>
        <div className="footer-bottom">
          <span>©️ 2026 ME Technologies · Internship concept project</span>
          <span>Local demo · Not a live production website</span>
          <a href="https://wa.me/923166379325" target="_blank" rel="noreferrer">WhatsApp ↗️</a>
        </div>
      </footer>

      <a className="whatsapp" href="https://wa.me/923166379325" target="_blank" rel="noreferrer" aria-label="WhatsApp">WA</a>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);