"use client";

import { useEffect, useRef, useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Linkedin,
  Instagram,
  BookOpen,
  GraduationCap,
  Users,
  Trophy,
} from "lucide-react";

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const footerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsFooterVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (footerRef.current) footerObserver.observe(footerRef.current);

    return () => {
      footerObserver.disconnect();
    };
  }, []);

  return (
    <footer className="relative min-h-screen bg-blue-900 overflow-hidden">
      {/* Animated Background Elements - matching navbar style */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-full h-full opacity-10"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 20% 40%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
              radial-gradient(ellipse 60% 80% at 80% 20%, rgba(96, 165, 250, 0.2) 0%, transparent 50%),
              radial-gradient(ellipse 100% 70% at 40% 80%, rgba(147, 197, 253, 0.1) 0%, transparent 50%)
            `,
            animation: "aurora 20s ease-in-out infinite alternate",
          }}
        />
      </div>
      {/* Floating Academic Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${15 + i * 12}%`,
              top: `${20 + i * 10}%`,
              transform: `rotate(${i * 45}deg)`,
              animation: `float ${10 + (i % 3)}s ease-in-out infinite ${
                i * 0.8
              }s`,
            }}
          >
            <div className="w-16 h-16 border border-blue-700/30 rounded-lg flex items-center justify-center">
              {i % 4 === 0 && <BookOpen className="w-8 h-8 text-blue-700" />}
              {i % 4 === 1 && (
                <GraduationCap className="w-8 h-8 text-blue-700" />
              )}
              {i % 4 === 2 && <Users className="w-8 h-8 text-blue-700" />}
              {i % 4 === 3 && <Trophy className="w-8 h-8 text-blue-700" />}
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
        {/* Header Section */}
        <div
          ref={footerRef}
          className={`text-center pt-24 md:pt-32 lg:pt-40 pb-16 md:pb-24 transform transition-all duration-2000 ease-out ${
            isFooterVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-16 opacity-0"
          }`}
        >
          <div className="relative inline-block mb-8">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-800/20 via-blue-700/30 to-blue-800/20 blur-2xl rounded-full animate-pulse"></div>
            <span className="relative text-sm font-light text-blue-500 tracking-[0.3em] uppercase backdrop-blur-sm">
              Excellence in Education
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-thin leading-[0.9] mb-8 tracking-tight">
            <span className="inline-block bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 bg-clip-text text-transparent">
              Join Our
            </span>
            <br />
            <span className="inline-block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent font-light">
              Community
            </span>
          </h2>

          <div className="w-32 h-0.5 bg-gradient-to-r from-blue-800 via-blue-700 to-blue-800 mx-auto mb-12" />

          <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-2xl mx-auto">
            Ready to embark on an educational journey that shapes
            tomorrow&apos;s leaders? Connect with EarlyGripHigh School and
            experience excellence in learning.
          </p>
        </div>

        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 pb-16 md:pb-24">
          {/* School Info */}
          <div
            className={`space-y-8 transform transition-all duration-1800 ${
              isFooterVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-24 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-0.5 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700" />
                <span className="text-xs font-medium text-blue-600 tracking-[0.2em] uppercase">
                  Our School
                </span>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <img
                  src="/logo.png"
                  alt="EarlyGripHigh School"
                  className="w-12 h-12 rounded-lg"
                />
                <div className="flex flex-col">
                  <h3 className="text-xl font-light text-white">
                    EarlyGripHigh
                  </h3>
                  <span className="text-lg font-light text-white/80">
                    School
                  </span>
                </div>
              </div>

              <div className="w-16 h-0.5 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700" />
            </div>

            <p className="text-white/70 text-base leading-relaxed font-light">
              Nurturing young minds with innovative teaching methods,
              comprehensive curriculum, and a commitment to academic excellence
              that prepares students for a successful future.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: Facebook, name: "Facebook", link: "" },
                { icon: Linkedin, name: "LinkedIn", link: "" },
                {
                  icon: Instagram,
                  name: "Instagram",
                  link: "https://www.instagram.com/earlygriphighschool",
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  className="group p-3 bg-white/5 border border-white/10 text-white/70 hover:border-blue-700/50 hover:bg-blue-700/10 transition-all duration-300 backdrop-blur-sm"
                >
                  <social.icon className="w-4 h-4 group-hover:text-blue-600 transition-colors duration-600" />
                </a>
              ))}
              <div className="p-3 bg-white/5 border border-white/10 text-white/70 hover:border-blue-700/50 hover:bg-blue-700/10 transition-all duration-300 backdrop-blur-sm flex">
                <img src="/whatsapp.svg" alt="whatsapp" className="size-4" />
                <a href='wa.me/+23407079323077'/>
              </div>
            </div>
          </div>

          {/* Academics */}
          <div
            className={`space-y-8 transform transition-all duration-1800 ${
              isFooterVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-24 opacity-0"
            }`}
            style={{ transitionDelay: "700ms" }}
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-0.5 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700" />
                <span className="text-xs font-medium text-blue-600 tracking-[0.2em] uppercase">
                  Academics
                </span>
              </div>

              <h3 className="text-2xl font-light text-white">
                Learning Programs
              </h3>

              <div className="w-16 h-0.5 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700" />
            </div>

            <div className="space-y-4">
              {[
                "Primary Education",
                "Secondary Education",
                "Science & Technology",
                "Arts & Humanities",
                "Sports & Recreation",
                "Extracurricular Activities",
              ].map((program) => (
                <a
                  key={program}
                  href="#"
                  className="group block text-white/70 hover:text-blue-600 transition-all duration-600 font-light"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-1 h-1 bg-blue-700/70 rounded-full group-hover:w-2 group-hover:bg-blue-600 transition-all duration-600" />
                    <span>{program}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div
            className={`space-y-8 transform transition-all duration-1800 ${
              isFooterVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-24 opacity-0"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-0.5 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700" />
                <span className="text-xs font-medium text-blue-600 tracking-[0.2em] uppercase">
                  Quick Links
                </span>
              </div>

              <h3 className="text-2xl font-light text-white">Navigate</h3>

              <div className="w-16 h-0.5 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700" />
            </div>

            <div className="space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Facilities", href: "/facilities" },
                { name: "Gallery", href: "/gallery" },
                { name: "Contact", href: "/contact" },
                { name: "Login", href: "/login" },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group block text-white/70 hover:text-blue-600 transition-all duration-600 font-light"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-1 h-1 bg-blue-700/70 rounded-full group-hover:w-2 group-hover:bg-blue-600 transition-all duration-600" />
                    <span>{link.name}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div
            className={`space-y-8 transform transition-all duration-1800 ${
              isFooterVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-24 opacity-0"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-0.5 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700" />
                <span className="text-xs font-medium text-blue-600 tracking-[0.2em] uppercase">
                  Get In Touch
                </span>
              </div>

              <h3 className="text-2xl font-light text-white">Contact Us</h3>

              <div className="w-16 h-0.5 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700" />
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-blue-800/20 border border-blue-700/30 rounded-lg backdrop-blur-sm">
                  <MapPin className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-white/70 font-light leading-relaxed">
                    port-harcourt, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-2 bg-blue-800/20 border border-blue-700/30 rounded-lg backdrop-blur-sm">
                  <Phone className="w-4 h-4 text-blue-600" />
                </div>
                <a
                  href="tel:+234"
                  className="text-white/70 hover:text-blue-600 transition-colors duration-600 font-light"
                >
                  +234 707 932 3077
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-2 bg-blue-800/20 border border-blue-700/30 rounded-lg backdrop-blur-sm">
                  <Mail className="w-4 h-4 text-blue-600" />
                </div>
                <a
                  href="mailto:info@earlygriphighschool.ng"
                  className="text-white/70 hover:text-blue-600 transition-colors duration-600 font-light"
                >
                  info@earlygriphighschool.ng
                </a>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="group rounded relative px-8 py-3 bg-white/5 border border-white/20 text-white/80 font-light text-base hover:border-blue-700/50 hover:bg-blue-700/10 transition-all duration-300 overflow-hidden w-full backdrop-blur-sm">
                <span
                  className="relative z-10 group-hover:text-blue-200 transition-colors duration-600"
                  style={{ fontWeight: "600", letterSpacing: "0.02em" }}
                >
                  Apply Now
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 py-8">
          <div
            className={`flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 transform transition-all duration-1800 ${
              isFooterVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "1000ms" }}
          >
            <div className="flex items-center space-x-4 opacity-40">
              <div className="w-2 h-2 bg-blue-700 rounded-full animate-pulse" />
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-700/50 to-transparent" />
              <div className="w-1 h-1 bg-blue-600 rounded-full animate-pulse delay-800" />
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-700/50 to-transparent" />
              <div className="w-2 h-2 bg-blue-700 rounded-full animate-pulse delay-1000" />
            </div>

            <div className="text-center">
              <p className="text-sm text-white/50 font-light">
                Copyright © 2025 EarlyGripHigh School. All rights reserved.
              </p>
            </div>

            <div className="flex items-center space-x-4 opacity-40">
              <div className="w-2 h-2 bg-blue-700 rounded-full animate-pulse delay-1000" />
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-700/50 to-transparent" />
              <div className="w-1 h-1 bg-blue-600 rounded-full animate-pulse delay-800" />
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-700/50 to-transparent" />
              <div className="w-2 h-2 bg-blue-700 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
