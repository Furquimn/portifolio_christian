"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

import { useEffect, useState } from "react";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "h-12 bg-black shadow-sm backdrop-blur-md" : "h-20 bg-black"
      } `}
    >
      {/* BAR */}
      <div className="flex h-full items-center justify-center">
        <div className="container px-4 mx-auto flex w-full items-center justify-between ">
          <h1 className="font-bebas text-3xl text-stone-50 ">
            Christian Furquim
          </h1>

          {/* DESKTOP */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-6 text-stone-50">
              <li>
                <Link href="/">Início</Link>
              </li>
              <li>
                <Link href="#Projects">Projetos</Link>
              </li>
              <li>
                <Link href="#AboutMe">Sobre</Link>
              </li>
            </ul>
          </nav>

          {/* MOBILE BUTTON */}
          <button className="p-2 lg:hidden" onClick={() => setOpen(!open)}>
            <Menu className="text-stone-50" />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <nav className="absolute top-full left-0 w-full bg-black shadow-md backdrop-blur-md lg:hidden">
          <ul className="flex flex-col gap-4 px-6 py-6 text-lg text-stone-50">
            <li onClick={() => setOpen(false)}>
              <Link href="/">Início</Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href="#Projects">Projetos</Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href="#AboutMe">Sobre</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
