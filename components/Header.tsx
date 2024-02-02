"use client";
import { SidebarContext } from "@/app/context";
import Link from "next/link";
import React, { useContext } from "react";

const Header = () => {
  const { setIsOpen } = useContext(SidebarContext);
  return (
    <header className="w-full sticky top-0 z-50 flex justify-between py-6 px-10 bg-white shadow-md ">
      <Link href="#home" className="text-xl text-[#2d2e32] font-bold">
        Harinaik.dev
      </Link>

      {/* mobile */}
      <div onClick={() => setIsOpen(true)} className="cursor-pointer md:hidden">
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
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>

      <nav className="hidden md:flex space-x-8 text-[17px] text-[#2d2e32] font-bold">
        <Link href="#home" className="hover:text-[#006afa]">
          Home
        </Link>
        <Link href="#about" className="hover:text-[#006afa]">
          About
        </Link>
        <Link href="#projects" className="hover:text-[#006afa]">
          Projects
        </Link>
        <Link href="#contact" className="hover:text-[#006afa]">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
