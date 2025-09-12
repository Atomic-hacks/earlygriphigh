"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  ArrowUpRight,
  BookOpen,
  Microscope,
  Gamepad2,
  Home,
  Award,
  Users,
} from "lucide-react";

interface Facility {
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

const facilities: Facility[] = [
  {
    id: 1,
    category: "Academic Excellence",
    title: "Modern Classrooms & Library",
    subtitle: "21st Century Learning Environment",
    description:
      "State-of-the-art smart classrooms equipped with interactive whiteboards, multimedia systems, and our well-stocked library fostering a love for reading and research.",
    location: "Main Academic Block",
    status: "active",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop",
    icon: BookOpen,
    gradient: "from-blue-800 via-blue-500 to-emerald-400",
    accentColor: "blue",
  },
  {
    id: 2,
    category: "Science & Technology",
    title: "Advanced Laboratory Complex",
    subtitle: "Where Science Comes Alive",
    description:
      "Fully equipped Physics, Chemistry, and Biology laboratories with modern equipment, plus our ICT center preparing students for the digital age.",
    location: "Science Block",
    status: "active",
    image:
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=600&fit=crop",
    icon: Microscope,
    gradient: "from-purple-800 via-blue-500 to-cyan-400",
    accentColor: "purple",
  },
  {
    id: 3,
    category: "Sports & Recreation",
    title: "Sports & Fitness Complex",
    subtitle: "Building Strong Bodies & Character",
    description:
      "Complete sports facilities including football field, basketball court, fitness center, and swimming pool promoting physical wellness and teamwork.",
    location: "Sports Complex",
    status: "active",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    icon: Gamepad2,
    gradient: "from-green-800 via-emerald-500 to-teal-400",
    accentColor: "green",
  },
  {
    id: 4,
    category: "Boarding Facilities",
    title: "Comfortable Boarding Houses",
    subtitle: "Home Away From Home",
    description:
      "Secure and comfortable dormitories for boys and girls with dedicated house masters, dining hall, and 24/7 medical support ensuring student welfare.",
    location: "Residential Area",
    status: "active",
    image:
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&h=600&fit=crop",
    icon: Home,
    gradient: "from-orange-800 via-red-500 to-pink-400",
    accentColor: "orange",
  },
];

const parentTestimonials = [
  {
    id: 1,
    quote:
      "Earlygrip High School has transformed my daughter into a confident, academically excellent young lady. The boarding facilities are exceptional and the teachers truly care about each student's development.",
    author: "Mrs. Adaora Okafor",
    role: "Parent of SS2 Student",
    initials: "AO",
  },
  {
    id: 2,
    quote:
      "The science laboratories and modern teaching methods at EGHS prepared my son excellently for his WAEC exams. He scored distinctions in all science subjects. Highly recommend this school!",
    author: "Mr. James Ekong",
    role: "Parent of Graduate",
    initials: "JE",
  },
  {
    id: 3,
    quote:
      "As a parent, I'm impressed with the holistic education my child receives. The sports facilities, moral instruction, and academic rigor have shaped him into a well-rounded individual.",
    author: "Dr. Grace Amadi",
    role: "Parent of SS1 Student",
    initials: "GA",
  },
];

// Fixed Facility Card Component
const FacilityCard: React.FC<{
  facility: Facility;
  index: number;
  reversed: boolean;
  onHover: (id: number | null) => void;
}> = ({ facility, index, reversed, onHover }) => {
  const IconComponent = facility.icon;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 200);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`group transform transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      onMouseEnter={() => onHover(facility.id)}
      onMouseLeave={() => onHover(null)}
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
          reversed ? "lg:grid-flow-col-dense" : ""
        }`}
      >
        {/* Image */}
        <div className={`lg:col-span-7 ${reversed ? "lg:col-start-6" : ""}`}>
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src={facility.image}
              alt={facility.title}
              className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
              onError={(e) => {
                // Fallback for broken images
                const target = e.target as HTMLImageElement;
                target.src = `https://via.placeholder.com/800x600/3B82F6/FFFFFF?text=${encodeURIComponent(facility.category)}`;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white">
                <div className="flex items-center space-x-2 mb-2">
                  <IconComponent className="w-5 h-5" />
                  <span className="text-sm font-medium">
                    {facility.category}
                  </span>
                </div>
                <p className="text-xs opacity-90">{facility.location}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div
          className={`lg:col-span-5 space-y-6 ${reversed ? "lg:col-start-1" : ""}`}
        >
          <div className="flex items-center space-x-4">
            <div
              className={`w-12 h-12 rounded-full bg-gradient-to-r ${facility.gradient} flex items-center justify-center shadow-lg`}
            >
              <IconComponent className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm font-medium text-blue-800 uppercase tracking-wide">
              {facility.category}
            </span>
          </div>

          <div className="space-y-4">
            <h3 className="text-3xl md:text-4xl font-light text-gray-900 leading-tight group-hover:text-blue-700 transition-colors duration-300">
              {facility.title}
            </h3>
            <p className="text-xl text-gray-800 font-light">
              {facility.subtitle}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {facility.description}
            </p>
          </div>

          <div className="flex items-center justify-between pt-4">
            <div className="text-sm text-gray-500">
              <span className="font-medium">Location:</span> {facility.location}
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-green-800 font-medium capitalize">
                {facility.status}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FacilitiesGallery: React.FC = () => {
  const [, setHoveredFacility] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setActiveSection(true), 200);
    return () => clearTimeout(timer);
  }, []);

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

      {/* Header Section */}
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
                    World-Class Infrastructure
                  </span>
                </div>

                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-tight tracking-tight">
                  <span className="bg-gradient-to-r from-blue-800 to-emerald-800 bg-clip-text text-transparent">
                    Our facilities
                  </span>
                  <br />
                  <span className="text-gray-800 font-light">inspire</span>
                  <br />
                  <span className="bg-gradient-to-r from-emerald-800 to-blue-800 bg-clip-text text-transparent font-light">
                    learning excellence
                  </span>
                </h1>

                <div className="w-32 h-0.5 bg-gradient-to-r from-blue-800 to-emerald-800" />
              </div>

              <div className="space-y-8">
                <p className="text-lg md:text-xl text-gray-800 font-light leading-relaxed">
                  Every facility at Earlygrip High School is designed to foster
                  academic excellence, character development, and holistic
                  growth through our 21st-century learning approach in a
                  supportive boarding environment.
                </p>

                {/* Stats */}
                <div className="flex items-center space-x-8 pt-4">
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-blue-800" />
                    <div>
                      <div className="text-2xl font-light text-blue-700">4</div>
                      <div className="text-sm text-gray-500 uppercase tracking-wide">
                        Main Areas
                      </div>
                    </div>
                  </div>
                  <div className="w-px h-12 bg-gray-200"></div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-emerald-800" />
                    <div>
                      <div className="text-2xl font-light text-emerald-700">
                        2017
                      </div>
                      <div className="text-sm text-gray-500 uppercase tracking-wide">
                        Established
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="relative py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
          <div className="relative overflow-hidden bg-gradient-to-r from-blue-800 to-emerald-800 rounded-lg">
            <div className="aspect-video relative overflow-hidden bg-gray-800 flex items-center justify-center">
              {/* Placeholder for video since we don't have access to the actual video file */}
              <div className="text-white text-center space-y-6">
                <h3 className="text-3xl md:text-4xl font-light">
                  Virtual School Tour
                </h3>
                <p className="text-lg opacity-90">
                  Experience our campus facilities from anywhere
                </p>
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 mx-auto cursor-pointer hover:bg-white/30 transition-colors">
                  <div className="w-0 h-0 border-l-8 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
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
                  Our School Facilities
                </h2>
              </div>
              <div className="text-right space-y-2">
                <span className="text-xl md:text-2xl text-gray-400 font-light">
                  / {facilities.length}
                </span>
                <p className="text-sm text-blue-800 font-medium tracking-wide uppercase">
                  Facilities
                </p>
              </div>
            </div>
          </div>

          {/* Facilities List */}
          <div className="space-y-24 md:space-y-32">
            {facilities.map((facility, index) => (
              <FacilityCard
                key={facility.id}
                facility={facility}
                index={index}
                reversed={index % 2 === 1}
                onHover={setHoveredFacility}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Parent Testimonials Section */}
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
                What Parents Say
              </h2>
            </div>
            <div className="max-w-2xl">
              <p className="text-lg md:text-xl text-gray-800 font-light leading-relaxed">
                Hear from parents who have entrusted their children&apos;s
                education to Earlygrip High School and witnessed remarkable
                transformations.
              </p>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {parentTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`group ${index === 1 ? "md:translate-y-8" : ""}`}
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 md:p-10 shadow-sm border border-blue-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300 hover:-translate-y-2">
                  <div className="mb-6">
                    <svg
                      width="32"
                      height="24"
                      viewBox="0 0 32 24"
                      fill="none"
                      className="text-blue-800"
                    >
                      <path
                        d="M0 24V12C0 5.4 5.4 0 12 0v4C7.6 4 4 7.6 4 12v2h6v10H0zm18 0V12c0-6.6 5.4-12 12-12v4c-4.4 0-8 3.6-8 8v2h6v10H18z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <blockquote className="text-base md:text-lg text-gray-800 leading-relaxed mb-8 font-light">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-medium text-sm">
                        {testimonial.initials}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-gray-800">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info Section */}
          <div className="mt-20 md:mt-24">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 md:p-12 shadow-sm border border-blue-100">
              <div className="text-center space-y-6">
                <h3 className="text-2xl md:text-3xl font-light text-gray-900">
                  Ready to Join the EGHS Family?
                </h3>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                  Experience the difference our facilities and dedicated
                  educators make in your child&apos;s academic journey and
                  character development.
                </p>
                <div className="pt-4">
                  <button className="group px-8 py-4 bg-gradient-to-r from-blue-800 to-emerald-800 text-white font-medium hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg rounded">
                    <span className="flex items-center space-x-3">
                      <span>Schedule a School Visit</span>
                      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FacilitiesGallery;
