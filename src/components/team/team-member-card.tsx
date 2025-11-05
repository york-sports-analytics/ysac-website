"use client";

import Image from "next/image";
import { Mail, Linkedin, Globe } from "lucide-react";

interface TeamMemberCardProps {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  portfolio?: string;
  email?: string;
}

export function TeamMemberCard({
  name,
  role,
  bio,
  image,
  linkedin,
  portfolio,
  email,
}: TeamMemberCardProps) {
  return (
    <div className="text-center group">
      {/* Image */}
      <div className="mb-2 relative">
        <div className="relative w-full aspect-square">
          <Image
            src={image || "/placeholder-profile-icon.png"}
            alt={name}
            fill
            className="object-cover rounded-lg group-hover:shadow-lg group-hover:shadow-purple-600/30 transition-shadow"
          />
        </div>
        <div className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-10 rounded-lg transition-opacity" />
      </div>

      {/* Content */}
      <h3 className="text-sm md:text-base font-bold text-white mb-1">{name}</h3>
      <p className="text-purple-500 font-semibold mb-1 text-xs md:text-sm">
        {role}
      </p>
      <p className="text-gray-300 text-xs leading-relaxed mb-2 line-clamp-2">
        {bio}
      </p>

      {(linkedin || portfolio || email) && (
        <div className="flex justify-center gap-1">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded hover:bg-purple-600/20 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-3 h-3 md:w-4 md:h-4 text-gray-400 hover:text-purple-500" />
            </a>
          )}
          {portfolio && (
            <a
              href={portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded hover:bg-purple-600/20 transition-colors"
              title="Portfolio"
            >
              <Globe className="w-3 h-3 md:w-4 md:h-4 text-gray-400 hover:text-purple-500" />
            </a>
          )}
          {email && (
            <a
              href={`mailto:${email}`}
              className="p-1.5 rounded hover:bg-purple-600/20 transition-colors"
              title="Email"
            >
              <Mail className="w-3 h-3 md:w-4 md:h-4 text-gray-400 hover:text-purple-500" />
            </a>
          )}
        </div>
      )}
    </div>
  );
}
