"use client";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <main className="w-full">
      <div className="mobileView flex sm:hidden w-full  ">
        <MobileMenu/>
      </div>
    <div className="webView hidden sm:flex justify-between items-center w-full px-10 gap-2  lg:text-[14px] md:text-sm text-[8px]">
      <Link href="/">
        <button className="lg:w-16 w-13 lg:h-16 h-13 flex items-center justify-center font-bold rounded-full bg-transparent backdrop-blur-md border border-white/20 shadow-2xl text-white hover:text-[#838383] transition-all">
          HS
        </button>
      </Link>

      {/* Nav Links */}
      <nav className="flex justify-evenly  items-center lg:gap-2  lg:px-6 px-4 lg:py-3 py-2 rounded-full bg-transparent backdrop-blur-md border border-white/20 shadow-2xl text-white">
        <Link href="/videoediting">
          <p className="hover:bg-gray-700 p-2 rounded  transition-all duration-500">
            Video Editing
          </p>
        </Link>
        <Link href="/videography">
          <p className="hover:bg-gray-700 p-2 rounded transition-all duration-500">
            Videography
          </p>
        </Link>
        <Link href="/socialmedia">
          <p className="hover:bg-gray-700 p-2 rounded transition-all duration-500">
            Social Media Management
          </p>
        </Link>
        <Link href="/contentcreation">
          <p className="hover:bg-gray-700 p-2 rounded transition-all duration-500">
            Content Creation
          </p>
        </Link>
      </nav>
      <Link href="/contact">
        <button className="lg:px-6 px-4 lg:py-3 py-2 rounded-full bg-transparent backdrop-blur-md border border-white/20 shadow-2xl text-white hover:text-[#838383] transition-all  font-medium">
          Contact
        </button>
      </Link>
    </div>
    </main>
  );
}