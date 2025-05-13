import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaDiscord, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import logo from "@/assets/logo.jpg"
export default function Footer() {
  return (

    <footer className="bg-gray-900 text-white py-12 px-4" id="footer">
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
              <Link href="https://www.youtube.com/@HyperVSolutions" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="text-[#FF0000] hover:opacity-80 cursor-pointer" size={20} />
              </Link>
              <Link href="https://www.linkedin.com/company/hyperv-solutions" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-[#0077B5] hover:opacity-80 cursor-pointer" size={20} />
              </Link>
              <Link href="https://twitter.com/hypervsolutions" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-[#1DA1F2] hover:opacity-80 cursor-pointer" size={20} />
              </Link>
              <Link href="https://www.facebook.com/hypervsolutions" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-[#4267B2] hover:opacity-80 cursor-pointer" size={20} />
              </Link>
            </div>
            <div className="flex space-x-4 mt-4">
              <img src="/certifications/dbe-logo.png" alt="DBE Logo" className="h-12 w-12" />
              <img src="/certifications/sbe-logo.png" alt="SBE Logo" className="h-12 w-12" />
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
            </ul>
          </div>

          {/* Support Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Our Blog
                </Link>
              </li>
          
            </ul>
          </div>

          {/* Location */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">We Are Here</h3>
            <div className="flex items-start mb-4">
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
                PO Box 1084,<br />
                Columbia, SC 29202 &<br />
                1225 Laurel St., Columbia, SC 29201.
              </p>
            </div>
            <div className="flex items-start">
              <div className="ml-2 mt-1">
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
</svg>
              </div>
              <p className="text-gray-400 text-sm ml-2">
                 <a href="mailto:info@hypervsolutions.net" className="text-gray-400 hover:text-white">info@hypervsolutions.net</a>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex items-center">
            <div className="flex-1 text-center text-gray-400 text-sm">© 2025 HyperV Solutions. All rights reserved</div>
           
          </div>
        </div>
      </div>
    </footer>
  );
}
