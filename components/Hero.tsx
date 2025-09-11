"use client";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const heroRef = useRef(null);
  const backgroundRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/image1.jpg",
      title: "Shaping Tomorrow's Leaders Today!",
      description:
        "Excellence in education, character development, and academic achievement for every student",
      cta: "EXPLORE OUR PROGRAMS",
    },
    {
      image: "/image5.jpg",
      title: "Where Learning Meets Innovation!",
      description:
        "Modern facilities, experienced teachers, and comprehensive curriculum for holistic development",
      cta: "DISCOVER FACILITIES",
    },
    {
      image: "/image3.jpg",
      title: "Building Bright Futures Together!",
      description:
        "Join our community of learners, achievers, and future leaders in academic excellence",
      cta: "START YOUR JOURNEY",
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  // Parallax scroll effect
  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      if (!heroRef.current || !backgroundRef.current) return;

      const scrolled = window.pageYOffset;
      const contentRate = scrolled * -0.5;
      const backgroundRate = scrolled * 0.3;
      const opacity = Math.max(1 - scrolled / 800, 0);

      (heroRef.current as HTMLDivElement | null)?.style.setProperty(
        "transform",
        `translateY(${contentRate}px)`
      );
      (heroRef.current as HTMLDivElement | null)?.style.setProperty(
        "opacity",
        String(opacity)
      );
      (backgroundRef.current as HTMLDivElement | null)?.style.setProperty(
        "transform",
        `translateY(${backgroundRate}px) scale(1.1)`
      );
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) {
    return (
      <div className="h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl font-light">Loading...</div>
      </div>
    );
  }

  return (
    <main className="relative">
      <div className="relative h-screen overflow-hidden">
        {/* Background Images with Parallax & Skeleton */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              ref={index === currentSlide ? backgroundRef : null}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
              style={{ willChange: "transform, opacity" }}
            >
              {/* Image Skeleton */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-300 via-gray-200 to-gray-300 animate-pulse" />

              {/* Actual Image */}
              <div
                className="absolute inset-0 w-full h-full bg-contain bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('${slide.image}')`,
                  backgroundColor: "transparent",
                }}
                onLoad={() => {
                  // Hide skeleton when image loads
                  const skeleton = document.querySelector(
                    `[data-slide="${index}"] .animate-pulse`
                  );
                  if (skeleton && skeleton instanceof HTMLElement) {
                    skeleton.style.display = "none";
                  }
                }}
              />
            </div>
          ))}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/50" />

        {/* Content */}
        <div
          ref={heroRef}
          className="relative z-10 h-full flex items-center"
          style={{ willChange: "transform, opacity" }}
        >
          <div className="max-w-7xl mx-auto px-8 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-6 lg:space-y-8">
                {/* Accent Line */}
                <div className="w-12 lg:w-16 h-px bg-blue-500 mx-auto lg:mx-0" />

                {/* School Name */}
                <div className="text-center lg:text-left">
                  <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white tracking-wide leading-none mb-3 lg:mb-4">
                    EARLYGRIPHIGH
                  </h1>
                  <p className="text-xs lg:text-sm text-blue-200 font-medium tracking-widest">
                    SECONDARY SCHOOL
                  </p>
                </div>

                {/* Sliding Content */}
                <div className="space-y-4 lg:space-y-6 text-center lg:text-left">
                  <h2
                    key={`title-${currentSlide}`}
                    className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-white leading-tight animate-fade-in"
                  >
                    {slides[currentSlide].title}
                  </h2>

                  <p
                    key={`desc-${currentSlide}`}
                    className="text-base lg:text-lg text-gray-200 leading-relaxed font-light max-w-lg mx-auto lg:mx-0 animate-fade-in-delay"
                  >
                    {slides[currentSlide].description}
                  </p>

                  <button
                    key={`cta-${currentSlide}`}
                    className="px-8 lg:px-10 py-3 lg:py-4 bg-blue-800 text-white font-medium text-sm hover:translate-x-1 transition-all duration-300 transform hover:scale-105 tracking-wider animate-fade-in-delay-2"
                  >
                    {slides[currentSlide].cta}
                  </button>

                  <p className="text-sm text-gray-300 font-light leading-relaxed pt-2 lg:pt-4">
                    Excellence Drive, Education District, Port Harcourt
                  </p>
                </div>
              </div>

              {/* Right Side - Empty space for background focus */}
              <div className="hidden lg:block" />
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex space-x-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-8 h-px transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-white"
                    : "bg-slate-500 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() =>
            setCurrentSlide(
              currentSlide === 0 ? slides.length - 1 : currentSlide - 1
            )
          }
          className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 p-3 border border-slate-500 text-slate-300 hover:border-white hover:text-white transition-all duration-300"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 p-3 border border-slate-500 text-slate-300 hover:border-white hover:text-white transition-all duration-300"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </main>
  );
}
