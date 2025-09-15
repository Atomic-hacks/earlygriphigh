import OurStory from "@/components/about/AboutSpark";
import Contact from "@/components/about/ContactUs";
import VisionSection from "@/components/about/OurMission";
import ArchitectureHero from "@/components/ui/other-hero";
import React from "react";

const page = () => {
  return (
    <main>
      <div className="sticky top-0">
        <ArchitectureHero
          descriptionHeader="Broad Vision. Exceptional Learning. Lasting Impact"
          title="About"
          description="Our mission, both then and now, is to provide quality education while upholding the highest standards of integrity, professionalism, and student success."
          backgroundImage="/26.jpg"
          titleId="hero-title"
          descriptionId="hero-description"
        />
      </div>
      <OurStory />
      <VisionSection />
      <Contact />
    </main>
  );
};

export default page;
