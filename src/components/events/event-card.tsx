"use client";

import { useState } from "react";
import Image from "next/image";
import { EventModal } from "./event-modal";

interface EventCardProps {
  id: number;
  title: string;
  date: string;
  time: string;
  description: string;
  fullDescription: string;
  location: string;
  image: string;
  tags: string[];
}

export function EventCard({
  id,
  title,
  date,
  time,
  description,
  fullDescription,
  location,
  image,
  tags,
}: EventCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="p-4 sm:p-6 rounded-lg bg-[#1a1a1a] border border-gray-800 hover:border-purple-600 transition-all hover:shadow-lg hover:shadow-purple-600/20 cursor-pointer overflow-hidden group">
        {/* Image */}
        <div className="mb-3 sm:mb-4 h-24 sm:h-40 overflow-hidden rounded-lg relative">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-2">
          {/* Title */}
          <h3 className="text-sm sm:text-lg md:text-xl font-bold text-white line-clamp-2">
            {title}
          </h3>

          <div className="flex gap-2 text-xs sm:text-sm text-gray-400">
            <span>📅 {date}</span>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-xs sm:text-sm line-clamp-2">
            {description}
          </p>

          {/* See More Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-2 sm:mt-3 w-full py-2 px-3 sm:px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium text-xs sm:text-sm"
          >
            See More
          </button>
        </div>
      </div>

      {/* Modal */}
      <EventModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        date={date}
        time={time}
        fullDescription={fullDescription}
        location={location}
        image={image}
      />
    </>
  );
}
