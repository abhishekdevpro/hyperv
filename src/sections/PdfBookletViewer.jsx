'use client'
import { useState, useEffect } from 'react';

const PdfBookletViewer = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [slideDirection, setSlideDirection] = useState('');
  const [isHovering, setIsHovering] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState({});
  const totalPages = 12;

  const images = [
    '/bookletimages/Hyper-V-Solutions-Booklet-2025_page-0001.jpg',
    '/bookletimages/Hyper-V-Solutions-Booklet-2025_page-0002.jpg',
    '/bookletimages/Hyper-V-Solutions-Booklet-2025_page-0003.jpg',
    '/bookletimages/Hyper-V-Solutions-Booklet-2025_page-0004.jpg',
    '/bookletimages/Hyper-V-Solutions-Booklet-2025_page-0005.jpg',
    '/bookletimages/Hyper-V-Solutions-Booklet-2025_page-0006.jpg',
    '/bookletimages/Hyper-V-Solutions-Booklet-2025_page-0007.jpg',
    '/bookletimages/Hyper-V-Solutions-Booklet-2025_page-0008.jpg',
    '/bookletimages/Hyper-V-Solutions-Booklet-2025_page-0009.jpg',
    '/bookletimages/Hyper-V-Solutions-Booklet-2025_page-0010.jpg',
    '/bookletimages/Hyper-V-Solutions-Booklet-2025_page-0011.jpg',
    '/bookletimages/Hyper-V-Solutions-Booklet-2025_page-0012.jpg',
  ];

  const handlePageTurn = (direction) => {
    if (isSliding) return;
    setIsSliding(true);
    setSlideDirection(direction);
    if (direction === 'next' && currentPage < totalPages - 2) {
      setCurrentPage(prev => prev + 2);
    } else if (direction === 'prev' && currentPage > 0) {
      setCurrentPage(prev => prev - 2);
    }
    setTimeout(() => {
      setIsSliding(false);
      setSlideDirection('');
    }, 1000); // Increased duration for smoother animation
  };

  const handleKeyPress = (e) => {
    if (e.key === 'ArrowRight') {
      handlePageTurn('next');
    } else if (e.key === 'ArrowLeft') {
      handlePageTurn('prev');
    }
  };

  const handleSliderChange = (e) => {
    const newPage = Math.floor((e.target.value / 100) * (totalPages - 1));
    setCurrentPage(newPage - (newPage % 2));
  };

  const handleImageLoad = (index) => {
    setImagesLoaded(prev => ({
      ...prev,
      [index]: true
    }));
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentPage]);

  // Auto-slider functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering && !isSliding) {
        if (currentPage >= totalPages - 2) {
          // Reset to the first page when reaching the last page
          setCurrentPage(0);
        } else {
          handlePageTurn('next');
        }
      }
    }, 5000); // Change page every 5 seconds

    return () => clearInterval(interval);
  }, [isHovering, isSliding, currentPage]);

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 px-4 sm:px-6 md:px-8">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-10 mt-6 sm:mt-8 text-center drop-shadow-lg">
        Hyper-V Solutions Booklet 2025
      </h1>

      {/* Left Chevron */}
      <button
        onClick={() => handlePageTurn('prev')}
        disabled={currentPage <= 0 || isSliding}
        className={`z-20 absolute left-2 sm:left-4 md:left-40 top-1/2 -translate-y-1/2 p-1 sm:p-2 rounded-full bg-white/80 hover:bg-pink-500 shadow-lg border border-gray-200 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed group`}
        style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.08)' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-gray-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Booklet */}
      <div
        className="relative bg-white shadow-2xl rounded-lg flex overflow-hidden w-full max-w-[900px] h-[300px] sm:h-[450px] md:h-[550px] lg:h-[650px]"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Book container */}
        <div className="w-full h-full flex gap-4 sm:gap-6 md:gap-10 relative">
          {/* Pages Container */}
          <div
            className={`w-full h-full flex gap-4 sm:gap-6 md:gap-10 transition-transform duration-1000 ease-in-out transform-origin-center`}
          >
            {/* Left Page */}
            <div className="w-1/2 h-full relative">
              <div className={`absolute inset-0 transition-opacity duration-300 ${imagesLoaded[currentPage] ? 'opacity-0' : 'opacity-100'}`} />
              <img
                src={images[currentPage]}
                alt={`Page ${currentPage + 1}`}
                className={`w-full h-full object-contain transition-opacity duration-300 ${imagesLoaded[currentPage] ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => handleImageLoad(currentPage)}
              />
            </div>

            {/* Right Page */}
            <div className="w-1/2 h-full relative">
              <div className={`absolute inset-0 transition-opacity duration-300 ${imagesLoaded[currentPage + 1] ? 'opacity-0' : 'opacity-100'}`} />
              <img
                src={images[currentPage + 1]}
                alt={`Page ${currentPage + 2}`}
                className={`w-full h-full object-contain transition-opacity duration-300 ${imagesLoaded[currentPage + 1] ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => handleImageLoad(currentPage + 1)}
              />
            </div>
          </div>
        </div>

        {/* Progress Slider (on hover) */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-2 sm:p-4 bg-gradient-to-t from-blue-500/50 to-transparent transition-opacity duration-300 ${
            isHovering ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="max-w-2xl mx-auto">
            <input
              type="range"
              min="0"
              max="100"
              value={(currentPage / (totalPages - 1)) * 100}
              onChange={handleSliderChange}
              className="w-full h-1.5 sm:h-2 bg-white/30 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #EC4899 0%, #3B82F6 ${(currentPage / (totalPages - 1)) * 100}%, rgba(255,255,255,0.3) ${(currentPage / (totalPages - 1)) * 100}%, rgba(255,255,255,0.3) 100%)`
              }}
            />
          </div>
        </div>
      </div>

      {/* Right Chevron */}
      <button
        onClick={() => handlePageTurn('next')}
        disabled={currentPage >= totalPages - 2 || isSliding}
        className={`z-20 absolute right-2 sm:right-4 md:right-40 top-1/2 -translate-y-1/2 p-1 sm:p-2 rounded-full bg-white/80 hover:bg-blue-500 shadow-lg border border-gray-200 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed group`}
        style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.08)' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-gray-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default PdfBookletViewer;