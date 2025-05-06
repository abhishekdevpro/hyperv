// "use client";

// import { useState } from "react";
// import dynamic from 'next/dynamic';

// // Dynamically import ReactPlayer to avoid SSR issues
// const ReactPlayer = dynamic(() => import('react-player/lazy'), {
//   ssr: false, // Disable server-side rendering
//   loading: () => <div className="w-full h-full bg-gray-800 flex items-center justify-center">Loading player...</div>,
// });

// export default function HyperVSolutionsHeader() {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [isReady, setIsReady] = useState(false);

//   return (
//     <div className="flex flex-col w-full">
//       {/* Gradient background header section */}
//       <div className="w-full  py-16 px-8 text-center">
//         <h1 className="text-5xl font-bold text-black mb-4">
//           Hyper V Solutions
//           <div className="mx-auto w-3/4 h-1 bg-gray-100 mt-2"></div>
//         </h1>

//         <p className="text-xl text-black mt-6 max-w-4xl mx-auto">
//           AI specialists craft your AI roadmap and create customized, optimized AI solutions to
//           streamline and improve your manual business processes.
//         </p>
//       </div>

//       {/* YouTube video section with ReactPlayer */}
//       <div className="w-6xl mx-auto bg-gray-900 text-white">
//         <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
//           <div className="absolute top-0 left-0 w-full h-full">
//             <ReactPlayer
//               url="https://youtu.be/KnjONT1KG04"
//               width="100%"
//               height="100%"
//               controls={true}
//               playing={isPlaying}
//               onReady={() => setIsReady(true)}
//               config={{
//                 youtube: {
//                   playerVars: {
//                     modestbranding: 1,
//                     rel: 0
//                   }
//                 }
//               }}
//             />
//           </div>

//           {/* Overlay with title and share button */}
//           <div className={`absolute top-0 left-0 w-full flex items-start p-4 transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}
//                onMouseEnter={() => setIsPlaying(false)}
//                onClick={() => setIsPlaying(true)}>
//             <div className="bg-blue-500 rounded-full h-8 w-8 flex items-center justify-center">
//               <div className="text-white font-bold">H</div>
//             </div>
//             {/* <div className="text-white ml-2 text-lg font-medium">
//               Discover HyperV Solutions: Revolutionizing Business with AI-Powered Innovation
//             </div> */}
//             {/* <div className="ml-auto text-white">
//               Share
//             </div> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import ReactPlayer to avoid SSR issues
const ReactPlayer = dynamic(() => import("react-player/lazy"), {
  ssr: false, // Disable server-side rendering
  loading: () => (
    <div className="w-full h-full bg-gray-800 flex items-center justify-center">
      Loading player...
    </div>
  ),
});

export default function HyperVSolutionsHeader() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);

  return (
    <div className="flex flex-col w-full bg-gradient-to-r from-blue-300 to-pink-300">
      {/* Gradient background header section */}
      <div className="w-full py-8 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 text-center">
        <div className="group">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-3 md:mb-4 
               transition-all duration-500 
               group-hover:text-transparent group-hover:bg-clip-text 
               group-hover:bg-gradient-to-r group-hover:from-blue-700 
               group-hover:via-pink-500 group-hover:to-fuchsia-500"
          >
            Hyper V Solutions
            <div className="mx-auto w-3/4 h-1 bg-gray-100 mt-2"></div>
          </h1>
        </div>

        <p className="text-base sm:text-lg md:text-xl text-black mt-4 md:mt-6 max-w-4xl mx-auto px-4">
          AI specialists craft your AI roadmap and create customized, optimized
          AI solutions to streamline and improve your manual business processes.
        </p>
      </div>

      {/* YouTube video section with ReactPlayer */}
      <div className="w-full max-w-6xl mx-auto bg-gray-900 text-white px-4 sm:px-6 md:px-8">
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <div className="absolute top-0 left-0 w-full h-full">
            <ReactPlayer
              url="https://youtu.be/KnjONT1KG04"
              width="100%"
              height="100%"
              controls={true}
              playing={isPlaying}
              onReady={() => setIsReady(true)}
              config={{
                youtube: {
                  playerVars: {
                    modestbranding: 1,
                    rel: 0,
                  },
                },
              }}
            />
          </div>

          {/* Overlay with title and play button */}
          <div
            className={`absolute top-0 left-0 w-full flex items-start p-2 sm:p-3 md:p-4 transition-opacity duration-300 ${
              isPlaying ? "opacity-0" : "opacity-100"
            }`}
            onMouseEnter={() => setIsPlaying(false)}
            onClick={() => setIsPlaying(true)}
          >
            <div className="bg-blue-500 rounded-full h-6 w-6 sm:h-8 sm:w-8 flex items-center justify-center">
              <div className="text-white font-bold text-xs sm:text-base">H</div>
            </div>
          </div>
        </div>
      </div>

      {/* Add bottom spacing */}
      <div className="h-8 md:h-12 lg:h-16"></div>
    </div>
  );
}
