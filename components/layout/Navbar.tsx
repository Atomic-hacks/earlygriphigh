"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "mission", href: "/portfolio" },
    { name: "projects", href: "/contact" },
    { name: "facilities", href: "/facilities" },
    { name: "SignUp", href: "/contact" },
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
          isScrolled
            ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5"
            : "bg-transparent"
        }`}
        style={{
          borderBottom: isScrolled ? "1px solid rgba(0,0,0,0.06)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="flex items-center justify-between relative">
            {/* Logo Container */}
            <div className="flex-shrink-0 py-2">
              <Link href="/" className="block group">
                <img
                  src="/logo.png"
                  alt="School Logo"
                  className={`transition-all duration-700 ease-out object-contain ${
                    isScrolled ? "h-14 w-56" : "h-20 w-80"
                  }`}
                  style={{
                    filter: isScrolled
                      ? "drop-shadow(0 4px 12px rgba(0,0,0,0.1))"
                      : "none",
                  }}
                />
              </Link>
            </div>

            {/* Desktop Menu - Floating Style */}
            <div className="hidden lg:flex items-center">
              <div className="flex items-center space-x-1 px-6 py-3 rounded-full transition-all duration-700">
                {menuItems.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-500 group ${
                      isScrolled
                        ? "text-gray-700 hover:text-blue-600 "
                        : "text-gray-800 hover:text-blue-600 "
                    }`}
                    style={{
                      transitionDelay: `${index * 50}ms`,
                    }}
                  >
                    {item.name}
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full group-hover:w-6 transition-all duration-300"></div>
                  </a>
                ))}
              </div>

              {/* Elegant CTA */}
              <button className="ml-6 px-6 py-3 font-medium text-sm transition-all duration-500 transform hover:text-lg hover:-translate-y-0.5 active:text-sm text-black">
                <span className="flex items-center space-x-2">
                  <span>Apply Now</span>
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </button>
            </div>

            {/* Mobile Menu Button - Elegant */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-3 rounded-full transition-all duration-300"
            >
              <div className="w-5 h-5 flex flex-col justify-center space-y-1">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className={`block w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
                      isMenuOpen
                        ? i === 0
                          ? "rotate-45 translate-y-1.5"
                          : i === 1
                            ? "opacity-0"
                            : "-rotate-45 -translate-y-1.5"
                        : ""
                    }`}
                  />
                ))}
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Elegant Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Sophisticated Backdrop */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-gray-50/95 to-blue-50/95 backdrop-blur-2xl" />

        {/* Menu Content */}
        <div className="relative z-10 flex flex-col justify-center min-h-full px-8">
          <div className="max-w-md mx-auto w-full">
            {/* Menu Items */}
            <div className="space-y-2 mb-12">
              {menuItems.map((item, index) => (
                <div
                  key={item.name}
                  className={`transition-all duration-500 ease-out ${
                    isMenuOpen
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-8"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  <a
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="group block p-4 rounded-2xl hover:bg-white/60 transition-all duration-300 border border-transparent hover:border-blue-100/50 hover:shadow-sm"
                  >
                    <span className="text-2xl font-light text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                      {item.name}
                    </span>
                    <div className="w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full group-hover:w-12 transition-all duration-300 mt-2"></div>
                  </a>
                </div>
              ))}
            </div>

            {/* Mobile CTA */}
            <div
              className={`transition-all duration-500 ${
                isMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${menuItems.length * 100 + 400}ms` }}
            >
              <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
                <span className="flex items-center justify-center space-x-2">
                  <span>Apply Now</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
