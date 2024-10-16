function ResumePage() {
  return (
    <section className="resume-section">
      <h2>Resume</h2>
      <a href="public/assets/resume/cv.pdf" download className="resume-download">Download Resume</a>

      <div className="resume-details">
        <img src="/assets/images/cv.png" alt="Resume" />
      </div>

      <div className="skills-languages">
        <div className="proficiency-list">
          <h3>Proficiencies</h3>
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>React, Redux</li>
            <li>Node.js, Express.js</li>
            <li>MongoDB, PostgreSQL</li>
            <li>Git, GitHub, GitLab</li>
          </ul>
        </div>

        {/* Languages Spoken */}
        <div className="languages-spoken">
          <h3>Languages Spoken</h3>
          <ul>
            <li>English</li>
            <li>Spanish</li>
            <li>French</li>
            <li>German</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ResumePage;
