import Link from "next/link";
import React from "react";
import { poppins } from "./Hero";
import Icons from "./Icons";

const Footer = () => {
  return (
    <footer className="p-8 bg-[#2d2e32]">
      <div className="flex items-center justify-between text-[#fff] max-w-[920px] mx-auto md:px-8">
        <h2 className={`${poppins.className} text-[17px]`}>
          Copyright © 2024. All rights are reserved
        </h2>
        <Icons />
      </div>
    </footer>
  );
};

export default Footer;
