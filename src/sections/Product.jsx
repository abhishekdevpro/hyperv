
// import React from 'react';
// import Link from 'next/link';

// const ProductCard = ({ logo, title, description, viewProductLink }) => {
//   return (
//     <div className="flex flex-col md:flex-row items-stretch gap-6 rounded-xl shadow-md bg-white p-6 hover:shadow-lg transition-shadow duration-300">
//       <div className="w-full md:w-1/2 flex items-start">
//         {logo}
//         <div className="ml-4">
//           <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
//           {description && <p className="text-sm mt-2 text-gray-700">{description}</p>}
//           <Link href={viewProductLink}>
//             <span className="inline-block mt-4 uppercase text-xs font-semibold tracking-wider text-blue-600 hover:underline">
//               View Product
//             </span>
//           </Link>
//         </div>
//       </div>
//       <div className="w-full md:w-1/2">
//         <div className="border border-gray-200 rounded-lg overflow-hidden h-full flex items-center justify-center bg-gray-50">
//           <div className="p-4 text-center text-gray-400 text-sm">
//             {/* Replace with actual image or screenshot */}
//             Product Screenshot
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const ProductsAndTools = () => {
//   const products = [
//     {
//       logo: (
//         <div className="bg-blue-100 p-3 rounded-lg">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//           </svg>
//         </div>
//       ),
//       title: "Website Templates, Components, Web Design Inspirations and Tiny Developer Tools.",
//       description: "",
//       viewProductLink: "#graygrids",
//     },
//     {
//       logo: (
//         <div className="bg-purple-100 p-3 rounded-lg">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//           </svg>
//         </div>
//       ),
//       title: "840+ Line Icons for Designers and Developers with Free CDN, Multiple Variations, Icon Editor & More.",
//       description: "",
//       viewProductLink: "#lineicons",
//     },
//     {
//       logo: (
//         <div className="bg-indigo-100 p-3 rounded-lg">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
//           </svg>
//         </div>
//       ),
//       title: "Ready to use 500+ Tailwind CSS UI Components and Blocks crafted for Tailwind CSS.",
//       description: "",
//       viewProductLink: "#tailgrids",
//     },
//     {
//       logo: (
//         <div className="bg-green-100 p-3 rounded-lg">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//           </svg>
//         </div>
//       ),
//       title: "Landing Page Templates, Site Templates and UI Kits for Bootstrap and Tailwind CSS.",
//       description: "",
//       viewProductLink: "#uideck",
//     },
//   ];

//   return (
//     <div className="w-full bg-gray-50 py-16 px-4">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-extrabold text-gray-900">Products and Tools</h2>
//           <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
//             Our extensively crafted products and tools could prove valuable for your upcoming web projects.
//           </p>
//         </div>
//         <div className="space-y-10">
//           {products.map((product, index) => (
//             <ProductCard
//               key={index}
//               logo={product.logo}
//               title={product.title}
//               description={product.description}
//               viewProductLink={product.viewProductLink}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductsAndTools;
import React from 'react';
import Link from 'next/link';

const ProductCard = ({ logo, title, description, viewProductLink, isReversed }) => {
  return (
    <div className="flex flex-col md:flex-row items-stretch gap-6 rounded-xl shadow-md bg-white p-6 hover:shadow-lg transition-shadow duration-300">
      {/* Conditionally render content based on isReversed flag */}
      {isReversed ? (
        // Image on the left, text on the right for even items
        <>
          <div className="w-full md:w-1/2">
            <div className="border border-gray-200 rounded-lg overflow-hidden h-full flex items-center justify-center bg-gray-50">
              <div className="p-4 text-center text-gray-400 text-sm">
                {/* Replace with actual image or screenshot */}
                Product Screenshot
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex items-start">
            {logo}
            <div className="ml-4">
              <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
              {description && <p className="text-sm mt-2 text-gray-700">{description}</p>}
              <Link href={viewProductLink}>
                <span className="inline-block mt-4 uppercase text-xs font-semibold tracking-wider text-blue-600 hover:underline">
                  View Product
                </span>
              </Link>
            </div>
          </div>
        </>
      ) : (
        // Text on the left, image on the right for odd items
        <>
          <div className="w-full md:w-1/2 flex items-start">
            {logo}
            <div className="ml-4">
              <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
              {description && <p className="text-sm mt-2 text-gray-700">{description}</p>}
              <Link href={viewProductLink}>
                <span className="inline-block mt-4 uppercase text-xs font-semibold tracking-wider text-blue-600 hover:underline">
                  View Product
                </span>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="border border-gray-200 rounded-lg overflow-hidden h-full flex items-center justify-center bg-gray-50">
              <div className="p-4 text-center text-gray-400 text-sm">
                {/* Replace with actual image or screenshot */}
                Product Screenshot
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const ProductsAndTools = () => {
  const products = [
    {
      logo: (
        <div className="bg-blue-100 p-3 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
      ),
      title: "Website Templates, Components, Web Design Inspirations and Tiny Developer Tools.",
      description: "",
      viewProductLink: "#graygrids",
    },
    {
      logo: (
        <div className="bg-purple-100 p-3 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      ),
      title: "840+ Line Icons for Designers and Developers with Free CDN, Multiple Variations, Icon Editor & More.",
      description: "",
      viewProductLink: "#lineicons",
    },
    {
      logo: (
        <div className="bg-indigo-100 p-3 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
      ),
      title: "Ready to use 500+ Tailwind CSS UI Components and Blocks crafted for Tailwind CSS.",
      description: "",
      viewProductLink: "#tailgrids",
    },
    {
      logo: (
        <div className="bg-green-100 p-3 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      ),
      title: "Landing Page Templates, Site Templates and UI Kits for Bootstrap and Tailwind CSS.",
      description: "",
      viewProductLink: "#uideck",
    },
    {
      logo: (
        <div className="bg-red-100 p-3 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
        </div>
      ),
      title: "Design Resources and Tools for UI/UX Designers and Front-end Developers.",
      description: "",
      viewProductLink: "#designresources",
    },
    {
      logo: (
        <div className="bg-yellow-100 p-3 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
          </svg>
        </div>
      ),
      title: "Free and Premium Data Visualization Tools and Chart Libraries.",
      description: "",
      viewProductLink: "#datavis",
    },
  ];

  return (
    <div className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Products and Tools</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Our extensively crafted products and tools could prove valuable for your upcoming web projects.
          </p>
        </div>
        <div className="space-y-10">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              logo={product.logo}
              title={product.title}
              description={product.description}
              viewProductLink={product.viewProductLink}
              isReversed={index % 2 === 1} // Even indices (0-indexed) get normal layout, odd indices get reversed
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsAndTools;