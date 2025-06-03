// components/AboutUs.tsx or pages/about.tsx (if it's a route page)
"use client";
import { useState, useEffect } from "react";
import ConsultancyPopup from "../components/ConsultancyPopup";

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
    <div className=" text-gray-900 px-6 md:px-12 py-12 max-w-7xl mx-auto min-h-screen bg-gradient-to-t from-white to-gray-300">
      <section className="text-center mb-4 mt-8">
        <h1 className="text-4xl font-bold mb-4 text-blue-700">
          About HyperV Solutions
        </h1>
        <p className="text-lg max-w-3xl mx-auto">
          HyperV Solutions is a forward-thinking technology company based in
          Columbia, South Carolina, committed to building AI-enabled digital
          platforms across employment, education, wellness, and everyday life.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Who We Are
        </h2>
        <p>
          Our mission is to simplify complex human challenges with intelligent,
          scalable, and personalized solutions.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          What We Build
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-blue-500">
              🔹 NovaJobs.us – AI-Powered Job Portal
            </h3>
            <ul className="list-disc list-inside ml-4">
              <li>
                Resume building, job search, and career guidance for seekers
              </li>
              <li>
                Job posting, talent management, and white-label recruitment for
                employers
              </li>
              <li>Enterprise-grade, secure, and scalable infrastructure</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-500">
              🔹 UltraAura.education – Online Learning Platform
            </h3>
            <ul className="list-disc list-inside ml-4">
              <li>
                Curated industry-led courses with live mentoring and AI
                certifications
              </li>
              <li>Resume tools and career assistance for learners</li>
              <li>
                Fully white-label enabled for training partners and educators
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-500">
              🔹 NovaHome Care – Personalized Care Advisor
            </h3>
            <ul className="list-disc list-inside ml-4">
              <li>Book trusted caregivers for seniors, children, and pets</li>
              <li>Localized service matching based on ZIP code</li>
              <li>
                Built for families, professionals, and caregiving partners
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-500">
              🔹 Paradigm Shift – AI Wellness & Reintegration Companion
            </h3>
            <ul className="list-disc list-inside ml-4">
              <li>Behavioral health tracking and workplace wellness</li>
              <li>Substance use recovery and employee retention programs</li>
              <li>Features Aria, your personal AI wellness companion</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-4">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Upcoming Projects
        </h2>
        <ul className="list-disc list-inside ml-4 space-y-2">
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
      </section>

      <section className="mb-4">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Our Vision
        </h2>
        <p>
          To evolve into a global AI-enabled incubation center, delivering
          transformative digital ecosystems in:
        </p>
        <ul className="list-disc list-inside ml-4 mt-2">
          <li>Career & Employment</li>
          <li>Education & Skilling</li>
          <li>Personal Wellness</li>
          <li>Community Care</li>
          <li>Justice & Legal Enablement</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Our Locations
        </h2>
        <p className="mb-2">📍 PO Box 1084, Columbia, SC 29202</p>
        <p className="mb-2">📍 1225 Laurel St., Columbia, SC 29201</p>
        <p className="mb-2">
          📧 Email:{" "}
          <a
            href="mailto:info@hypervsolutions.net"
            className="text-blue-600 underline"
          >
            info@hypervsolutions.net
          </a>
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Why HyperV Solutions
        </h2>
        <ul className="list-disc list-inside ml-4">
          <li>Bold ideas. Built for scale.</li>
          <li>AI at the core of every solution.</li>
          <li>Human-focused digital transformation.</li>
          <li>Agile, ethical, and globally scalable mindset.</li>
        </ul>
      </section>

      <section className="text-center mt-16">
        <h3 className="text-xl font-semibold mb-4">Sounds interesting?</h3>
        <button
          onClick={() => setShowModal(true)}
          className="cursor-pointer inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-all duration-300 text-lg font-medium"
        >
          👉 Book a Free Consultation Now
        </button>
        <ConsultancyPopup isOpen={showModal} onClose={() => handleClose()} />
        <p className="mt-4 text-gray-700">
          Let’s explore how HyperV Solutions can partner with you in building
          the future.
        </p>
      </section>
    </div>
  );
}
