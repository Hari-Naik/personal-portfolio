import React from "react";

import { Poppins, Mulish } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import TechStack from "./TechStack";
import Icons from "./Icons";

export const poppins = Poppins({ subsets: ["latin"], weight: ["500"] });
export const mulish = Mulish({ subsets: ["latin"], weight: ["500"] });

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-76px)] flex flex-col bg-[#f9f9f9] pb-10">
      <div className="h-max flex flex-col items-center md:flex-row md:justify-between max-w-5xl px-8 mt-10 md:mt-20 lg:mx-auto ">
        {/* hero content */}
        <div className="max-w-xl text-[#2d2e32] order-2  md:order-1 text-center md:text-start">
          <h1
            className={`${poppins.className} font-sans text-[55px] font-bold mb-4`}>
            Front-End React Developer 👋🏻
          </h1>
          <p
            className={`${mulish.className} text-lg text-[#555] font-sans mb-6`}>
            Hi, {`I'm`} Harinaik Meravath. A passionate Front-end React
            Developer based in Hyderabad, Telangana. 📍
          </p>
          <Icons />
        </div>

        {/* hero img */}
        <div className="animate-swing relative h-[280px] w-[280px] order-1 md:order-2 rounded-full border-[2px] border-[#000]">
          <Image
            src="/profile.png"
            // src="https://res.cloudinary.com/dgwmfee0i/image/upload/v1642781168/6882_1_jfhk6r.jpg"
            fill
            className="rounded-full animate-swing"
            alt="proifle"
          />
        </div>
      </div>
      <TechStack />
    </section>
  );
};

export default Hero;
