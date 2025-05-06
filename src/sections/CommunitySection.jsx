import { FaTwitter, FaDiscord, FaFacebook, FaLinkedin } from "react-icons/fa";

const CommunitySection = () => {
  return (
    <div className="  bg-gradient-to-r from-blue-600 via-pink-500 to-fuchsia-500">
      {/* Community Join Section */}
      <div className="flex justify-center items-center py-16 px-4">
        <div className="relative w-full bg-gray-900 text-white rounded-lg p-16 overflow-hidden">
          {/* Social Media Icons Floating in Background */}
          <div className="absolute top-6 left-6">
            <div className="bg-gray-800 p-2 rounded-full opacity-60">
              <FaDiscord className="text-white text-lg" />
            </div>
          </div>
          <div className="absolute bottom-1/3 left-10">
            <div className="bg-gray-800 p-2 rounded-full opacity-60">
              <FaDiscord className="text-white text-lg" />
            </div>
          </div>
          <div className="absolute top-6 right-6">
            <div className="bg-gray-800 p-2 rounded-full opacity-60">
              <FaTwitter className="text-white text-lg" />
            </div>
          </div>
          <div className="absolute bottom-1/4 right-16">
            <div className="bg-gray-800 p-2 rounded-full opacity-60">
              <FaLinkedin className="text-white text-lg" />
            </div>
          </div>

          {/* Close Button */}
          <div className="absolute top-4 right-4">
            <button className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center">
              <span className="text-sm">✕</span>
            </button>
          </div>

          {/* Content */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-2">Join Our Community</h2>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              Already using any of our products? Join our discord community stay
              in sync, chat with us and share your thoughts
            </p>

            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full flex items-center mx-auto">
              Join Now <span className="ml-2">👋</span>
            </button>

            <div className="flex justify-center mt-8 space-x-6">
              <FaTwitter className="text-gray-400 hover:text-white text-xl cursor-pointer" />
              <FaDiscord className="text-gray-400 hover:text-white text-xl cursor-pointer" />
              <FaFacebook className="text-gray-400 hover:text-white text-xl cursor-pointer" />
              <FaLinkedin className="text-gray-400 hover:text-white text-xl cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
    </div>
  );
};

export default CommunitySection;
