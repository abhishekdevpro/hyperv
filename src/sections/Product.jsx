"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import novajobs from "../assets/novajobs.png";
import novahomecare from "../assets/novahomecare.png";
import paradigmshift from "../assets/paradigmshift.png";
import ultraaura from "../assets/ultraaura.png";
import Image from "next/image";

const ProductCard = ({
  logo,
  title,
  description,
  viewProductLink,
  isReversed,
  screenshot,
  youtubeLink,
  pdfUrl,
  companylogo,
}) => {
  const [showPdfPopup, setShowPdfPopup] = useState(false);
  const [pdfError, setPdfError] = useState(false);

  useEffect(() => {
    if (showPdfPopup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showPdfPopup]);

  const getPdfViewerUrl = () => {
    if (!pdfUrl) {
      setPdfError(true);
      return null;
    }
    return `https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`;
  };

  const handleBookletClick = (e) => {
    e.preventDefault();
    setPdfError(false);
    setShowPdfPopup(true);
  };

  const closePdfPopup = () => {
    setShowPdfPopup(false);
    setPdfError(false);
  };

  return (
    <div className="flex flex-col md:flex-row items-stretch gap-6 rounded-xl shadow-md bg-white p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white hover:to-purple-50 group">
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500"></div>
      <div className="absolute inset-0 rounded-xl shadow-[0_0_30px_rgba(59,130,246,0.3)] opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      <div className="absolute inset-0 rounded-xl shadow-[0_0_30px_rgba(168,85,247,0.3)] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-1"></div>
      <div className="absolute inset-0 rounded-xl shadow-[0_0_30px_rgba(236,72,153,0.3)] opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-1"></div>
      {isReversed ? (
        <>
          <div className="w-full md:w-1/2 group relative">
            <div className="border border-gray-200 rounded-lg overflow-hidden h-full flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100 transition-all duration-500 group-hover:border-purple-500 group-hover:shadow-lg group-hover:from-purple-200 group-hover:to-pink-200">
              <a 
                href={youtubeLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative w-full h-full block"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-purple-500/20 transition-all duration-500 flex items-center justify-center group-hover:from-purple-500/30 group-hover:via-pink-500/30 group-hover:to-purple-500/30">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110 bg-gradient-to-br from-purple-500/50 to-pink-500/50 rounded-full p-4 hover:from-purple-600/60 hover:to-pink-600/60">
                    <svg className="w-16 h-16 text-white drop-shadow-lg transform transition-transform duration-500 group-hover:rotate-12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                    </svg>
                  </div>
                </div>
                <div className="relative w-full h-[300px]">
                  <Image
                    src={screenshot}
                    alt="Product Screenshot"
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-105"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex items-start group">
        
            <div className="transform transition-transform duration-500 group-hover:scale-110">
              {logo}
            </div>
            <div className="ml-4">
                  <Image
              src={companylogo}
              alt="Company Logo"
              width={96} // Set the width explicitly
              height={96} // Set the height explicitly
              className="h-12 w-40  shadow-md mb-4"
            />
              <h3 className="font-semibold text-lg text-gray-900 group-hover:text-purple-600 transition-colors duration-500 hover:underline decoration-2 decoration-purple-400">{title}</h3>
              {Array.isArray(description) && description.length > 0 ? (
                <ul className="list-disc pl-5 text-gray-700 space-y-2 mt-2 text-sm">
                  {description.map((desc, i) => (
                    <li key={i} className="hover:text-pink-600 transition-colors duration-500 transform hover:translate-x-1">{desc}</li>
                  ))}
                </ul>
              ) : typeof description === "string" && description.trim() !== "" ? (
                <p className="text-sm mt-2 text-gray-700 hover:text-pink-600 transition-colors duration-500">{description}</p>
              ) : null}
              <div className="flex items-center gap-4 mt-4">
                <Link href={viewProductLink}>
                  <span className="inline-block uppercase text-xs font-semibold tracking-wider text-purple-600 hover:text-pink-600 transition-all duration-500 hover:tracking-widest">
                    View Product →
                  </span>
                </Link>
                <button
                  onClick={handleBookletClick}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-all duration-300 group relative overflow-hidden shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.8)]"
                  style={{
                    position: 'relative',
                    height: '40px',
                    width: '120px',
                  }}
                >
                  {/* Ripple circles */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                  }}>
                    <div style={{
                      animation: 'growAndFade 3s infinite ease-out',
                      backgroundColor: 'dodgerblue',
                      borderRadius: '50%',
                      height: '200%',
                      width: '200%',
                      opacity: 0,
                      position: 'absolute',
                    }}></div>
                    <div style={{
                      animation: 'growAndFade 3s infinite ease-out',
                      animationDelay: '1s',
                      backgroundColor: 'dodgerblue',
                      borderRadius: '50%',
                      height: '200%',
                      width: '200%',
                      opacity: 0,
                      position: 'absolute',
                    }}></div>
                    <div style={{
                      animation: 'growAndFade 3s infinite ease-out',
                      animationDelay: '2s',
                      backgroundColor: 'dodgerblue',
                      borderRadius: '50%',
                      height: '200%',
                      width: '200%',
                      opacity: 0,
                      position: 'absolute',
                    }}></div>
                  </div>
                  
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:rotate-12 transition-transform duration-300 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span className="uppercase text-xs font-semibold tracking-wider group-hover:tracking-widest transition-all duration-300 relative z-10">Booklet</span>

                  <style jsx>{`
                    @keyframes growAndFade {
                      0% {
                        opacity: .25;
                        transform: scale(0);
                      }
                      100% {
                        opacity: 0;
                        transform: scale(1);
                      }
                    }
                  `}</style>
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="w-full md:w-1/2 flex items-start group">
            <div className="transform transition-transform duration-500 group-hover:scale-110">
              {logo}
            </div>
            <div className="ml-4">
                <Image
              src={companylogo}
              alt="Company Logo"
              width={96} // Set the width explicitly
              height={64} // Set the height explicitly
              className=" shadow-md mb-4"
            />
              <h3 className="font-semibold text-lg text-gray-900 group-hover:text-purple-600 transition-colors duration-500 hover:underline decoration-2 decoration-purple-400">{title}</h3>
              {Array.isArray(description) && description.length > 0 ? (
                <ul className="list-disc pl-5 text-gray-700 space-y-2 mt-2 text-sm">
                  {description.map((desc, i) => (
                    <li key={i} className="hover:text-pink-600 transition-colors duration-500 transform hover:translate-x-1">{desc}</li>
                  ))}
                </ul>
              ) : typeof description === "string" && description.trim() !== "" ? (
                <p className="text-sm mt-2 text-gray-700 hover:text-pink-600 transition-colors duration-500">{description}</p>
              ) : null}
              <div className="flex items-center gap-4 mt-4">
                <Link href={viewProductLink}>
                  <span className="inline-block uppercase text-xs font-semibold tracking-wider text-purple-600 hover:text-pink-600 transition-all duration-500 hover:tracking-widest">
                    View Product →
                  </span>
                </Link>
                <button
                  onClick={handleBookletClick}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-all duration-300 group relative overflow-hidden shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.8)]"
                  style={{
                    position: 'relative',
                    height: '40px',
                    width: '120px',
                  }}
                >
                  {/* Ripple circles */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                  }}>
                    <div style={{
                      animation: 'growAndFade 3s infinite ease-out',
                      backgroundColor: 'dodgerblue',
                      borderRadius: '50%',
                      height: '200%',
                      width: '200%',
                      opacity: 0,
                      position: 'absolute',
                    }}></div>
                    <div style={{
                      animation: 'growAndFade 3s infinite ease-out',
                      animationDelay: '1s',
                      backgroundColor: 'dodgerblue',
                      borderRadius: '50%',
                      height: '200%',
                      width: '200%',
                      opacity: 0,
                      position: 'absolute',
                    }}></div>
                    <div style={{
                      animation: 'growAndFade 3s infinite ease-out',
                      animationDelay: '2s',
                      backgroundColor: 'dodgerblue',
                      borderRadius: '50%',
                      height: '200%',
                      width: '200%',
                      opacity: 0,
                      position: 'absolute',
                    }}></div>
                  </div>
                  
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:rotate-12 transition-transform duration-300 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span className="uppercase text-xs font-semibold tracking-wider group-hover:tracking-widest transition-all duration-300 relative z-10">Booklet</span>

                  <style jsx>{`
                    @keyframes growAndFade {
                      0% {
                        opacity: .25;
                        transform: scale(0);
                      }
                      100% {
                        opacity: 0;
                        transform: scale(1);
                      }
                    }
                  `}</style>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 group relative">
            <div className="border border-gray-200 rounded-lg overflow-hidden h-full flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100 transition-all duration-500 group-hover:border-purple-500 group-hover:shadow-lg group-hover:from-purple-200 group-hover:to-pink-200">
              <a 
                href={youtubeLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative w-full h-full block"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-purple-500/20 transition-all duration-500 flex items-center justify-center group-hover:from-purple-500/30 group-hover:via-pink-500/30 group-hover:to-purple-500/30">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110 bg-gradient-to-br from-purple-500/50 to-pink-500/50 rounded-full p-4 hover:from-purple-600/60 hover:to-pink-600/60">
                    <svg className="w-16 h-16 text-white drop-shadow-lg transform transition-transform duration-500 group-hover:rotate-12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                    </svg>
                  </div>
                </div>
                <div className="relative w-full h-[300px]">
                  <Image
                    src={screenshot}
                    alt="Product Screenshot"
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-105"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                  />
                </div>
              </a>
            </div>
          </div>
        </>
      )}

      {/* PDF Popup */}
      {showPdfPopup && (
        <div className="fixed z-50 inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl h-[90vh] relative flex flex-col transform transition-all duration-300 ease-in-out animate-fadeIn">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Product Booklet</h3>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={closePdfPopup}
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-6 overflow-hidden bg-gray-50">
              <div className="bg-white rounded-xl shadow-sm h-full overflow-hidden">
                {pdfError ? (
                  <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">PDF Not Available</h3>
                    <p className="text-gray-600">The product booklet is not available at this time.</p>
                  </div>
                ) : (
                  <iframe
                    src={getPdfViewerUrl()}
                    className="w-full h-full"
                    style={{ minHeight: 'calc(90vh - 140px)' }}
                    frameBorder="0"
                    onError={() => setPdfError(true)}
                  />
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-gray-100 bg-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Click outside or press ESC to close</span>
                </div>
                {pdfUrl && !pdfError && (
                  <a 
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 hover:shadow-md"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download PDF
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ProductsAndTools = () => {
  const products = [
    {
      companylogo: "/Novajobs Logo.png",
      logo: (
        <div className="bg-blue-100 p-3 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      ),
      title: "NovaJobs.us – All-in-One Hiring & Career Platform",
      description: [
        "AI-powered job portal with smart automation",
        "Resume building, job search, and career guidance for seekers",
        "Job posting, hiring tools, and white-label options for employers",
        "Built to scale – fast, secure, and fully customizable",
      ],
      viewProductLink: "https://novajobs.us/",
      screenshot: novajobs,
      youtubeLink: "https://www.youtube.com/watch?v=avkVoUCOrJ4",
      pdfUrl: "https://drive.google.com/uc?export=view&id=1924uZupUppvghGvBcJjfj_W6J8c8nMbm",
    },
    {
       companylogo: "/Ultra_Aura Logo.png",
      logo: (
        <div className="bg-purple-100 p-3 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-purple-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      ),
      title: "UltraAura – AI-Enabled End-to-End EdTech Platform.",
      description: [
        "Online courses taught by industry experts",
        "One-on-one mentoring & interactive student sessions",
        "AI-powered certification, resume building & job assistance",
        "Whitelabel-ready for institutes, trainers, and education partners",
      ],
      viewProductLink: "https://ultraaura.education",
      screenshot: ultraaura,
      youtubeLink: "https://www.youtube.com/watch?v=CbWnPty7N3o",
      pdfUrl: "https://www.orimi.com/pdf-test.pdf",
    },
    {
       companylogo: "/logo- Nova home care.png",
      logo: (
        <div className="bg-indigo-100 p-3 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-indigo-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
        </div>
      ),
      title: "NovaHome.care – Your Personal Care Advisor at Home",
      description: [
        "Find trusted caregivers for senior, child, or pet care",
        "Book housekeeping, tutoring, or DME services near you",
        "Personalized care matching via your ZIP code",
        "Built for families, partners, and professional caregivers",
      ],
      viewProductLink: "https://novahome.care/",
      screenshot: novahomecare,
      youtubeLink: "https://www.youtube.com/watch?v=KmlLB-t6IUI",
      pdfUrl: "https://www.orimi.com/pdf-test.pdf",
    },
    {
       companylogo: "/paradigm.png",
      logo: (
        <div className="bg-green-100 p-3 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      ),
      title: "ParadigmShifts.life – Your Personal Wellness Companion",
      description: [
        "Helping individuals and businesses achieve wellness",
        "Specialized in Drug & Alcohol, Rehabilitation & Retention, and Monitoring",
        "Tailored support for behavioral health, corporate wellness, and workforce re-entry",
        "Talk to Aria, your AI wellness advisor for guided support",
      ],
      viewProductLink: "https://paradigmshifts.life/",
      screenshot: paradigmshift,
      youtubeLink: "https://www.youtube.com/watch?v=pk548myIXv0",
      pdfUrl: "https://www.orimi.com/pdf-test.pdf",
    },
  ];

  return (
    <div className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Launch-Ready Products & Tools
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Speed up development and save time with our pre-built, scalable
            solutions tailored for fast-moving teams and founders.
          </p>
        </div>
        <div className="space-y-10">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              companylogo={product.companylogo}
              logo={product.logo}
              title={product.title}
              description={product.description}
              viewProductLink={product.viewProductLink}
              isReversed={index % 2 === 1}
              screenshot={product.screenshot}
              youtubeLink={product.youtubeLink}
              pdfUrl={product.pdfUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsAndTools;
