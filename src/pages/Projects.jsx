import React from "react";
import Project from "../components/project/Project";
import { projects } from "../components/helpers/ProjectList";

export default function Projects() {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {projects.map((project) => {
            return (
              <Project
                key={project.id}
                title={project.title}
                img={project.img}
                id={project.id}
              />
            );
          })}
        </ul>
      </div>
    </main>
  );
}
