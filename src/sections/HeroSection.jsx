"use client";

import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { WavyBackground } from "@/components/ui/wavy-background";
// import { Meteors } from "@/components/ui/meteors"; // Optional decorative effect

export default function HeroSection() {
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
    <section className="relative w-full min-h-screen px-4 sm:px-6 md:px-12 lg:px-24 bg-gray-950 text-white overflow-hidden flex items-center justify-center">
      {/* Optional decorative animation */}
      {/* <Meteors number={20} /> */}

      <WavyBackground className="w-full max-w-4xl mx-auto py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="text-center space-y-4 sm:space-y-5 md:space-y-6">
          <div className="flex flex-col items-center text-center px-2 sm:px-4 py-4 sm:py-6 md:py-8 gap-2 sm:gap-3 md:gap-4">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight px-2">
              Your AI-Powered Partner in HR, EdTech & Workforce Innovation
            </h1>

            <div className="h-auto px-2">
              <TypewriterEffectSmooth
                words={words}
                loop={true}
                typeSpeed={150}
                deleteSpeed={100}
                delayBetweenWords={1000}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold bg-gradient-to-r from-red-400 via-fuchsia-800 to-blue-900 text-transparent bg-clip-text"
                cursorClassName="text-pink-500"
              />
            </div>

            <p className="text-sm sm:text-base md:text-lg text-gray-900 max-w-3xl mx-auto px-4">
              Transforming hiring, learning & employee development under one smart ecosystem.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-4 sm:mt-6 md:mt-8 max-w-5xl">
              <div className="flex flex-col items-center text-center p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-xl">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">💼 Smart Hiring</h3>
                <p className="text-sm sm:text-base text-gray-900">AI Resume Builder, Automated Matching, English & Arabic CV support.</p>
              </div>
              <div className="flex flex-col items-center text-center p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-xl">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">🎓 Scalable Learning</h3>
                <p className="text-sm sm:text-base text-gray-900">Skill Assessments, Auto Cover Letters & EdTech tools that grow with you.</p>
              </div>
              <div className="flex flex-col items-center text-center p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-xl">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">🔗 Seamless Integration</h3>
                <p className="text-sm sm:text-base text-gray-900">3rd-party job APIs, community, notifications, email & admin dashboards.</p>
              </div>
            </div>
          </div>

          <div className="pt-2 sm:pt-4">
            <a href="#products" className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full text-sm sm:text-base md:text-md font-medium transition-colors duration-300 inline-block shadow-lg hover:shadow-xl">
              Explore All Products →
            </a>
          </div>
        </div>
      </WavyBackground>
    </section>
  );
}
