"use client";

import { siteConfig } from "@/lib/data";
import { TeamMemberCard } from "./team-member-card";

export function TeamSection() {
  return (
    <section id="team" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Meet The Team
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Our dedicated executive team leading YSAC
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-6">
          {siteConfig.team.map((member) => (
            <TeamMemberCard key={member.id} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
