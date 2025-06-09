import React from "react";

export default function Modal({ data, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="bg-white text-gray-900 w-full max-w-lg rounded-2xl shadow-2xl p-6 md:p-8 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl font-bold cursor-pointer"
        >
          &times;
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          {data.heading}
        </h2>

        {/* Action Items */}
        <div className="space-y-3">
          {data.items.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center font-semibold py-2.5 px-4 rounded-xl transition-all duration-300 shadow hover:shadow-lg"
            >
              {item.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
