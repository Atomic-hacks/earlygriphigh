"use client";
import { useEffect, useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

export default function About() {
  const videoRef = useRef(null);
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const visionRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const isVisionInView = useInView(visionRef, { once: true, margin: "-200px" });

  useEffect(() => {
    // Initialize video
    if (videoRef.current) {
      (videoRef.current as HTMLVideoElement).play().catch((error: Error) => {
        console.error("Video play failed:", error);
      });
    }
  }, []);

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const fadeInUp: Variants = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const fadeInLeft: Variants = {
    hidden: {
      opacity: 0,
      x: -80,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const fadeInRight: Variants = {
    hidden: {
      opacity: 0,
      x: 80,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const scaleIn: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const slideInFromBottom: Variants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <motion.div
          className="absolute w-full h-full opacity-20 bg-gradient-to-br from-blue-50 via-emerald-50 to-blue-100"
          animate={{
            background: [
              "linear-gradient(45deg, #dbeafe, #d1fae5, #dbeafe)",
              "linear-gradient(75deg, #e0f2fe, #dcfce7, #e0f2fe)",
              "linear-gradient(45deg, #dbeafe, #d1fae5, #dbeafe)",
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>

      {/* Premium Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-10"
            style={{
              left: `${15 + i * 18}%`,
              top: `${20 + i * 15}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          >
            <div className="w-8 h-8 border border-blue-300 rounded-full" />
          </motion.div>
        ))}
      </div>

      {/* Main Welcome Section */}
      <section className="relative min-h-screen flex items-center justify-center py-20 px-8 md:px-16 lg:px-24">
        <motion.div
          ref={heroRef}
          className="relative z-10 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isHeroInView ? "visible" : "hidden"}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Side - School Information */}
            <motion.div className="space-y-8" variants={fadeInLeft}>
              <motion.div className="space-y-6" variants={staggerContainer}>
                {/* School Badge/Accent */}
                <motion.div
                  className="flex items-center space-x-4"
                  variants={fadeInUp}
                >
                  <motion.div
                    className="w-12 h-px bg-gradient-to-r from-blue-800 to-gray-800"
                    initial={{ width: 0 }}
                    animate={isHeroInView ? { width: 48 } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                  <motion.span
                    className="text-sm font-medium text-blue-700 tracking-wide uppercase"
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isHeroInView
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.8, delay: 0.7 }}
                  >
                    Excellence in Education
                  </motion.span>
                </motion.div>

                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 leading-tight"
                  variants={fadeInUp}
                >
                  <motion.span
                    className="bg-gradient-to-r from-blue-800 to-emerald-800 bg-clip-text text-transparent"
                    initial={{ backgroundPosition: "200% center" }}
                    animate={
                      isHeroInView
                        ? { backgroundPosition: "0% center" }
                        : { backgroundPosition: "200% center" }
                    }
                    transition={{ duration: 2, delay: 0.3 }}
                    style={{ backgroundSize: "200% 200%" }}
                  >
                    Welcome to
                  </motion.span>
                  <br />
                  <motion.span
                    className="text-gray-700"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isHeroInView
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    Earlygrip High School
                  </motion.span>
                </motion.h1>

                <motion.div
                  className="w-32 h-0.5 bg-gradient-to-r from-blue-800 to-emerald-800"
                  initial={{ width: 0 }}
                  animate={isHeroInView ? { width: 128 } : { width: 0 }}
                  transition={{ duration: 1, delay: 1 }}
                />

                <motion.h2
                  className="text-2xl md:text-3xl font-light text-gray-800 leading-relaxed"
                  variants={fadeInUp}
                >
                  Scientia Pro Excellentiae et Ministerio
                </motion.h2>

                <motion.p
                  className="text-sm text-gray-500 font-medium"
                  variants={fadeInUp}
                >
                  &quot;Knowledge for Excellence and Service&quot;
                </motion.p>
              </motion.div>

              <motion.div className="space-y-6" variants={staggerContainer}>
                {[
                  "We are proud to welcome you to Early Grip High School. We are a fully boarding, non-denominational, mixed school for boys and girls located in Port Harcourt, Rivers State, in a quiet environment that promotes learning.",
                  "EGHS opened its welcoming doors in September 2017 to its first set of students. We aim to produce world-class education, future leaders, and solution providers under the instruction of well-grounded educators.",
                  "We use 21st Century learning approaches to ensure we deliver excellent and international standard education while maintaining cost-effective, quality education.",
                ].map((text, index) => (
                  <motion.p
                    key={index}
                    className="text-lg text-gray-700 leading-relaxed"
                    variants={fadeInUp}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {text}
                  </motion.p>
                ))}
              </motion.div>

              <motion.div className="pt-4" variants={fadeInUp}>
                <motion.button
                  className="group px-8 py-4 bg-blue-800 text-white font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center space-x-2">
                    <span>Learn More About EGHS</span>
                    <motion.span
                      className="transform transition-transform"
                      whileHover={{ x: 5 }}
                    >
                      →
                    </motion.span>
                  </span>
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Side - School Image */}
            <motion.div variants={fadeInRight}>
              <motion.div
                className="relative"
                variants={scaleIn}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden shadow-2xl">
                  <motion.img
                    src="/29.jpg"
                    alt="Earlygrip High School Campus"
                    className="w-full h-auto"
                    style={{
                      aspectRatio: "4/3",
                      objectFit: "cover",
                    }}
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={
                      isHeroInView
                        ? { scale: 1, opacity: 1 }
                        : { scale: 1.2, opacity: 0 }
                    }
                    transition={{ duration: 1.2, delay: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                  />

                  {/* Animated Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="absolute bottom-4 left-4 right-4 text-white"
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <p className="text-sm font-medium">
                        Earlygrip High School students
                      </p>
                      <p className="text-xs opacity-90">
                        Port Harcourt, Rivers State
                      </p>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Animated Decorative elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-12 h-12 border-2 border-blue-300 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-8 h-8 bg-emerald-400 rounded-full opacity-60"
                  animate={{
                    y: [0, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* School Statistics Section */}
      <motion.section
        ref={statsRef}
        className="relative py-20 bg-gradient-to-r from-blue-900 to-gray-800"
        initial={{ opacity: 0, y: 100 }}
        animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            animate={isStatsInView ? "visible" : "hidden"}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-light text-white mb-4"
              variants={fadeInUp}
            >
              Our Journey Since 2017
            </motion.h2>
            <motion.div
              className="w-24 h-0.5 bg-white mx-auto"
              initial={{ width: 0 }}
              animate={isStatsInView ? { width: 96 } : { width: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate={isStatsInView ? "visible" : "hidden"}
          >
            {[
              { number: "2017", label: "Year Established" },
              { number: "100%", label: "Boarding School" },
              { number: "21st", label: "Century Learning" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center text-white"
                variants={slideInFromBottom}
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="text-4xl md:text-5xl font-light mb-2"
                  initial={{ scale: 0 }}
                  animate={isStatsInView ? { scale: 1 } : { scale: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.2 + 0.5,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  {stat.number}
                </motion.div>
                <motion.div className="text-lg opacity-90" variants={fadeInUp}>
                  {stat.label}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Vision Section with Video Background */}
      <motion.section
        className="relative h-screen overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        <div className="relative h-full">
          <motion.video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <source src="/sky4.mp4" type="video/mp4" />
          </motion.video>

          {/* Animated overlay */}
          <motion.div
            className="absolute inset-0 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 2 }}
          />

          {/* Content overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              ref={visionRef}
              className="text-center space-y-8 max-w-4xl mx-auto px-8"
              variants={containerVariants}
              initial="hidden"
              animate={isVisionInView ? "visible" : "hidden"}
            >
              <motion.div className="space-y-6" variants={staggerContainer}>
                <motion.span
                  className="inline-block text-sm font-medium text-white/90 tracking-wider uppercase border border-white/30 px-4 py-2 rounded-full"
                  variants={scaleIn}
                  whileHover={{
                    scale: 1.05,
                    borderColor: "rgba(255,255,255,0.6)",
                  }}
                >
                  Our Mission
                </motion.span>

                <motion.h2
                  className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight"
                  variants={fadeInUp}
                >
                  Shaping Tomorrow&apos;s
                  <br />
                  <motion.span
                    className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent"
                    initial={{ backgroundPosition: "200% center" }}
                    animate={
                      isVisionInView
                        ? { backgroundPosition: "0% center" }
                        : { backgroundPosition: "200% center" }
                    }
                    transition={{ duration: 2, delay: 0.5 }}
                    style={{ backgroundSize: "200% 200%" }}
                  >
                    World Leaders
                  </motion.span>
                </motion.h2>

                <motion.div
                  className="w-32 h-0.5 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto"
                  initial={{ width: 0 }}
                  animate={isVisionInView ? { width: 128 } : { width: 0 }}
                  transition={{ duration: 1, delay: 1 }}
                />

                <motion.p
                  className="text-xl text-white/90 font-light leading-relaxed max-w-3xl mx-auto"
                  variants={fadeInUp}
                >
                  At EGHS, we stand not only for knowledge but excellence in
                  every aspect of student development. We deliver world-class
                  education in a nurturing environment that fosters growth,
                  leadership, and service to humanity.
                </motion.p>
              </motion.div>

              <motion.div className="pt-8" variants={fadeInUp}>
                <motion.button
                  className="px-10 py-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-medium transition-all duration-300"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255,255,255,0.3)",
                    borderColor: "rgba(255,255,255,0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Discover Our Programs
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
