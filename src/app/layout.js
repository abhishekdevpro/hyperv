'use client';
import { useState, useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen"; // Create a separate splash screen component

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SplashScreen>
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
      </body>
    </html>
  );
}
