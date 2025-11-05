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
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-[#1a1a1a] rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-800 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl z-10 bg-black/50 rounded-full w-10 h-10 flex items-center justify-center"
        >
          ×
        </button>

        <div className="w-full h-64 relative">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover rounded-t-xl"
          />
        </div>

        <div className="p-8">
          <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>

          <div className="flex flex-col gap-3 mb-6 text-gray-300">
            <div className="flex items-center gap-2">
              <span className="text-red-500">📅</span>
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-red-500">⏰</span>
              <span>{time}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-red-500">📍</span>
              <span>{location}</span>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">
            {fullDescription}
          </p>

          <button
            onClick={onClose}
            className="mt-8 w-full py-3 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
