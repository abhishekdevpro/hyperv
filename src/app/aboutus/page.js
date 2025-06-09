"use client";
import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";

import ConsultancyPopup from "../components/ConsultancyPopup";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function AboutUs() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    summary: "",
    description: "",
    startTime: "",
    endTime: "",
    email: "",
  });

  const handleClose = () => {
    setShowModal(false);
    setFormData({
      summary: "",
      description: "",
      startTime: "",
      endTime: "",
      email: "",
    });
    setErrors({});
    setSubmitted(false);
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white pt-32 pb-20 md:py-40">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/50"></div>

        {/* Animated Circles */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <motion.div
            className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-blue-400/20 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.2, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-blue-300/20 blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-2"
            >
              {/* <span className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-100 text-sm font-medium">
                Trusted Partnerships
              </span> */}
            </motion.div>

            <h1 className="text-4xl md:text-7xl font-bold mb-2 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
              About HyperV Solutions
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 md:mt-12 flex justify-center gap-4"
            >
              <div className="h-1 w-12 md:w-20 bg-blue-400/50 rounded-full"></div>
              <div className="h-1 w-12 md:w-20 bg-blue-400 rounded-full"></div>
              <div className="h-1 w-12 md:w-20 bg-blue-400/50 rounded-full"></div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-6 h-10 border-2 border-blue-300 rounded-full flex justify-center"
          >
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1 h-2 bg-blue-300 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed px-4">
              HyperV Solutions is a forward-thinking technology company based in
              Columbia, South Carolina, committed to building AI-enabled digital
              platforms across employment, education, wellness, and everyday
              life.
            </p>
          </motion.div>
        </div>
      </section>
      <section className=" bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-8 text-blue-600 px-4">
              Who We Are
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed px-4">
              Our mission is to simplify complex human challenges with
              intelligent, scalable, and personalized solutions.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Clients List */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* What We Build */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-8 text-blue-600 px-4">
              What We Build
            </h2>

            <div className="space-y-8 px-4">
              {[
                {
                  title: "🔹 NovaJobs.us – AI-Powered Job Portal",
                  points: [
                    "Resume building, job search, and career guidance for seekers",
                    "Job posting, talent management, and white-label recruitment for employers",
                    "Enterprise-grade, secure, and scalable infrastructure",
                  ],
                },
                {
                  title: "🔹 UltraAura.education – Online Learning Platform",
                  points: [
                    "Curated industry-led courses with live mentoring and AI certifications",
                    "Resume tools and career assistance for learners",
                    "Fully white-label enabled for training partners and educators",
                  ],
                },
                {
                  title: "🔹 NovaHome Care – Personalized Care Advisor",
                  points: [
                    "Book trusted caregivers for seniors, children, and pets",
                    "Localized service matching based on ZIP code",
                    "Built for families, professionals, and caregiving partners",
                  ],
                },
                {
                  title:
                    "🔹 Paradigm Shift – AI Wellness & Reintegration Companion",
                  points: [
                    "Behavioral health tracking and workplace wellness",
                    "Substance use recovery and employee retention programs",
                    "Features Aria, your personal AI wellness companion",
                  ],
                },
              ].map(({ title, points }, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                >
                  <h3 className="text-xl md:text-2xl font-semibold text-blue-500 mb-3">
                    {title}
                  </h3>
                  <ul className="list-disc list-inside ml-6 text-gray-700 text-base md:text-lg space-y-1">
                    {points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Upcoming Projects */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-12 md:mb-16 px-4"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-8 text-blue-600">
              Upcoming Projects
            </h2>
            <ul className="list-disc list-inside ml-6 text-gray-700 text-base md:text-lg space-y-3 max-w-lg">
              <li>
                <strong>Freevance</strong> – AI-powered freelancing and contract
                work platform
              </li>
              <li>
                <strong>Kushi Gateway</strong> – Nonprofit for empowerment and
                second chances
              </li>
              <li>
                <strong>LegitZone.Law</strong> – Legal automation platform
                simplifying services with AI
              </li>
            </ul>
          </motion.div>

          {/* Our Vision */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-12 md:mb-16 px-4 max-w-xl"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-8 text-blue-600">
              Our Vision
            </h2>
            <p className="text-gray-700 text-lg md:text-xl mb-4">
              To evolve into a global AI-enabled incubation center, delivering
              transformative digital ecosystems in:
            </p>
            <ul className="list-disc list-inside ml-6 text-gray-700 text-base md:text-lg space-y-1">
              <li>Career & Employment</li>
              <li>Education & Skilling</li>
              <li>Personal Wellness</li>
              <li>Community Care</li>
              <li>Justice & Legal Enablement</li>
            </ul>
          </motion.div>

          {/* Our Locations */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-12 md:mb-16 px-4 max-w-md"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-8 text-blue-600">
              Our Locations
            </h2>
            <p className="text-gray-700 text-lg mb-2">
              📍 PO Box 1084, Columbia, SC 29202
            </p>
            <p className="text-gray-700 text-lg mb-2">
              📍 1225 Laurel St., Columbia, SC 29201
            </p>
            <p className="text-gray-700 text-lg mb-2">
              📧 Email:{" "}
              <a
                href="mailto:info@hypervsolutions.net"
                className="text-blue-600 underline"
              >
                info@hypervsolutions.net
              </a>
            </p>
          </motion.div>

          {/* Why HyperV Solutions */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-12 md:mb-16 px-4 max-w-md"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-8 text-blue-600">
              Why HyperV Solutions
            </h2>
            <ul className="list-disc list-inside ml-6 text-gray-700 text-base md:text-lg space-y-2">
              <li>Bold ideas. Built for scale.</li>
              <li>AI at the core of every solution.</li>
              <li>Human-focused digital transformation.</li>
              <li>Agile, ethical, and globally scalable mindset.</li>
            </ul>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mt-10 px-4"
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Sounds interesting?
            </h3>
            <button
              onClick={() => setShowModal(true)}
              className="cursor-pointer inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded transition-all duration-300 text-lg md:text-xl font-medium"
            >
              👉 Book a Free Consultation Now
            </button>
            <ConsultancyPopup
              isOpen={showModal}
              onClose={() => handleClose()}
            />
            <p className="mt-6 text-gray-700 max-w-md mx-auto">
              Let’s explore how HyperV Solutions can partner with you in
              building the future.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
