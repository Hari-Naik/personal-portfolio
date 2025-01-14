import Image from "next/image";
import React from "react";
import ProjectItem from "./ProjectItem";
import { projects } from "@/libs/data";

const Projects = () => {
  return (
    <div id="projects" className="mt-20">
      <div className="max-w-[920px] mx-auto px-8 text-center md:text-start">
        <h2 className="text-[17px] text-[#147efb] font-bold uppercase mb-2">
          Portfolio
        </h2>
        <p className="text-md text-[#2d2e32] font-semibold">
          Each project is a unique piece of development 🚀
        </p>
        <div className="flex flex-col gap-10 mt-5">
          {projects.map((project, index) => {
            let order = 0;
            if ((index + 1) % 2 === 0) {
              order = 1;
            }
            return (
              <ProjectItem key={project.id} project={project} index={order} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
