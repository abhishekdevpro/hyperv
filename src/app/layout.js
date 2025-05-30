// "use client";
// import { useState, useEffect } from "react";
// import { Geist, Geist_Mono } from "next/font/google";
// import Script from "next/script";
// import "./globals.css";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import SplashScreen from "./components/SplashScreen"; // Create a separate splash screen component

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         <SplashScreen>
//           <Script id="chatling-config">
//             {`window.chtlConfig = { chatbotId: "7533359378" }`}
//           </Script>
//           <Script
//             async
//             data-id="7533359378"
//             id="chtl-script"
//             src="https://chatling.ai/js/embed.js"
//           />
//           <Navbar />
//           {children}
//           <Footer />
//         </SplashScreen>
//       </body>
//     </html>
//   );
// }

// "use client";
// import { useState, useEffect } from "react";
// import { Geist, Geist_Mono } from "next/font/google";
// import Script from "next/script";
// import "./globals.css";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import SplashScreen from "./components/SplashScreen";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export default function RootLayout({ children }) {
//   const [showPopup, setShowPopup] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowPopup(true);
//     }, 3000); // Show popup after 3 seconds
//     return () => clearTimeout(timer);
//   }, []);

//   const closePopup = () => setShowPopup(false);

//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
//       >
//         {/* Render everything */}
//         <SplashScreen>
//           <Script id="chatling-config">
//             {`window.chtlConfig = { chatbotId: "7533359378" }`}
//           </Script>
//           <Script
//             async
//             data-id="7533359378"
//             id="chtl-script"
//             src="https://chatling.ai/js/embed.js"
//           />
//           <Navbar />
//           {children}
//           <Footer />
//         </SplashScreen>

//         {/* Popup positioned above everything else */}
//         {showPopup && (
//           <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-[9999] bg-black/40 backdrop-blur-sm">
//             <div className="bg-gradient-to-r from-blue-600 via-pink-500 to-fuchsia-500 text-white p-8 rounded-xl shadow-xl max-w-sm text-center">
//               <h2 className="text-lg font-semibold">
//                 HyperVSolutions now proudly serving
//                 <br />
//                 Pompano Beach & Hallandale Beach.
//               </h2>
//               <div className="mt-6 flex justify-center gap-4">
//                 <button
//                   onClick={closePopup}
//                   className="px-4 py-2 rounded bg-white text-[#0f4c81] font-bold hover:bg-gray-200"
//                 >
//                   OK
//                 </button>
//                 <button
//                   onClick={closePopup}
//                   className="px-4 py-2 rounded bg-white text-[#0f4c81] font-bold hover:bg-gray-200"
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </body>
//     </html>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => setShowPopup(false);

  return (
    <html lang="en">
      <head>
        {/* Google Translate Setup */}
        <Script id="google-translate-init" strategy="afterInteractive">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'en,fr,de,es,it,pt,hi,zh-CN,ar',
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE
              }, 'google_translate_element');
            }
          `}
        </Script>
        <Script
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        {/* Google Translate Globe Icon */}
        <div
          id="google_translate_element"
          className="fixed top-20 right-4 z-[9999]"
          title="Select Language"
        ></div>

        <SplashScreen>
          {/* Chatling AI Script */}
          <Script id="chatling-config">
            {`window.chtlConfig = { chatbotId: "7533359378" }`}
          </Script>
          <Script
            async
            data-id="7533359378"
            id="chtl-script"
            src="https://chatling.ai/js/embed.js"
          />
          <Navbar />
          {children}
          <Footer />
        </SplashScreen>

        {/* Info Popup */}
        {/* {showPopup && (
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-[9999] bg-black/40 backdrop-blur-sm">
            <div className="bg-gradient-to-r from-blue-600 via-pink-500 to-fuchsia-500 text-white p-8 rounded-xl shadow-xl max-w-sm text-center">
              <h2 className="text-lg font-semibold">
                🌍 Global Launch Now Live – Pompano Beach & Hallandale Beach
                Officially Onboard!
                <br />
                Hyper V Solutions is proud to introduce our AI-powered platforms
                – NovaJobs and UltraAura Education – across the globe.
                <br />
                We’re honored to be official partners with the cities of Pompano
                Beach and Hallandale Beach to bring local job seekers and
                students into the future of work and learning.
                <br />
                👉 Tap below to explore your local platform and start your
                journey today!
              </h2>
              <div className="mt-6 flex justify-center gap-4">
                <Link href="https://pompanobeach.novajobs.us/">
                  <button className="px-4 py-2 rounded bg-white text-[#0f4c81] font-bold hover:bg-gray-200">
                    Visit Pompano Portal
                  </button>
                </Link>
                <Link href=" https://hollandalebeach.novajobs.us/">
                  <button className="px-4 py-2 rounded bg-white text-[#0f4c81] font-bold hover:bg-gray-200">
                    Visit Hallandale Portal
                  </button>
                </Link>
                <button
                  onClick={closePopup}
                  className="px-4 py-2 rounded bg-white text-[#0f4c81] font-bold hover:bg-gray-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )} */}
        {showPopup && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-gradient-to-r from-blue-600 via-pink-500 to-fuchsia-500 text-white p-8 rounded-2xl shadow-2xl max-w-xl w-full">
              <h2 className="text-xl font-bold mb-4 leading-relaxed">
                🌍 Global Launch Now Live – Pompano Beach & Hallandale Beach
                Officially Onboard!
              </h2>
              <p className="text-sm leading-relaxed mb-6">
                Hyper V Solutions is proud to introduce our AI-powered platforms
                – <strong>NovaJobs</strong> and{" "}
                <strong>UltraAura Education</strong> – across the globe.
                <br />
                <br />
                We’re honored to be official partners with the cities of Pompano
                Beach and Hallandale Beach to bring local job seekers and
                students into the future of work and learning.
                <br />
                <br />
                👉 Tap below to explore your local platform and start your
                journey today!
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href="https://pompanobeach.novajobs.us/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-700 font-semibold px-5 py-2 rounded-lg shadow hover:bg-gray-100 transition"
                >
                  Visit Pompano Portal
                </a>
                <a
                  href="https://hollandalebeach.novajobs.us/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-700 font-semibold px-5 py-2 rounded-lg shadow hover:bg-gray-100 transition"
                >
                  Visit Hallandale Portal
                </a>
                <button
                  onClick={closePopup}
                  className="bg-white text-red-600 font-semibold px-5 py-2 rounded-lg shadow hover:bg-red-100 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </body>
    </html>
  );
}
