"use client";
import { CONTACT_FORM_URL, SOCIAL_LINKS } from "@/lib/data";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Interested? Get In Touch
        </h2>
        <p className="text-gray-400 text-center mb-12 text-base sm:text-lg">
          Have questions or want to join? We&apos;d love to hear from you!
        </p>

        <div className="p-8 rounded-lg bg-[#1a1a1a] border border-gray-800 text-center space-y-6 hover:border-purple-500/50 transition-all duration-300">
          <p className="text-gray-300 text-base sm:text-lg">
            Fill out our form to get in touch with the YSAC team!
          </p>
          <a
            href={CONTACT_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-300 font-semibold btn-interactive animate-pulse-glow text-base sm:text-lg"
          >
            Open Contact Form
          </a>
        </div>

        {/* Alternative Contact */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-base sm:text-lg">
            Or connect with us on{" "}
            <a
              href={SOCIAL_LINKS.linktree}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-500 hover:text-purple-400 font-semibold transition-colors duration-300 underline decoration-purple-500/50 hover:decoration-purple-400"
            >
              Linktree
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
