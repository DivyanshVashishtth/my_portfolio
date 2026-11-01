import './About.css';

function About() {
  return (
    <section className="about-page">
      <div className="about-container">
        <div className="section-heading">
          <p className="section-label">GET TO KNOW ME</p>
          <h1>
            A little about <span>me.</span>
          </h1>
          <p className="section-subtitle">
            Learning, building, and improving one project at a time.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-main">
            <p className="about-greeting">Hey, I'm Divyansh 👋</p>

            <h2>
              A Computer Science student who enjoys building for the web.
            </h2>

            <p>
              I'm pursuing a B.Tech in Computer Science and Engineering.
              I'm interested in frontend development and enjoy turning ideas
              into clean, responsive, and easy-to-use web interfaces.
            </p>

            <p>
              I'm currently learning React and JavaScript while developing
              FrameConnect, a project designed to connect clients with
              photographers and videographers.
              At last , my goal is to become a Full Stack Developer and contribute to impactful web projects.
            </p>

            <p>
              My current goal is to strengthen my frontend development skills,
              build real-world projects, and secure a frontend developer
              internship where I can learn from an experienced team.
            </p>

            <div className="about-highlight">
              <span className="highlight-icon">✦</span>
              <p>
                I believe the best way to learn development is to keep building,
                solving problems, and improving through practice.
              </p>
            </div>
          </div>

          <aside className="about-sidebar">
            <div className="about-info-card">
              <span className="info-number">01</span>
              <h3>Education</h3>
              <p>B.Tech in Computer Science & Engineering</p>
              <span className="info-tag">Undergraduate</span>
            </div>

            <div className="about-info-card">
              <span className="info-number">02</span>
              <h3>Currently focused on</h3>
              <p>React, JavaScript, responsive design, and frontend projects.</p>
            </div>

            <div className="about-info-card">
              <span className="info-number">03</span>
              <h3>Career goal</h3>
              <p>Frontend Developer → Full Stack Developer</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default About;
