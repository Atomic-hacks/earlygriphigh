import Gallery from "@/components/gallery/Gallery";
import ArchitectureHero from "@/components/ui/other-hero";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="sticky top-0">
        <ArchitectureHero
          descriptionHeader="Our collection of memories past and present"
          title="Gallery"
          description="At Eargrip High School, every moment tells a story. Our gallery showcases the vibrant life of our students and community — from academic achievements to cultural events, sports, and everyday experiences. Explore these captured memories that reflect our spirit of learning, creativity, and excellence."
          backgroundImage="/21.jpg"
          titleId="hero-title"
          descriptionId="hero-description"
        />
      </div>
      <Gallery />
    </div>
  );
};

export default page;
