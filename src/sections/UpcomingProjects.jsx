import React from "react";

export default function UpcomingProjects() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white relative">
      {/* Top blur overlay */}
      <div className="absolute top-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-b from-pink-200 via-blue-200/50 to-transparent pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto text-center relative">
        <div className="text-xs sm:text-sm text-gray-400 font-semibold mb-2 tracking-widest">HYPER V SOLUTION</div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
          Upcoming <span className="relative inline-block">
            Projects
            <span className="absolute left-0 bottom-0 w-full h-2 bg-yellow-300 rounded-sm -z-10" style={{height:'0.25em'}}></span>
          </span>
        </h2>
      </div>
      <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 max-w-4xl mx-auto relative">
        {/* Freevance */}
        <div className="flex flex-col items-center p-4 sm:p-6 bg-white/50 backdrop-blur-sm rounded-xl hover:shadow-lg transition-all duration-300">
          <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="gray" strokeWidth="1.5" className="mb-3 sm:mb-4">
            <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2"/>
            <rect x="7" y="7" width="2" height="2" fill="gray"/>
            <rect x="11" y="7" width="2" height="2" fill="gray"/>
            <rect x="15" y="7" width="2" height="2" fill="gray"/>
            <rect x="7" y="11" width="2" height="2" fill="gray"/>
            <rect x="11" y="11" width="2" height="2" fill="gray"/>
            <rect x="15" y="11" width="2" height="2" fill="gray"/>
            <rect x="7" y="15" width="2" height="2" fill="gray"/>
            <rect x="11" y="15" width="2" height="2" fill="gray"/>
            <rect x="15" y="15" width="2" height="2" fill="gray"/>
          </svg>
          <div className="text-xl sm:text-2xl font-semibold text-gray-900">Freevance</div>
        </div>
        {/* Kushi Gateway */}
        <div className="flex flex-col items-center p-4 sm:p-6 bg-white/50 backdrop-blur-sm rounded-xl hover:shadow-lg transition-all duration-300">
          <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="#FFC107" strokeWidth="1.5" className="mb-3 sm:mb-4">
            <path d="M17 16v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2" strokeWidth="2"/>
            <rect x="9" y="3" width="12" height="8" rx="2" fill="#FFC107"/>
            <path d="M15 11v2.5a1.5 1.5 0 0 1-3 0V11" strokeWidth="2"/>
          </svg>
          <div className="text-xl sm:text-2xl font-semibold text-gray-900">Kushi Gateway</div>
        </div>
        {/* LegitZone.Law */}
        <div className="flex flex-col items-center p-4 sm:p-6 bg-white/50 backdrop-blur-sm rounded-xl hover:shadow-lg transition-all duration-300">
          <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="#A1002B" strokeWidth="1.5" className="mb-3 sm:mb-4">
            <path d="M12 3v2m0 0c-2.5 0-7 1.5-7 4.5S9.5 14 12 14s7-1.5 7-4.5S14.5 5 12 5z" strokeWidth="2"/>
            <path d="M5 21h14M8 17v4M16 17v4" strokeWidth="2"/>
            <path d="M8 17c0-2.5 8-2.5 8 0" strokeWidth="2"/>
          </svg>
          <div className="text-xl sm:text-2xl font-semibold text-gray-900">LegitZone.Law</div>
        </div>
      </div>

      {/* Bottom blur overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-blue-200 via-pink-200/50 to-transparent pointer-events-none"></div>
    </section>
  );
} 