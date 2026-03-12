// components/navbar.tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full px-6 py-4">
      <nav
        className="
          group mx-auto flex max-w-7xl items-center justify-between
          rounded-full border border-transparent
          bg-transparent px-6 py-3
          transition-all duration-300 ease-in-out
          hover:border-slate-200 hover:bg-white hover:shadow-md
        "
      >
        <Link
          href="/"
          className="text-lg font-bold text-white transition-colors duration-300 group-hover:text-slate-900"
        >
          MyBrand
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-white transition-colors duration-300 hover:text-slate-600 group-hover:text-slate-900"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Button className="bg-white text-slate-900 transition-all duration-300 group-hover:bg-slate-900 group-hover:text-white">
            Get Started
          </Button>
        </div>
      </nav>
    </header>
  )
}