import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import { ArrowRight, Cloud, Workflow, Shield, Brain, Code, Lightbulb } from 'lucide-react';

const iconComponents = {
  Cloud,
  Workflow,
  Shield,
  Brain,
  Code,
  Lightbulb,
};

const ServicesPage = () => {
  return (
    <div className="pt-20">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-700 to-secondary-600">
              Our Services
            </h1>
            <p className="text-lg text-gray-700">
              Comprehensive IT solutions tailored to drive your business forward in the digital age.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-6">
                  {(() => {
                    const IconComponent = iconComponents[service.icon as keyof typeof iconComponents];
                    return IconComponent ? <IconComponent size={48} className="text-primary-600" /> : null;
                  })()}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link
                  to={`/services/${service.id}`}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group"
                >
                  Learn more <ArrowRight className="ml-2 group-hover:ml-3 transition-all duration-300" size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;