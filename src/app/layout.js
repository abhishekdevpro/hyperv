import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "Hyper V Solutions | Launch Secure Digital Products with Our In-House Dev Team",
  description:
    "Hyper V Solutions | Launch Secure Digital Products with Our In-House Dev Team",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
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
      </body>
    </html>
  );
}
