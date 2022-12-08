import React from "react";
import { useParams } from "react-router-dom";

import BtnGitHub from "../components/btnGithub/BtnGitHub";
import { projects } from "../components/helpers/ProjectList";

export default function SeparateProject() {
  const { id } = useParams();
  const project = projects[id];

  return (
    <main className="section">
      <div className="container">
        <div className="project-detailes">
          <h1 className="title-1">{project.title}</h1>
          <p>{id}</p>
          <img
            src={project.img}
            alt="project cover"
            className="project-detailes__cover"
          />
          <div className="project-detailes__desc">
            <p>{project.skills}</p>
          </div>
          <BtnGitHub link={project.gitHubLink} />
        </div>
      </div>
    </main>
  );
}
