"use client";
import React, { useState, useEffect, useRef } from "react";
import { Building, Home, Hotel, Wrench, Users, BookOpen } from "lucide-react";
import { ProjectCard } from "../ui/project-card";

interface Project {
  id: number;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  location: string;
  status: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  accentColor: string;
}

const projects: Project[] = [
  {
    id: 1,
    category: "Girls' Accommodation",
    title: "Girls' Boarding House",
    subtitle: "Comfortable & Safe Living Spaces",
    description:
      "Modern, comfortable bedrooms within our vertical boarding structure, designed to create a warm and friendly atmosphere for our female students.",
    location: "Main Campus",
    status: "as seen",
    image: "/girls-dorm.jpg",
    icon: Home,
    gradient: "from-slate-900 via-blue-900 to-black",
    accentColor: "slate",
  },
  {
    id: 2,
    category: "Boys' Accommodation",
    title: "Boys' Boarding House",
    subtitle: "Modern Living for Young Gentlemen",
    description:
      "Spacious and comfortable accommodation within our vertical boarding structure, providing a vibrant atmosphere that promotes friendship and academic excellence.",
    location: "Main Campus",
    status: "as seen",
    image: "/boys-dorm.jpg",
    icon: Building,
    gradient: "from-gray-900 via-slate-800 to-black",
    accentColor: "gray",
  },
  {
    id: 3,
    category: "Common Areas",
    title: "Spacious Common Rooms",
    subtitle: "Social & Entertainment Spaces",
    description:
      "Two beautifully designed common rooms equipped with comfortable sofas, large screen TV, and DVD player, creating the perfect environment for relaxation and socializing.",
    location: "Both Houses",
    status: "as seen",
    image: "/common-room.jpg",
    icon: Users,
    gradient: "from-blue-950 via-slate-900 to-black",
    accentColor: "blue",
  },
  {
    id: 4,
    category: "Entertainment",
    title: "Media & Recreation Center",
    subtitle: "Technology Meets Comfort",
    description:
      "State-of-the-art entertainment facilities featuring the latest audio-visual equipment for both educational and recreational purposes.",
    location: "Central Building",
    status: "as seen",
    image: "/media-center.jpg",
    icon: Hotel,
    gradient: "from-indigo-950 via-gray-900 to-black",
    accentColor: "indigo",
  },
  {
    id: 5,
    category: "Study Facilities",
    title: "Dedicated Study Areas",
    subtitle: "Academic Excellence Spaces",
    description:
      "Quiet, well-lit study areas designed to promote focused learning and academic achievement for all our boarding students.",
    location: "Both Houses",
    status: "as seen",
    image: "/study-area.jpg",
    icon: BookOpen,
    gradient: "from-slate-950 via-blue-900 to-black",
    accentColor: "slate",
  },
  {
    id: 6,
    category: "Dining & Kitchen",
    title: "Dining & Refreshment Areas",
    subtitle: "Nourishment & Community",
    description:
      "Modern dining facilities and kitchenette areas where students can enjoy meals together and prepare light snacks in a communal setting.",
    location: "Ground Floor",
    status: "as seen",
    image: "/dining-area.jpg",
    icon: Wrench,
    gradient: "from-gray-950 via-slate-800 to-black",
    accentColor: "gray",
  },
];

const Facilities: React.FC = () => {
  const [, setHoveredProject] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setActiveSection(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-24 md:py-32 lg:py-40 overflow-hidden bg-slate-50"
    >
      {/* Dynamic Aurora Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-full h-full opacity-20"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 20% 40%, rgba(15, 23, 42, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse 60% 80% at 80% 20%, rgba(30, 41, 59, 0.1) 0%, transparent 50%),
              radial-gradient(ellipse 100% 70% at 40% 80%, rgba(0, 0, 0, 0.1) 0%, transparent 50%)
            `,
            animation: "aurora 20s ease-in-out infinite alternate",
          }}
        />
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-5"
            style={{
              left: `${10 + i * 8}%`,
              top: `${15 + i * 7}%`,
              transform: `rotate(${i * 30}deg)`,
              animation: `float ${8 + (i % 4)}s ease-in-out infinite ${
                i * 0.5
              }s`,
            }}
          >
            <div
              className="w-24 h-24 border border-slate-800/30 transform-gpu"
              style={{
                clipPath:
                  i % 3 === 0
                    ? "polygon(50% 0%, 0% 100%, 100% 100%)"
                    : i % 3 === 1
                      ? "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)"
                      : "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              }}
            />
          </div>
        ))}
      </div>

      {/* Particle System */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-slate-800 to-blue-900 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `sparkle ${3 + Math.random() * 4}s linear infinite ${
                Math.random() * 3
              }s`,
              opacity: 0.6 + Math.random() * 0.4,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
        {/* Cinematic Header */}
        <div
          className={`text-center mb-20 md:mb-32 transform transition-all duration-2000 ease-out ${
            activeSection
              ? "translate-y-0 opacity-100"
              : "translate-y-16 opacity-0"
          }`}
        >
          <div className="relative inline-block mb-8">
            <div className="absolute -inset-4 bg-gradient-to-r from-slate-900/20 via-blue-900/30 to-slate-900/20 blur-2xl rounded-full animate-pulse"></div>
            <span className="relative text-sm font-light text-slate-800 tracking-[0.3em] uppercase backdrop-blur-sm">
              EarlyGriphHigh School
            </span>
          </div>

          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-thin leading-[0.9] mb-8 tracking-tight">
            <span className="inline-block bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
              Our
            </span>
            <br />
            <span className="inline-block bg-gradient-to-r from-slate-900 via-black to-slate-900 bg-clip-text text-transparent font-light">
              Facilities
            </span>
          </h2>

          <div className="w-32 h-0.5 bg-gradient-to-r from-slate-800 via-blue-900 to-slate-800 mx-auto mb-12" />

          <p className="text-lg md:text-xl text-gray-800 font-light leading-relaxed max-w-2xl mx-auto">
            Discover our world-class boarding facilities designed to provide a 
            warm, safe, and nurturing environment for academic and personal growth.
          </p>
        </div>

        {/* Premium Facilities Grid */}
        <div className="space-y-16 md:space-y-24">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              reversed={index % 2 === 1}
              onHover={setHoveredProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;