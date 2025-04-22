
// "use client";

// import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
// import { WavyBackground } from "@/components/ui/wavy-background";
// // import { Meteors } from "@/components/ui/meteors"; // Optional decorative effect

// export default function HeroSection() {
//   const words = [
//     {
//       text: "Dev",
//       // className: "text-pink-500",
//     },
//     {
//       text: "SaaS",
//       // className: "text-pink-500",
//     },
//     {
//       text: "Devops",
//       // className: "text-pink-500",
//     },
//   ];

//   return (
//     <section className="relative w-full px-6 md:px-12 lg:px-24 bg-gray-950 text-white overflow-hidden my-auto">
//       {/* Optional decorative animation */}
//       {/* <Meteors number={20} /> */}

//       <WavyBackground className="max-w-4xl mx-auto">
//         <div className="text-center space-y-6">
//           {/* <div className="flex justify-center items-center flex-col gap-2">
//             <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//               Crafting Impactful Digital
//             </h1>

//             <div className="flex items-center text-center space-x-2">
//               <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//                 Solutions to Empower
//               </h1>
//               <TypewriterEffectSmooth
//                 words={words}
//                 loop={true}
//                 typeSpeed={150}
//                 deleteSpeed={100}
//                 delayBetweenWords={1000}
//                 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-700 via-pink-500 to-pink-500 text-transparent bg-clip-text"
//                 cursorClassName="text-pink-500"
//               />
//             </div>
//           </div> */}

//           <div className="flex flex-col items-center text-center px-4 py-10 gap-4">
//             <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
//               Crafting Impactful Digital
//             </h1>

//             <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 space-y-2 sm:space-y-0">
//               <h1 className="text-md sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center">
//                 Solutions to Empower
//               </h1>
//               <TypewriterEffectSmooth
//                 words={words}
//                 loop={true}
//                 typeSpeed={150}
//                 deleteSpeed={100}
//                 delayBetweenWords={1000}
//                 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-rose-500 text-transparent bg-clip-text "

//                 cursorClassName="text-pink-500"
//               />
//             </div>
//           </div>

//           <p className="text-md md:text-lg text-gray-300 max-w-3xl mx-auto">
//             Our suite of solutions is designed to streamline operations and
//             enhance productivity for startups, developers, and businesses. Our
//             mission is to simplify the complexities of modern business and tech
//             startups, enabling our customers to focus on what truly matters –
//             their growth and success.
//           </p>

//           <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-md font-medium transition-colors duration-300">
//             Explore All Products
//           </button>
//         </div>
//       </WavyBackground>
//     </section>
//   );
// }

"use client";

import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { WavyBackground } from "@/components/ui/wavy-background";
// import { Meteors } from "@/components/ui/meteors"; // Optional decorative effect

export default function HeroSection() {
  const words = [
    {
      text: "Dev",
    },
    {
      text: "SaaS",
    },
    {
      text: "Devops",
    },
  ];

  return (
    <section className="relative w-full px-4 sm:px-6 md:px-12 lg:px-24 bg-gray-950 text-white overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24">
      {/* Optional decorative animation */}
      {/* <Meteors number={20} /> */}

      <WavyBackground className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 sm:space-y-5 md:space-y-6">
          <div className="flex flex-col items-center text-center px-2 sm:px-4 py-6 sm:py-8 md:py-10 gap-2 sm:gap-3 md:gap-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Crafting Impactful Digital
            </h1>

            <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-2 space-y-2 sm:space-y-0">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Solutions to Empower
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
            Our suite of solutions is designed to streamline operations and
            enhance productivity for startups, developers, and businesses. Our
            mission is to simplify the complexities of modern business and tech
            startups, enabling our customers to focus on what truly matters –
            their growth and success.
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
