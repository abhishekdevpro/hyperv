// // components/NotableUsers.jsx
// import Image from 'next/image';

// const companies = [
//   { name: 'Sony', logo: '/logos/sony.png' },
//   { name: 'Pfizer', logo: '/logos/pfizer.png' },
//   { name: 'RankMath', logo: '/logos/rankmath.png' },
//   { name: 'MetaMap', logo: '/logos/metamap.png' },
//   { name: 'Alibaba', logo: '/logos/alibaba.png' },
//   { name: 'OLX', logo: '/logos/olx.png' },
//   { name: 'PubNub', logo: '/logos/pubnub.png' },
//   { name: 'OpenAsApp', logo: '/logos/openasapp.png' },
//   { name: 'NorthOne', logo: '/logos/northone.png' },
//   { name: 'Zavvy', logo: '/logos/zavvy.png' },
//   { name: 'One Page Love', logo: '/logos/onepagelove.png' },
//   { name: 'Teads', logo: '/logos/teads.png' }
// ];

// export default function NotableUsers() {
//   return (
//     <section className="py-16 px-4 bg-white">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Notable Users</h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             You are in good company, our products have been used by people
//             from these companies on their projects.
//           </p>
//         </div>
        
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
//           {companies.map((company) => (
//             <div 
//               key={company.name} 
//               className="flex items-center justify-center p-6 border border-gray-200 rounded-lg bg-white hover:shadow-md transition-shadow duration-300"
//             >
//               <div className="relative h-12 w-full">
//                 {/* 
//                   In a real implementation, you would use Image component with actual images:
//                   <Image 
//                     src={company.logo} 
//                     alt={`${company.name} logo`}
//                     fill
//                     className="object-contain"
//                   />
//                 */}
//                 {/* For demo purposes, using div with company name */}
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <span className="font-medium text-gray-800">{company.name}</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// components/NotableUsers.jsx
import Image from 'next/image';

const companies = [
  { name: 'Sony', logo: '/logos/sony.png' },
  { name: 'Pfizer', logo: '/logos/pfizer.png' },
  { name: 'RankMath', logo: '/logos/rankmath.png' },
  { name: 'MetaMap', logo: '/logos/metamap.png' },
  { name: 'Alibaba', logo: '/logos/alibaba.png' },
  { name: 'OLX', logo: '/logos/olx.png' },
  { name: 'PubNub', logo: '/logos/pubnub.png' },
  { name: 'OpenAsApp', logo: '/logos/openasapp.png' },
  { name: 'NorthOne', logo: '/logos/northone.png' },
  { name: 'Zavvy', logo: '/logos/zavvy.png' },
  { name: 'One Page Love', logo: '/logos/onepagelove.png' },
  { name: 'Teads', logo: '/logos/teads.png' }
];

export default function NotableUsers() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Notable Users
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            You are in good company — our products have been used by teams from these amazing companies.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex items-center justify-center h-24 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition duration-300"
            >
              <div className="relative w-32 h-12">
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  layout="fill"
                  objectFit="contain"
                  className="p-2"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
