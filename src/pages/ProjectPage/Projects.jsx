import { useEffect, useState } from "react";
import "./Projects.scss";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  // Fetch the data from the github api
  useEffect(() => {
    fetch("https://api.github.com/users/ItsEricFrisk/repos")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setProjects(data);
      });
  }, []);
  return (
    <section className="projects">
      <h2 className="projects__title">My Github projects</h2>
      {/* Rendering github repo with .map and creating a div for each repository */}
      {projects.map((repo) => (
        <div className="projects__repo" key={repo.id}>
          <a className="projects__repo-url" href={repo.html_url}>
            <h3 className="projects__repo-name">{repo.name}</h3>
          </a>
        </div>
      ))}
    </section>
  );
}
