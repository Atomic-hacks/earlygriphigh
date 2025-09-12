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
  const sectionRef = useRef<HTMLElement>(null);

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
      image: "/students-learning.jpg",
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
      image: "/school-facilities.jpg",
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
      image: "/music-class.jpg",
      imageAlt: "Students in music class",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-stone-50 via-white to-blue-50 overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgb(59 130 246 / 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgb(37 99 235 / 0.1) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
        {/* Section Header */}
        <div className="mb-16 sm:mb-20 md:mb-24">
          <div className="max-w-4xl">
            {/* Decorative accent */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-blue-600 to-blue-700" />
              <span className="text-sm font-medium text-blue-700 tracking-[0.15em] uppercase">
                EarlyGrip Educational Philosophy
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 leading-[0.9] tracking-tight mb-8">
              Nurturing, Innovative,
              <br />
              <span className="text-gray-600">Excellence-Driven</span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed font-light max-w-3xl">
              Our educational philosophy is centered on nurturing each child&apos;s uniqueness, 
              innovative teaching methods, and a relentless pursuit of excellence. We believe 
              in creating an environment that develops not just academic prowess, but also 
              strong moral and spiritual foundations.
            </p>
          </div>
        </div>

        {/* Vision Cards Grid */}
        <div className="space-y-12 md:space-y-16 lg:space-y-20">
          {visionItems.map((item: VisionItem, index: number) => (
            <div
              key={item.id}
              className="group relative"
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
                  className={`relative overflow-hidden bg-gray-100 rounded-lg ${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  }`}
                >
                  <div className="aspect-[4/3] relative">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Subtle overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                    {/* Educational icon accent */}
                    <div className="absolute top-6 right-6">
                      <div className="w-8 h-8 relative bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <div className="w-4 h-4 border border-white/60 rounded-sm">
                          <div className="w-2 h-2 bg-white/60 rounded-full m-auto mt-0.5" />
                        </div>
                      </div>
                    </div>

                    {/* School info overlay */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20">
                      <div className="text-white text-sm">
                        <p className="font-medium">Est. 2017</p>
                        <p className="text-white/80 text-xs">Pipeline Road, Port Harcourt</p>
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
                  <div className="flex items-center space-x-6">
                    <span className="text-sm font-medium text-gray-400 tracking-[0.2em]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="w-8 h-px bg-gray-200 group-hover:bg-blue-300 transition-colors duration-300" />
                    <span className="text-sm font-medium text-blue-600 tracking-[0.15em] uppercase">
                      {item.subtitle}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight tracking-tight group-hover:text-blue-700 transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-light">
                    {item.description}
                  </p>

                  {/* Detail text */}
                  <p className="text-base text-gray-500 leading-relaxed font-light border-l-2 border-gray-200 pl-6 group-hover:border-blue-300 transition-colors duration-300">
                    {item.detail}
                  </p>

                  {/* Educational highlights for specific cards */}
                  {item.id === "mission" && (
                    <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
                      <h4 className="text-sm font-semibold text-blue-700 mb-2">Key Features:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Full boarding mixed school for boys and girls</li>
                        <li>• International standard curriculum</li>
                        <li>• Innovative model educators</li>
                      </ul>
                    </div>
                  )}

                  {item.id === "approach" && (
                    <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-400">
                      <h4 className="text-sm font-semibold text-green-700 mb-2">Musical Education:</h4>
                      <div className="text-sm text-gray-600 grid grid-cols-2 gap-2">
                        <span>• Organ</span>
                        <span>• Violin</span>
                        <span>• Flutes</span>
                        <span>• Drums</span>
                      </div>
                    </div>
                  )}

                  {/* Hover indicator */}
                  <div className="flex items-center space-x-4 pt-4">
                    <div className="w-12 h-px bg-gradient-to-r from-blue-600 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    <div className="w-2 h-2 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>

              {/* Separator line */}
              {index < visionItems.length - 1 && (
                <div className="mt-12 md:mt-16 lg:mt-20">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
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
                    <div className="bg-white/95 backdrop-blur-sm border border-gray-200 p-4 shadow-lg max-w-xs rounded-lg">
                      <p className="text-sm text-gray-600 font-medium">
                        {item.subtitle}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        EarlyGrip High School Excellence
                      </p>
                    </div>
                  </div>
                )}
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="mt-20 sm:mt-24 md:mt-28">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center space-x-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent" />
              <div className="w-3 h-3 border border-blue-600 transform rotate-45" />
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent" />
            </div>
            <p className="text-sm text-gray-500 font-light tracking-[0.15em] uppercase">
              Excellence Through Education
            </p>
          </div>
        </div>

        {/* Contact CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-light mb-4">Ready to Join Our Educational Family?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Experience world-class education in our nurturing environment. 
              Contact us to learn more about admission opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
              <div className="flex items-center space-x-2">
                
                <span>+234 8178592499, +234 8095900266</span>
              </div>
              <div className="flex items-center space-x-2">
               
                <span>info@earlygriphighschool.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}