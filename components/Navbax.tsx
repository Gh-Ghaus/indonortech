"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        /
          IndonorTech
        </Link>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>

        <div className={`md:flex gap-6 ${open ? "block mt-4" : "hidden md:flex"}`}>
          /servicesServices</Link>
          /aboutAbout</Link>
          /contactContact</Link>
        </div>
      </div>
    </nav>
  );
}