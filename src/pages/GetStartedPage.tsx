import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';

const PACKAGES = [
  {
    name: 'Starter',
    price: '$999',
    description: 'Perfect for small businesses starting their digital journey',
    features: [
      'Initial IT Assessment',
      'Basic Cloud Setup',
      'Email Configuration',
      '5 Hours Technical Support',
      'Security Basics',
    ],
  },
  {
    name: 'Professional',
    price: '$2,499',
    description: 'Comprehensive solution for growing businesses',
    features: [
      'Full IT Infrastructure Audit',
      'Advanced Cloud Integration',
      'Custom Security Protocol',
      '24/7 Priority Support',
      'Employee Training',
      'Disaster Recovery Plan',
    ],
    recommended: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Tailored solutions for large organizations',
    features: [
      'Enterprise Architecture Planning',
      'Multi-Cloud Strategy',
      'Advanced Security Suite',
      'Dedicated Support Team',
      'Custom Development',
      'AI Integration',
      'Full Digital Transformation',
    ],
  },
];

const GetStartedPage = () => {
  return (
    <div className="pt-20">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm: px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-700 to-secondary-600">
              Start Your Digital Transformation
            </h1>
            <p className="text-lg text-gray-700">
              Choose the perfect package to begin your journey towards digital excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {PACKAGES.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-white rounded-xl shadow-lg overflow-hidden ${
                  pkg.recommended ? 'ring-2 ring-primary-500' : ''
                }`}
              >
                {pkg.recommended && (
                  <div className="absolute top-4 right-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Recommended
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{pkg.price}</span>
                    {pkg.price !== 'Custom' && <span className="text-gray-600">/package</span>}
                  </div>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <CheckCircle className="text-primary-500 mt-1 mr-2 flex-shrink-0" size={18} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/consultation"
                    className="w-full px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-300 flex items-center justify-center"
                  >
                    Get Started <ArrowRight className="ml-2" size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl font-bold mb-4">Not sure which package is right for you?</h2>
            <p className="text-gray-700 mb-8">
              Schedule a free consultation with our experts to discuss your specific needs and find the perfect solution for your business.
            </p>
            <Link
              to="/consultation"
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              Schedule Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GetStartedPage;