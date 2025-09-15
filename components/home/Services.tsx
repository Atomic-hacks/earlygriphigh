/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion, Variants } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  Users,
  Microscope,
  Gamepad2,
  Home,
  Eye,
} from "lucide-react";
import Link from "next/link";

const facilities = [
  {
    title: "Academic Excellence",
    description:
      "Modern classrooms and library with 21st century learning tools",
    number: "01",
    highlights: ["Smart Classrooms", "Digital Library", "Study Halls"],
    icon: BookOpen,
    gradient: "from-blue-800 to-blue-700",
    accentColor: "blue-800",
  },
  {
    title: "Science & Technology",
    description:
      "State-of-the-art laboratories fostering scientific innovation",
    number: "02",
    highlights: ["Physics Lab", "Chemistry Lab", "ICT Center"],
    icon: Microscope,
    gradient: "from-purple-800 to-purple-700",
    accentColor: "purple-800",
  },
  {
    title: "Sports & Recreation",
    description: "Comprehensive facilities promoting physical wellness",
    number: "03",
    highlights: ["Football Field", "Basketball Court", "Swimming Pool"],
    icon: Gamepad2,
    gradient: "from-green-800 to-green-700",
    accentColor: "green-800",
  },
  {
    title: "Boarding & Wellness",
    description:
      "Comfortable residential facilities with full support services",
    number: "04",
    highlights: ["Dormitories", "Dining Hall", "Health Center"],
    icon: Home,
    gradient: "from-orange-800 to-orange-700",
    accentColor: "orange-800",
  },
];

const stats = [
  { value: "2017", label: "Established", icon: BookOpen },
  { value: "4", label: "Main Areas", icon: Users },
  { value: "100%", label: "Boarding", icon: Home },
];

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const FacilityCard = ({
  facility,
  index,
}: {
  facility: any;
  index: number;
}) => {
  const IconComponent = facility.icon;

  return (
    <motion.div
      variants={cardVariants}
      className="group cursor-pointer"
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="bg-white rounded-2xl border border-slate-200 p-6 hover:border-slate-300 hover:shadow-lg transition-all duration-300">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center space-x-4">
            <motion.div
              className={`w-12 h-12 rounded bg-gradient-to-r ${facility.gradient} flex items-center justify-center`}
              whileHover={{ rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              <IconComponent className="w-6 h-6 text-white" />
            </motion.div>
            <span className="text-sm font-medium text-slate-500 tracking-wider uppercase">
              {facility.number}
            </span>
          </div>

          <motion.div
            className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <ArrowUpRight className="w-4 h-4 text-slate-800" />
          </motion.div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h3
            className={`text-xl font-semibold text-slate-900 group-hover:text-${facility.accentColor} transition-colors duration-300`}
          >
            {facility.title}
          </h3>

          <p className="text-slate-800 leading-relaxed">
            {facility.description}
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-2 pt-2">
            {facility.highlights.map((highlight: any, idx: number) => (
              <motion.span
                key={idx}
                className={`px-3 py-1 bg-${facility.accentColor}/10 text-${facility.accentColor} text-xs font-medium rounded-full`}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 + idx * 0.05, duration: 0.3 }}
              >
                {highlight}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Learn more */}
        <motion.div
          className={`flex items-center text-${facility.accentColor} text-sm font-medium mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
          whileHover={{ x: 2 }}
        >
          <Link href='/facilities'>Explore facility</Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function MinimalFacilities() {
  return (
    <section className="py-16 lg:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Accent line */}
            <div className="flex items-center justify-center space-x-4">
              <motion.div
                className="w-12 h-px bg-gradient-to-r from-blue-800 to-emerald-800"
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <span className="text-sm font-medium text-slate-800 tracking-wider uppercase">
                World-Class Infrastructure
              </span>
              <motion.div
                className="w-12 h-px bg-gradient-to-r from-emerald-800 to-blue-800"
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </div>

            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-light text-slate-900">
                Our{" "}
                <span className="bg-gradient-to-r from-blue-800 to-emerald-800 bg-clip-text text-transparent font-medium">
                  Facilities
                </span>
              </h2>

              <p className="text-lg lg:text-xl text-slate-800 font-light max-w-3xl mx-auto">
                World-class learning environments designed to inspire excellence
                and foster holistic development through our 21st-century
                approach
              </p>
            </div>

            {/* Philosophy quote */}
            <motion.div
              className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-6 lg:p-8 max-w-4xl mx-auto mt-8"
              variants={itemVariants}
            >
              <blockquote className="text-slate-700 italic text-center">
                <span className="text-lg font-light">
                  &quot;Scientia Pro Excellentiae et Ministerio&quot; -
                  Knowledge for Excellence and Service
                </span>
              </blockquote>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          className="flex items-center justify-center space-x-8 lg:space-x-12 mb-16 lg:mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center group"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center justify-center mb-2">
                <stat.icon className="w-5 h-5 text-slate-400 group-hover:text-blue-800 transition-colors duration-300" />
              </div>
              <div className="text-2xl lg:text-3xl font-light text-slate-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-slate-500 uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Facilities Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {facilities.map((facility, index) => (
            <FacilityCard
              key={facility.number}
              facility={facility}
              index={index}
            />
          ))}
        </motion.div>

        {/* Action Section */}
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="space-y-4">
            <h3 className="text-2xl lg:text-3xl font-light text-slate-900">
              Experience Our Campus
            </h3>
            <p className="text-slate-800 max-w-2xl mx-auto">
              Discover how our world-class facilities support academic
              excellence and character development in our students
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-800 to-emerald-800 text-white font-medium rounded shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <span>View All Facilities</span>
              <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
            </motion.button>

            <motion.button
              className="group inline-flex items-center px-6 py-3 border border-slate-300 text-slate-700 font-medium rounded hover:border-slate-400 hover:bg-slate-50 transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Eye className="w-4 h-4 mr-2" />
              <span>Virtual Tour</span>
            </motion.button>
          </div>

          <motion.p
            className="text-sm text-slate-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            Schedule a visit to experience our facilities firsthand
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
