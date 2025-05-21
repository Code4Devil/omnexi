import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { TEAM_MEMBERS } from '../constants';

const AboutPage = () => {
  return (
    <div className="pt-20">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-700 to-secondary-600">
              About Omnexi Solutions
            </h1>
            <p className="text-lg text-gray-700">
              Leading the way in digital transformation since 2018
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Founded in 2018, Omnexi Solutions has grown from a small IT consultancy to a leading provider of comprehensive digital solutions. Our journey has been marked by continuous innovation, unwavering commitment to excellence, and a deep understanding of evolving technology landscapes.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Industry-certified experts",
                  "24/7 dedicated support",
                  "Global reach, local touch",
                  "Innovation-driven approach",
                  "Custom-tailored solutions",
                  "Proven track record"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="text-primary-600 mt-1 mr-2 flex-shrink-0" size={18} />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-xl p-8"
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                To empower organizations through innovative technology solutions that drive growth, efficiency, and competitive advantage in the digital economy. We strive to be the catalyst for digital transformation, helping businesses navigate the complexities of modern technology while maintaining security and scalability.
              </p>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-2">Vision</h3>
                  <p className="text-gray-600">
                    To be the global leader in innovative IT solutions, recognized for excellence in digital transformation.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-2">Values</h3>
                  <p className="text-gray-600">
                    Innovation, Integrity, Excellence, Client Success, Continuous Learning
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-20"
          >
            <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {TEAM_MEMBERS.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-primary-600 font-medium mb-4">{member.position}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;