"use client";
import React, { useState, useEffect } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  Download,
  Share2,
  Heart,
} from "lucide-react";

interface GalleryImage {
  id: string;
  src: string;
  title: string;
  category: string;
  description: string;
  date: string;
}

interface GalleryCategory {
  id: string;
  name: string;
  count: number;
}

const Gallery: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Initialize visibility animation
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Sample gallery data
  const categories: GalleryCategory[] = [
    { id: "all", name: "All Photos", count: 18 },
    { id: "school", name: "School Environment", count: 10 },
    { id: "academics", name: "Academics", count: 6 },
    { id: "school life", name: "Students & Campus Life", count: 2 },
  ];

  const images: GalleryImage[] = [
    {
      id: "1",
      src: "https://res.cloudinary.com/dl0krsagd/image/upload/v1762898422/scl11_msshwt.jpg",
      title: "Main School Building",
      category: "school",
      description: "Front view of the school’s main building",
      date: "2025",
    },
    {
      id: "2",
      src: "/scl16.jpg",
      title: "Classroom View",
      category: "academics",
      description: "Students focused during a classroom session",
      date: "2025",
    },
    {
      id: "3",
      src: "/scl17.jpg",
      title: "side View of the School",
      category: "school",
      description: "An angled view showcasing the school building",
      date: "2025",
    },
    {
      id: "4",
      src: "https://res.cloudinary.com/dl0krsagd/image/upload/v1762898435/scl14_efzubl.jpg",
      title: "Students in Class",
      category: "academics",
      description: "Interactive learning session with students in class",
      date: "2025",
    },
    {
      id: "5",
      src: "https://res.cloudinary.com/dl0krsagd/image/upload/v1762898442/scl4_jipmzt.jpg",
      title: "School Entrance",
      category: "school",
      description: "Neat and well-maintained entrance to the school compound",
      date: "2025",
    },
    {
      id: "6",
      src: "https://res.cloudinary.com/dl0krsagd/image/upload/v1762898437/scl12_ioipmf.jpg",
      title: "Outdoor Corridor",
      category: "school",
      description: "Walkway connecting the classrooms and offices",
      date: "2025",
    },
    {
      id: "7",
      src: "https://res.cloudinary.com/dl0krsagd/image/upload/v1762898412/scl6_q0t63m.jpg",
      title: "Students Gathering",
      category: "school life",
      description: "Students chatting and relaxing during break time",
      date: "2025",
    },
    {
      id: "8",
      src: "https://res.cloudinary.com/dl0krsagd/image/upload/v1762898442/scl17_m1t4l4.jpg",
      title: "School Assembly Ground",
      category: "school",
      description: "Open assembly area used for morning gatherings",
      date: "2025",
    },
    {
      id: "9",
      src: "https://res.cloudinary.com/dl0krsagd/image/upload/v1762898420/scl9_jgdup4.jpg",
      title: "Inside the Classroom",
      category: "academics",
      description: "Students paying attention during a lecture",
      date: "2025",
    },
    {
      id: "10",
      src: "/https://res.cloudinary.com/dl0krsagd/image/upload/v1762898442/scl18_lfrdbe.jpg",
      title: "Student performing practicals",
      category: "school",
      description: "Chemistry practicals being performed by a student",
      date: "2025",
    },
    {
      id: "11",
      src: "https://res.cloudinary.com/dl0krsagd/image/upload/v1762898442/scl6_jqvzjl.jpg",
      title: "Students Walking Across Campus",
      category: "school life",
      description: "Students heading to class in the morning",
      date: "2025",
    },
    {
      id: "12",
      src: "https://res.cloudinary.com/dl0krsagd/image/upload/v1762898437/scl15_dgzly7.jpg",
      title: "Side View of School Building",
      category: "school",
      description: "Architectural side view of the main classroom block",
      date: "2025",
    },
    {
      id: "13",
      src: "https://res.cloudinary.com/dl0krsagd/image/upload/v1762898430/scl13_akizef.jpg",
      title: "Students Reading",
      category: "academics",
      description: "Quiet reading time between lectures",
      date: "2025",
    },

    {
      id: "14",
      src: "https://res.cloudinary.com/dl0krsagd/image/upload/v1762898405/scl4_ahkchs.jpg",
      title: "Students Group Photo",
      category: "school life",
      description: "Group of students posing on campus",
      date: "2025",
    },
    {
      id: "15",
      src: "https://res.cloudinary.com/dl0krsagd/image/upload/v1762898440/scl16_zeczsa.jpg",
      title: "Modern Classroom Design",
      category: "academics",
      description: "Bright and spacious classroom setup for learning",
      date: "2025",
    },

    {
      id: "16",
      src: "https://res.cloudinary.com/dl0krsagd/image/upload/v1762898428/scl8_jii71a.jpg",
      title: "Students revising",
      category: "school life",
      description: "Happy students sharing a moment between classes",
      date: "2025",
    },

    {
      id: "17",
      src: "https://res.cloudinary.com/dl0krsagd/image/upload/v1762898419/scl10_oxiy4h.jpg",
      title: "Students Revising Notes",
      category: "academics",
      description: "Students reviewing materials before class",
      date: "2025",
    },

    {
      id: "18",
      src: "https://res.cloudinary.com/dl0krsagd/image/upload/v1762898399/scl3_frahml.jpg",
      title: "Front Yard View",
      category: "school",
      description: "Front compound showing the main entrance and walkway",
      date: "2025",
    },
  ];

  const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  const openLightbox = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: "prev" | "next") => {
    const currentIndex = filteredImages.findIndex(
      (img) => img.id === selectedImage?.id
    );
    let newIndex;

    if (direction === "next") {
      newIndex =
        currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1;
    } else {
      newIndex =
        currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    }

    setSelectedImage(filteredImages[newIndex]);
    setCurrentImageIndex(newIndex);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!selectedImage) return;

      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") navigateImage("prev");
      if (e.key === "ArrowRight") navigateImage("next");
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [selectedImage, navigateImage]);

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-800/8 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "8s" }}
        />
        <div
          className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-blue-900/5 rounded-full blur-2xl animate-pulse"
          style={{ animationDuration: "10s", animationDelay: "2s" }}
        />
      </div>

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(30, 58, 138, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(30, 58, 138, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
        {/* Header Section */}
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
                className={`bg-gradient-to-r from-blue-800 to-blue-900 h-px transition-all duration-300 delay-400 ${
                  isVisible ? "w-12" : "w-0"
                }`}
              />
              <span
                className={`text-sm font-medium text-blue-800 tracking-[0.15em] uppercase transition-opacity duration-600 delay-600 ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                School Gallery
              </span>
            </div>

            <h1
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-[0.9] tracking-tight mb-8 transition-all duration-300 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Capturing Our
              <br />
              <span className="bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 bg-clip-text text-transparent">
                Educational Journey
              </span>
            </h1>

            <div
              className={`bg-gradient-to-r from-blue-800 to-blue-900 h-1 transition-all duration-300 delay-800 ${
                isVisible ? "w-16" : "w-0"
              }`}
            />

            <p
              className={`text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed font-light max-w-3xl mt-8 transition-all duration-300 delay-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Explore moments of learning, growth, and achievement at EarlyGrip
              High School. From classroom innovations to sporting triumphs,
              discover the vibrant life that defines our educational community.
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div
          className={`mb-12 transition-all duration-300 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-1 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-blue-800 to-blue-900 text-white shadow-lg"
                    : "bg-white/80 backdrop-blur-sm text-blue-800 border border-blue-200 hover:bg-blue-50"
                } transition-all duration-300 delay-${800 + index * 100}`}
                style={{ transitionDelay: `${800 + index * 100}ms` }}
              >
                {category.name}
                <span
                  className={`ml-2 text-xs px-2 py-1 rounded-full ${
                    selectedCategory === category.id
                      ? "bg-white/20 text-white"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className={`group relative overflow-hidden rounded cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl delay-${
                900 + index * 100
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${900 + index * 100}ms` }}
              onClick={() => openLightbox(image, index)}
            >
              {/* Image Container */}
              <div className="aspect-[4/3] relative overflow-hidden">
                {/* Blue accent border */}
                <div
                  className={`absolute -left-1 top-0 w-1 bg-gradient-to-b from-blue-700 to-blue-900 transition-all duration-1000 delay-${
                    1100 + index * 100
                  } ${isVisible ? "h-full opacity-100" : "h-0 opacity-0"}`}
                />

                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-blue-800/20 to-blue-900/60 opacity-60 group-hover:opacity-80 transition-all duration-500" />

                {/* Hover Icons */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-800/80 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/20">
                    {categories.find((cat) => cat.id === image.category)
                      ?.name || image.category}
                  </span>
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/90 via-blue-900/60 to-transparent p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-medium text-sm mb-1 truncate">
                    {image.title}
                  </h3>
                  <p className="text-blue-100 text-xs opacity-90 line-clamp-2">
                    {image.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div
          className={`mt-20 sm:mt-24 md:mt-28 transition-all duration-1000 delay-1500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Photos Captured" },
              { number: "8", label: "Years of Memories" },
              { number: "15+", label: "Event Categories" },
              { number: "1000+", label: "Student Moments" },
            ].map((stat, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-600 delay-${
                  1600 + index * 100
                } ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
              >
                <div className="text-2xl md:text-3xl font-light text-blue-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom section */}
        <div
          className={`mt-16 transition-all duration-1000 delay-2000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center space-x-8">
              <div
                className={`bg-gradient-to-r from-transparent via-blue-800 to-transparent h-px transition-all duration-300 delay-2200 ${
                  isVisible ? "w-16" : "w-0"
                }`}
              />
              <div
                className={`w-3 h-3 border border-blue-800 transform rotate-45 transition-all duration-300 delay-2400 ${
                  isVisible ? "scale-100" : "scale-0"
                }`}
              />
              <div
                className={`bg-gradient-to-r from-transparent via-blue-800 to-transparent h-px transition-all duration-300 delay-2600 ${
                  isVisible ? "w-16" : "w-0"
                }`}
              />
            </div>
            <p
              className={`text-sm text-blue-700 font-light tracking-[0.15em] uppercase transition-opacity duration-600 delay-2800 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              Memories That Last Forever
            </p>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-5xl max-h-full w-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white/80 hover:text-white z-10 transition-colors duration-200"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateImage("prev")}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-200 z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() => navigateImage("next")}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-200 z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <div className="relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-full max-h-[80vh] object-contain rounded"
              />

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white text-xl font-medium">
                    {selectedImage.title}
                  </h3>
                  <span className="text-white/60 text-sm">
                    {currentImageIndex + 1} / {filteredImages.length}
                  </span>
                </div>
                <p className="text-white/80 text-sm mb-3">
                  {selectedImage.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-blue-800/80 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                    {
                      categories.find(
                        (cat) => cat.id === selectedImage.category
                      )?.name
                    }
                  </span>
                  <div className="flex items-center space-x-3">
                    <button className="text-white/80 hover:text-white transition-colors duration-200">
                      <Heart className="w-5 h-5" />
                    </button>
                    <button className="text-white/80 hover:text-white transition-colors duration-200">
                      <Share2 className="w-5 h-5" />
                    </button>
                    <button className="text-white/80 hover:text-white transition-colors duration-200">
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
