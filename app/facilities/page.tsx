import Projects from "@/components/projects/Proj";
import ArchitectureHero from "@/components/ui/other-hero";

const FacilitiesPage = () => {
  return (
    <div>
      <div className="sticky top-0">
        <ArchitectureHero
          descriptionHeader="Our Facilities Speaks for themselves"
          title="Facilities"
          description="At Eargrip High School, we provide more than just classrooms — we offer an environment designed for growth, creativity, and excellence. Our state-of-the-art facilities support learning, sports, technology, and the arts, giving students the space and tools to thrive. Explore our well-curated facilities, each one built to inspire achievement and nurture potential."
          backgroundImage="/26.jpg"
          titleId="hero-title"
          descriptionId="hero-description"
        />
      </div>
      <Projects />
    </div>
  );
};

export default FacilitiesPage;
