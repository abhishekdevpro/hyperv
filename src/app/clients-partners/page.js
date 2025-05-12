'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Logos from '@/sections/Logos';

const clientsData = {
  corporate: [
    'Ford Motor Company',
    'Capital One',
    'Bank of America',
    'Wells Fargo',
    'First Citizens Bank',
    'Fannie Mae & Freddie Mac&apos;s',
  ],
  healthcare: [
    'BlueCross BlueShield (BCBS)',
    'Aetna',
    'CVS Health',
  ],
  retail: [
    'Walmart',
  ],
  government: [
    'U.S. Federal Government',
    'Multiple U.S. State Governments',
    'University of South Carolina',
  ],
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ClientsPartners() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white pt-32 pb-20 md:py-40">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/50"></div>
        
        {/* Animated Circles */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <motion.div
            className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-blue-400/20 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.2, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-blue-300/20 blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-100 text-sm font-medium">
                Trusted Partnerships
              </span>
            </motion.div>
            
            <h1 className="text-4xl md:text-7xl font-bold mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
              Our Clients & Partners
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-2xl max-w-3xl mx-auto text-blue-100 leading-relaxed px-4"
            >
              Trusted by Industry Leaders, Institutions & Governments
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 md:mt-12 flex justify-center gap-4"
            >
              <div className="h-1 w-12 md:w-20 bg-blue-400/50 rounded-full"></div>
              <div className="h-1 w-12 md:w-20 bg-blue-400 rounded-full"></div>
              <div className="h-1 w-12 md:w-20 bg-blue-400/50 rounded-full"></div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-6 h-10 border-2 border-blue-300 rounded-full flex justify-center"
          >
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-1 h-2 bg-blue-300 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed px-4">
              At Hyper V Solutions, we take pride in building solutions that empower institutions, 
              governments, and businesses across sectors. Over the years, we&apos;ve had the privilege 
              of serving some of the most respected and influential organizations in the world. 
              These trusted relationships reflect our commitment to innovation, integrity, and execution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Clients List */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Corporate & Financial Sector */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-gray-800 px-4">Corporate & Financial Sector</h2>
            <ul className="space-y-3 md:space-y-4">
              {clientsData.corporate.map((client, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center text-base md:text-lg text-gray-700 px-4"
                >
                  <span className="text-blue-600 mr-3">•</span>
                  {client}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Healthcare & Insurance */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-gray-800 px-4">Healthcare & Insurance</h2>
            <ul className="space-y-3 md:space-y-4">
              {clientsData.healthcare.map((client, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center text-base md:text-lg text-gray-700 px-4"
                >
                  <span className="text-blue-600 mr-3">•</span>
                  {client}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Retail & Enterprise */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-gray-800 px-4">Retail & Enterprise</h2>
            <ul className="space-y-3 md:space-y-4">
              {clientsData.retail.map((client, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center text-base md:text-lg text-gray-700 px-4"
                >
                  <span className="text-blue-600 mr-3">•</span>
                  {client}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Government & Education */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-gray-800 px-4">Government & Education</h2>
            <ul className="space-y-3 md:space-y-4">
              {clientsData.government.map((client, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center text-base md:text-lg text-gray-700 px-4"
                >
                  <span className="text-blue-600 mr-3">•</span>
                  {client}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <Logos />

      {/* Results Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8 text-gray-800">We Deliver Results That Matter</h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed px-4">
              Our platforms power real-world solutions across education, workforce, healthcare, 
              legal tech, rehabilitation, and beyond. These partnerships represent more than 
              client names — they are success stories built on trust, execution, and mutual growth.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 