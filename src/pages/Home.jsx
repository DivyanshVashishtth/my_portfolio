import './Home.css';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <section className="home">
      <div className="home-container">
        {/* Introduction */}
        <div className="home-content">
          <p className="home-label">
            <span className="status-dot"></span>
            AVAILABLE FOR INTERNSHIPS
          </p>

          <h1>
            Hi, I'm <span>Divyansh</span>.
            <br />
            I build things for
            <br />
            the <span>web.</span>
          </h1>

          <p className="home-description">
            I'm a Computer Science student and aspiring Frontend Developer
            who enjoys building responsive, user-friendly web experiences
            with React and JavaScript.
          </p>

          <div className="home-buttons">
            <Link to="/projects" className="btn-primary">
              Explore My Work <span>↗</span>
            </Link>

            <Link to="/contact" className="btn-secondary">
              Let's Talk
            </Link>
          </div>

          <div className="home-socials">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* Developer Card */}
        <div className="home-visual">
          <div className="developer-card">
            <div className="card-top">
              <div className="card-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <p>developer.js</p>
            </div>

            <div className="code-content">
              <p>
                <span className="code-purple">const</span>{' '}
                developer = {'{'}
              </p>

              <p className="code-indent">
                name: <span className="code-green">'Divyansh'</span>,
              </p>

              <p className="code-indent">
                role: <span className="code-green">'Frontend Developer'</span>,
              </p>

              <p className="code-indent">
                skills: [
              </p>

              <p className="code-indent code-more">
                <span className="code-orange">'React'</span>,
              </p>

              <p className="code-indent code-more">
                <span className="code-orange">'JavaScript'</span>,
              </p>

              <p className="code-indent code-more">
                <span className="code-orange">'CSS'</span>
              </p>

              <p className="code-indent">],</p>

              <p className="code-indent">
                learning: <span className="code-green">'Every day'</span>
              </p>

              <p>{'}'};</p>

              <br />

              <p>
                <span className="code-purple">function</span>{' '}
                <span className="code-yellow">buildFuture</span>() {'{'}
              </p>

              <p className="code-indent">
                <span className="code-purple">return</span>{' '}
                <span className="code-green">'Keep building!'</span>;
              </p>

              <p>{'}'}</p>
            </div>

            <div className="card-bottom">
              <span className="status-dot"></span>
              Currently building FrameConnect
            </div>
          </div>

          <div className="floating-tag tag-one">
            <span>⚛</span> React Developer
          </div>

          <div className="floating-tag tag-two">
            <span>✦</span> Always Learning
          </div>
        </div>
      </div>

      <div className="home-bottom">
        <span>BASED IN INDIA</span>
        <span>SCROLL TO EXPLORE ↓</span>
      </div>
    </section>
  );
}

export default Home;
