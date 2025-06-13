"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Resume", href: "/resume" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-metal-black/80 border-metal-dark fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Name */}
          <Link href="/" className="font-display text-gradient text-xl font-medium">
            Joseph Crawford
          </Link>

          {/* Navigation Items */}
          <div className="hidden items-center space-x-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === item.href ? "text-metal-bright" : "text-metal-chrome hover:text-metal-bright"
                } `}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Resume Download Button - Always Visible */}
          <button
            className="bg-accent-green text-metal-black hover:bg-accent-green-light rounded px-4 py-2 text-sm font-medium transition-colors"
            onClick={() => alert("TODO: Link PDF here - Replace this alert with actual PDF download")}
          >
            Download Resume
          </button>

          {/* Mobile Menu Button */}
          <button className="text-metal-chrome hover:text-metal-bright p-2 md:hidden">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
