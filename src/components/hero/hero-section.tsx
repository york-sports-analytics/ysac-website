"use client";

import Image from "next/image";
import { siteConfig, CONTACT_FORM_URL } from "@/lib/data";

export function HeroSection() {
  return (
    <section
      id="home"
      className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Logo and Content */}
          <div className="flex flex-col gap-8">
            <Image
              src={siteConfig.club.logoUrl || "/placeholder.svg"}
              alt="YSAC Logo"
              width={256}
              height={256}
              className="w-64 h-64 rounded-lg shadow-2xl animate-float"
            />
          </div>

          {/* Right: Text Content */}
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 text-balance">
                {siteConfig.club.name}
              </h1>
              <p className="text-2xl font-semibold mb-4 gradient-text">
                {siteConfig.club.tagline}
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                {siteConfig.club.description}
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={siteConfig.club.linktree}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-2 sm:py-3 bg-purple-600 text-white text-sm sm:text-base rounded-lg hover:bg-purple-700 transition-all duration-300 font-semibold text-center btn-interactive"
              >
                Join Our Community
              </a>
              <a
                href={CONTACT_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-2 sm:py-3 border-2 border-purple-600 text-purple-500 text-sm sm:text-base rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300 font-semibold text-center hover-scale"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
