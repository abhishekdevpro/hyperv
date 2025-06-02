import React, { useState } from "react";
import ReactPlayer from "react-player";
import {
  Play,
  FileText,
  X,
  Info,
  Download,
  AlertTriangle,
  Book,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
  link,
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [activeTab, setActiveTab] = useState("pdf"); // 'pdf' or 'video'
  const [pdfError, setPdfError] = useState(false);
  const [pdfLoading, setPdfLoading] = useState(true);
  const [videoLoading, setVideoLoading] = useState(true);

  //   console.log(">>>>>>>pdfUrl:", pdfUrl, title);

  const getPdfViewerUrl = () => {
    if (!pdfUrl) {
      setPdfError(true);
      return null;
    }
    return `https://docs.google.com/viewer?url=${encodeURIComponent(
      pdfUrl
    )}&embedded=true`;
  };

  const handleBookletClick = (e) => {
    e.preventDefault();
    setActiveTab("pdf");
    setShowPopup(true);
    setPdfLoading(true);
  };

  const handleVideoClick = (e) => {
    e.preventDefault();
    setActiveTab("video");
    setShowPopup(true);
    setVideoLoading(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setPdfError(false);
  };

  const isValidVideoUrl = (url) => {
    if (!url) return false;
    return ReactPlayer.canPlay(url);
  };

  return (
    <div className="flex flex-col md:flex-row items-stretch gap-6 rounded-xl shadow-md bg-white p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white hover:to-purple-50 group">
      {isReversed ? (
        <>
          <div className="w-full md:w-1/2 group relative">
            <div className="border border-gray-200 rounded-lg overflow-hidden h-full flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100 transition-all duration-500 group-hover:border-purple-500 group-hover:shadow-lg group-hover:from-purple-200 group-hover:to-pink-200">
              <button
                onClick={handleVideoClick}
                className="relative w-full h-full block"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-purple-500/20 transition-all duration-500 flex items-center justify-center group-hover:from-purple-500/30 group-hover:via-pink-500/30 group-hover:to-purple-500/30">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110 bg-gradient-to-br from-purple-500/50 to-pink-500/50 rounded-full p-4 hover:from-purple-600/60 hover:to-pink-600/60">
                    <Play className="w-16 h-16 text-white drop-shadow-lg transform transition-transform duration-500 group-hover:rotate-12" />
                  </div>
                </div>

                <div className="relative group overflow-hidden rounded-lg w-full h-[155px] sm:h-[200px] md:h-[250px] lg:h-[300px]">
                  <Image
                    src={screenshot}
                    alt="Product Screenshot"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    quality={100}
                  />

                  {/* Video play icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white bg-opacity-80 rounded-full p-3 shadow-lg hover:scale-110 transition-transform cursor-pointer">
                      <Play
                        className="h-10 w-10 text-red-600"
                        fill="currentColor"
                      />
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex items-start group">
            <div className="transform transition-transform duration-500 group-hover:scale-110">
              {logo}
            </div>
            <div className="ml-4">
              <Link href={link}>
                <Image
                  src={companylogo}
                  alt="Company Logo"
                  width={96}
                  height={96}
                  className="h-12 w-40 shadow-md mb-4"
                />
              </Link>
              <h3 className="font-semibold text-lg text-gray-900 group-hover:text-purple-600 transition-colors duration-500 hover:underline decoration-2 decoration-purple-400">
                {title}
              </h3>
              {Array.isArray(description) && description.length > 0 ? (
                <ul className="list-disc pl-5 text-gray-700 space-y-2 mt-2 text-sm">
                  {description.map((desc, i) => (
                    <li
                      key={i}
                      className="hover:text-pink-600 transition-colors duration-500 transform hover:translate-x-1"
                    >
                      {desc}
                    </li>
                  ))}
                </ul>
              ) : typeof description === "string" &&
                description.trim() !== "" ? (
                <p className="text-sm mt-2 text-gray-700 hover:text-pink-600 transition-colors duration-500">
                  {description}
                </p>
              ) : null}
              <div className="flex items-center gap-4 mt-4">
                <Link href={viewProductLink}>
                  <span className="inline-block uppercase text-xs font-semibold tracking-wider text-purple-600 hover:text-pink-600 transition-all duration-500 hover:tracking-widest">
                    View Product →
                  </span>
                </Link>
                <button
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all duration-300 group relative overflow-hidden
    shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.8)]
    bg-blue-50 text-blue-600 hover:bg-blue-100
    disabled:bg-gray-200 disabled:text-gray-500 disabled:shadow-none disabled:cursor-not-allowed`}
                  style={{
                    position: "relative",
                    height: "40px",
                    width: "120px",
                  }}
                  disabled={!pdfUrl}
                >
                  {/* Ripple circles */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        animation: "growAndFade 3s infinite ease-out",
                        backgroundColor: "dodgerblue",
                        borderRadius: "50%",
                        height: "200%",
                        width: "200%",
                        opacity: 0,
                        position: "absolute",
                      }}
                    ></div>
                    <div
                      style={{
                        animation: "growAndFade 3s infinite ease-out",
                        animationDelay: "1s",
                        backgroundColor: "dodgerblue",
                        borderRadius: "50%",
                        height: "200%",
                        width: "200%",
                        opacity: 0,
                        position: "absolute",
                      }}
                    ></div>
                    <div
                      style={{
                        animation: "growAndFade 3s infinite ease-out",
                        animationDelay: "2s",
                        backgroundColor: "dodgerblue",
                        borderRadius: "50%",
                        height: "200%",
                        width: "200%",
                        opacity: 0,
                        position: "absolute",
                      }}
                    ></div>
                  </div>

                  <Book className="h-4 w-4 transform group-hover:rotate-12 transition-transform duration-300 relative z-10" />
                  <span className="uppercase text-xs font-semibold tracking-wider group-hover:tracking-widest transition-all duration-300 relative z-10">
                    Booklet
                  </span>

                  <style jsx>{`
                    @keyframes growAndFade {
                      0% {
                        opacity: 0.25;
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
              <Link href={link}>
                <Image
                  src={companylogo}
                  alt="Company Logo"
                  width={96}
                  height={64}
                  className="shadow-md mb-4"
                />
              </Link>
              <h3 className="font-semibold text-lg text-gray-900 group-hover:text-purple-600 transition-colors duration-500 hover:underline decoration-2 decoration-purple-400">
                {title}
              </h3>
              {Array.isArray(description) && description.length > 0 ? (
                <ul className="list-disc pl-5 text-gray-700 space-y-2 mt-2 text-sm">
                  {description.map((desc, i) => (
                    <li
                      key={i}
                      className="hover:text-pink-600 transition-colors duration-500 transform hover:translate-x-1"
                    >
                      {desc}
                    </li>
                  ))}
                </ul>
              ) : typeof description === "string" &&
                description.trim() !== "" ? (
                <p className="text-sm mt-2 text-gray-700 hover:text-pink-600 transition-colors duration-500">
                  {description}
                </p>
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
                    position: "relative",
                    height: "40px",
                    width: "120px",
                  }}
                >
                  {/* Ripple circles */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        animation: "growAndFade 3s infinite ease-out",
                        backgroundColor: "dodgerblue",
                        borderRadius: "50%",
                        height: "200%",
                        width: "200%",
                        opacity: 0,
                        position: "absolute",
                      }}
                    ></div>
                    <div
                      style={{
                        animation: "growAndFade 3s infinite ease-out",
                        animationDelay: "1s",
                        backgroundColor: "dodgerblue",
                        borderRadius: "50%",
                        height: "200%",
                        width: "200%",
                        opacity: 0,
                        position: "absolute",
                      }}
                    ></div>
                    <div
                      style={{
                        animation: "growAndFade 3s infinite ease-out",
                        animationDelay: "2s",
                        backgroundColor: "dodgerblue",
                        borderRadius: "50%",
                        height: "200%",
                        width: "200%",
                        opacity: 0,
                        position: "absolute",
                      }}
                    ></div>
                  </div>

                  <Book className="h-4 w-4 transform group-hover:rotate-12 transition-transform duration-300 relative z-10" />
                  <span className="uppercase text-xs font-semibold tracking-wider group-hover:tracking-widest transition-all duration-300 relative z-10">
                    Booklet
                  </span>

                  <style jsx>{`
                    @keyframes growAndFade {
                      0% {
                        opacity: 0.25;
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
              <button
                onClick={handleVideoClick}
                className="relative w-full h-full block"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-purple-500/20 transition-all duration-500 flex items-center justify-center group-hover:from-purple-500/30 group-hover:via-pink-500/30 group-hover:to-purple-500/30">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110 bg-gradient-to-br from-purple-500/50 to-pink-500/50 rounded-full p-4 hover:from-purple-600/60 hover:to-pink-600/60">
                    <Play className="w-16 h-16 text-white drop-shadow-lg transform transition-transform duration-500 group-hover:rotate-12" />
                  </div>
                </div>

                <div className="relative group overflow-hidden rounded-lg w-full h-[155px] sm:h-[200px] md:h-[250px] lg:h-[300px]">
                  <Image
                    src={screenshot}
                    alt="Product Screenshot"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    quality={100}
                  />

                  {/* Video play icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white bg-opacity-80 rounded-full p-3 shadow-lg hover:scale-110 transition-transform cursor-pointer">
                      <Play
                        className="h-10 w-10 text-red-600"
                        fill="currentColor"
                      />
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </>
      )}

      {/* Combined PDF and Video Popup */}
      {/* {showPopup && (
        <div className="fixed z-50 inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl h-[90vh] relative flex flex-col transform transition-all duration-300 ease-in-out animate-fadeIn">
            {/* Header with Tabs
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    {activeTab === 'pdf' ? (
                      <FileText className="h-5 w-5 text-blue-600" />
                    ) : (
                      <Play className="h-5 w-5 text-red-600" />
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {activeTab === 'pdf' ? 'Product Booklet' : 'Product Video'}
                  </h3>
                </div>
                
                {/* Tab Navigation 
                {/* <div className="flex space-x-2 bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setActiveTab('pdf')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      activeTab === 'pdf'
                        ? 'bg-white text-blue-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <FileText className="h-4 w-4 inline-block mr-2" />
                    PDF
                  </button>
                  <button
                    onClick={() => setActiveTab('video')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      activeTab === 'video'
                        ? 'bg-white text-red-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <Play className="h-4 w-4 inline-block mr-2" />
                    Video
                  </button>
                </div> 
              </div>
              
              <div className="flex items-center space-x-4">
                <button
                  onClick={closePopup}
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>

            {/* Content 
            <div className="flex-1 p-6 overflow-hidden bg-gray-50">
              <div className="bg-white rounded-xl shadow-sm h-full overflow-hidden">
                {activeTab === 'pdf' ? (
                  pdfError ? (
                    <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                      <AlertTriangle className="h-16 w-16 text-red-500 mb-4" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        PDF Not Available
                      </h3>
                      <p className="text-gray-600">
                        The product booklet is not available at this time.
                      </p>
                    </div>
                  ) : (
                    <iframe
                      src={getPdfViewerUrl()}
                      className="w-full h-full"
                      style={{ minHeight: "calc(90vh - 180px)" }}
                      frameBorder="0"
                      onError={() => setPdfError(true)}
                    />
                  )
                ) : (
                  <div className="w-full h-full bg-black rounded-xl overflow-hidden">
                    {youtubeLink && isValidVideoUrl(youtubeLink) ? (
                      <ReactPlayer
                        url={youtubeLink}
                        width="100%"
                        height="100%"
                        style={{ minHeight: "calc(90vh - 180px)" }}
                        controls={true}
                        playing={false}
                        config={{
                          youtube: {
                            playerVars: {
                              showinfo: 1,
                              modestbranding: 1,
                              rel: 0,
                            }
                          }
                        }}
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-white">
                        <AlertTriangle className="h-16 w-16 text-red-500 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          Video Not Available
                        </h3>
                        <p className="text-gray-600">
                          The product video is not available at this time.
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Footer 
            <div className="p-4 border-t border-gray-100 bg-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Info className="h-4 w-4" />
                  <span>Click outside or press ESC to close</span>
                </div>
                <div className="flex items-center space-x-3">
                  {activeTab === 'pdf' && pdfUrl && !pdfError && (
                    <a
                      href={pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 hover:shadow-md"
                    >
                      <Download className="h-5 w-5 mr-2" />
                      Download PDF
                    </a>
                  )}
                  {activeTab === 'video' && youtubeLink && (
                    <a
                      href={youtubeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-200 hover:shadow-md"
                    >
                      <ExternalLink className="h-5 w-5 mr-2" />
                      Open in YouTube
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )} */}
      {showPopup && (
        <div className="fixed z-[1000] inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-auto relative flex flex-col transform transition-all duration-300 ease-in-out animate-fadeIn">
            {/* Header with Tabs */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    {activeTab === "pdf" ? (
                      <FileText className="h-5 w-5 text-blue-600" />
                    ) : (
                      <Play className="h-5 w-5 text-red-600" />
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {activeTab === "pdf" ? "Product Booklet" : "Product Video"}
                  </h3>
                </div>

                {/* Tab Navigation */}
                {/* <div className="flex space-x-2 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('pdf')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === 'pdf'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <FileText className="h-4 w-4 inline-block mr-2" />
              PDF
            </button>
            <button
              onClick={() => setActiveTab('video')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === 'video'
                  ? 'bg-white text-red-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Play className="h-4 w-4 inline-block mr-2" />
              Video
            </button>
          </div> */}
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={closePopup}
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-6 overflow-hidden bg-gray-50">
              <div className="bg-white rounded-xl shadow-sm h-full overflow-hidden relative">
                {activeTab === "pdf" ? (
                  <>
                    {/* PDF Loading State */}
                    {pdfLoading && !pdfError && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10">
                        <div className="flex flex-col items-center space-y-4">
                          {/* Animated PDF Icon */}
                          <div className="relative">
                            <div className="animate-pulse">
                              <FileText className="h-16 w-16 text-blue-500" />
                            </div>
                            <div className="absolute inset-0">
                              <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin"></div>
                            </div>
                          </div>

                          {/* Loading Text */}
                          <div className="text-center">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                              Loading PDF...
                            </h3>
                            <p className="text-gray-600">
                              Please wait while we load your document
                            </p>
                          </div>

                          {/* Progress Bar */}
                          <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-blue-500 rounded-full animate-pulse"
                              style={{ width: "60%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* PDF Error State */}
                    {pdfError ? (
                      <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                        <AlertTriangle className="h-16 w-16 text-red-500 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          PDF Not Available
                        </h3>
                        <p className="text-gray-600">
                          The product booklet is not available at this time.
                        </p>
                      </div>
                    ) : (
                      <iframe
                        src={pdfUrl}
                        className="w-full h-full"
                        style={{ minHeight: "calc(90vh - 180px)" }}
                        frameBorder="0"
                        onLoad={() => setPdfLoading(false)}
                        onError={() => {
                          setPdfError(true);
                          setPdfLoading(false);
                        }}
                      />
                    )}
                  </>
                ) : (
                  <div className="w-full h-[90vh] bg-black rounded-xl overflow-hidden relative">
                    {/* Video Loading State */}
                    {videoLoading && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black z-10">
                        <div className="flex flex-col items-center space-y-4">
                          {/* Animated Video Icon */}
                          <div className="relative">
                            <div className="animate-pulse">
                              <Play className="h-16 w-16 text-red-500" />
                            </div>
                            <div className="absolute inset-0">
                              <div className="w-16 h-16 border-4 border-red-200 border-t-red-500 rounded-full animate-spin"></div>
                            </div>
                          </div>

                          {/* Loading Text */}
                          <div className="text-center">
                            <h3 className="text-lg font-semibold text-white mb-2">
                              Loading Video...
                            </h3>
                            <p className="text-gray-300">
                              Please wait while we load your video
                            </p>
                          </div>

                          {/* Progress Bar */}
                          <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-red-500 rounded-full animate-pulse"
                              style={{ width: "60%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    )}

                    {youtubeLink && isValidVideoUrl(youtubeLink) ? (
                      <ReactPlayer
                        url={youtubeLink}
                        width="100%"
                        height="100%"
                        style={{ minHeight: "calc(90vh - 180px)" }}
                        controls={true}
                        playing={true}
                        onReady={() => setVideoLoading(false)}
                        onError={() => {
                          setVideoError(true);
                          setVideoLoading(false);
                        }}
                        config={{
                          youtube: {
                            playerVars: {
                              showinfo: 1,
                              modestbranding: 1,
                              rel: 0,
                            },
                          },
                        }}
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-white">
                        <AlertTriangle className="h-16 w-16 text-red-500 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          Video Not Available
                        </h3>
                        <p className="text-gray-600">
                          The product video is not available at this time.
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-gray-100 bg-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Info className="h-4 w-4" />
                  <span>Click outside or press ESC to close</span>
                </div>
                <div className="flex items-center space-x-3">
                  {activeTab === "pdf" && pdfUrl && !pdfError && (
                    <a
                      href={pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 hover:shadow-md"
                    >
                      <Download className="h-5 w-5 mr-2" />
                      Download PDF
                    </a>
                  )}
                  {activeTab === "video" && youtubeLink && (
                    <a
                      href={youtubeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-200 hover:shadow-md"
                    >
                      <ExternalLink className="h-5 w-5 mr-2" />
                      Open in YouTube
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
