import React from 'react';
import axios from 'axios';
import config from '../config.json';

function ProjectsDetails() {
  const [projects, setProjects] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(config.BASE_URL + '/projects')
      .then((response) => {
        // console.log(response.data);
        setProjects(response.data);
      })
      .catch((error) => {
        // console.log(error);
      });
  }, []);

  return (
    <div className="w3-padding-32 w3-project-container">
      {projects.map((project) => (
        <div className="project__links w3-center" key={project.id}>
          <a href={project.url}>
            <h2 className="w3-center">{project.title}</h2>
            <img
              src={project.content}
              alt="Web"
              width="350px"
              height="auto"
              className="project-image"
            ></img>
          </a>
        </div>
      ))}
    </div>
  );
}

export default ProjectsDetails;
