import './Skills.css';

const skillGroups = [
  {
    number: '01',
    title: 'Frontend Development',
    description: 'Building the user interface of websites.',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'React Router'],
  },
  {
    number: '02',
    title: 'Tools & Workflow',
    description: 'Tools I use to develop and manage projects.',
    skills: ['Git', 'GitHub', 'VS Code', 'npm'],
  },
  {
    number: '03',
    title: 'Currently Learning',
    description: 'Technologies and concepts I am working to improve.',
    skills: ['Advanced JavaScript', 'Responsive UI', 'React Best Practices','Fast API' ],
  },
];

function Skills() {
  return (
    <section className="skills-page">
      <div className="skills-container">
        <div className="section-heading">
          <p className="section-label">MY TOOLKIT</p>

          <h1>
            Skills & <span>Technologies.</span>
          </h1>

          <p className="section-subtitle">
            The tools I use and the skills I'm developing to become a better
            frontend developer.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.number}>
              <span className="skill-number">{group.number}</span>

              <div className="skill-icon">
                {group.number === '01'
                  ? '⌘'
                  : group.number === '02'
                    ? '⚙'
                    : '↗'}
              </div>

              <h2>{group.title}</h2>

              <p className="skill-description">{group.description}</p>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="skills-note">
          <span>✦</span>
          <p>
            I'm continuously learning and adding to my toolkit through
            coursework, practice, and personal projects.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
