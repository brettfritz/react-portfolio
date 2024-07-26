import React from 'react';

function Project({ project }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={project.image} className="card-img-top" alt={project.title} />
        <div className="card-body">
          <h5 className="card-title">{project.title}</h5>
          <a href={project.deployedLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
          <a href={project.repoLink} className="btn btn-secondary ml-2" target="_blank" rel="noopener noreferrer">
            View Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
