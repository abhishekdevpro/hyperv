"use client";

import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
// import { WavyBackground } from "@/components/ui/wavy-background";
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
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-[-20%] w-full h-[140%] object-fit"
          style={{ filter: 'brightness(0.4)' }}
        >
          <source
            src="/hero.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Optional decorative animation */}
      {/* <Meteors number={20} /> */}

      <div className="w-full max-w-7xl mx-auto py-4 sm:py-8 md:py-12 lg:py-20 relative z-10">
        <div className="text-center space-y-4 sm:space-y-6 md:space-y-8">
          <div className="flex flex-col items-center text-center px-2 sm:px-4 py-2 sm:py-4 md:py-6 gap-2 sm:gap-4 md:gap-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold leading-tight px-2 sm:px-4 mt-10">
              Your AI-Powered Partner in HR, EdTech & AI driven Incubator
            </h1>
<br/><br/><br/>
            {/* <div className="h-auto px-2">
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

            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto px-4">
              Transforming hiring, learning & employee development under one smart ecosystem.
            </p> */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12 md:mt-16 lg:mt-20 max-w-5xl w-full">
              <div className="flex flex-col items-center text-center p-4 sm:p-5 md:p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/15 transition-all duration-300">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">💼 Smart Hiring</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-300">AI Resume Builder, Automated Matching, English & Arabic CV support.</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 sm:p-5 md:p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/15 transition-all duration-300">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">🎓 Scalable Learning</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-300">Skill Assessments, Auto Cover Letters & EdTech tools that grow with you.</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 sm:p-5 md:p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/15 transition-all duration-300">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">🔗 Seamless Integration</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-300">3rd-party job APIs, community, notifications, email & admin dashboards.</p>
              </div>
            </div>
          </div>

          <div className="pt-4 sm:pt-6 md:pt-8">
            <a href="#products" className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 rounded-full text-base sm:text-lg md:text-xl font-medium transition-all duration-300 inline-block shadow-lg hover:shadow-xl hover:scale-105">
              Explore All Products →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
