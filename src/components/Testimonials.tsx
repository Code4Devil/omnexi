import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  
  const next = () => {
    setCurrent((current + 1) % TESTIMONIALS.length);
  };
  
  const prev = () => {
    setCurrent((current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-700 to-secondary-600">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-700">
            Hear from the businesses we've helped transform through innovative IT solutions.
          </p>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-primary-50 rounded-full opacity-70 z-0" />
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-24 h-24 bg-secondary-50 rounded-full opacity-70 z-0" />
          
          <div className="relative z-10 bg-white rounded-2xl shadow-xl p-8 md:p-12 overflow-hidden">
            <Quote className="absolute top-6 left-6 text-primary-100" size={80} />
            
            <div className="relative z-10 min-h-[250px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col md:flex-row gap-8 items-center"
                >
                  <div className="w-full md:w-1/3 flex-shrink-0">
                    <div className="relative w-32 h-32 mx-auto">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-200 to-primary-400 animate-pulse-slow" />
                      <img 
                        src={TESTIMONIALS[current].image}
                        alt={TESTIMONIALS[current].name}
                        className="rounded-full object-cover w-full h-full border-4 border-white relative z-10"
                      />
                    </div>
                  </div>
                  
                  <div className="w-full md:w-2/3 flex flex-col">
                    <p className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                      "{TESTIMONIALS[current].quote}"
                    </p>
                    <div className="mt-auto">
                      <h4 className="text-xl font-bold text-gray-900">{TESTIMONIALS[current].name}</h4>
                      <p className="text-primary-600">{TESTIMONIALS[current].position}</p>
                      <p className="text-sm text-gray-500">{TESTIMONIALS[current].company}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <div className="flex justify-between mt-8">
              <button 
                onClick={prev}
                className="p-2 rounded-full bg-gray-100 hover:bg-primary-100 text-gray-700 hover:text-primary-700 transition-colors duration-300"
              >
                <ChevronLeft size={20} />
              </button>
              
              <div className="flex space-x-2">
                {TESTIMONIALS.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === current 
                        ? "bg-primary-600 w-6" 
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
              
              <button 
                onClick={next}
                className="p-2 rounded-full bg-gray-100 hover:bg-primary-100 text-gray-700 hover:text-primary-700 transition-colors duration-300"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-700 mb-8">Trusted by leading companies across industries</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-12">
            {["Vertex", "Meridian", "Stellar", "TechNova", "Global", "Emerge", "Summit", "Quantum"].map((name, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white px-4 py-2 rounded shadow-sm flex items-center justify-center"
              >
                <span className="text-gray-700 font-medium">{name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;