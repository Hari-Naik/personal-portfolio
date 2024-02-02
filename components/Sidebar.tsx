"use client";
import { SidebarContext } from "@/app/context";
import Link from "next/link";
import React, { useContext } from "react";

const Sidebar = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  console.log(isOpen);
  return (
    <div
      className={`absolute ${
        isOpen ? "left-0" : "-left-[100%]"
      } top-0 z-[100] w-full h-full bg-white `}>
      <div
        onClick={() => setIsOpen(false)}
        className="flex justify-end py-6 px-10 cursor-pointer hover:text-[#006afa]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </div>
      <nav className="w-full h-[70vh] flex flex-col items-center justify-center space-y-8 text-[23px] text-[#000] font-base">
        <Link
          href="#home"
          onClick={() => setIsOpen(false)}
          className="hover:text-[#006afa]">
          Home
        </Link>
        <Link
          href="#about"
          onClick={() => setIsOpen(false)}
          className="hover:text-[#006afa]">
          About
        </Link>
        <Link
          href="#projects"
          onClick={() => setIsOpen(false)}
          className="hover:text-[#006afa]">
          Projects
        </Link>
        <Link
          href="#contact"
          onClick={() => setIsOpen(false)}
          className="hover:text-[#006afa]">
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
