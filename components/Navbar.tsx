"use client";

import { ModeToggle } from "@/components/ModeToggle";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "About", href: "/about" },
  { name: "Industries", href: "/industries" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto max-w-[95%] px-4 pt-4">
        <nav className="flex items-center justify-between rounded-full px-5 md:px-8 py-2 bg-background/80 backdrop-blur-md shadow-sm transition-all duration-300 ease-in-out">
          <Link href="/about" className="flex items-center">
            <Image
              src="/images/logo-removebg-preview.png"
              alt="IndonorTech"
              width={140}
              height={48}
              priority
              className="h-auto w-auto object-contain md:w-[160px] dark:invert dark:brightness-110"
            />
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-lg font-medium transition-colors ${
                  pathname === item.href ? "text-primary" : "text-foreground hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <ModeToggle />
          </div>

          <div className="md:hidden">
            <ModeToggle />
          </div>
        </nav>

        <div className="mt-3 rounded-2xl bg-background/80 backdrop-blur-md shadow-sm px-4 py-2 md:hidden">
          <div className="flex items-center justify-between gap-3 overflow-x-auto">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium whitespace-nowrap px-3 py-1 rounded-full transition-colors ${
                  pathname === item.href
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-primary/10"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}