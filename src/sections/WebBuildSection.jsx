// // components/WebBuildSection.jsx
// import React from 'react';

// const stats = [
//   { number: '15+', description: 'Products and Platforms' },
//   { number: '10+', description: 'Team Members' },
//   { number: '1M+', description: 'Users Worldwide' },
//   { number: '8+', description: 'Years of Experience' }
// ];

// export default function WebBuildSection() {
//   return (
//     <section className="py-16 px-4 bg-gray-50">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col lg:flex-row lg:items-center">
//           {/* Left Column - Text Content */}
//           <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-8">
//             <h2 className="text-4xl font-bold text-gray-900 mb-6">
//               We Build Powerful Tools for the Modern Web
//             </h2>
//             <div className="space-y-4">
//               <p className="text-lg text-gray-700">
//                 Build better, faster, and more user-friendly digital solutions with our tools and products.
//               </p>
//               <p className="text-lg text-gray-700">
//                 We help web developers, startups, creators, and entrepreneurs by providing a reliable starting point that cuts their initial design and coding budget in half, bringing their projects closer to launch.
//               </p>
//             </div>
//           </div>

//           {/* Right Column - Stats Grid */}
//           <div className="lg:w-1/2">
//             <div className="grid grid-cols-2 gap-4">
//               {stats.map((stat, index) => (
//                 <div key={index} className="border border-gray-200 bg-white p-6 flex flex-col items-center justify-center text-center">
//                   <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{stat.number}</h3>
//                   <p className="text-gray-600">{stat.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";

const stats = [
  { number: "15+", description: "Products and Platforms" },
  { number: "20+", description: "Team Members" },
  { number: "1k+", description: "Users Worldwide" },
  { number: "8+", description: "Years of Experience" },
];

export default function WebBuildSection() {
  return (
    <>
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:gap-12">
            {/* Left Column - Text Content */}
            <div className="lg:w-1/2 mt-8 sm:mt-10 lg:mt-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                We Build Powerful Tools for the Modern Web
              </h2>
              <div className="space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base md:text-lg">
                <p>
                  Accelerate your digital journey with secure, scalable, and
                  user-friendly solutions.
                </p>
                <p>
                  We empower startups, developers, and creators with high-tech,
                  white-label solutions—designed to save time, reduce
                  development costs, and speed up your product launch.
                </p>
              </div>
            </div>

            {/* Right Column - Stats Grid */}
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center text-center hover:shadow-md transition duration-300 group"
                  >
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-1 sm:mb-2 transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:via-fuchsia-500 group-hover:to-rose-500">
                      {stat.number}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">
                      {stat.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mx-auto w-11/12 sm:w-4/5 md:w-3/4 h-0.5 sm:h-1 bg-gradient-to-r from-blue-600 via-pink-500 to-fuchsia-500 mt-2"></div>
    </>
  );
}
