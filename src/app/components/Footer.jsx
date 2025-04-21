import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaDiscord, FaFacebook, FaLinkedin } from "react-icons/fa";
import logo from "@/assets/logo.jpg"
export default function Footer() {
  return (
    // <footer className="bg-[#080618] py-12">
    //   <div className="container-custom">
    //     <div className="grid md:grid-cols-4 gap-8">
    //       <div>
    //         <Link href="/" className="flex items-center mb-4">
    //           <div className="text-2xl font-bold flex items-center">
    //             <span className="text-blue-accent mr-1">P</span>
    //             <span>PIMJO</span>
    //           </div>
    //         </Link>
    //         <p className="text-gray-400 text-sm">Crafting impactful digital solutions to empower businesses.</p>
    //       </div>

    //       <div>
    //         <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
    //         <ul className="space-y-2 text-gray-400">
    //           <li>
    //             <Link href="/" className="hover:text-white transition-colors">
    //               Home
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="/products" className="hover:text-white transition-colors">
    //               Products
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="/about" className="hover:text-white transition-colors">
    //               About
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="/blog" className="hover:text-white transition-colors">
    //               Blog
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="/contact" className="hover:text-white transition-colors">
    //               Contact
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>

    //       <div>
    //         <h4 className="text-lg font-semibold mb-4">Legal</h4>
    //         <ul className="space-y-2 text-gray-400">
    //           <li>
    //             <Link href="/privacy" className="hover:text-white transition-colors">
    //               Privacy Policy
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="/terms" className="hover:text-white transition-colors">
    //               Terms of Service
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="/cookies" className="hover:text-white transition-colors">
    //               Cookie Policy
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>

    //       <div>
    //         <h4 className="text-lg font-semibold mb-4">Connect</h4>
    //         <div className="flex space-x-4">
    //           <Link href="#" className="text-gray-400 hover:text-white transition-colors">
    //             <FaTwitter size={20} />
    //           </Link>
    //           <Link href="#" className="text-gray-400 hover:text-white transition-colors">
    //             <FaDiscord size={20} />
    //           </Link>
    //           <Link href="#" className="text-gray-400 hover:text-white transition-colors">
    //             <FaFacebook size={20} />
    //           </Link>
    //           <Link href="#" className="text-gray-400 hover:text-white transition-colors">
    //             <FaLinkedin size={20} />
    //           </Link>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
    //       <p>&copy; {new Date().getFullYear()} Pimjo. All rights reserved.</p>
    //     </div>
    //   </div>
    // </footer>
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <Link href="/" className="flex items-center">
                <div className="text-3xl font-bold flex items-center">
                  <Image
                    src={logo}
                    alt="Logo"
                    width={150}
                    height={100}
                    className="rounded"
                  />
                </div>
              </Link>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Crafting digital products with a global impact, used by millions
              around the world!
            </p>
            <div className="flex space-x-4">
              <FaTwitter className="text-gray-400 hover:text-white cursor-pointer" />
              <FaDiscord className="text-gray-400 hover:text-white cursor-pointer" />
              <FaFacebook className="text-gray-400 hover:text-white cursor-pointer" />
              <FaLinkedin className="text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Company Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Company
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Press media
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Our Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">We Are Here</h3>
            <div className="flex items-start">
              <div className="mr-2 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <p className="text-gray-400 text-sm">
                PIMJO LLC - 30 N<br />
                Gould St Ste R<br />
                Sheridan, WY 82801
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          © 2025 Pimjo. All rights reserved
        </div>
      </div>
    </footer>
  );
}

// pages/index.js
