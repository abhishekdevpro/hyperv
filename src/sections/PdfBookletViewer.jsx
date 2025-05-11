'use client';
import { useState } from 'react';

import './PdfBookletViewer.css';

const PdfBookletViewer = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="book-container">
      <h1 className="book-title">Hyper-V Solutions Booklet</h1>
      <div className="book">
        <div className="book__pg-shadow"></div>
        <div className="book__pg">
          <div className="book__pg--front">
            <img src="/bookletimages/Hyper-V-Solutions-Booklet-2025_page-0001.jpg" alt="Page 1 Front" />
          </div>
          <div className="book__pg--back">
            <img src="/bookletimages/Hyper-V-Solutions-Booklet-2025_page-0002.jpg" alt="Page 1 Back" />
          </div>
        </div>
        <div className="book__pg book__pg--2">
          <div className="book__pg--front">
            <img src="/bookletimages/Hyper-V-Solutions-Booklet-2025_page-0003.jpg" alt="Page 2 Front" />
          </div>
          <div className="book__pg--back">
            <img src="/bookletimages/Hyper-V-Solutions-Booklet-2025_page-0004.jpg" alt="Page 2 Back" />
          </div>
        </div>
        <div className="book__pg book__pg--3">
          <div className="book__pg--front">
            <img src="/bookletimages/Hyper-V-Solutions-Booklet-2025_page-0005.jpg" alt="Page 3 Front" />
          </div>
          <div className="book__pg--back">
            <img src="/bookletimages/Hyper-V-Solutions-Booklet-2025_page-0006.jpg" alt="Page 3 Back" />
          </div>
        </div>
        <div className="book__pg book__pg--4">
          <div className="book__pg--front">
            <img src="/bookletimages/Hyper-V-Solutions-Booklet-2025_page-0007.jpg" alt="Page 4 Front" />
          </div>
          <div className="book__pg--back">
            <img src="/bookletimages/Hyper-V-Solutions-Booklet-2025_page-0008.jpg" alt="Page 4 Back" />
          </div>
        </div>
        <div className="book__pg book__pg--5">
          <div className="book__pg--front">
            <img src="/bookletimages/Hyper-V-Solutions-Booklet-2025_page-0009.jpg" alt="Page 5 Front" />
          </div>
          <div className="book__pg--back">
            <img src="/bookletimages/Hyper-V-Solutions-Booklet-2025_page-0010.jpg" alt="Page 5 Back" />
          </div>
        </div>
        <div className="book__pg book__pg--6">
          <div className="book__pg--front">
            <img src="/bookletimages/Hyper-V-Solutions-Booklet-2025_page-0011.jpg" alt="Page 6 Front" />
          </div>
          <div className="book__pg--back">
            <img src="/bookletimages/Hyper-V-Solutions-Booklet-2025_page-0012.jpg" alt="Page 6 Back" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdfBookletViewer;