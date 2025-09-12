/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
  Send,
  User,
  MessageSquare,
  BookOpen,
  Calendar,
} from "lucide-react";

const ContactPage = () => {
  const [activeSection, setActiveSection] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
    studentClass: "",
    preferredContact: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => setActiveSection(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="relative min-h-screen bg-white">
      {/* Dynamic Aurora Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-full h-full opacity-30"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 20% 40%, rgba(16, 185, 129, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse 60% 80% at 80% 20%, rgba(5, 150, 105, 0.1) 0%, transparent 50%),
              radial-gradient(ellipse 100% 70% at 40% 80%, rgba(6, 95, 70, 0.1) 0%, transparent 50%)
            `,
            animation: "aurora 20s ease-in-out infinite alternate",
          }}
        />
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-5"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + i * 12}%`,
              transform: `rotate(${i * 45}deg)`,
              animation: `float ${6 + (i % 3)}s ease-in-out infinite ${
                i * 0.8
              }s`,
            }}
          >
            <div
              className="w-16 h-16 border border-blue-400/30 transform-gpu"
              style={{
                clipPath:
                  i % 2 === 0
                    ? "polygon(50% 0%, 0% 100%, 100% 100%)"
                    : "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
              }}
            />
          </div>
        ))}
      </div>

      {/* Particle System */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-teal-300 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `sparkle ${2 + Math.random() * 3}s linear infinite ${
                Math.random() * 2
              }s`,
              opacity: 0.4 + Math.random() * 0.4,
            }}
          />
        ))}
      </div>

      {/* Header Section */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
          <div
            className={`mb-16 md:mb-20 transform transition-all duration-2000 ease-out ${
              activeSection
                ? "translate-y-0 opacity-100"
                : "translate-y-16 opacity-0"
            }`}
          >
            <div className="text-center space-y-8">
              {/* Decorative accent */}
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-px bg-gradient-to-r from-blue-600 to-blue-700"></div>
                <span className="text-sm font-medium text-blue-700 tracking-[0.15em] uppercase">
                  Get In Touch
                </span>
                <div className="w-12 h-px bg-gradient-to-r from-blue-700 to-blue-600"></div>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-thin leading-[0.9] tracking-tight">
                <span className="inline-block bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 bg-clip-text text-transparent">
                  Contact Us
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-900 font-light leading-relaxed max-w-3xl mx-auto">
                At Early Grip High School, we&apos;re committed to providing
                quality education and nurturing young minds. Get in touch with
                us for admissions, inquiries, or to learn more about our
                programs.
              </p>

              <div className="w-32 h-0.5 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-16 md:py-24">
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Contact Form */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 relative">
                    <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-blue-600 to-blue-700 transform -translate-y-1/2"></div>
                    <div className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-blue-600 to-blue-700 transform -translate-x-1/2"></div>
                    <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-blue-600 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-light text-gray-900 tracking-tight">
                    Send Us A Message
                  </h2>
                </div>

                <div className="bg-blue-50/30 backdrop-blur-sm rounded-sm p-6 border border-blue-100/50">
                  <h3 className="text-xl font-medium text-gray-900 mb-4">
                    Early Grip High School Inquiry Form
                  </h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    We&apos;re here to help with any questions about admissions,
                    our academic programs, or general inquiries. Please fill out
                    the form below and we&apos;ll get back to you promptly.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900 flex items-center space-x-2">
                      <User className="w-4 h-4 text-blue-600" />
                      <span>Full Name *</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-blue-100/50 rounded-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 text-gray-900 placeholder-gray-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900 flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-blue-600" />
                      <span>Email Address *</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-blue-100/50 rounded-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 text-gray-900 placeholder-gray-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900 flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-blue-600" />
                      <span>Phone Number</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+234 803 123 4567"
                      className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-blue-100/50 rounded-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 text-gray-900 placeholder-gray-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900 flex items-center space-x-2">
                      <BookOpen className="w-4 h-4 text-blue-600" />
                      <span>Inquiry Type *</span>
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-blue-100/50 rounded-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 text-gray-900"
                      required
                    >
                      <option value="">Select inquiry type</option>
                      <option value="admissions">Admissions Inquiry</option>
                      <option value="academic">Academic Programs</option>
                      <option value="fees">School Fees & Payment</option>
                      <option value="facilities">School Facilities</option>
                      <option value="general">General Information</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900">
                      Student Class/Level
                    </label>
                    <select
                      name="studentClass"
                      value={formData.studentClass}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-blue-100/50 rounded-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 text-gray-900"
                    >
                      <option value="">Select class level</option>
                      <option value="jss1">JSS 1</option>
                      <option value="jss2">JSS 2</option>
                      <option value="jss3">JSS 3</option>
                      <option value="ss1">SS 1</option>
                      <option value="ss2">SS 2</option>
                      <option value="ss3">SS 3</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900 flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-blue-600" />
                      <span>Preferred Contact Method</span>
                    </label>
                    <select
                      name="preferredContact"
                      value={formData.preferredContact}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-blue-100/50 rounded-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 text-gray-900"
                    >
                      <option value="">Select preferred method</option>
                      <option value="email">Email</option>
                      <option value="phone">Phone Call</option>
                      <option value="whatsapp">WhatsApp</option>
                      <option value="visit">School Visit</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900 flex items-center space-x-2">
                    <MessageSquare className="w-4 h-4 text-blue-600" />
                    <span>Message *</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please tell us about your inquiry, questions about admissions, academic programs, or any other information you need..."
                    rows={6}
                    className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-blue-100/50 rounded-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 text-gray-900 placeholder-gray-500 resize-none"
                    required
                  />
                </div>

                <div className="pt-4">
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="group relative w-full md:w-auto px-8 py-4 bg-blue-600 text-white font-light text-lg hover:bg-blue-700 transition-all duration-500 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-blue-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-left"></div>
                    <span className="relative z-10 flex items-center justify-center space-x-3">
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 relative">
                    <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-blue-600 to-blue-700 transform -translate-y-1/2"></div>
                    <div className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-blue-600 to-blue-700 transform -translate-x-1/2"></div>
                    <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-blue-600 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-light text-gray-900 tracking-tight">
                    Contact Information
                  </h2>
                </div>
              </div>

              <div className="space-y-10">
                {/* Phone Numbers */}
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100/50 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-medium text-gray-900">
                      Call Us
                    </h3>
                    <div className="space-y-1 text-lg text-gray-700 font-light">
                      <p>07038513554</p>
                      <p>08178592499</p>
                      <p>08177517041</p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100/50 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-medium text-gray-900">
                      Email Address
                    </h3>
                    <p className="text-lg text-gray-700 font-light">
                      info@earlygriphighschool.com
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100/50 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-medium text-gray-900">
                      School Address
                    </h3>
                    <p className="text-lg text-gray-700 font-light leading-relaxed">
                      Pipeline Road,
                      <br />
                      Egbelu/Mgbaraja,
                      <br />
                      Port Harcourt, Rivers State,
                      <br />
                      Nigeria
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100/50 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-medium text-gray-900">
                      School Hours
                    </h3>
                    <div className="text-lg text-gray-700 font-light space-y-1">
                      <p>Monday - Friday: 7:30 AM - 3:00 PM</p>
                      <p>Office Hours: 8:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-br from-blue-50/50 to-white p-8 rounded-sm border border-blue-100/50">
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-gray-900">
                    Ready to Join Our School Community?
                  </h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    Discover quality education at Early Grip High School.
                    Schedule a visit or call us to learn more about our academic
                    programs and admission process.
                  </p>
                  <button className="group relative px-6 py-3 bg-transparent border border-blue-600/30 text-blue-600 font-light hover:border-blue-600 transition-all duration-500 overflow-hidden">
                    <div className="absolute inset-0 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-left"></div>
                    <span className="relative z-10 group-hover:text-white transition-colors duration-700 flex items-center space-x-2">
                      <span>Schedule a Visit</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
