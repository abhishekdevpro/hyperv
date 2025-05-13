"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaTwitter, FaDiscord, FaFacebook, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import logo from "@/assets/logo.jpg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Update active page based on current pathname
    if (typeof window !== "undefined") {
      const pathname = window.location.pathname;
      setActivePage(pathname === "/" ? "home" : pathname.replace("/", ""));
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Navigation item component with active state
  const NavItem = ({ href, label, isActive }) => (
    <Link
      href={href}
      className={`nav-link transition-all duration-300 px-4 py-2 rounded-md ${
        isActive
          ? `font-bold ${
              !scrolled
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "bg-black/10 text-black"
            }`
          : `${
              !scrolled
                ? "text-white hover:bg-white/10"
                : "text-black hover:bg-black/5"
            }`
      }`}
    >
      {label}
    </Link>
  );

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-md py-3 text-black border-b-4 border-transparent"
            : "bg-transparent py-5 border-b-4 border-transparent"
        }`}
        style={{
          borderImage: scrolled
            ? "linear-gradient(to right, #4facfe, #00f2fe) 1"
            : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between w-full">
            {/* Mobile Logo */}
            <div className="md:hidden flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src={logo}
                  alt="Logo"
                  width={100}
                  height={60}
                  className="rounded"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-between w-full">
              {/* Left Navigation Tabs */}
              <div className="flex items-center space-x-4">
                <NavItem href="/" label="Home" isActive={activePage === "home"} />
                <NavItem
                  href="/products"
                  label="Products"
                  isActive={activePage === "products"}
                />
                <NavItem
                  href=""
                  label="About Us"
                  isActive={activePage === "about"}
                />
              </div>

              {/* Center Logo */}
              <div className="flex-shrink-0 flex-grow flex justify-center">
                <Link href="/" className="flex items-center">
                  <Image
                    src={logo}
                    alt="Logo"
                    width={120}
                    height={80}
                    className="rounded"
                  />
                </Link>
              </div>

              {/* Right Navigation Tabs */}
              <div className="flex items-center space-x-4">
                <NavItem
                  href="/clients-partners"
                  label="Client & Partners"
                  isActive={activePage === "clients-partners"}
                />
                <NavItem
                  href="/blog"
                  label="Blog"
                  isActive={activePage === "blog"}
                />
                <NavItem
                  href="#footer"
                  label="Contact"
                  isActive={activePage === "contact"}
                />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className={`p-2 rounded-md ${
                  !scrolled ? "text-white" : "text-black"
                }`}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg">
              <div className="px-4 py-3 space-y-1">
                <Link
                  href="/"
                  className={`block py-2 px-3 rounded-md ${
                    activePage === "home" ? "bg-black/5 font-bold" : ""
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="#products"
                  className={`block py-2 px-3 rounded-md ${
                    activePage === "products" ? "bg-black/5 font-bold" : ""
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Products
                </Link>
                <Link
                  href="#about"
                  className={`block py-2 px-3 rounded-md ${
                    activePage === "about" ? "bg-black/5 font-bold" : ""
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About us
                </Link>
                <Link
                  href="/clients-partners"
                  className={`block py-2 px-3 rounded-md ${
                    activePage === "clients-partners" ? "bg-black/5 font-bold" : ""
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Client & Partners
                </Link>
                <Link
                  href="/blog"
                  className={`block py-2 px-3 rounded-md ${
                    activePage === "blog" ? "bg-black/5 font-bold" : ""
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="#footer"
                  className={`block py-2 px-3 rounded-md ${
                    activePage === "contact" ? "bg-black/5 font-bold" : ""
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>

                {/* Mobile Social Icons */}
                <div className="flex items-center space-x-6 py-4 border-t mt-2">
                  <Link
                    href="#"
                    className="text-black hover:opacity-75 transition-opacity text-xl"
                  >
                    <FaTwitter />
                  </Link>
                  <Link
                    href="#"
                    className="text-black hover:opacity-75 transition-opacity text-xl"
                  >
                    <FaFacebook />
                  </Link>
                  <Link
                    href="#"
                    className="text-black hover:opacity-75 transition-opacity text-xl"
                  >
                    <FaLinkedin />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
