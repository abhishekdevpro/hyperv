// components/WebBuildSection.jsx
import React from 'react';

const stats = [
  { number: '15+', description: 'Products and Platforms' },
  { number: '10+', description: 'Team Members' },
  { number: '1M+', description: 'Users Worldwide' },
  { number: '8+', description: 'Years of Experience' }
];

export default function WebBuildSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center">
          {/* Left Column - Text Content */}
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              We love to build stuff for the web
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                Build better, faster, and more user-friendly digital solutions with our tools and products.
              </p>
              <p className="text-lg text-gray-700">
                We help web developers, startups, creators, and entrepreneurs by providing a reliable starting point that cuts their initial design and coding budget in half, bringing their projects closer to launch.
              </p>
            </div>
          </div>

          {/* Right Column - Stats Grid */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="border border-gray-200 bg-white p-6 flex flex-col items-center justify-center text-center">
                  <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                  <p className="text-gray-600">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}