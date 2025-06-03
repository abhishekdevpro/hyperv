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
        {showPopup && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-gradient-to-r from-blue-600 via-pink-500 to-fuchsia-500 text-white p-8 rounded-2xl shadow-2xl max-w-xl w-full">
              <h2 className="text-xl font-bold mb-4 leading-relaxed">
                🌍 Global Launch Now Live Pompano Beach & Hallandale Beach
                Officially Onboard!
              </h2>
              <p className="text-sm leading-relaxed mb-6">
                Hyper V Solutions is proud to introduce our AI-powered platforms
                – <strong>NovaJobs</strong> and{" "}
                <strong>UltraAura Education</strong> across the globe.
                <br />
                <br />
                We are honored to be official partners with the cities of
                Pompano Beach and Hallandale Beach to bring local job seekers
                and students into the future of work and learning.
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
                  Visit Pompano, FL Portal
                </a>
                <a
                  href="https://hallandalebeach.novajobs.us"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-700 font-semibold px-5 py-2 rounded-lg shadow hover:bg-gray-100 transition"
                >
                  Visit Hallandale, FL Portal
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
