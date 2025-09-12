"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, BookOpen, Users, Microscope, Gamepad2, Home } from "lucide-react";

export default function Facilities() {
  const [activeSection, setActiveSection] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setActiveSection(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const facilities = [
    {
      title: "Academic Facilities",
      description:
        "Modern classrooms equipped with 21st century learning tools, well-stocked library, and interactive learning environments designed to inspire excellence.",
      number: "01",
      subFacilities: [
        "Smart Classrooms",
        "Well-Equipped Library",
        "Computer Laboratory",
        "Language Laboratory",
        "Study Halls"
      ],
      icon: BookOpen,
      gradient: "from-blue-800 via-blue-700 to-emerald-800",
    },
    {
      title: "Science & Technology",
      description:
        "State-of-the-art laboratories and technology centers that foster scientific inquiry and technological innovation among our students.",
      number: "02",
      subFacilities: [
        "Physics Laboratory",
        "Chemistry Laboratory", 
        "Biology Laboratory",
        "ICT Center",
        "Mathematics Laboratory"
      ],
      icon: Microscope,
      gradient: "from-purple-800 via-blue-700 to-cyan-800",
    },
    {
      title: "Sports & Recreation",
      description:
        "Comprehensive sports facilities promoting physical fitness, teamwork, and healthy competition as part of our holistic education approach.",
      number: "03",
      subFacilities: [
        "Football Field",
        "Basketball Court",
        "Indoor Games Room",
        "Fitness Center",
        "Swimming Pool"
      ],
      icon: Gamepad2,
      gradient: "from-green-800 via-emerald-700 to-teal-800",
    },
    {
      title: "Boarding & Wellness",
      description:
        "Comfortable boarding facilities with excellent dining services, health center, and supportive environment for our residential students.",
      number: "04",
      subFacilities: [
        "Boys Dormitory",
        "Girls Dormitory", 
        "Dining Hall",
        "Health Center",
        "Laundry Services"
      ],
      icon: Home,
      gradient: "from-orange-800 via-red-700 to-pink-800",
    },
  ];

  const educationalPrograms = [
    {
      phase: "Senior Secondary (SS1-SS3)",
      description: "Comprehensive curriculum preparing students for WAEC, NECO, and university admission"
    },
    {
      phase: "Science Track",
      description: "Specialized program for students pursuing medical, engineering, and pure science careers"
    },
    {
      phase: "Arts & Social Sciences",
      description: "Balanced program covering humanities, languages, and social science subjects"
    },
    {
      phase: "Extra-Curricular Activities", 
      description: "Leadership development, clubs, societies, and character building programs"
    },
  ];

  return (
    <div className="relative min-h-screen bg-white">
      {/* Simplified Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full opacity-20 bg-gradient-to-br from-blue-50 via-emerald-50 to-blue-100"></div>
      </div>

      {/* Subtle Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-10 animate-pulse"
            style={{
              left: `${15 + i * 15}%`,
              top: `${25 + i * 12}%`,
              animationDelay: `${i * 1}s`,
              animationDuration: `${5 + i}s`,
            }}
          >
            <div className="w-8 h-8 border border-blue-300 rounded-full"></div>
          </div>
        ))}
      </div>

      {/* Hero Section */}
      <section
        ref={sectionRef}
        className="relative py-24 md:py-32 lg:py-40 overflow-hidden"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
          <div
            className={`mb-20 md:mb-32 transform transition-all duration-1000 ease-out ${
              activeSection
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-end">
              <div className="space-y-8">
                {/* Decorative accent */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-px bg-gradient-to-r from-blue-800 to-emerald-800"></div>
                  <span className="text-sm font-medium text-blue-700 tracking-wide uppercase">
                    World-Class Facilities
                  </span>
                </div>

                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-tight tracking-tight">
                  <span className="bg-gradient-to-r from-blue-800 to-emerald-800 bg-clip-text text-transparent">
                    Our Facilities
                  </span>
                  <br />
                  <span className="text-gray-800 font-light">
                    foster
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-emerald-800 to-blue-800 bg-clip-text text-transparent font-light">
                    excellence
                  </span>
                </h1>

                <div className="w-32 h-0.5 bg-gradient-to-r from-blue-800 to-emerald-800" />
              </div>

              <div className="space-y-8">
                <p className="text-lg md:text-xl text-gray-800 font-light leading-relaxed">
                  At Earlygrip High School, we provide world-class facilities that support 
                  academic excellence, character development, and holistic growth in a 
                  nurturing boarding environment.
                </p>

                {/* Stats */}
                <div className="flex items-center space-x-8 pt-4">
                  <div className="flex items-center space-x-3">
                    <BookOpen className="w-5 h-5 text-blue-800" />
                    <div>
                      <div className="text-2xl font-light text-blue-700">4</div>
                      <div className="text-sm text-gray-700 uppercase tracking-wide">
                        Main Areas
                      </div>
                    </div>
                  </div>
                  <div className="w-px h-12 bg-gray-200"></div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-emerald-800" />
                    <div>
                      <div className="text-2xl font-light text-emerald-700">
                        100%
                      </div>
                      <div className="text-sm text-gray-700 uppercase tracking-wide">
                        Boarding
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
          <div className="relative overflow-hidden bg-gradient-to-r from-blue-800 to-emerald-800 rounded-lg">
            <div className="aspect-video relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>

              {/* Center Content */}
              <div className="absolute inset-0 flex items-center justify-center text-center text-white p-8">
                <div className="max-w-4xl space-y-8">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
                    Our Educational Philosophy
                  </h2>
                  <p className="text-lg md:text-xl font-light leading-relaxed opacity-95">
                    &quot;Scientia Pro Excellentiae et Ministerio&quot; - Knowledge for Excellence and Service. 
                    Our facilities are designed to nurture not just academic brilliance, but character, 
                    leadership, and service to humanity through 21st century learning approaches.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="relative py-24 md:py-32">
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
          {/* Section Header */}
          <div className="mb-20 md:mb-32">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div className="flex items-center space-x-6">
                <div className="w-8 h-8 relative">
                  <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-blue-800 to-emerald-800 transform -translate-y-1/2"></div>
                  <div className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-blue-800 to-emerald-800 transform -translate-x-1/2"></div>
                  <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-blue-800 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 tracking-tight">
                  What We Offer
                </h2>
              </div>
              <div className="text-right space-y-2">
                <span className="text-xl md:text-2xl text-gray-800 font-light">
                  / {facilities.length}
                </span>
                <p className="text-sm text-blue-800 font-medium tracking-wide uppercase">
                  Facility Areas
                </p>
              </div>
            </div>
          </div>

          {/* Facilities List */}
          <div className="space-y-16 md:space-y-24">
            {facilities.map((facility, index) => {
              const IconComponent = facility.icon;
              return (
                <div
                  key={facility.number}
                  className={`group transform transition-all duration-1000 ease-out ${
                    activeSection
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${index * 200}ms`,
                  }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    {/* Number & Icon */}
                    <div className="lg:col-span-2 flex items-center space-x-4">
                      <span className="text-6xl md:text-7xl lg:text-8xl font-light text-blue-300 group-hover:text-blue-800 transition-colors duration-700">
                        {facility.number}
                      </span>
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-r ${facility.gradient} flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity duration-300`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-9 space-y-6">
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight group-hover:text-blue-700 transition-colors duration-300">
                        {facility.title}
                      </h3>

                      <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light max-w-4xl">
                        {facility.description}
                      </p>

                      {/* Sub-facilities */}
                      <div className="pt-4">
                        <div className="flex flex-wrap gap-3">
                          {facility.subFacilities.map((subFacility, subIndex) => (
                            <span
                              key={subIndex}
                              className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100 hover:bg-blue-100 hover:border-blue-200 transition-colors duration-300"
                            >
                              {subFacility}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="lg:col-span-1 flex justify-center lg:justify-end">
                      <div className="w-12 h-12 flex items-center justify-center group-hover:bg-blue-800 transition-all duration-300 cursor-pointer rounded-full border border-blue-200 group-hover:border-blue-800">
                        <ArrowUpRight className="w-5 h-5 text-blue-800 group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  {index < facilities.length - 1 && (
                    <div className="mt-16 md:mt-24">
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Academic Programs Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-blue-50 to-emerald-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-8 md:grid-cols-12 gap-8 h-full">
            {Array.from({ length: 48 }).map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-blue-800 rounded-full animate-pulse"
                style={{
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
          {/* Section Header */}
          <div className="mb-20 md:mb-24">
            <div className="flex items-center space-x-6 mb-8">
              <div className="w-8 h-8 relative">
                <div className="absolute top-1/2 left-0 w-full h-px bg-emerald-800 transform -translate-y-1/2"></div>
                <div className="absolute left-1/2 top-0 w-px h-full bg-emerald-800 transform -translate-x-1/2"></div>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900">
                Academic Programs
              </h2>
            </div>
            <div className="max-w-2xl">
              <p className="text-lg md:text-xl text-gray-800 font-light leading-relaxed">
                Comprehensive educational programs designed to prepare students for 
                academic excellence and future leadership roles in society.
              </p>
            </div>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {educationalPrograms.map((program, index) => (
              <div
                key={program.phase}
                className={`group ${
                  index === 1 || index === 2 ? "md:translate-y-8" : ""
                }`}
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 md:p-10 shadow-sm border border-blue-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300 hover:-translate-y-2">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-3 h-3 bg-emerald-800 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-sm text-emerald-800 font-medium tracking-wide uppercase">
                      Program {index + 1}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors duration-300">
                    {program.phase}
                  </h3>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
                    {program.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional School Info */}
          <div className="mt-20 md:mt-24">
            <div className="bg-white/90 backdrop-blur-sm  p-8 md:p-12 shadow-sm border border-blue-100">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-light text-blue-800 mb-2">2017</div>
                  <div className="text-gray-800">Year Established</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-emerald-800 mb-2">21st</div>
                  <div className="text-gray-800">Century Learning</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-purple-800 mb-2">Port Harcourt</div>
                  <div className="text-gray-800">Rivers State</div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-20 md:mt-24 text-center">
            <button className="group px-10 py-4 bg-gradient-to-r from-blue-800 to-emerald-800 text-white font-medium hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <span className="flex items-center space-x-3">
                <span>Schedule a School Visit</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}