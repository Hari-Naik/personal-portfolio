import React from "react";

const TechStack = () => {
  return (
    <div className="flex flex-col items-center md:flex-row md:items-end px-8 mt-20 lg:w-[920px] lg:mx-auto">
      <p className="text-[17px] font-semibold text-[#2d2e32] mr-5 border-b-2 pb-1 border-[#2d2e3280] md:border-b-0 md:border-r-2 md:pr-4">
        Tech Stack
      </p>
      <div className="flex gap-6 mt-10 md:ml-10">
        <img
          className="hover:-translate-y-2 transition duration-300 cursor-pointer ease-in-out"
          src="https://skillicons.dev/icons?i=html,css"
          alt="html,css"
        />
        <img
          className="hover:-translate-y-2 transition duration-300 cursor-pointer ease-in-out"
          src="https://skillicons.dev/icons?i=js,ts"
          alt="js,ts"
        />
        <img
          className="hover:-translate-y-2 transition duration-300 cursor-pointer ease-in-out"
          src="https://skillicons.dev/icons?i=react,tailwind"
          alt="react,tailwind"
        />
      </div>
    </div>
  );
};

export default TechStack;
