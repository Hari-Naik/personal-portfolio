import Image from "next/image";
import React from "react";
import { mulish, poppins } from "./Hero";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="flex flex-col items-center gap-6 md:flex-row md:items-start max-w-[920px] mx-auto px-8">
        <div className="relative w-[350px] h-[350px]">
          <Image
            src="https://www.stefantopalovic.com/static/media/about-img.62b47e7f183d4b4e9feb.webp"
            alt="about"
            fill
            className="rounded-lg"
          />
        </div>
        <div className="max-w-[calc(920px-400px)] flex flex-col items-center md:items-start">
          <h1 className="text-[17px] text-[#147efb] font-bold uppercase mb-2">
            About me
          </h1>
          <h2
            className={`${poppins.className} text-[25px] text-[#2d2e32] text-center md:text-start mb-2`}>
            Front-end Developer
            <br /> based in Hyderabad, Telangana 📍
          </h2>
          <p
            className={`${mulish.className} text-[17px] text-[#767676] font-medium text-center md:text-start mb-2`}>
            Hey, my name is Harinaik Meravath, and {`I'm`} a Frontend Developer.
            My passion is to create and develop a clean UI/UX for my users.
          </p>
          <p
            className={`${mulish.className} text-[17px] text-[#767676] font-medium text-center md:text-start mb-2`}>
            My main stack currently is React/Next.js in combination with
            Tailwind CSS and TypeScript.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
