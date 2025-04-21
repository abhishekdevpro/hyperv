// // import { TypewriterEffect, TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
// // import { WavyBackground } from "@/components/ui/wavy-background";
// // // import { Meteors } from "@/components/ui/meteors"; // Optional decorative effect
// // import { Button } from "@/ui/Button"; // If you're using a custom shadcn Button

// // export default function HeroSection() {
// //     const words = ["Empower", "Innovate", "Transform"];

// //   return (
// //     <section className="relative w-full py-20 px-6 md:px-12 lg:px-24 bg-gray-950 text-white overflow-hidden">
// //       {/* Optional decorative animation */}
// //       {/* <Meteors number={20} /> */}

// //       <WavyBackground className="max-w-4xl mx-auto pb-40">
// //         <div className="text-center space-y-6">
// //         <h1 className="text-4xl md:text-5xl font-bold leading-tight">
// //         Crafting Impactful Digital Solutions to{" "}
// //         <TypewriterEffect
// //           words={words}
// //           className="inline text-blue-500"
// //         />
// //         </h1>
// //           <p className="text-md md:text-lg text-gray-300 max-w-3xl mx-auto">
// //             Our suite of solutions is designed to streamline operations and enhance productivity for startups,
// //             developers, and businesses. Our mission is to simplify the complexities of modern business and tech
// //             startups, enabling our customers to focus on what truly matters – their growth and success.
// //           </p>

// //           {/* If you're using shadcn Button */}
// //           {/* <Button className="rounded-full px-6 py-3 text-md font-medium">
// //             Explore All Products
// //           </Button> */}

// //           {/* Or native button */}
// //           <button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-6 py-3 rounded-full text-md font-medium transition-colors duration-300">
// //             Explore All Products
// //           </button>
// //         </div>
// //       </WavyBackground>
// //     </section>
// //   );
// // }

// import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
// import { WavyBackground } from "@/components/ui/wavy-background";
// // import { Meteors } from "@/components/ui/meteors"; // Optional decorative effect
// // import { Button } from "@/ui/Button"; // If you're using a custom shadcn Button

// export default function HeroSection() {
//   const words = [
//     {
//       text: "Empower",
//       className: "text-blue-500",
//     },
//     {
//       text: "Innovate",
//       className: "text-blue-500",
//     },
//     {
//       text: "Transform",
//       className: "text-blue-500",
//     }
//   ];

//   return (
//     <section className="relative w-full py-20 px-6 md:px-12 lg:px-24 bg-gray-950 text-white overflow-hidden">
//       {/* Optional decorative animation */}
//       {/* <Meteors number={20} /> */}

//       <WavyBackground className="max-w-4xl mx-auto pb-40">
//         <div className="text-center space-y-6">
//           <div className="space-y-2">
//             <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//               Crafting Impactful Digital Solutions to
//             </h1>

//             <div className="h-20 flex items-center justify-center"> {/* Container for typewriter with fixed height */}
//               <TypewriterEffectSmooth
//                 words={words}
//                 loop={true}
//                 deleteSpeed={75}
//                 typeSpeed={150}
//                 className="text-4xl md:text-5xl font-bold justify-center"
//                 cursorClassName="text-blue-500"
//               />
//             </div>
//           </div>

//           <p className="text-md md:text-lg text-gray-300 max-w-3xl mx-auto">
//             Our suite of solutions is designed to streamline operations and enhance productivity for startups,
//             developers, and businesses. Our mission is to simplify the complexities of modern business and tech
//             startups, enabling our customers to focus on what truly matters – their growth and success.
//           </p>

//           {/* Native button */}
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
      className: "text-blue-500",
    },
    {
      text: "SaaS",
      className: "text-blue-500",
    },
    {
      text: "Devops",
      className: "text-blue-500",
    },
  ];

  return (
    <section className="relative w-full px-6 md:px-12 lg:px-24 bg-gray-950 text-white overflow-hidden my-auto">
      {/* Optional decorative animation */}
      {/* <Meteors number={20} /> */}

      <WavyBackground className="max-w-4xl mx-auto">
        <div className="text-center space-y-6">
          {/* <div className="flex justify-center items-center flex-col gap-2">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Crafting Impactful Digital
            </h1>

            <div className="flex items-center text-center space-x-2">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Solutions to Empower
              </h1>
              <TypewriterEffectSmooth
                words={words}
                loop={true}
                typeSpeed={150}
                deleteSpeed={100}
                delayBetweenWords={1000}
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-700 via-pink-500 to-pink-500 text-transparent bg-clip-text"
                cursorClassName="text-pink-500"
              />
            </div>
          </div> */}

          <div className="flex flex-col items-center text-center px-4 py-10 gap-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Crafting Impactful Digital
            </h1>

            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 space-y-2 sm:space-y-0">
              <h1 className="text-md sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center">
                Solutions to Empower
              </h1>
              <TypewriterEffectSmooth
                words={words}
                loop={true}
                typeSpeed={150}
                deleteSpeed={100}
                delayBetweenWords={1000}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-700 via-pink-500 to-pink-500 text-transparent bg-clip-text"
                cursorClassName="text-pink-500"
              />
            </div>
          </div>

          <p className="text-md md:text-lg text-gray-300 max-w-3xl mx-auto">
            Our suite of solutions is designed to streamline operations and
            enhance productivity for startups, developers, and businesses. Our
            mission is to simplify the complexities of modern business and tech
            startups, enabling our customers to focus on what truly matters –
            their growth and success.
          </p>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-md font-medium transition-colors duration-300">
            Explore All Products
          </button>
        </div>
      </WavyBackground>
    </section>
  );
}
