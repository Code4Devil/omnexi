import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cloud, Workflow, Shield, Brain, Code, Lightbulb, ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants';

const iconComponents = {
  Cloud,
  Workflow,
  Shield,
  Brain,
  Code,
  Lightbulb,
};

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-700 to-secondary-600">
            Comprehensive IT Services
          </h2>
          <p className="text-lg text-gray-700">
            Our expert team delivers innovative solutions to drive your business forward in the digital era.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SERVICES.map((service) => {
            const IconComponent = iconComponents[service.icon as keyof typeof iconComponents];
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary-200 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary-50 rounded-bl-full opacity-70 group-hover:scale-150 transition-transform duration-500 origin-top-right -z-10" />

                <div className="p-3 bg-primary-50 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors duration-300">
                  {IconComponent && <IconComponent className="text-primary-600" size={24} />}
                </div>

                <h3 className="text-xl font-display font-bold mb-3 text-gray-900">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <Link
                    to={`/services/${service.id}`}
                    className="text-primary-600 font-medium flex items-center text-sm hover:text-primary-700 transition-colors duration-300"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all duration-300" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;