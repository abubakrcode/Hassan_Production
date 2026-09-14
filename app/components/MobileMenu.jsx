"use client";

import { useState } from "react";
import Link from "next/link";
import { IoMenu, IoClose } from "react-icons/io5";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="w-full sm:hidden">
      {/* Top Mobile Bar */}
      <nav className="flex justify-between text-sm items-center w-full px-4 py-2 rounded-full bg-transparent backdrop-blur-xs border border-white/20 shadow-2xl text-white">
        <Link href="/" onClick={closeMenu}>
          <p className="hover:bg-gray-700 p-2 rounded font-bold transition-all duration-500">
            HS
          </p>
        </Link>
        <Link href="/contact" onClick={closeMenu}>
          <p className="hover:bg-gray-700 p-2 rounded transition-all duration-500">
            Contact
          </p>
        </Link>

        {/* Hamburger Icon Button to toggle dropdown */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          className="hover:bg-gray-700 p-2 rounded transition-all duration-500 focus:outline-none"
        >
          {isOpen ? <IoClose className="w-6 h-6" /> : <IoMenu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Dropdown Navigation Menu */}
      {isOpen && (
        <div className="mt-2 w-full rounded-2xl bg-transparent backdrop-blur-xs text-center border border-white/20 p-4 text-white flex flex-col gap-2 shadow-2xl">
          <Link href="/videoediting" onClick={closeMenu}>
            <p className="hover:bg-gray-700 p-2 rounded transition-all duration-500">
              Video Editing
            </p>
          </Link>
          <Link href="/videography" onClick={closeMenu}>
            <p className="hover:bg-gray-700 p-2 rounded transition-all duration-500">
              Videography
            </p>
          </Link>
          <Link href="/socialmedia" onClick={closeMenu}>
            <p className="hover:bg-gray-700 p-2 rounded transition-all duration-500">
              Social Media Management
            </p>
          </Link>
          <Link href="/contentcreation" onClick={closeMenu}>
            <p className="hover:bg-gray-700 p-2 rounded transition-all duration-500">
              Content Creation
            </p>
          </Link>
        </div>
      )}
    </div>
  );
}