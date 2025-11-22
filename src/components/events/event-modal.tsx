"use client";

import { useEffect } from "react";
import Image from "next/image";

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  date: string;
  time: string;
  fullDescription: string;
  location: string;
  image: string;
}

export function EventModal({
  isOpen,
  onClose,
  title,
  date,
  time,
  fullDescription,
  location,
  image,
}: EventModalProps) {
  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="bg-[#1a1a1a] rounded-xl sm:rounded-2xl max-w-3xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto border border-gray-700 relative shadow-2xl shadow-purple-900/20 animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button - Improved visibility and accessibility */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-300 hover:text-white text-3xl sm:text-4xl z-10 bg-black/70 hover:bg-purple-600 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-all duration-300 hover:scale-110"
          aria-label="Close modal"
        >
          ×
        </button>

        {/* Image Header */}
        <div className="w-full h-48 sm:h-56 md:h-64 relative">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover rounded-t-xl sm:rounded-t-2xl"
          />
          {/* Gradient overlay for better text readability if needed */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 md:p-8">
          {/* Title */}
          <h2
            id="modal-title"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight"
          >
            {title}
          </h2>

          {/* Event Details - Improved layout and sizing */}
          <div className="flex flex-col gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="flex items-center gap-3 text-gray-300 text-base sm:text-lg">
              <span className="text-purple-500 text-xl sm:text-2xl">📅</span>
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                <span className="font-semibold text-purple-400">Date:</span>
                <span>{date}</span>
              </div>
            </div>
            <div className="flex items-center gap-3 text-gray-300 text-base sm:text-lg">
              <span className="text-purple-500 text-xl sm:text-2xl">⏰</span>
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                <span className="font-semibold text-purple-400">Time:</span>
                <span>{time}</span>
              </div>
            </div>
            <div className="flex items-center gap-3 text-gray-300 text-base sm:text-lg">
              <span className="text-purple-500 text-xl sm:text-2xl">📍</span>
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                <span className="font-semibold text-purple-400">Location:</span>
                <span>{location}</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 mb-6 sm:mb-8" />

          {/* Description - Improved readability */}
          <div className="mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl font-semibold text-purple-400 mb-3 sm:mb-4">
              About This Event
            </h3>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed whitespace-pre-wrap">
              {fullDescription}
            </p>
          </div>

          {/* Close Button - Better styling */}
          <button
            onClick={onClose}
            className="w-full py-3 sm:py-4 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-300 font-semibold text-base sm:text-lg btn-interactive"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
