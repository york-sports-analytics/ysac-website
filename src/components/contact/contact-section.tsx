"use client";
import { CONTACT_FORM_URL, SOCIAL_LINKS } from "@/lib/data";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Interested? Get In Touch
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Have questions or want to join? We&apos;d love to hear from you!
        </p>

        <div className="p-8 rounded-lg bg-[#1a1a1a] border border-gray-800 text-center space-y-6">
          <p className="text-gray-300">
            Fill out our form to get in touch with the YSAC team!
          </p>
          <a
            href={CONTACT_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold"
          >
            Open Contact Form
          </a>
          <p className="text-gray-500 text-sm">
            Note: Replace the Google Form URL in lib/data.ts with your actual
            form link
          </p>
        </div>

        {/* Alternative Contact */}
        <div className="mt-8 text-center">
          <p className="text-gray-400">
            Or connect with us on{" "}
            <a
              href={SOCIAL_LINKS.linktree}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-500 hover:text-purple-400 font-semibold"
            >
              Linktree
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
