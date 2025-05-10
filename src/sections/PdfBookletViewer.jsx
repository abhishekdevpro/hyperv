'use client';
import { useState } from 'react';
import './PdfBookletViewer.css';

const PdfBookletViewer = () => {
  const [flippedPages, setFlippedPages] = useState([]);

  const images = [
    '/bookletimages/Hyper-V-Solutions-Booklet-2025_page-0001.jpg',
    '/bookletimages/Hyper-V-Solutions-Booklet-2025_page-0012.jpg', // Back cover
    '/bookletimages/Hyper-V-Solutions-Booklet-2025_page-0002.jpg',
    '/bookletimages/Hyper-V-Solutions-Booklet-2025_page-0011.jpg',
    '/bookletimages/Hyper-V-Solutions-Booklet-2025_page-0003.jpg',
    '/bookletimages/Hyper-V-Solutions-Booklet-2025_page-0010.jpg',
    '/bookletimages/Hyper-V-Solutions-Booklet-2025_page-0004.jpg',
    '/bookletimages/Hyper-V-Solutions-Booklet-2025_page-0009.jpg',
    '/bookletimages/Hyper-V-Solutions-Booklet-2025_page-0005.jpg',
    '/bookletimages/Hyper-V-Solutions-Booklet-2025_page-0008.jpg',
    '/bookletimages/Hyper-V-Solutions-Booklet-2025_page-0006.jpg',
    '/bookletimages/Hyper-V-Solutions-Booklet-2025_page-0007.jpg', // Center spread
  ];

  const togglePageFlip = (index) => {
    setFlippedPages((prev) =>
      prev.includes(index)
        ? prev.filter((page) => page !== index) // Unflip the page
        : [...prev, index] // Flip the page
    );
  };

  return (
    <div className="book-container">
      <div className="instruction">Flip the page</div>
      <div className="book">
        {images.map((image, index) => (
          <div
            key={index}
            className={`page ${flippedPages.includes(index) ? 'flipped' : ''}`}
            onClick={() => togglePageFlip(index)}
          >
            <img src={image} alt={`Page ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PdfBookletViewer;