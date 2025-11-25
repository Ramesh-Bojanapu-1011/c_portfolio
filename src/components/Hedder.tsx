"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { ModeToggle } from "./theme/ModeToggle";

const Hedder: React.FC = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({
    href,
    children,
  }) => (
    <Link
      href={href}
      className={`px-2 py-1 rounded-md text-sm font-medium transition-colors ${
        pathname === href
          ? "text-blue-600 dark:text-blue-400"
          : "text-slate-700 dark:text-slate-200 hover:text-blue-600"
      }`}
    >
      {children}
    </Link>
  );

  return (
    <header className="  w-full bg-white/60 dark:bg-slate-900/60 backdrop-blur-md shadow-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              aria-label="Enkonix Home"
              className="flex items-center gap-3"
            >
              <Image
                src="/logo.png"
                alt="Enkonix logo"
                width={44}
                height={44}
                className=" "
              />
              <div className="leading-tight">
                <div className="text-lg font-semibold text-slate-900 dark:text-white">
                  Enkonix
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-300">
                  Software Company
                </div>
              </div>
            </Link>
          </div>

          <nav
            className="hidden md:flex md:items-center md:gap-6"
            aria-label="Main navigation"
          >
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <Link
              href="#contact"
              className="ml-2 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 text-sm font-semibold shadow-md hover:scale-105 transform transition"
            >
              Get in touch
            </Link>
            <ModeToggle />
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <ModeToggle />
            <button
              onClick={() => setOpen((s) => !s)}
              aria-expanded={open}
              aria-label="Toggle menu"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden">
          <div className="px-2 flex flex-col items-start   pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-slate-900/80 backdrop-blur-md">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Hedder;
