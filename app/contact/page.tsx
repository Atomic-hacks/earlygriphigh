import ContactPage from "@/components/contact/Contact";
import ArchitectureHero from "@/components/ui/other-hero";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="sticky top-0">
        <ArchitectureHero
          descriptionHeader="Let’s build a solid foundation for the next generation"
          title="Contact Us"
          description="Need to make an enquiry or simply want to know more about EarlyGriphHigh school..? follow the form below to contact and we will respond adequately as soon as we can."
          backgroundImage="/23.jpg"
          titleId="hero-title"
          descriptionId="hero-description"
        />
      </div>
      <ContactPage />
    </div>
  );
};

export default page;
