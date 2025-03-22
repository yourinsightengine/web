import { Link } from "react-router-dom";
import CookieConsent from "./CookieConsent";
import LinkedIn from "../assets/linkedin.svg";
import Instagram from "../assets/instagram.svg";
import Discord from "../assets/discord.svg";
import Banner from "../assets/banner.jpg";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="relative col-span-3">
            <img src={Banner} alt="banner" className="w-full" />
            <h3 className="absolute top-0 left-0 mt-5 lg:mt-10 ml-5 lg:ml-10 text-center text-xs md:text-base text-white font-semibold mb-4 font-brand">
              insight
              <br />
              engine
            </h3>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                {
                  name: "LinkedIn",
                  url: "https://www.linkedin.com/company/insightengine/",
                  icon: LinkedIn,
                },
                {
                  name: "Instagram",
                  url: "https://www.instagram.com/yourinsightengine",
                  icon: Instagram,
                },
                {
                  name: "Discord",
                  url: "https://discord.gg/xBVGKU7y3S",
                  icon: Discord,
                },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.url}
                    className="flex items-center gap-x-3 text-neutral-300 transition-colors duration-200 hover:text-white"
                  >
                    <img src={link.icon} alt={link.name} className="w-6 h-6" />
                    <span className="font-medium">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center text-center">
            <p className="text-sm">
              Copyright © {new Date().getFullYear()} Insight Engine - All
              Rights Reserved.
            </p>
            <div className="mt-4 md:mt-0 text-sm">
              Powered by Insight Engine
            </div>
          </div>
        </div>
      </div>
      <CookieConsent />
    </footer>
  );
}
