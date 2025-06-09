"use client";

import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Modal from "./Modal";
import { useState } from "react";
export default function HeroSection() {
  const [modalData, setModalData] = useState(null);

  const handleOpenModal = (type) => {
    const dataMap = {
      individual: {
        heading: "Individual",
        items: [
          {
            text: "Search & Apply for jobs",
            link: "https://novajobs.us/user/jobs",
          },
          {
            text: "Create AI Resume",
            link: "https://novajobs.us/novajobs#tab2",
          },
          { text: "Give Skills Test", link: "https://novajobs.us/user/login" },
          { text: "Enhance skills", link: "https://ultraaura.education/home" },
          {
            text: "Career Coaching",
            link: "https://ultraaura.education/course-info/8590",
          },
          {
            text: "Join Free Career Community",
            link: "https://novajobs.us/community",
          },
        ],
      },
      business: {
        heading: "Business",
        items: [
          {
            text: "Make your AI Job Portal",
            link: "https://novajobs.us/white-label",
          },
          {
            text: "Grow your business with us",
            link: "https://calendly.com/hypervsolutions/30min?month=2025-06",
          },
        ],
      },
      partner: {
        heading: "Partner",
        items: [
          {
            text: "Join as a partner & Grow with us",
            link: "https://calendly.com/hypervsolutions/30min?month=2025-06",
          },
        ],
      },
    };
    setModalData(dataMap[type]);
  };
  const words = [
    {
      text: "Job Portal",
    },
    {
      text: "WhiteLabel Solutions",
    },
    {
      text: "Edtech platform",
    },
    {
      text: "AI Enabled applications",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-600 via-pink-500 to-fuchsia-500 p-3 pb-8 pl-8 pr-8  ">
      <section className="relative w-full min-h-screen px-4 sm:px-6 md:px-12 lg:px-24 bg-gray-950 text-white overflow-hidden flex items-center justify-center rounded-xl">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-[-20%] w-full h-[140%] object-fit"
            style={{ filter: "brightness(0.4)" }}
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="w-full max-w-7xl mx-auto py-4 sm:py-8 md:py-12 lg:py-20 relative z-10">
          <div className="text-center space-y-4 sm:space-y-6 md:space-y-8">
            <div className="flex flex-col items-center text-center px-2 sm:px-4 py-2 sm:py-4 md:py-6 gap-2 sm:gap-4 md:gap-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold leading-tight px-2 sm:px-4 mt-10">
                Your AI-Powered Partner in HR, EdTech & AI driven Incubator
              </h1>
              <div className="p-4 sm:p-5 md:p-6 bg-white/10 backdrop-blur-sm rounded-xl  transition-all duration-300 hover:-translate-y-1">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold leading-tight px-2 sm:px-4 mt-10">
                  {" "}
                  Hello, I'm Aria,{" "}
                </h1>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold leading-tight px-2 sm:px-4 mt-3 bg-gradient-to-r from-blue-600 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent">
                  Your AI Assistant at HyperVSolutions
                </h2>

                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold leading-tight px-2 sm:px-4 mt-3 text-white">
                  Are You?
                </h2>
                <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 mt-8 w-full">
                  <button
                    onClick={() => handleOpenModal("individual")}
                    className="w-full sm:w-auto text-white font-semibold text-lg text-center py-4 px-6 bg-white/10 backdrop-blur-md rounded-2xl hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 shadow-md cursor-pointer"
                  >
                    Individuals
                  </button>
                  <button
                    onClick={() => handleOpenModal("business")}
                    className="w-full sm:w-auto text-white font-semibold text-lg text-center py-4 px-6 bg-white/10 backdrop-blur-md rounded-2xl hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 shadow-md cursor-pointer"
                  >
                    Business
                  </button>
                  <button
                    onClick={() => handleOpenModal("partner")}
                    className="w-full sm:w-auto text-white font-semibold text-lg text-center py-4 px-6 bg-white/10 backdrop-blur-md rounded-2xl hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 shadow-md cursor-pointer"
                  >
                    Want to Partner
                  </button>
                </div>
              </div>

              {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12 md:mt-16 lg:mt-20 max-w-5xl w-full">
                <div className="flex flex-col items-center text-center p-4 sm:p-5 md:p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/50 transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">
                    💼 Smart Hiring
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-300">
                    AI Resume Builder, Automated Matching, English & Arabic CV
                    support.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center p-4 sm:p-5 md:p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/50 transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">
                    🎓 Scalable Learning
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-300">
                    Skill Assessments, Auto Cover Letters & EdTech tools that
                    grow with you.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center p-4 sm:p-5 md:p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/50 transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">
                    🔗 Seamless Integration
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-300">
                    3rd-party job APIs, community, notifications, email & admin
                    dashboards.
                  </p>
                </div>
              </div> */}
            </div>

            <div className="pt-4 sm:pt-6 md:pt-8">
              <a
                href="/products"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 rounded-full text-base sm:text-lg md:text-xl font-medium transition-all duration-300 inline-block shadow-lg hover:shadow-xl hover:scale-105"
              >
                Explore All Products →
              </a>
            </div>
            {modalData && (
              <Modal data={modalData} onClose={() => setModalData(null)} />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
