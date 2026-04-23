"use client";

import { navItems } from "@/lib/portfolio-data";
import { useEffect, useState } from "react";

export function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sectionElements = navItems
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!sectionElements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0.01
      }
    );

    sectionElements.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-6">
      <nav className="w-full max-w-4xl rounded-full border border-edge/80 bg-[#0f0f12]/80 px-3 py-3 shadow-glow backdrop-blur">
        <ul className="flex flex-wrap items-center justify-center gap-1 md:gap-3">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  data-active={isActive}
                  className={`nav-link ${
                    isActive
                      ? "bg-text text-bg"
                      : "text-secondary hover:bg-white/10 hover:text-text"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
