"use client";

import { ModeToggle } from "@/components/ModeToggle";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { name: "Industrie", href: "/industries" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto max-w-[95%] px-4 pt-6">
        <nav className="flex items-center justify-between rounded-full px-8 py-0 bg-background/80 backdrop-blur-md shadow-sm transition-all duration-300 ease-in-out">
          <Link href="/industries" className="flex items-center">
            <Image
              src="/images/logo-removebg-preview.png"
              alt="logo"
              width={160}
              height={48}
              priority
              className="h-auto w-auto object-contain"
            />
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-lg font-medium text-foreground"
              >
                {item.name}
              </Link>
            ))}

            <ModeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}