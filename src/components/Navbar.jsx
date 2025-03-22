import { useState } from "react";
import { ArrowUpRight, Menu, Sparkles, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import LogoOnly from "../assets/LOGO_only_small.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Get the current route

  // Helper function to check if the current route matches the link
  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`pb-0.5 fixed w-full z-50 backdrop-blur-xl bg-gradient-to-r from-transparent via-primary to-transparent  ${isMenuOpen ? "h-full" : ""}`}
    >
      <div className={`w-full h-full backdrop-blur-xl bg-black`}>
        <div className={`w-full h-full backdrop-blur-xl bg-primary/10`}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center">
              <div className="flex-shrink-0 py-4">
                <div className={`flex gap-x-2`}>
                  <img src={LogoOnly} className={`w-12 h-14`} alt={"Logo"} />
                  <Link
                    to="/"
                    className="flex items-center text-center text-white font-semibold font-brand"
                  >
                    insight
                    <br />
                    engine
                  </Link>
                </div>
              </div>

              <div className="hidden md:block py-4">
                <div className="ml-10 flex space-x-4 tracking-wider pt-2">
                  <Link
                    to="/"
                    className={`px-3 py-2 rounded-md ${isActive("/") ? "text-white" : "text-neutral-400 hover:text-neutral-300"}`}
                  >
                    Home
                  </Link>
                  <Link
                    to="/partners"
                    className={`px-3 py-2 rounded-md ${isActive("/partners") ? "text-white" : "text-neutral-400 hover:text-neutral-300"}`}
                  >
                    Partners
                  </Link>
                  <Link
                    to="/about"
                    className={`px-3 py-2 rounded-md ${isActive("/about") ? "text-white" : "text-neutral-400 hover:text-neutral-300"}`}
                  >
                    About Us
                  </Link>
                  <Link
                    to="/join"
                    className={`flex font-medium items-center gap-x-2 h-fit text-black px-4 py-2 rounded-lg bg-white transition-all duration-200 ease-in-out hover:bg-neutral-200`}
                  >
                    Join Us
                    <Sparkles size={20} />
                  </Link>
                </div>
              </div>

              <div className="md:hidden">
                <button
                  className="text-white"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
              <div className="md:hidden mb-4">
                <div className="px-2 pt-2 pb-3 space-y-4">
                  <Link
                    to="/"
                    className={`px-3 py-2 flex items-center rounded-md text-2xl font-medium ${isActive("/") ? "text-neutral-200" : "text-neutral-400"}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>

                  <Link
                    to="/partners"
                    className={`px-3 py-2 flex items-center rounded-md text-2xl font-medium ${isActive("/partners") ? "text-neutral-200" : "text-neutral-400"}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Partners
                  </Link>
                  <Link
                    to="/about"
                    className={`flex items-center px-3 py-2 rounded-md text-2xl font-medium ${isActive("/about") ? "text-neutral-200" : "text-neutral-400"}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link
                    to="/join"
                    className={`flex items-center px-3 py-2 rounded-md text-2xl font-medium ${isActive("/join") ? "text-neutral-200" : "text-neutral-400"}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Join Us
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
