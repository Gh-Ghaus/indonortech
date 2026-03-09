// components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="text-xl font-semibold tracking-tight">
          IndonorTech
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-2xl px-2 py-1 rounded hover:bg-gray-100"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          type="button"
        >
          ☰
        </button>

        {/* Links */}
        <div
          className={`${
            open ? "block" : "hidden"
          } w-full md:w-auto md:block mt-4 md:mt-0`}
        >
          <ul className="flex flex-col md:flex-row gap-4 md:gap-6">
            <li>
              <Link
                href="/home"
                className="block py-1 text-gray-700 hover:text-blue-600"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="block py-1 text-gray-700 hover:text-blue-600"
                onClick={() => setOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block py-1 text-gray-700 hover:text-blue-600"
                onClick={() => setOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-1 text-gray-700 hover:text-blue-600"
                onClick={() => setOpen(false)}
              >
                Contact
              </Link>
            </li> 
            
          </ul>
        </div>
      </div>
    </nav>
  );
}