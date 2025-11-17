import Gallery from "@/components/gallery/Gallery";
import ArchitectureHero from "@/components/ui/other-hero";

const GalleryPage = () => {
  return (
    <div>
      <div className="sticky top-0">
        <ArchitectureHero
          descriptionHeader="Our collection of memories past and present"
          title="Gallery"
          description="At Eargrip High School, every moment tells a story. Our gallery showcases the vibrant life of our students and community — from academic achievements to cultural events, sports, and everyday experiences. Explore these captured memories that reflect our spirit of learning, creativity, and excellence."
          backgroundImage="https://res.cloudinary.com/dl0krsagd/image/upload/v1762898388/23_o7ubps.jpg"
          titleId="hero-title"
          descriptionId="hero-description"
        />
      </div>
      <Gallery />
    </div>
  );
};

export default GalleryPage;
