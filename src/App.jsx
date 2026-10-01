import './App.css';

function App() {
  return (
    <main>

      {/* NAVBAR */}

      <nav>
        <div className="logo">NOIRÉ</div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}

      <section className="hero">

        <p className="eyebrow">INTERIOR DESIGN CONCEPT • NEW DELHI</p>

        <h1>
          Designed for
          <span> modern living.</span>
        </h1>

        <p className="hero-text">
          NOIRÉ creates thoughtfully designed interiors that bring
          character, comfort and timeless style into every space.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="primary-btn">
            Book a Consultation
          </a>

          <a href="#about" className="secondary-btn">
            Explore →
          </a>
        </div>

      </section>

      {/* ABOUT */}

      <section className="about" id="about">

        <div className="section-heading">
          <p className="eyebrow">ABOUT US</p>

          <h2>
            Spaces with
            <span> intention.</span>
          </h2>
        </div>

        <p className="about-text">
          We believe a beautiful space should also feel like you.
          Our approach combines thoughtful planning, refined
          materials and functional design to create interiors
          that feel effortless and personal.
        </p>

      </section>

      {/* SERVICES */}

      <section className="services" id="services">

        <div className="section-heading">
          <p className="eyebrow">OUR SERVICES</p>

          <h2>
            From concept
            <span> to completion.</span>
          </h2>
        </div>

        <div className="services-grid">

          <div className="service-card">
            <span>01</span>
            <h3>Residential Interiors</h3>
            <p>
              Complete interior design solutions for homes,
              apartments and personal spaces.
            </p>
          </div>

          <div className="service-card">
            <span>02</span>
            <h3>Commercial Spaces</h3>
            <p>
              Thoughtful environments designed for offices,
              studios and modern businesses.
            </p>
          </div>

          <div className="service-card">
            <span>03</span>
            <h3>Space Planning</h3>
            <p>
              Smart layouts that balance aesthetics,
              movement and everyday functionality.
            </p>
          </div>

          <div className="service-card">
            <span>04</span>
            <h3>Design Consultation</h3>
            <p>
              Professional guidance to help you make
              confident design decisions.
            </p>
          </div>

        </div>

      </section>
            {/* PROJECT GALLERY */}

      <section className="gallery">

        <div className="section-heading">
          <p className="eyebrow">OUR APPROACH</p>

          <h2>
            Details that
            <span> make a space.</span>
          </h2>
        </div>

        <div className="gallery-grid">

  <div className="gallery-item gallery-large">
    <img
      src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
      alt="Modern interior"
    />

    <div className="gallery-label">
      <span>PROJECT 01</span>
      <strong>Modern Residence</strong>
    </div>
  </div>

  <div className="gallery-item">
    <img
      src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80"
      alt="Contemporary living room"
    />

    <div className="gallery-label">
      <span>PROJECT 02</span>
      <strong>Urban Living</strong>
    </div>
  </div>

  <div className="gallery-item">
    <img
      src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80"
      alt="Elegant interior"
    />

    <div className="gallery-label">
      <span>PROJECT 03</span>
      <strong>Contemporary Space</strong>
    </div>
  </div>

</div>

      </section>

      {/* CONTACT */}

      <section className="contact" id="contact">

        <div className="contact-content">

          <p className="eyebrow">START YOUR PROJECT</p>

          <h2>
            Let's create
            <span> your space.</span>
          </h2>

          <p className="contact-text">
            Have a space in mind? Tell us about your project
            and let's start a conversation.
          </p>
          <div className="contact-details">

  <div>
    <span>EMAIL</span>
    <a href="mailto: aryaox.dev@gmail.com">
      aryaox.dev@gmail.com
    </a>
  </div>

  <div>
    <span>LOCATION</span>
    <p>New Delhi, India</p>
  </div>

</div>

          <a
            href="mailto:aryaox.dev@gmail.com"
            className="contact-btn"
          >
            Get in Touch →
          </a>

        </div>

      </section>

      {/* FOOTER */}

      <footer>

        <div className="footer-top">

          <div>
            <div className="logo">NOIRÉ</div>
            <p>Thoughtful interiors. Timeless spaces.</p>
          </div>

          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>

        </div>

        <div className="footer-bottom">
          <span>© 2026 NOIRÉ</span>
          <span>Website by ARYAOX</span>
        </div>

      </footer>

    </main>
  );
}

export default App;