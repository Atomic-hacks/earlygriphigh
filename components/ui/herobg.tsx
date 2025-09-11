import React from "react";

interface imageParallaxProps {
  backgroundImage: string;
  title: string;
  description: string;
  className: string;
}

export const ImageParallax = ({
  backgroundImage,
  title,
  description,
  className = "",
}: imageParallaxProps) => {
  return (
    <div className={`relative w-full h-screen overflow-hidden ${className}`}>
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transform scale-110 transition-transform duration-1000 ease-out"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          willChange: "transform",
        }}
        onScroll={(e) => {
          const scrollY = window.scrollY;
          e.currentTarget.style.transform = `translateY(${scrollY * 0.5}px) scale(1.1)`;
        }}
      />

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-8">
        {title && (
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 opacity-90 transition-opacity duration-500">
            {title}
          </h1>
        )}
        {description && (
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed opacity-85 transition-opacity duration-500">
            {description}
          </p>
        )}
      </div>

      {/* Simple Dark Overlay */}
      <div className="absolute inset-0 bg-black/20" />
    </div>
  );
};
