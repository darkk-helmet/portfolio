"use client";

import { useEffect, useState } from "react";
import { Logo } from "../logo";
import { NavItems } from "./nav-items";

export function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-background text-foreground h-[102px] transition-all duration-150 border-b-2 ${
        scrollPosition ? "border-lavender-500" : "border-background"
      }`}
    >
      <div className="flex items-center justify-between max-w-screen-2xl mx-auto px-6 md:px-12 py-8">
        <Logo />
        <NavItems />
      </div>
    </header>
  );
}
