'use client'
import { useState, useEffect } from 'react';

const PdfBookletViewer = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState('');
  const [isHovering, setIsHovering] = useState(false);
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
    if (isFlipping) return;
    setIsFlipping(true);
    setFlipDirection(direction);
    if (direction === 'next' && currentPage < totalPages - 2) {
      setCurrentPage(prev => prev + 2);
    } else if (direction === 'prev' && currentPage > 0) {
      setCurrentPage(prev => prev - 2);
    }
    setTimeout(() => {
      setIsFlipping(false);
      setFlipDirection('');
    }, 800);
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

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentPage]);

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gray-50">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-10 mt-8 text-center drop-shadow-sm">
        Hyper-V Solutions Booklet 2025
      </h1>

      {/* Left Chevron */}
      <button
        onClick={() => handlePageTurn('prev')}
        disabled={currentPage <= 0 || isFlipping}
        className={`z-20 absolute left-40 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg border border-gray-200 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed group`}
        style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.08)' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 group-hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Booklet */}
      <div
        className="relative bg-white shadow-2xl rounded-lg flex overflow-hidden"
        style={{ width: 900, height: 650 }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Book container */}
        <div className="w-full h-full flex gap-10 relative">
          {/* Left Page */}
          <div
            className={`w-1/2 h-full transition-all duration-800 transform-gpu origin-left
              ${isFlipping && flipDirection === 'next' ? 'rotate-y-180' : ''}
              ${isFlipping && flipDirection === 'prev' ? 'rotate-y-0' : ''}
              preserve-3d`}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="w-full h-full backface-hidden" style={{ backfaceVisibility: 'hidden' }}>
              <img
                src={images[currentPage]}
                alt={`Page ${currentPage + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
            <div
              className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gray-100"
              style={{
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)'
              }}
            >
              <img
                src={images[currentPage + 2]}
                alt={`Page ${currentPage + 3}`}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right Page */}
          <div
            className={`w-1/2 h-full transition-all duration-800 transform-gpu origin-right
              ${isFlipping && flipDirection === 'prev' ? 'rotate-y-180' : ''}
              ${isFlipping && flipDirection === 'next' ? 'rotate-y-0' : ''}
              preserve-3d`}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="w-full h-full backface-hidden" style={{ backfaceVisibility: 'hidden' }}>
              <img
                src={images[currentPage + 1]}
                alt={`Page ${currentPage + 2}`}
                className="w-full h-full object-contain"
              />
            </div>
            <div
              className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gray-100"
              style={{
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)'
              }}
            >
              <img
                src={images[currentPage + 3]}
                alt={`Page ${currentPage + 4}`}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Progress Slider (on hover) */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/30 to-transparent transition-opacity duration-300 ${
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
              className="w-full h-2 bg-white/30 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #3B82F6 0%, #3B82F6 ${(currentPage / (totalPages - 1)) * 100}%, rgba(255,255,255,0.3) ${(currentPage / (totalPages - 1)) * 100}%, rgba(255,255,255,0.3) 100%)`
              }}
            />
          </div>
        </div>
      </div>

      {/* Right Chevron */}
      <button
        onClick={() => handlePageTurn('next')}
        disabled={currentPage >= totalPages - 2 || isFlipping}
        className={`z-20 absolute right-40 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg border border-gray-200 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed group`}
        style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.08)' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 group-hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default PdfBookletViewer; 