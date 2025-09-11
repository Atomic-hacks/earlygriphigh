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
  Shield,
  Music,
  Heart,
  Star,
  MapPin,
  Clock,
} from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      title: "Academic Excellence",
      description:
        "Impeccable world-class education delivered by innovative and model educators",
      icon: BookOpen,
    },
    {
      title: "Character Development",
      description:
        "Nurturing the academic, spiritual, and moral values of each child",
      icon: Heart,
    },
    {
      title: "Individual Growth",
      description:
        "Grooming the uniqueness of every child in a supportive environment",
      icon: Star,
    },
    {
      title: "Safe Environment",
      description:
        "Comprehensive safety structures promoting learning and growth",
      icon: Shield,
    },
  ];

  const features = [
    {
      title: "International Standards",
      description:
        "Structures, policies and curriculum that showcase international educational excellence",
      icon: Trophy,
    },
    {
      title: "Musical Education",
      description:
        "Exposure to various instruments including organ, violin, flutes and drums",
      icon: Music,
    },
    {
      title: "Leadership Development",
      description:
        "Extra-curricular activities equipping students to become future leaders",
      icon: Users,
    },
    {
      title: "Holistic Approach",
      description:
        "Creating well-educated and well-rounded ladies and gentlemen",
      icon: Activity,
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Content */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <div className="flex items-center mb-8">
                  <div className="w-8 h-px bg-slate-400"></div>
                  <span className="ml-4 text-sm font-medium text-slate-600 tracking-wider uppercase">
                    About Us
                  </span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-light text-slate-900 mb-8 leading-tight">
                  Our Story & Mission
                </h1>

                <div className="prose prose-lg prose-slate max-w-none">
                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    Early Grip High School is a full boarding mixed school for
                    boys and girls, located on Pipeline Road Egbelu/Mgbarajah
                    off Iwofe Road, Port Harcourt. Founded in 2017, we are
                    focused on grooming the uniqueness of every child in an
                    environment that stirs and develops the academic, spiritual
                    and moral values of each student.
                  </p>

                  <p className="text-slate-600 leading-relaxed mb-6">
                    At EGHS, we understand the importance of sound education.
                    Therefore, our programmes are designed to deliver impeccable
                    world-class education using a team of innovative and model
                    educators. To our students, EGHS is home away from home. To
                    our parents, EGHS is the stepping stone or foundation stone
                    needed for children to become well-educated and well-rounded
                    ladies and gentlemen.
                  </p>
                </div>

                {/* Contact Info */}
                <div className="bg-slate-50 p-6 border border-slate-200 mt-8">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center text-slate-700">
                      <Phone className="w-4 h-4 mr-3 text-slate-400" />
                      <div>
                        <div className="text-sm">+234 8178592499</div>
                        <div className="text-sm">+234 8095900266</div>
                      </div>
                    </div>
                    <div className="flex items-center text-slate-700">
                      <Mail className="w-4 h-4 mr-3 text-slate-400" />
                      <span className="text-sm">
                        info@earlygriphighschool.com
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="bg-slate-200 h-96 lg:h-[500px]"></div>
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/school-campus.jpg')" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Details */}
      <section className="py-16 border-y border-slate-200 bg-slate-50">
        <div className="max-w-6xl mx-auto px-8 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <MapPin className="w-6 h-6 mx-auto text-slate-400 mb-4" />
              <div className="text-lg font-medium text-slate-900 mb-2">
                Location
              </div>
              <div className="text-sm text-slate-600">
                Pipeline Road Egbelu/Mgbarajah
                <br />
                Off Iwofe Road, Port Harcourt
              </div>
            </div>
            <div>
              <Calendar className="w-6 h-6 mx-auto text-slate-400 mb-4" />
              <div className="text-lg font-medium text-slate-900 mb-2">
                Established
              </div>
              <div className="text-sm text-slate-600 uppercase tracking-wider">
                Founded in 2017
              </div>
            </div>
            <div>
              <Clock className="w-6 h-6 mx-auto text-slate-400 mb-4" />
              <div className="text-lg font-medium text-slate-900 mb-2">
                Latest Update
              </div>
              <div className="text-sm text-slate-600">
                2018/2019 Admission Ongoing
                <br />
                <span className="text-slate-500">Resumption: Sept 9, 2018</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-8 lg:px-12">
          <div className="mb-16">
            <div className="flex items-center mb-6">
              <div className="w-8 h-px bg-slate-400"></div>
              <span className="ml-4 text-sm font-medium text-slate-600 tracking-wider uppercase">
                Our Foundation
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-light text-slate-900 mb-6">
              Core Values & Principles
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              The fundamental beliefs that guide our educational approach and
              shape the character of our learning community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 border border-slate-200 hover:border-slate-300 transition-colors"
                >
                  <IconComponent className="w-8 h-8 text-slate-400 mb-6" />
                  <h3 className="text-xl font-medium text-slate-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Educational Excellence */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-6xl mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center mb-6">
                <Target className="w-5 h-5 text-slate-400 mr-3" />
                <span className="text-sm font-medium text-slate-600 tracking-wider uppercase">
                  Educational Philosophy
                </span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-light text-slate-900 mb-6 leading-tight">
                World-Class Standards & Innovation
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                The school has in place structures, policies and a curriculum
                that showcases the international standard of education we
                provide. Our programmes are meticulously designed to deliver
                excellence through innovative teaching methodologies.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our extra-curricular activities equip students with the tools to
                become accomplished, well-informed future leaders of tomorrow,
                preparing them for success in an increasingly connected global
                society.
              </p>
            </div>

            <div>
              <div className="flex items-center mb-6">
                <Music className="w-5 h-5 text-slate-400 mr-3" />
                <span className="text-sm font-medium text-slate-600 tracking-wider uppercase">
                  Holistic Development
                </span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-light text-slate-900 mb-6 leading-tight">
                Music & Creative Expression
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                At EGHS, we understand that music opens the mind to better
                understanding. Students are exposed to different musical
                instruments including organ, violin, flutes and drums, fostering
                creativity and cognitive development.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Furthermore, we understand that to create the atmosphere and
                environment of home away from home, safety is paramount. The
                school has a comprehensive safety structure in place that
                promotes learning and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Programs */}
      <section className="py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-8 lg:px-12">
          <div className="mb-16">
            <div className="flex items-center mb-6">
              <div className="w-8 h-px bg-slate-400"></div>
              <span className="ml-4 text-sm font-medium text-slate-600 tracking-wider uppercase">
                What Sets Us Apart
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-light text-slate-900 mb-6">
              Excellence in Every Aspect
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              Our comprehensive approach to education ensures that every student
              receives the foundation needed for lifelong success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-slate-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-slate-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 lg:py-32 bg-slate-900">
        <div className="max-w-6xl mx-auto px-8 lg:px-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-light text-white mb-6">
            Join the Early Grip Community
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto">
            Discover how Early Grip High School can provide the foundation your
            child needs to become a well-educated and well-rounded individual.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="inline-flex items-center px-8 py-4 border border-slate-600 text-white font-medium hover:border-slate-500 hover:bg-slate-800 transition-colors">
              <span>Admission Information</span>
              <ArrowRight className="ml-3 w-4 h-4" />
            </button>

            <div className="text-slate-400 text-sm">
              2018/2019 Admission is Ongoing
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
