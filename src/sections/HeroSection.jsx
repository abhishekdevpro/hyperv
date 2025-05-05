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
      text: "AIenabled applications",
    },
  ];

  return (
    <section className="relative w-full min-h-screen px-4 sm:px-6 md:px-12 lg:px-24 bg-gray-950 text-white overflow-hidden flex items-center justify-center">
      {/* Optional decorative animation */}
      {/* <Meteors number={20} /> */}

      <WavyBackground className="w-full max-w-4xl mx-auto py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="text-center space-y-4 sm:space-y-5 md:space-y-6">
          <div className="flex flex-col items-center text-center px-2 sm:px-4 py-6 sm:py-8 md:py-10 gap-2 sm:gap-3 md:gap-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Empowering Businesses with Smart Digital Solutions,
            </h1>

            <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-2 space-y-2 sm:space-y-0">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              We Streamline
              </h1>
              <div className="h-auto">
                <TypewriterEffectSmooth
                  words={words}
                  loop={true}
                  typeSpeed={150}
                  deleteSpeed={100}
                  delayBetweenWords={1000}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-rose-500 text-transparent bg-clip-text"
                  cursorClassName="text-pink-500"
                />
              </div>
            </div>
          </div>

          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto px-4">
          At HyperVSolutions, we specialize in building AI-powered platforms tailored to modern business needs.
From customizable job portals and white-label HR tools to scalable EdTech systems, we help you automate and grow.
Our smart digital solutions simplify hiring, training, and workforce management — all under one roof.
          </p>

          <div className="pt-2 sm:pt-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full text-sm sm:text-base md:text-md font-medium transition-colors duration-300">
              Explore All Products
            </button>
          </div>
        </div>
      </WavyBackground>
    </section>
  );
}
