// import Image from "next/image";
// import logo1 from "../assets/logo1.png";
// import newlogo from "../assets/new (1).jpg";
// import newlogo2 from "../assets/new (2).jpg";
// import logo2 from "../assets/logo2.png";
// import logo3 from "../assets/logo3.png";
// import logo4 from "../assets/logo4.png";
// import logo5 from "../assets/logo5.png";
// import logo6 from "../assets/logo6.png";
// import logo7 from "../assets/logo7.png";
// import logo8 from "../assets/logo8.png";
// import logo11 from "../assets/image.png";
// import logo9 from "../assets/logo9.png";
// import logo10 from "../assets/logo10.png";
// const companies = [
//   { name: "Sony", logo: logo1 },
//   // { name: "Sony", logo: newlogo },
//   { name: "Sony", logo: newlogo2 },
//   { name: "Sony", logo: logo2 },
//   { name: "Sony", logo: logo3 },
//   { name: "Sony", logo: logo4 },
//   { name: "Sony", logo: logo5 },
//   { name: "Sony", logo: logo6 },
//   { name: "Sony", logo: logo7 },
//   { name: "Sony", logo: logo8 },
//   { name: "Sony", logo: logo9 },

//   { name: "Sony", logo: logo10 },

//   { name: "Sony", logo: logo11 },
// ];

// export default function NotableUsers() {
//   return (
//     <section className="py-16 px-4 text-white   bg-gradient-to-r from-blue-600 via-pink-300 to-fuchsia-500">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl md:text-5xl font-bold text-white  mb-4">
//             Trusted by Industry Leaders
//           </h2>
//           <p className="text-lg text-white max-w-3xl mx-auto">
//             Trusted by industry leaders to streamline operations, drive
//             innovation, and scale impact through AI.
//           </p>
//         </div>

//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
//           {companies.map((company, index) => (
//             <div
//               key={`${company.name}-${index}`} // Combine name and index to ensure uniqueness
//               className="flex items-center justify-center h-24 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition duration-300"
//             >
//               <div className="relative w-32 h-full">
//                 <Image
//                   src={company.logo}
//                   alt={`${company.name} logo`}
//                   layout="fill"
//                   objectFit="contain"
//                   className="p-2 w-full h-full"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";
import Image from "next/image";
import logo1 from "../assets/logo1.png";
import newlogo2 from "../assets/new (2).jpg";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";
import logo7 from "../assets/logo7.png";
import logo8 from "../assets/logo8.png";
import logo9 from "../assets/logo9.png";
import logo10 from "../assets/logo10.png";
import logo11 from "../assets/image.png";

const companies = [
  { name: "Sony", logo: logo1 },
  { name: "Sony", logo: newlogo2 },
  { name: "Sony", logo: logo2 },
  { name: "Sony", logo: logo3 },
  { name: "Sony", logo: logo4 },
  { name: "Sony", logo: logo5 },
  { name: "Sony", logo: logo6 },
  { name: "Sony", logo: logo7 },
  { name: "Sony", logo: logo8 },
  { name: "Sony", logo: logo9 },
  { name: "Sony", logo: logo10 },
  { name: "Sony", logo: logo11 },
];

export default function NotableUsers() {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-blue-600 via-pink-300 to-fuchsia-500 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            Trusted by industry leaders to streamline operations, drive
            innovation, and scale impact through AI.
          </p>
        </div>

        <div className="overflow-hidden">
          <div className="scroll-track">
            <div className="scroll-content">
              {[...companies, ...companies].map((company, index) => (
                <div
                  key={`${company.name}-${index}`}
                  className="flex items-center justify-center h-24 w-40 bg-white border border-gray-200 rounded-xl mx-2 flex-shrink-0"
                >
                  <div className="relative w-32 h-full">
                    <Image
                      src={company.logo}
                      alt={`${company.name} logo`}
                      layout="fill"
                      objectFit="contain"
                      className="p-2"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
