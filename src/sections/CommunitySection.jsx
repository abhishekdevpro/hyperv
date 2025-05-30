import Link from "next/link";
import { FaTwitter, FaDiscord, FaFacebook, FaLinkedin } from "react-icons/fa";

const CommunitySection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-pink-500 to-fuchsia-500">
      {/* Community Join Section */}
      <div className="flex justify-center items-center py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
        <div className="relative w-full bg-gray-900 text-white rounded-lg p-6 sm:p-8 md:p-12 lg:p-16 overflow-hidden">
          {/* Social Media Icons Floating in Background */}
          <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
            <div className="bg-gray-800 p-1.5 sm:p-2 rounded-full opacity-60">
              <FaFacebook className="text-white text-base sm:text-lg" />
            </div>
          </div>
          <div className="absolute bottom-1/3 left-6 sm:left-10">
            <div className="bg-gray-800 p-1.5 sm:p-2 rounded-full opacity-60">
              <FaLinkedin className="text-white text-base sm:text-lg" />
            </div>
          </div>
          <div className="absolute top-4 sm:top-6 right-4 sm:right-6">
            <div className="bg-gray-800 p-1.5 sm:p-2 rounded-full opacity-60">
              <FaTwitter className="text-white text-base sm:text-lg" />
            </div>
          </div>
          <div className="absolute bottom-1/4 right-10 sm:right-16">
            <div className="bg-gray-800 p-1.5 sm:p-2 rounded-full opacity-60">
              <FaLinkedin className="text-white text-base sm:text-lg" />
            </div>
          </div>

          {/* Close Button */}
          {/* <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
            <button className="bg-gray-800 text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
              <span className="text-xs sm:text-sm">✕</span>
            </button>
          </div> */}

          {/* Content */}
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">
              Join Our Community
            </h2>
            <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 max-w-md mx-auto px-2">
              Already using our products? Join our HyperVsolutions community to
              stay connected, share feedback, and engage with us in real-time.
            </p>
            <Link href=" https://novajobs.us/user/community">
              <button className="pointer bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-medium py-2 px-4 sm:px-6 rounded-full flex items-center mx-auto transition-colors duration-300">
                Join Now <span className="ml-2">👋</span>
              </button>
            </Link>
            <div className="flex justify-center mt-6 sm:mt-8 space-x-4 sm:space-x-6">
              <FaTwitter className="text-gray-400 hover:text-white text-lg sm:text-xl cursor-pointer transition-colors duration-300" />
              {/* <FaDiscord className="text-gray-400 hover:text-white text-lg sm:text-xl cursor-pointer transition-colors duration-300" /> */}
              <FaFacebook className="text-gray-400 hover:text-white text-lg sm:text-xl cursor-pointer transition-colors duration-300" />
              <FaLinkedin className="text-gray-400 hover:text-white text-lg sm:text-xl cursor-pointer transition-colors duration-300" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
    </div>
  );
};

export default CommunitySection;
