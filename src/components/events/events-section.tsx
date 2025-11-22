"use client";

import { siteConfig } from "@/lib/data";
import { EventCard } from "./event-card";

export function EventsSection() {
  return (
    <section id="events" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Upcoming Events
        </h2>
        <p className="text-gray-400 text-center mb-16 text-base sm:text-lg">
          Join us for workshops, discussions, and networking opportunities
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.events.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}
