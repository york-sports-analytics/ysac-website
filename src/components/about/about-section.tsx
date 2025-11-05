"use client";

import { siteConfig } from "@/lib/data";

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 sm:mb-16 text-center">
          About YSAC
        </h2>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
          {siteConfig.clubInfo.sections.map((section, index) => (
            <div
              key={index}
              className="p-5 sm:p-8 rounded-lg bg-[#1a1a1a] border border-gray-800 hover:border-purple-600 hover:shadow-lg hover:shadow-purple-600/10 transition-all"
            >
              <h3 className="text-base sm:text-lg md:text-2xl font-bold text-white mb-3 sm:mb-4">
                {section.title}
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
