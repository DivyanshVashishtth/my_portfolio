import { Link } from 'react-router-dom';
import './Projects.css';

const projects = [
  {
    number: '01',
    name: 'FrameConnect',
    category: 'FRONTEND DEVELOPMENT',
    description:
      'A platform concept designed to connect clients with photographers and videographers. The frontend includes navigation, creator discovery, signup pages, and pricing interfaces.',
    technologies: ['React', 'JavaScript', 'React Router', 'CSS'],
    status: 'In Development',
    demo: '',
    github: '',
  },
];

function Projects() {
  return (
    <section className="projects-page">
      <div className="projects-container">
        <div className="section-heading">
          <p className="section-label">MY WORK</p>

          <h1>
            Projects I've <span>built.</span>
          </h1>

          <p className="section-subtitle">
            A collection of projects where I put my development skills into
            practice and learn by building.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-preview">
                <div className="preview-top">
                  <span className="preview-dot"></span>
                  <span className="preview-dot"></span>
                  <span className="preview-dot"></span>
                  <span className="preview-filename">project.jsx</span>
                </div>

                <div className="preview-content">
                  <span className="preview-bracket">{'<'}</span>
                  <span className="preview-title">{project.name}</span>
                  <span className="preview-bracket">{'/>'}</span>

                  <p>Turning ideas into interfaces.</p>

                  <div className="preview-lines">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>

                <span className="project-number">{project.number}</span>
              </div>

              <div className="project-details">
                <div className="project-meta">
                  <span>{project.category}</span>
                  <span className="project-status">{project.status}</span>
                </div>

                <h2>{project.name}</h2>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className="project-actions">
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link project-primary"
                    >
                      Live Demo ↗
                    </a>
                  ) : (
                    <span className="project-unavailable">
                      Demo coming soon
                    </span>
                  )}

                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      Source Code ↗
                    </a>
                  ) : (
                    <span className="project-unavailable">
                      Add GitHub link
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="projects-cta">
          <div>
            <h2>Have a project in mind?</h2>
            <p>Let's connect and talk about it.</p>
          </div>

          <Link to="/contact" className="btn-primary">
            Contact Me ↗
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Projects;
