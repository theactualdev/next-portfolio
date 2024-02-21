import { projects } from "@/constants";
import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div id="projects" className="flex flex-col itemce justify-center py-20">
      <h1 className="text-[40px] font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 cursor-pointer">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        {projects.map((project, index) => (
          <ProjectCard
            src={project.Image}
            title={project.title}
            desc={project.desc}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
