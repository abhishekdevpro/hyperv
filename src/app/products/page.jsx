'use client';
import React from 'react';

import ProductsAndTools from '@/sections/Product';
import Footer from '../components/Footer';
import UpcomingProjects from '@/sections/UpcomingProjects';

const Products = () => {
  return (
    <div className="  bg-gray-50">
      {/* Introduction Section */}
      <section
        className="mb-12 text-center py-16 px-8 pt-40 shadow-lg"
        style={{
          background: 'linear-gradient(135deg, #1e3a8a, #9333ea)',
          color: '#ffffff',
        }}
      >
        <h1 className="text-6xl font-extrabold mb-6 tracking-tight">
          Explore Our Innovative AI-Enabled Products
        </h1>
        <p className="text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
          At HyperV Solutions, we craft intelligent, scalable, and future-ready solutions designed to transform how businesses operate in the digital age. From cutting-edge HR automation tools to robust EdTech platforms and AI-powered career services, each product is built with performance, security, and user experience in mind.
        </p>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto">
          Browse through our range of live solutions below, followed by a sneak peek into our upcoming innovations that are set to redefine industry standards.
        </p>
      </section>

      {/* Product Section */}
      <section className="mb-12">
        <ProductsAndTools />
      </section>

  <section className="mb-12">
      <UpcomingProjects />
      </section>
      {/* Upcoming Products Section */}
      <section className="mb-12 bg-white shadow-md rounded-lg p-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Upcoming Innovations
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-6 text-center">
          Stay tuned for our upcoming products that are set to revolutionize the industry. We are constantly innovating to bring you the best solutions for your business needs.
        </p>
        <ul className="list-none space-y-4">
          <li className="flex items-center space-x-3">
            <span className="inline-block w-3 h-3 bg-blue-500 rounded-full"></span>
            <span className="text-lg text-gray-700">AI-Powered Analytics Platform</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="inline-block w-3 h-3 bg-blue-500 rounded-full"></span>
            <span className="text-lg text-gray-700">Next-Gen Collaboration Tools</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="inline-block w-3 h-3 bg-blue-500 rounded-full"></span>
            <span className="text-lg text-gray-700">Advanced Cybersecurity Solutions</span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Products;