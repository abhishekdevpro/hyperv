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
          className="fixed top-4 right-4 z-[9999]"
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
        {showPopup && (
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-[9999] bg-black/40 backdrop-blur-sm">
            <div className="bg-gradient-to-r from-blue-600 via-pink-500 to-fuchsia-500 text-white p-8 rounded-xl shadow-xl max-w-sm text-center">
              <h2 className="text-lg font-semibold">
                HyperVSolutions now proudly serving
                <br />
                Pompano Beach & Hallandale Beach.
              </h2>
              <div className="mt-6 flex justify-center gap-4">
                <button
                  onClick={closePopup}
                  className="px-4 py-2 rounded bg-white text-[#0f4c81] font-bold hover:bg-gray-200"
                >
                  OK
                </button>
                <button
                  onClick={closePopup}
                  className="px-4 py-2 rounded bg-white text-[#0f4c81] font-bold hover:bg-gray-200"
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
