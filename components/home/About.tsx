"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function About() {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    // Initialize video
    if (videoRef.current) {
      (videoRef.current as HTMLVideoElement).play().catch((error: Error) => {
        console.error("Video play failed:", error);
      });
    }

    // Simple visibility trigger
    const timer = setTimeout(() => setIsVisible(true), 500);

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
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-10 animate-pulse"
            style={{
              left: `${15 + i * 18}%`,
              top: `${20 + i * 15}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + i}s`,
            }}
          >
            <div className="w-8 h-8 border border-blue-300 rounded-full"></div>
          </div>
        ))}
      </div>

      {/* Main Welcome Section */}
      <section className="relative min-h-screen flex items-center justify-center py-20 px-8 md:px-16 lg:px-24">
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Side - School Information */}
            <div
              ref={heroRef}
              className={`space-y-8 transform transition-all duration-1000 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <div className="space-y-6">
                {/* School Badge/Accent */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-px bg-gradient-to-r from-blue-800 to-gray-800"></div>
                  <span className="text-sm font-medium text-blue-700 tracking-wide uppercase">
                    Excellence in Education
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 leading-tight">
                  <span className="bg-gradient-to-r from-blue-800 to-emerald-800 bg-clip-text text-transparent">
                    Welcome to
                  </span>
                  <br />
                  <span className="text-gray-700">Earlygrip High School</span>
                </h1>

                <div className="w-32 h-0.5 bg-gradient-to-r from-blue-800 to-emerald-800"></div>

                <h2 className="text-2xl md:text-3xl font-light text-gray-800 leading-relaxed">
                  Scientia Pro Excellentiae et Ministerio
                </h2>

                <p className="text-sm text-gray-500 font-medium">
                  &quot;Knowledge for Excellence and Service&quot;
                </p>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  We are proud to welcome you to Early Grip High School. We are
                  a fully boarding, non-denominational, mixed school for boys
                  and girls located in Port Harcourt, Rivers State, in a quiet
                  environment that promotes learning.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  EGHS opened its welcoming doors in September 2017 to its first
                  set of students. We aim to produce world-class education,
                  future leaders, and solution providers under the instruction
                  of well-grounded educators.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  We use 21st Century learning approaches to ensure we deliver
                  excellent and international standard education while
                  maintaining cost-effective, quality education.
                </p>
              </div>
              <div className="pt-4">
                <button className="group px-8 py-4 bg-blue-800 text-white font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  <span className="flex items-center space-x-2">
                    <span>Learn More About EGHS</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </span>
                </button>
              </div>
            </div>

            {/* Right Side - School Image */}
            <motion.div
              className={`transform transition-all duration-1000 ease-out delay-300 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <div className="relative">
                <div className="relative overflow-hidden shadow-2xl">
                  <img
                    src="/29.jpg"
                    alt="Earlygrip High School Campus"
                    className="w-full h-auto transition-transform duration-500 hover:scale-105"
                    style={{
                      aspectRatio: "4/3",
                      objectFit: "cover",
                    }}
                  />
                  {/* Overlay with school info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-sm font-medium">
                        Earlygrip High School students
                      </p>
                      <p className="text-xs opacity-90">
                        Port Harcourt, Rivers State
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 border-2 border-blue-300 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-emerald-400 rounded-full animate-bounce opacity-60"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* School Statistics Section */}
      <section
        ref={statsRef}
        className="relative py-20 bg-gradient-to-r from-blue-900 to-gray-800"
      >
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
              Our Journey Since 2017
            </h2>
            <div className="w-24 h-0.5 bg-white mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center text-white">
              <div className="text-4xl md:text-5xl font-light mb-2">2017</div>
              <div className="text-lg opacity-90">Year Established</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl md:text-5xl font-light mb-2">100%</div>
              <div className="text-lg opacity-90">Boarding School</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl md:text-5xl font-light mb-2">21st</div>
              <div className="text-lg opacity-90">Century Learning</div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section with Video Background */}
      <section className="relative h-screen overflow-hidden">
        <div className="relative h-full">
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/sky4.mp4" type="video/mp4" />
          </video>

          {/* Simplified overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-8 max-w-4xl mx-auto px-8">
              <div className="space-y-6">
                <span className="inline-block text-sm font-medium text-white/90 tracking-wider uppercase border border-white/30 px-4 py-2 rounded-full">
                  Our Mission
                </span>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
                  Shaping Tomorrow&apos;s
                  <br />
                  <span className="bg-gradient-to-r from-blue-700 to-gray-800 bg-clip-text text-transparent">
                    World Leaders
                  </span>
                </h2>

                <div className="w-32 h-0.5 bg-gradient-to-r from-blue-800 to-emerald-700 mx-auto"></div>

                <p className="text-xl text-white/90 font-light leading-relaxed max-w-3xl mx-auto">
                  At EGHS, we stand not only for knowledge but excellence in
                  every aspect of student development. We deliver world-class
                  education in a nurturing environment that fosters growth,
                  leadership, and service to humanity.
                </p>
              </div>

              <div className="pt-8">
                <button className="px-10 py-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-medium hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
                  Discover Our Programs
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
