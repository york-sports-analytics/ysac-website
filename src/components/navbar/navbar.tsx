"use client";

import { useState } from "react";
import Image from "next/image";
import { siteConfig, CONTACT_FORM_URL } from "@/lib/data";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-[#1a1a1a] border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="shrink-0 flex items-center gap-2">
            <Image
              src={siteConfig.club.logoUrl || "/placeholder.svg"}
              alt="YSAC Logo"
              width={32}
              height={32}
              className="h-8 w-8 rounded"
            />
            <span className="text-white font-bold text-lg hidden sm:inline">
              {siteConfig.club.shortName}
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {["Home", "About", "Events", "Projects", "Team", "Contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() =>
                    scrollToSection(item.toLowerCase().replace(" ", "-"))
                  }
                  className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
                >
                  {item}
                </button>
              ),
            )}
          </div>

          {/* Join Button */}
          <div className="hidden md:block">
            <a
              href={CONTACT_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-800">
            <div className="flex flex-col gap-2 pt-4">
              {["Home", "About", "Events", "Projects", "Team", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() =>
                      scrollToSection(item.toLowerCase().replace(" ", "-"))
                    }
                    className="text-gray-300 hover:text-white transition-colors text-sm font-medium py-2 px-4 hover:bg-gray-900 rounded"
                  >
                    {item}
                  </button>
                ),
              )}
              <a
                href={CONTACT_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium text-center"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
