function ProjectPage() {
    return (
      <section className="portfolio-section">
        <h2>My Portfolio</h2>
        <div className="portfolio-item">
          <img src="/assets/images/PlatePal.jpg" alt="PlatePal" />
          <h3>PlatePal</h3>
          <a href="https://platepal-2n0e.onrender.com/" target="_blank" rel="noopener noreferrer">Deployed App</a>
          <a href="https://github.com/Taboada-B/PlatePal" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
        </div>
        <div className="portfolio-item">
          <img src="/assets/images/taskboard.png" alt="KanBan Board" />
          <h3>Task Board</h3>
          <a href="https://sergmart7.github.io/task-board/" target="_blank" rel="noopener noreferrer">Deployed App</a>
          <a href="https://github.com/SergMart7/task-board" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
        </div>
        <div className="portfolio-item">
          <img src="/assets/images/weatherboard.png" alt="Weather App" />
          <h3>Weather Board</h3>
          <a href="https://sergmart7.github.io/weatherboard/" target="_blank" rel="noopener noreferrer">Deployed App</a>
          <a href="https://github.com/SergMart7/weatherboard" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
        </div>
      </section>
    );
  }
  
  export default ProjectPage;
  