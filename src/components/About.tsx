import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { TEAM_MEMBERS } from '../constants';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6">
              Who We Are
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-700 to-secondary-600">
              Pioneering IT Excellence Since 2018
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Omnexi Solutions was founded with a vision to bridge the gap between complex technology and business success. Our team of industry veterans brings decades of combined experience to solve your most challenging IT problems.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                "Industry-certified professionals",
                "Tailored solutions for every business size",
                "24/7 dedicated support team",
                "Transparent pricing, no hidden costs"
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="text-primary-600 mt-1 mr-2 flex-shrink-0" size={18} />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
              <p className="text-gray-700">
                To empower organizations through innovative technology solutions that drive growth, efficiency, and competitive advantage in the digital economy.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-8">
              Meet Our Leadership Team
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {TEAM_MEMBERS.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group border border-gray-100"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h4>
                    <p className="text-primary-600 font-medium text-sm mb-3">{member.position}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;