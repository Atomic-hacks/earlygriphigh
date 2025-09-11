import React from "react";
import {
  BookOpen,
  Users,
  Trophy,
  Calendar,
  Target,
  Eye,
  Microscope,
  Palette,
  Activity,
  Building,
  Library,
  Home,
  ArrowRight,
  Phone,
  Mail,
} from "lucide-react";

export default function LandingContent() {

  const stats = [
    { number: "500+", label: "Students Enrolled", icon: Users },
    { number: "50+", label: "Expert Faculty", icon: BookOpen },
    { number: "98%", label: "Success Rate", icon: Trophy },
    { number: "2017", label: "Established", icon: Calendar },
  ];

  const programs = [
    {
      title: "Sciences",
      description:
        "Rigorous scientific inquiry through advanced laboratory work and research methodologies",
      features: [
        "Advanced Physics",
        "Organic Chemistry",
        "Molecular Biology",
        "Applied Mathematics",
      ],
      icon: Microscope,
    },
    {
      title: "Humanities",
      description:
        "Critical thinking and cultural understanding through literature, history, and philosophy",
      features: [
        "Classical Literature",
        "Modern History",
        "Philosophy & Ethics",
        "Language Studies",
      ],
      icon: Palette,
    },
    {
      title: "Leadership Development",
      description:
        "Character formation and leadership skills through structured programs and mentorship",
      features: [
        "Student Government",
        "Debate Society",
        "Community Service",
        "Peer Mentorship",
      ],
      icon: Activity,
    },
  ];

  const facilities = [
    {
      title: "Academic Halls",
      description:
        "Purpose-built learning environments with integrated technology and flexible configurations",
      image: "/classroom.jpg",
      icon: Building,
    },
    {
      title: "Research Laboratories",
      description:
        "Specialized facilities for scientific research and practical learning across all disciplines",
      image: "/lab.jpg",
      icon: Microscope,
    },
    {
      title: "Academic Resource Center",
      description:
        "Comprehensive collection of scholarly materials and quiet study environments",
      image: "/library.jpg",
      icon: Library,
    },
    {
      title: "Residential Quarters",
      description:
        "Supervised boarding facilities fostering independence and academic focus",
      image: "/dormitory.jpg",
      icon: Home,
    },
  ];

  return (
    <div className="bg-white">
      {/* Welcome Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Content */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <div className="flex items-center mb-8">
                  <div className="w-8 h-px bg-slate-400"></div>
                  <span className="ml-4 text-sm font-medium text-slate-600 tracking-wider uppercase">
                    Welcome
                  </span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-light text-slate-900 mb-8 leading-tight">
                  Early Grip High School
                </h1>

                <div className="prose prose-lg prose-slate max-w-none">
                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    We are proud to welcome you to Early Grip High School. A
                    fully boarding, non-denominational institution for boys and
                    girls, situated in Port Harcourt, Rivers State, within an
                    environment conducive to scholarly pursuit.
                  </p>

                  <p className="text-slate-600 leading-relaxed mb-6">
                    Established in September 2017, our institution embodies the
                    principle of{" "}
                    <em>Scientia Pro Excellentiae et Ministerio</em> — knowledge
                    for excellence and service. We pursue not merely academic
                    achievement, but comprehensive development of character and
                    intellect.
                  </p>

                  <p className="text-slate-600 leading-relaxed">
                    Through our commitment to 21st-century pedagogical
                    approaches, we deliver education of international standard
                    while maintaining accessibility and our foundational
                    commitment to academic excellence.
                  </p>
                </div>

                <div className="flex items-center mt-8 pt-8 border-t border-slate-200">
                  <button className="flex items-center text-slate-900 font-medium hover:text-slate-600 transition-colors">
                    <span>Continue Reading</span>
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="bg-slate-200 h-96 lg:h-[500px]"></div>
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/school-building.jpg')" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 border-y border-slate-200 bg-slate-50">
        <div className="max-w-6xl mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <IconComponent className="w-6 h-6 mx-auto text-slate-400 mb-4" />
                  <div className="text-3xl lg:text-4xl font-light text-slate-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm font-medium text-slate-600 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center mb-6">
                <Target className="w-5 h-5 text-slate-400 mr-3" />
                <span className="text-sm font-medium text-slate-600 tracking-wider uppercase">
                  Mission
                </span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-light text-slate-900 mb-6 leading-tight">
                Educational Excellence & Character Formation
              </h2>
              <p className="text-slate-600 leading-relaxed">
                To cultivate world-class educational experiences that develop
                future leaders and innovative problem-solvers. Under the
                guidance of accomplished educators, we foster intellectual
                rigor, moral character, and service to humanity.
              </p>
            </div>

            <div>
              <div className="flex items-center mb-6">
                <Eye className="w-5 h-5 text-slate-400 mr-3" />
                <span className="text-sm font-medium text-slate-600 tracking-wider uppercase">
                  Vision
                </span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-light text-slate-900 mb-6 leading-tight">
                Global Citizens & Ethical Leaders
              </h2>
              <p className="text-slate-600 leading-relaxed">
                To establish ourselves as a premier institution that shapes
                thoughtful, capable individuals who contribute meaningfully to
                society through principled leadership, innovative thinking, and
                dedicated service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-6xl mx-auto px-8 lg:px-12">
          <div className="mb-16">
            <div className="flex items-center mb-6">
              <div className="w-8 h-px bg-slate-400"></div>
              <span className="ml-4 text-sm font-medium text-slate-600 tracking-wider uppercase">
                Academic Excellence
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-light text-slate-900 mb-6">
              Comprehensive Curriculum
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              Rigorous academic programs designed to cultivate critical
              thinking, intellectual curiosity, and practical application of
              knowledge.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {programs.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 border border-slate-200 hover:border-slate-300 transition-colors"
                >
                  <IconComponent className="w-8 h-8 text-slate-400 mb-6" />
                  <h3 className="text-xl font-medium text-slate-900 mb-4">
                    {program.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  <div className="space-y-3">
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-1 h-1 bg-slate-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-slate-600">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-8 lg:px-12">
          <div className="mb-16">
            <div className="flex items-center mb-6">
              <div className="w-8 h-px bg-slate-400"></div>
              <span className="ml-4 text-sm font-medium text-slate-600 tracking-wider uppercase">
                Infrastructure
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-light text-slate-900 mb-6">
              Purpose-Built Environment
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              Thoughtfully designed spaces that support academic excellence and
              personal development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => {
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

      {/* Contact Information */}
      <section className="py-20 lg:py-32 bg-slate-900">
        <div className="max-w-6xl mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-light text-white mb-6">
                Begin Your Academic Journey
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                We invite prospective families to discover the opportunities
                available at Early Grip High School. Contact our admissions
                office to schedule a consultation.
              </p>

              <div className="space-y-4">
                <div className="flex items-center text-slate-300">
                  <Mail className="w-5 h-5 mr-4" />
                  <span>admissions@earlygriphigh.edu.ng</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <Phone className="w-5 h-5 mr-4" />
                  <span>+234 (0) 803 XXX XXXX</span>
                </div>
              </div>
            </div>

            <div className="text-right">
              <button className="inline-flex items-center px-8 py-4 border border-slate-600 text-white font-medium hover:border-slate-500 hover:bg-slate-800 transition-colors">
                <span>Schedule Consultation</span>
                <ArrowRight className="ml-3 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
