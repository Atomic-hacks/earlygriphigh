"use client";

import { useState, useRef, useEffect, JSX } from "react";

interface VisionItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  detail: string;
  image: string;
  imageAlt: string;
}

interface MousePosition {
  x: number;
  y: number;
}

export default function VisionSection(): JSX.Element {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Initialize visibility animation
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Mouse tracking for hover effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent): void => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const visionItems: VisionItem[] = [
    {
      id: "vision",
      title: "Our Vision",
      subtitle: "Educational Excellence",
      description:
        "At EarlyGrip High School, our vision is to be a leading educational institution that nurtures the uniqueness of every child, developing their academic, spiritual, and moral values in an environment that feels like home away from home.",
      detail:
        "We strive to create well-educated and well-rounded young ladies and gentlemen who will become accomplished, well-informed future leaders of tomorrow.",
      image: "/29.jpg",
      imageAlt: "Students engaged in learning",
    },
    {
      id: "mission",
      title: "Our Mission",
      subtitle: "Holistic Development",
      description:
        "Our mission is to deliver impeccable world-class education using innovative and model educators who understand the importance of sound education.",
      detail:
        "We are driven by a passion for grooming each child's uniqueness, ensuring comprehensive development through structured policies, curriculum, and extra-curricular activities that showcase international standards.",
      image: "/21.jpg",
      imageAlt: "Modern school facilities",
    },
    {
      id: "approach",
      title: "Our Educational Approach",
      subtitle: "Innovation & Care",
      description:
        "We understand that music opens the mind to better understanding, exposing students to various musical instruments including organ, violin, flutes, and drums.",
      detail:
        "Safety is paramount in creating our home-away-from-home atmosphere. Our safety structures promote learning and growth within the framework that develops confident, capable students ready for their future endeavors.",
      image: "/23.jpg",
      imageAlt: "Students in music class",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-700/8 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "8s" }}
        />
        <div
          className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-blue-800/5 rounded-full blur-2xl animate-pulse"
          style={{ animationDuration: "10s", animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
        {/* Section Header */}
        <div
          className={`mb-16 sm:mb-20 md:mb-24 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-4xl">
            {/* Decorative accent */}
            <div
              className={`flex items-center space-x-4 mb-6 transition-all duration-600 delay-200 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <div
                className={`bg-gradient-to-r from-blue-700 to-blue-900 h-px transition-all duration-300 delay-400 ${
                  isVisible ? "w-12" : "w-0"
                }`}
              />
              <span
                className={`text-sm font-medium text-blue-700 tracking-[0.15em] uppercase transition-opacity duration-600 delay-600 ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                EarlyGrip Educational Philosophy
              </span>
            </div>

            <h2
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 leading-[0.9] tracking-tight mb-8 transition-all duration-300 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Nurturing, Innovative,
              <br />
              <span className="bg-gradient-to-r from-blue-800/80 via-blue-700 to-blue-900 bg-clip-text text-transparent">
                Excellence-Driven
              </span>
            </h2>

            <div
              className={`bg-gradient-to-r from-blue-700 to-blue-900 h-1 transition-all duration-300 delay-800 ${
                isVisible ? "w-16" : "w-0"
              }`}
            />

            <p
              className={`text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed font-light max-w-3xl mt-8 transition-all duration-300 delay-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Our educational philosophy is centered on nurturing each
              child&apos;s uniqueness, innovative teaching methods, and a
              relentless pursuit of excellence. We believe in creating an
              environment that develops not just academic prowess, but also
              strong moral and spiritual foundations.
            </p>
          </div>
        </div>

        {/* Vision Cards Grid */}
        <div className="space-y-12 md:space-y-16 lg:space-y-20">
          {visionItems.map((item: VisionItem, index: number) => (
            <div
              key={item.id}
              className={`group relative transition-all duration-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${700 + index * 200}ms` }}
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Image Section */}
                <div
                  className={`relative overflow-hidden bg-gray-100 rounded transition-all duration-300 hover:scale-105 ${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  }`}
                >
                  <div className="aspect-[4/3] relative">
                    {/* Blue accent border */}
                    <div
                      className={`absolute -left-2 top-0 w-1 bg-gradient-to-b from-blue-800/80 to-blue-900 transition-all duration-1000 delay-${1000 + index * 200} ${
                        isVisible ? "h-full opacity-100" : "h-0 opacity-0"
                      }`}
                    />

                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      className={`w-full h-full object-cover transition-all duration-300 ${
                        isVisible
                          ? "grayscale-0 scale-100"
                          : "grayscale scale-110"
                      } group-hover:scale-105`}
                    />

                    {/* Subtle overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/25 via-blue-900/15 to-blue-900/30 opacity-70 group-hover:opacity-50 transition-opacity duration-300" />

                    {/* Educational icon accent */}
                    <div
                      className={`absolute top-6 right-6 transition-all duration-600 delay-${1200 + index * 200} ${
                        isVisible
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-0"
                      }`}
                    >
                      <div className="w-8 h-8 relative bg-white/10 backdrop-blur-sm rounded flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <div className="w-4 h-4 border border-white/60 rounded-sm">
                          <div className="w-2 h-2 bg-white/60 rounded-full m-auto mt-0.5" />
                        </div>
                      </div>
                    </div>

                    {/* School info overlay */}
                    <div
                      className={`absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md rounded p-3 border border-white/20 transition-all duration-600 delay-${1400 + index * 200} hover:scale-105 ${
                        isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      }`}
                    >
                      <div className="text-white text-sm">
                        <p className="font-medium">Est. 2017</p>
                        <p className="text-white/80 text-xs">
                          Pipeline Road, Port Harcourt
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div
                  className={`space-y-6 ${
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  {/* Card number and subtitle */}
                  <div
                    className={`flex items-center space-x-6 transition-all duration-600 delay-${800 + index * 200} ${
                      isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-8"
                    }`}
                  >
                    <span className="text-sm font-medium text-gray-400 tracking-[0.2em]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div
                      className={`bg-gray-200 group-hover:bg-blue-400 h-px transition-all duration-300 delay-${1000 + index * 200} ${
                        isVisible ? "w-8" : "w-0"
                      }`}
                    />
                    <span
                      className={`text-sm font-medium text-blue-700 tracking-[0.15em] uppercase transition-opacity duration-600 delay-${1200 + index * 200} ${
                        isVisible ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {item.subtitle}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight tracking-tight group-hover:from-blue-800/80 group-hover:to-blue-900 group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 delay-${900 + index * 200} ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-6"
                    }`}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-base sm:text-lg text-gray-600 leading-relaxed font-light transition-all duration-600 delay-${1100 + index * 200} ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-6"
                    }`}
                  >
                    {item.description}
                  </p>

                  {/* Detail text */}
                  <p
                    className={`text-base text-gray-700 leading-relaxed font-light border-l-2 border-gray-200 pl-6 group-hover:border-blue-400 transition-all duration-300 delay-${1200 + index * 200} ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-6"
                    }`}
                  >
                    {item.detail}
                  </p>

                  {/* Educational highlights for specific cards */}
                  {item.id === "mission" && (
                    <div
                      className={`bg-blue-50/50 rounded p-4 border-l-4 border-blue-700 hover:translate-x-2 hover:border-l-6 transition-all duration-300 delay-${1300 + index * 200} ${
                        isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-6"
                      }`}
                    >
                      <h4 className="text-sm font-semibold text-blue-700 mb-2">
                        Key Features:
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-700 rounded-full" />
                          <span>
                            Full boarding mixed school for boys and girls
                          </span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-700 rounded-full" />
                          <span>International standard curriculum</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-700 rounded-full" />
                          <span>Innovative model educators</span>
                        </li>
                      </ul>
                    </div>
                  )}

                  {item.id === "approach" && (
                    <div
                      className={`bg-blue-50/50 rounded p-4 border-l-4 border-blue-800/80 hover:translate-x-2 hover:border-l-6 transition-all duration-300 delay-${1300 + index * 200} ${
                        isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-6"
                      }`}
                    >
                      <h4 className="text-sm font-semibold text-blue-700 mb-2">
                        Musical Education:
                      </h4>
                      <div className="text-sm text-gray-600 grid grid-cols-2 gap-2">
                        <span className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-800/80 rounded-full" />
                          <span>Organ</span>
                        </span>
                        <span className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-800/80 rounded-full" />
                          <span>Violin</span>
                        </span>
                        <span className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-800/80 rounded-full" />
                          <span>Flutes</span>
                        </span>
                        <span className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-800/80 rounded-full" />
                          <span>Drums</span>
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Hover indicator */}
                  <div
                    className={`flex items-center space-x-4 pt-4 transition-all duration-600 delay-${1400 + index * 200} ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-6"
                    }`}
                  >
                    <div className="w-12 h-px bg-gradient-to-r from-blue-700 to-blue-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    <div className="w-2 h-2 bg-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>

              {/* Separator line */}
              {index < visionItems.length - 1 && (
                <div
                  className={`mt-12 md:mt-16 lg:mt-20 transition-all duration-300 delay-${1700 + index * 200} ${
                    isVisible ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent" />
                </div>
              )}

              {/* Hover preview for desktop */}
              {hoveredCard === item.id &&
                typeof window !== "undefined" &&
                window.innerWidth > 768 && (
                  <div
                    className="fixed pointer-events-none z-50 opacity-0 animate-fade-in"
                    style={{
                      left: `${mousePosition.x + 20}px`,
                      top: `${mousePosition.y - 100}px`,
                      transform: "translate(0, 0)",
                    }}
                  >
                    <div className="bg-white/95 backdrop-blur-sm border border-blue-200 p-4 shadow-lg max-w-xs rounded">
                      <p className="text-sm text-blue-700 font-medium">
                        {item.subtitle}
                      </p>
                      <p className="text-xs text-blue-700 mt-1">
                        EarlyGrip High School Excellence
                      </p>
                    </div>
                  </div>
                )}
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div
          className={`mt-20 sm:mt-24 md:mt-28 transition-all duration-1000 delay-2000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center space-x-8">
              <div
                className={`bg-gradient-to-r from-transparent via-blue-700 to-transparent h-px transition-all duration-300 delay-2200 ${
                  isVisible ? "w-16" : "w-0"
                }`}
              />
              <div
                className={`w-3 h-3 border border-blue-700 transform rotate-45 transition-all duration-300 delay-2400 ${
                  isVisible ? "scale-100" : "scale-0"
                }`}
              />
              <div
                className={`bg-gradient-to-r from-transparent via-blue-700 to-transparent h-px transition-all duration-300 delay-2600 ${
                  isVisible ? "w-16" : "w-0"
                }`}
              />
            </div>
            <p
              className={`text-sm text-blue-700 font-light tracking-[0.15em] uppercase transition-opacity duration-600 delay-2800 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              Excellence Through Education
            </p>
          </div>
        </div>

        {/* Contact CTA Section */}
        <div
          className={`mt-16 text-center transition-all duration-300 delay-2400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-gradient-to-r from-blue-800 to-blue-900 rounded p-8 text-white hover:scale-105 hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-2xl font-light mb-4">
              Ready to Join Our Educational Family?
            </h3>
            <p className="text-blue-200 mb-6 max-w-2xl mx-auto">
              Experience world-class education in our nurturing environment.
              Contact us to learn more about admission opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
              <div className="flex items-center space-x-2">
                <span> +234 8178592499, +234 8095900266</span>
              </div>
              <div className="flex items-center space-x-2">
                <span> info@earlygriphighschool.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative element */}
        <div
          className={`pt-8 transition-all duration-1000 delay-2600 ${
            isVisible ? "opacity-70" : "opacity-0"
          }`}
        >
          <div className="flex items-center justify-center space-x-4">
            <div
              className={`bg-gradient-to-r from-blue-700 to-blue-900 h-px transition-all duration-300 delay-2800 ${
                isVisible ? "w-8" : "w-0"
              }`}
            />
            <div
              className={`w-2 h-2 bg-blue-700 rounded-full transition-all duration-300 delay-3000 ${
                isVisible ? "scale-100" : "scale-0"
              }`}
            />
            <div
              className={`bg-gradient-to-r from-blue-800 to-blue-900 h-px transition-all duration-300 delay-3200 ${
                isVisible ? "w-12" : "w-0"
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
