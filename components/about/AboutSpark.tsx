import React from "react";
import { Check, BookOpen, Users, Heart, Award } from "lucide-react";

interface OurStoryProps {
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
  features?: Array<{
    title: string;
    icon?: React.ComponentType<{ className?: string }>;
  }>;
  containerClassName?: string;
}

const OurStory: React.FC<OurStoryProps> = ({
  title = "Our Story",
  subtitle = "What Makes Us Special",
  description = "Welcome to EarlyGrip High School, where excellence meets nurturing care in education. Founded in 2017 and located on Pipeline Road Egbelu/Mgbarajah off Iwofe Road Port Harcourt, we are a full boarding mixed school dedicated to grooming the uniqueness of every child. Our environment stirs and develops the academic, spiritual and moral values of each student, making EGHS a true home away from home.",
  image = "/school-building.jpg",
  features = [
    { title: "World-Class Education", icon: BookOpen },
    { title: "Innovative Educators", icon: Users },
    { title: "Holistic Development", icon: Heart },
    { title: "International Standards", icon: Award },
  ],
  containerClassName = "",
}) => {
  return (
    <section
      className={`relative py-16 sm:py-24 md:py-32 lg:py-48 bg-gradient-to-br bg-white overflow-hidden ${containerClassName}`}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-blue-400/5 rounded-full blur-2xl" />
      </div>

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Section */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Blue accent border */}
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-blue-600" />

              {/* Image container */}
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={image}
                  alt="EarlyGrip High School"
                  className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-blue-900/20 to-black/50" />

                {/* School info overlay */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                  <div className="flex items-center space-x-3 text-white">
                    <BookOpen className="w-5 h-5 text-blue-300" />
                    <div>
                      <p className="font-medium">Founded 2017</p>
                      <p className="text-sm text-white/80">
                        Full Boarding Mixed School
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative corner element */}
              <div className="absolute -top-4 -right-4 w-8 h-8">
                <div className="w-full h-1 bg-gradient-to-r from-blue-400 to-blue-500 mb-2" />
                <div className="w-1 h-full bg-gradient-to-b from-blue-400 to-blue-500" />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="relative order-1 lg:order-2 space-y-8">
            {/* Section Header */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-px bg-gradient-to-r from-blue-400 to-blue-500" />
                <span className="text-sm font-medium text-blue-400 tracking-[0.15em] uppercase">
                  About Our School
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
                <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 bg-clip-text text-transparent">
                  {title}
                </span>
              </h2>

              <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-500" />
            </div>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-lg md:text-xl leading-relaxed font-light bg-gradient-to-r from-neutral-900 via-blue-800 to-neutral-900 bg-clip-text text-transparent">
                {description}
              </p>

              {/* Additional school info */}
              <div className="bg-blue-50/50 rounded-lg p-6 border-l-4 border-blue-400">
                <p className="text-base leading-relaxed text-gray-700">
                  At EGHS, we understand the importance of sound education. Our
                  programmes are designed to deliver impeccable world-class
                  education using a team of innovative and model educators. We
                  create an atmosphere where safety is paramount, promoting
                  learning and growth within our structured framework.
                </p>
              </div>
            </div>

            {/* What Sets Us Apart */}
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 bg-clip-text text-transparent">
                {subtitle}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 group"
                  >
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      {feature.icon ? (
                        <feature.icon className="w-3 h-3 text-white" />
                      ) : (
                        <Check className="w-3 h-3 text-white" />
                      )}
                    </div>
                    <span className="text-base md:text-lg font-medium bg-gradient-to-r from-neutral-900 via-blue-800 to-neutral-900 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-blue-400 transition-all duration-200">
                      {feature.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Features */}
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-blue-600">
                Our Educational Approach
              </h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Academic Excellence:</strong> Comprehensive
                    curriculum showcasing international standards
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Musical Education:</strong> Exposure to various
                    instruments including organ, violin, flutes, and drums
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Character Building:</strong> Focus on developing
                    spiritual, moral, and academic values
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="pt-6">
              <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg p-6 text-white">
                <h4 className="text-lg font-semibold mb-2">
                  Ready to Join Our Family?
                </h4>
                <p className="text-blue-100 mb-4">
                  Contact us today to learn more about admission opportunities
                  at EarlyGrip High School.
                </p>
                <div className="flex flex-col sm:flex-row gap-2 text-sm">
                  <span> +234 8178592499, +234 8095900266</span>
                  <span> info@earlygriphighschool.com</span>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="pt-8">
              <div className="flex items-center space-x-4 opacity-70">
                <div className="w-8 h-px bg-gradient-to-r from-blue-400 to-blue-500" />
                <div className="w-2 h-2 bg-blue-400 rounded-full" />
                <div className="w-12 h-px bg-gradient-to-r from-blue-500 to-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
