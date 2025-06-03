// "use client";
// import "./PdfBookletViewer.css";
// import { useEffect } from "react";

// const PdfBookletViewer = () => {
//   // useEffect(() => {
//   //   const bookElement = document.getElementById("book");
//   //   if (bookElement) {
//   //     bookElement.addEventListener("click", function (e) {
//   //       const element = this;
//   //       element.style.pointerEvents = "none";
//   //       setTimeout(() => {
//   //         element.style.pointerEvents = "";
//   //       }, 2000);
//   //     });
//   //   }
//   // }, []);
//   useEffect(() => {
//     // Auto-check the "two" checkbox to open page 2 on load
//     const pageTwoCheckbox = document.getElementById("one");
//     if (pageTwoCheckbox) {
//       pageTwoCheckbox.checked = true;
//     }

//     const bookElement = document.getElementById("book");
//     if (bookElement) {
//       bookElement.addEventListener("click", function () {
//         const element = this;
//         element.style.pointerEvents = "none";
//         setTimeout(() => {
//           element.style.pointerEvents = "";
//         }, 2000);
//       });
//     }
//   }, []);
//   return (
//     <div className=" flex flex-col items-center justify-center min-h-screen bg-gray-200">
//       <h1 className="text-4xl font-extrabold text-blue-600 mb-4">
//         Explore the{" "}
//         <span className="text-gray-800">Hyper-V Solutions Booklet 2025</span>
//       </h1>
//       <h2 className="text-2xl text-gray-700 mb-6">
//         Flip through the pages to discover cutting-edge solutions and insights!
//       </h2>

//       <div id="book" className="rou">
//         <input type="checkbox" id="six" />
//         <div id="page6" className="page">
//           <div className="front">
//             <img
//               src="/bookletimages/Hyper-V-Solutions-Booklet-2025_page-0011.jpg"
//               className="w-full h-auto object-contain"
//               alt="Page 1 Front"
//             />
//           </div>
//           <div className="back">
//             <img
//               src="/bookletimages/Hyper-V-Solutions-Booklet-2025_page-0012.jpg"
//               className="w-full h-auto object-contain"
//               alt="Page 1 Front"
//             />
//           </div>
//           <label htmlFor="five"></label>
//         </div>
//         <input type="checkbox" id="five" />
//         <div id="page5" className="page">
//           <div className="front">
//             <img
//               src="/bookletimages/Hyper-V-Solutions-Booklet-2025_page-0009.jpg"
//               className="w-full h-auto object-contain"
//               alt="Page 1 Front"
//             />
//           </div>
//           <div className="back">
//             <img
//               src="/bookletimages/Hyper-V-Solutions-Booklet-2025_page-0010.jpg"
//               className="w-full h-auto object-contain"
//               alt="Page 1 Front"
//             />
//           </div>
//           <label htmlFor="five"></label>
//         </div>

//         <input type="checkbox" id="four" />
//         <div id="page4" className="page">
//           <div className="front">
//             <img
//               src="/bookletimages/Hyper-V-Solutions-Booklet-2025_page-0007.jpg"
//               className="w-full h-auto object-contain"
//               alt="Page 1 Front"
//             />
//           </div>
//           <div className="back">
//             <img
//               src="/bookletimages/Hyper-V-Solutions-Booklet-2025_page-0008.jpg"
//               className="w-full h-auto object-contain"
//               alt="Page 1 Front"
//             />
//           </div>
//           <label htmlFor="four"></label>
//         </div>

//         <input type="checkbox" id="three" />
//         <div id="page3" className="page">
//           <div className="front">
//             {" "}
//             <img
//               src="/bookletimages/Hyper-V-Solutions-Booklet-2025_page-0005.jpg"
//               className="w-full h-auto object-contain"
//               alt="Page 1 Front"
//             />
//           </div>
//           <div className="back">
//             <img
//               src="/bookletimages/Hyper-V-Solutions-Booklet-2025_page-0006.jpg"
//               className="w-full h-auto object-contain"
//               alt="Page 1 Front"
//             />
//           </div>
//           <label htmlFor="three"></label>
//         </div>

//         <input type="checkbox" id="two" />
//         <div id="page2" className="page">
//           <div className="front">
//             <img
//               src="/bookletimages/Hyper-V-Solutions-Booklet-2025_page-0003.jpg"
//               className="w-full h-auto object-contain"
//               alt="Page 1 Front"
//             />
//           </div>
//           <div className="back">
//             <img
//               src="/bookletimages/Hyper-V-Solutions-Booklet-2025_page-0004.jpg"
//               className="w-full h-auto object-contain"
//               alt="Page 1 Front"
//             />
//           </div>
//           <label htmlFor="two"></label>
//         </div>

//         <input type="checkbox" id="one" />
//         <div id="page1" className="page">
//           <div className="front">
//             <img
//               src="/bookletimages/Hyper-V-Solutions-Booklet-2025_page-0001.jpg"
//               className="w-full h-auto object-fill"
//               alt="Page 1 Front"
//             />
//           </div>
//           <div className="back">
//             <img
//               src="/bookletimages/Hyper-V-Solutions-Booklet-2025_page-0002.jpg"
//               className="w-full h-auto object-contain"
//               alt="Page 1 Front"
//             />
//           </div>
//           <label htmlFor="one"></label>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PdfBookletViewer;

"use client";
import "./PdfBookletViewer.css";
import { useEffect } from "react";
import handicon from "../assets/hand-icon.png";
import Image from "next/image";

const PdfBookletViewer = () => {
  useEffect(() => {
    // Auto-check the first page to simulate opening
    const pageOneCheckbox = document.getElementById("one");
    if (pageOneCheckbox) {
      pageOneCheckbox.checked = true;
    }

    // Disable rapid clicks
    const bookElement = document.getElementById("book");
    if (bookElement) {
      bookElement.addEventListener("click", function () {
        const element = this;
        element.style.pointerEvents = "none";
        setTimeout(() => {
          element.style.pointerEvents = "";
        }, 2000);
      });
    }

    // 👇 REMOVED: auto-hide hand animation
    // const timer = setTimeout(() => {
    //   const hand = document.querySelector(".hand-animation");
    //   if (hand) hand.style.display = "none";
    // }, 5000);

    // return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 relative overflow-hidden">
      <h1 className="text-4xl font-extrabold text-blue-600 mb-4">
        Explore the{" "}
        <span className="text-gray-800">Hyper-V Solutions Booklet 2025</span>
      </h1>
      <h2 className="text-2xl text-gray-700 mb-6">
        Flip through the pages to discover cutting-edge solutions and insights!
      </h2>

      <div id="book" className="rou relative">
        {/* Spiral Binding */}
        <div className="spiral-binding">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="spiral-hole"></div>
          ))}
        </div>

        {/* 👇 Hand icon shown permanently */}
        <Image
          src={handicon}
          alt="Tap to start"
          className="hand-animation w-12"
        />

        {/* Pages */}
        {[
          [
            "six",
            "Hyper-V-Solutions-Booklet-2025_page-0011.jpg",
            "Hyper-V-Solutions-Booklet-2025_page-0012.jpg",
          ],
          [
            "five",
            "Hyper-V-Solutions-Booklet-2025_page-0009.jpg",
            "Hyper-V-Solutions-Booklet-2025_page-0010.jpg",
          ],
          [
            "four",
            "Hyper-V-Solutions-Booklet-2025_page-0007.jpg",
            "Hyper-V-Solutions-Booklet-2025_page-0008.jpg",
          ],
          [
            "three",
            "Hyper-V-Solutions-Booklet-2025_page-0005.jpg",
            "Hyper-V-Solutions-Booklet-2025_page-0006.jpg",
          ],
          [
            "two",
            "Hyper-V-Solutions-Booklet-2025_page-0003.jpg",
            "Hyper-V-Solutions-Booklet-2025_page-0004.jpg",
          ],
          [
            "one",
            "Hyper-V-Solutions-Booklet-2025_page-0001.jpg",
            "Hyper-V-Solutions-Booklet-2025_page-0002.jpg",
          ],
        ].map(([id, front, back]) => (
          <div key={id}>
            <input type="checkbox" id={id} />
            <div id={`page${id}`} className="page">
              <div className="front">
                <img
                  src={`/bookletimages/${front}`}
                  className="w-full h-auto object-contain"
                  alt={`Page ${id} Front`}
                />
              </div>
              <div className="back">
                <img
                  src={`/bookletimages/${back}`}
                  className="w-full h-auto object-contain"
                  alt={`Page ${id} Back`}
                />
              </div>
              <label htmlFor={id}></label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PdfBookletViewer;
