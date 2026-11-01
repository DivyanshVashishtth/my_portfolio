import './Contact.css';

function Contact() {
  const email = 'divyanshvashishtth123@gmail.com';

  return (
    <section className="contact-page">
      <div className="contact-container">
        <div className="section-heading">
          <p className="section-label">GET IN TOUCH</p>

          <h1>
            Let's build something <span>together.</span>
          </h1>

          <p className="section-subtitle">
            Looking for a frontend intern, have a project idea, or simply
            want to connect? Feel free to reach out.
          </p>
        </div>

        <div className="contact-card">
          <div className="contact-card-heading">
            <span className="contact-icon">✉</span>
            <h2>Have an opportunity?</h2>
            <p>
              I'm interested in frontend development opportunities where
              I can contribute, learn, and grow.
            </p>
          </div>

          <a
            className="contact-email"
            href={`mailto:${email}`}
          >
            {email} ↗
          </a>

          <p className="contact-note">
            Replace this example address with your actual email before
            publishing your portfolio.
          </p>

          <div className="contact-divider"></div>

          <h3>Find me online</h3>

          <div className="contact-socials">
            <a
              href="https://github.com/DivyanshVashishtth"
              target="_blank"
              rel="noreferrer"
            >
              <span>GitHub</span>
              <span>↗</span>
            </a>

            <a
              href="https://www.linkedin.com/in/divyansh-vashishtth-054661380"
              target="_blank"
              rel="noreferrer"
            >
              <span>LinkedIn</span>
              <span>↗</span>
            </a>
          </div>
        </div>

        <p className="contact-bottom-text">
          Have a good idea? Let's make it happen.
        </p>
      </div>
    </section>
  );
}

export default Contact;
