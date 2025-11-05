import Image from "next/image";
import { Mail, Linkedin, MessageCircle, Instagram } from "lucide-react";
import { siteConfig } from "@/lib/data";

export function Footer() {
  const socialLinks = siteConfig.footer.socialLinks;

  return (
    <footer className="bg-[#1a1a1a] border-t border-gray-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and About */}
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center gap-2">
              <Image
                src={siteConfig.club.logoUrl || "/placeholder.svg"}
                alt="YSAC Logo"
                width={32}
                height={32}
                className="h-8 w-8 rounded"
              />
              <span className="text-white font-semibold">
                {siteConfig.club.shortName}
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-start gap-3">
            <h4 className="text-white font-semibold text-sm">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href={socialLinks.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-500 transition-colors"
                title="Discord"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-500 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-500 transition-colors"
                title="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={socialLinks.linktree}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-500 transition-colors"
                title="Linktree"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-start gap-3">
            <h4 className="text-white font-semibold text-sm">Contact</h4>
            <a
              href={`mailto:${siteConfig.footer.contactEmail}`}
              className="text-gray-400 hover:text-purple-500 transition-colors text-sm"
            >
              {siteConfig.footer.contactEmail}
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-400 text-sm text-center">
            © {siteConfig.footer.copyrightYear} {siteConfig.club.shortName}.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
