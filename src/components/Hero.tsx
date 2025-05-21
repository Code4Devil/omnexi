import  { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import HeroModel from './3d/HeroModel';

const Hero = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 md:pl-10"
    >
      <div className="absolute inset-0 bg-gradient-radial from-primary-100/30 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={animated ? "show" : "hidden"}
            className="lg:max-w-xl"
          >
            <motion.div 
              variants={itemVariants}
              className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6"
            >
              Next-Generation IT Solutions
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-900 via-primary-700 to-secondary-700"
            >
              From Concept to Code — Delivering Digital Brilliance.
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-700 mb-8 leading-relaxed"
            >
              Omnexi Solutions delivers cutting-edge IT services that drive innovation, efficiency, and growth. Our expert team crafts tailored solutions to meet your unique business challenges.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-primary-600 to-primary-700 text-white font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-center"
              >
                Get Started
              </a>
              <a 
                href="#services" 
                className="px-6 py-3 rounded-lg border border-primary-200 bg-white text-primary-700 font-medium hover:bg-primary-50 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Explore Services <ArrowRight size={16} />
              </a>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="mt-10 py-4 px-6 rounded-lg bg-white/80 backdrop-blur-sm shadow-sm border border-gray-100"
            >
              <p className="text-sm font-medium text-gray-500 mb-2">Trusted by industry leaders</p>
              <div className="flex flex-wrap gap-4 items-center">
                {['Vertex', 'Meridian', 'TechNova', 'Quantum'].map((client, index) => (
                  <span 
                    key={index} 
                    className="text-sm font-medium text-gray-800"
                  >
                    {client}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative h-[400px] lg:h-[500px] w-full hidden lg:block"
          >
            <HeroModel />
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            duration: 1,
            delay: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5
          }}
        >
          <a href="#services" className="flex flex-col items-center">
            <span className="text-sm text-gray-500 mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-primary-300 rounded-full flex justify-center p-1">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-1 h-1 bg-primary-500 rounded-full"
              />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;