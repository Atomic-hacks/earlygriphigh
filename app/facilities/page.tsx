import React from "react";
import {
  Microscope,
  Activity,
  Building,
  Library,
  Home,
  ArrowRight,
  Phone,
  Mail,
  Shield,
  Music,
  Heart,
  Bed,
  Monitor,
  Utensils,
  Bath,
  Wifi,
  TreePine,
  Car,
  Gamepad2,
  Coffee,
} from "lucide-react";

export default function FacilitiesPage() {
  const boardingFacilities = [
    {
      title: "Girls' Boarding House",
      description:
        "Modern, comfortable bedrooms within a vibrant, warm and friendly atmosphere designed specifically for our female students.",
      features: [
        "Shared modern bedrooms",
        "Vertical boarding structure",
        "Supervised living environment",
        "24/7 security and care",
      ],
      image: "/girls-dormitory.jpg",
      icon: Home,
    },
    {
      title: "Boys' Boarding House",
      description:
        "Comfortable living spaces that foster brotherhood and academic focus in a supportive residential environment.",
      features: [
        "Modern shared bedrooms",
        "Structured boarding system",
        "Mentorship programs",
        "Safe and secure facilities",
      ],
      image: "/boys-dormitory.jpg",
      icon: Building,
    },
    {
      title: "Common Recreation Areas",
      description:
        "Two spacious, modern common rooms equipped with comfortable sofas and entertainment systems for relaxation and social interaction.",
      features: [
        "Comfortable sofa seating",
        "Large screen television",
        "DVD entertainment system",
        "Social interaction spaces",
      ],
      image: "/common-room.jpg",
      icon: Coffee,
    },
    {
      title: "Bedroom Accommodations",
      description:
        "Well-appointed shared bedrooms designed to provide comfort, privacy, and a conducive environment for rest and study.",
      features: [
        "Modern furnishing",
        "Adequate storage space",
        "Natural lighting",
        "Climate consideration",
      ],
      image: "/student-bedroom.jpg",
      icon: Bed,
    },
  ];

  const academicFacilities = [
    {
      title: "Science Laboratories",
      description:
        "State-of-the-art laboratory facilities equipped with modern scientific instruments and safety equipment.",
      image: "/science-lab.jpg",
      icon: Microscope,
    },
    {
      title: "Computer Laboratory",
      description:
        "Modern computer lab with high-speed internet connectivity and latest educational software.",
      image: "/computer-lab.jpg",
      icon: Monitor,
    },
    {
      title: "Library & Resource Center",
      description:
        "Extensive collection of books, journals, and digital resources in a quiet study environment.",
      image: "/library-facility.jpg",
      icon: Library,
    },
    {
      title: "Music & Arts Studios",
      description:
        "Dedicated spaces for musical instruction including piano, violin, flute, and drum practice rooms.",
      image: "/music-room.jpg",
      icon: Music,
    },
  ];

  const supportFacilities = [
    {
      title: "Dining Hall",
      description:
        "Spacious dining facility serving nutritious meals prepared by professional kitchen staff.",
      image: "/dining-hall.jpg",
      icon: Utensils,
    },
    {
      title: "Medical Center",
      description:
        "On-campus health facility staffed with qualified medical personnel for student healthcare needs.",
      image: "/medical-center.jpg",
      icon: Heart,
    },
    {
      title: "Sports & Recreation",
      description:
        "Outdoor courts and fields for various sporting activities and physical education programs.",
      image: "/sports-facility.jpg",
      icon: Activity,
    },
    {
      title: "Security & Safety",
      description:
        "Comprehensive security systems and trained personnel ensuring student safety around the clock.",
      image: "/security-post.jpg",
      icon: Shield,
    },
  ];

  const amenities = [
    { name: "High-Speed WiFi", icon: Wifi },
    { name: "24/7 Security", icon: Shield },
    { name: "Landscaped Gardens", icon: TreePine },
    { name: "Transportation", icon: Car },
    { name: "Recreation Areas", icon: Gamepad2 },
    { name: "Laundry Services", icon: Bath },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-8 lg:px-12">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className="w-8 h-px bg-slate-400"></div>
              <span className="mx-4 text-sm font-medium text-slate-600 tracking-wider uppercase">
                Our Facilities
              </span>
              <div className="w-8 h-px bg-slate-400"></div>
            </div>

            <h1 className="text-4xl lg:text-5xl font-light text-slate-900 mb-8 leading-tight">
              World-Class Infrastructure
            </h1>

            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              At Early Grip High School, we believe that exceptional education
              requires exceptional facilities. Our purpose-built infrastructure
              creates an environment where students can thrive academically,
              socially, and personally in comfort and safety.
            </p>
          </div>
        </div>
      </section>

      {/* Boarding Accommodations */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-6xl mx-auto px-8 lg:px-12">
          <div className="mb-16">
            <div className="flex items-center mb-6">
              <div className="w-8 h-px bg-slate-400"></div>
              <span className="ml-4 text-sm font-medium text-slate-600 tracking-wider uppercase">
                Boarding Life
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-light text-slate-900 mb-6">
              Home Away from Home
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              Living accommodation for all our boarders is situated in separate
              girls&apos; and boys&apos; houses, within a vertical boarding
              structure. Both houses maintain a vibrant atmosphere that is warm
              and friendly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {boardingFacilities.map((facility, index) => {
              const IconComponent = facility.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-slate-200 overflow-hidden hover:border-slate-300 transition-colors"
                >
                  <div className="relative h-64">
                    <div className="absolute inset-0 bg-slate-200"></div>
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url('${facility.image}')` }}
                    ></div>
                    <div className="absolute inset-0 bg-slate-900/20"></div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <IconComponent className="w-6 h-6 text-slate-400 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-medium text-slate-900 mb-3">
                          {facility.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed mb-4">
                          {facility.description}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {facility.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <div className="w-1 h-1 bg-slate-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                          <span className="text-sm text-slate-600">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Academic Facilities */}
      <section className="py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-8 lg:px-12">
          <div className="mb-16">
            <div className="flex items-center mb-6">
              <div className="w-8 h-px bg-slate-400"></div>
              <span className="ml-4 text-sm font-medium text-slate-600 tracking-wider uppercase">
                Learning Spaces
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-light text-slate-900 mb-6">
              Academic Excellence Infrastructure
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              Purpose-designed learning environments equipped with modern
              technology to support our world-class educational programs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {academicFacilities.map((facility, index) => {
              const IconComponent = facility.icon;
              return (
                <div key={index} className="group">
                  <div className="relative overflow-hidden bg-slate-200 h-64 mb-6">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url('${facility.image}')` }}
                    ></div>
                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors"></div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <IconComponent className="w-5 h-5 text-slate-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium text-slate-900 mb-2">
                        {facility.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {facility.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Support Facilities */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-6xl mx-auto px-8 lg:px-12">
          <div className="mb-16">
            <div className="flex items-center mb-6">
              <div className="w-8 h-px bg-slate-400"></div>
              <span className="ml-4 text-sm font-medium text-slate-600 tracking-wider uppercase">
                Support Services
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-light text-slate-900 mb-6">
              Comprehensive Student Support
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              Essential facilities and services that ensure our students&apos;
              health, safety, and overall well-being throughout their
              educational journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {supportFacilities.map((facility, index) => {
              const IconComponent = facility.icon;
              return (
                <div key={index} className="group">
                  <div className="relative overflow-hidden bg-slate-200 h-64 mb-6">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url('${facility.image}')` }}
                    ></div>
                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors"></div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <IconComponent className="w-5 h-5 text-slate-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium text-slate-900 mb-2">
                        {facility.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {facility.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Amenities & Features */}
      <section className="py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-8 lg:px-12">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-8 h-px bg-slate-400"></div>
              <span className="mx-4 text-sm font-medium text-slate-600 tracking-wider uppercase">
                Campus Amenities
              </span>
              <div className="w-8 h-px bg-slate-400"></div>
            </div>
            <h2 className="text-3xl lg:text-4xl font-light text-slate-900 mb-6">
              Modern Conveniences
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Additional amenities and services that enhance the boarding school
              experience and create a truly comfortable learning environment.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => {
              const IconComponent = amenity.icon;
              return (
                <div key={index} className="text-center">
                  <IconComponent className="w-8 h-8 mx-auto text-slate-400 mb-4" />
                  <div className="text-slate-900 font-medium">
                    {amenity.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 lg:py-32 bg-slate-900">
        <div className="max-w-6xl mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-light text-white mb-6">
                Experience Our Campus
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                We invite you to visit Early Grip High School and see firsthand
                the exceptional facilities that make our boarding experience
                truly special. Your child will find comfort, safety, and
                inspiration in every corner of our campus.
              </p>

              <div className="space-y-4">
                <div className="flex items-center text-slate-300">
                  <Phone className="w-5 h-5 mr-4" />
                  <div>
                    <div>+234 8178592499</div>
                    <div>+234 8095900266</div>
                  </div>
                </div>
                <div className="flex items-center text-slate-300">
                  <Mail className="w-5 h-5 mr-4" />
                  <span>info@earlygriphighschool.com</span>
                </div>
              </div>
            </div>

            <div className="text-right">
              <button className="inline-flex items-center px-8 py-4 border border-slate-600 text-white font-medium hover:border-slate-500 hover:bg-slate-800 transition-colors">
                <span>Schedule Campus Tour</span>
                <ArrowRight className="ml-3 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
