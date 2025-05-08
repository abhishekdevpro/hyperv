// "use client"

// import { useState, useEffect } from "react"
// import Link from "next/link"
// import { FaTwitter, FaDiscord, FaFacebook, FaLinkedin } from "react-icons/fa"
// import Image from "next/image"
// import logo from "@/assets/logo.jpg"

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false)
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setScrolled(true)
//       } else {
//         setScrolled(false)
//       }
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!mobileMenuOpen)
//   }

//   return (
//     <nav
//       className={` fixed w-full z-50 transition-all duration-300 ${
//         scrolled ? "bg-white shadow-md py-3 text-black" : "bg-transparent py-5"
//       }`}
//     >
//       <div className=" max-w-7xl mx-auto py-2 flex justify-between items-center">
//         <Link href="/" className="flex items-center">
//           <div className="text-3xl font-bold flex items-center">
//             <Image
//               src={logo}
//               alt="Logo"
//               width={150}
//               height={100}
//               className="rounded"
//             />
//           </div>
//         </Link>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center space-x-8">
//           <Link href="/" className={`nav-link ${!scrolled ? "text-white" : ""}`}>
//             Home
//           </Link>
//           <Link href="/products" className={`nav-link ${!scrolled ? "text-white" : ""}`}>
//             Products
//           </Link>
//           <Link href="/about" className={`nav-link ${!scrolled ? "text-white" : ""}`}>
//             About
//           </Link>
//           <Link href="/blog" className={`nav-link ${!scrolled ? "text-white" : ""}`}>
//             Blog
//           </Link>
//           <Link href="/contact" className={`nav-link ${!scrolled ? "text-white" : ""}`}>
//             Contact
//           </Link>
//         </div>

//         {/* Desktop Social Icons */}
//         <div className="hidden md:flex items-center space-x-4 text-2xl">
//           <Link href="#" className={`social-icon ${!scrolled ? "text-white" : ""}`}>
//             <FaTwitter />
//           </Link>
//           <Link href="#" className={`social-icon ${!scrolled ? "text-white" : ""}`}>
//             <FaDiscord />
//           </Link>
//           <Link href="#" className={`social-icon ${!scrolled ? "text-white" : ""}`}>
//             <FaFacebook />
//           </Link>
//           <Link href="#" className={`social-icon ${!scrolled ? "text-white" : ""}`}>
//             <FaLinkedin />
//           </Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className={`md:hidden ${!scrolled ? "text-white" : "text-black"}`}
//           onClick={toggleMobileMenu}
//           aria-label="Toggle menu"
//         >
//           {mobileMenuOpen ? (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               className="w-6 h-6"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           ) : (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               className="w-6 h-6"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           )}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-4 flex flex-col space-y-4">
//           <Link
//             href="/"
//             className="nav-link py-2 text-black"
//             onClick={() => setMobileMenuOpen(false)}
//           >
//             Home
//           </Link>
//           <Link
//             href="/products"
//             className="nav-link py-2 text-black"
//             onClick={() => setMobileMenuOpen(false)}
//           >
//             Products
//           </Link>
//           <Link
//             href="/about"
//             className="nav-link py-2 text-black"
//             onClick={() => setMobileMenuOpen(false)}
//           >
//             About
//           </Link>
//           <Link
//             href="/blog"
//             className="nav-link py-2 text-black"
//             onClick={() => setMobileMenuOpen(false)}
//           >
//             Blog
//           </Link>
//           <Link
//             href="/contact"
//             className="nav-link py-2 text-black"
//             onClick={() => setMobileMenuOpen(false)}
//           >
//             Contact
//           </Link>

//           {/* Mobile Social Icons */}
//           <div className="flex items-center space-x-4 py-2">
//             <Link href="#" className="social-icon text-black">
//               <FaTwitter />
//             </Link>
//             <Link href="#" className="social-icon text-black">
//               <FaDiscord />
//             </Link>
//             <Link href="#" className="social-icon text-black">
//               <FaFacebook />
//             </Link>
//             <Link href="#" className="social-icon text-black">
//               <FaLinkedin />
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   )
// }

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
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3 text-black" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto py-2 flex justify-center items-center px-4">
      

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2">
          <NavItem href="/" label="Home" isActive={activePage === "home"} />
          <NavItem
            href="#products"
            label="Products"
            isActive={activePage === "products"}
          />
          <NavItem
            href="#about"
            label="About"
            isActive={activePage === "about"}
          />
            <div className="text-3xl font-bold flex items-center">
            <Image
              src={logo}
              alt="Logo"
              width={150}
              height={100}
              className="rounded"
            />
          </div>
           <NavItem
            href="#contact"
            label="Client & Partners"
            isActive={activePage === "Client & Partners"}
          />
          <NavItem href="#blog" label="Blog" isActive={activePage === "blog"} />
          <NavItem
            href="#contact"
            label="Contact"
            isActive={activePage === "contact"}
          />
          
        </div>

       

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${!scrolled ? "text-white" : "text-black"}`}
          onClick={toggleMobileMenu}
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-4 flex flex-col space-y-2">
          <Link
            href="/"
            className={`nav-link py-2 px-3 rounded-md ${
              activePage === "home" ? "font-bold bg-black/5" : ""
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/products"
            className={`nav-link py-2 px-3 rounded-md ${
              activePage === "products" ? "font-bold bg-black/5" : ""
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            href="/about"
            className={`nav-link py-2 px-3 rounded-md ${
              activePage === "about" ? "font-bold bg-black/5" : ""
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/blog"
            className={`nav-link py-2 px-3 rounded-md ${
              activePage === "blog" ? "font-bold bg-black/5" : ""
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className={`nav-link py-2 px-3 rounded-md ${
              activePage === "contact" ? "font-bold bg-black/5" : ""
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>

          {/* Mobile Social Icons */}
          <div className="flex items-center space-x-4 py-2">
            <Link
              href="#"
              className="social-icon text-black hover:opacity-75 transition-opacity"
            >
              <FaTwitter />
            </Link>
            <Link
              href="#"
              className="social-icon text-black hover:opacity-75 transition-opacity"
            >
              <FaDiscord />
            </Link>
            <Link
              href="#"
              className="social-icon text-black hover:opacity-75 transition-opacity"
            >
              <FaFacebook />
            </Link>
            <Link
              href="#"
              className="social-icon text-black hover:opacity-75 transition-opacity"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
