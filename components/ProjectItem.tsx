import Image from "next/image";
import Link from "next/link";
import React from "react";

type projectType = {
  id: number;
  title: string;
  img: string;
  description: string;
  techStack: string[];
  links: {
    github: string;
    live: string;
  };
};

type Props = {
  project: projectType;
  index?: number;
};

const ProjectItem: React.FC<Props> = ({ project, index }) => {
  return (
    <div className="flex flex-col items-center gap-6 lg:gap-10 md:flex-row md:items-start md:justify-between p-3">
      <div
        className={`relative w-full h-[170px] sm:h-[250px] md:w-[50%] md:order-${index}`}>
        <Image
          src={project.img}
          fill
          className="rounded-md hover:shadow-md cursor-pointer"
          alt="flipkart"
        />
      </div>
      <div className={`flex flex-col gap-3 md:flex-1 text-center w-[80%]`}>
        <h2 className="text-[17px] text-[#2d2e32] font-semibold mb-2">
          {project.title}
        </h2>
        <p className="text-sm text-[#878787]">{project.description}</p>

        <div className="flex items-center justify-center gap-8 mt-5">
          <a
            href={project.links.github}
            target="_blank"
            className="flex items-center">
            <span className="text-sm text-[#2d2e32] font-semibold">Code</span>
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-5 w-5 fill-slate-900">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"></path>
            </svg>
          </a>
          <a href={project.links.live} target="_blank" className="flex ">
            <span className="text-sm text-[#2d2e32] font-semibold">
              Live Demo
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
