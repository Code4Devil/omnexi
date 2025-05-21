import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { CheckCircle, ArrowRight } from 'lucide-react';

const ServiceDetailPage = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = SERVICES.find((s) => s.id === serviceId);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Dynamically import the icon
  const IconComponent = React.lazy(() => {
    return import('lucide-react').then((module) => ({
      default: module[service.icon as keyof typeof module],
    }));
  });

  return (
    <div className="pt-20">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-8">
              <div className="p-4 bg-primary-50 rounded-full">
                <React.Suspense fallback={<div className="w-12 h-12"></div>}>
                  <IconComponent className="w-12 h-12 text-primary-600" />
                </React.Suspense>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-display font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-700 to-secondary-600">
              {service.title}
            </h1>
            
            <div className="bg-gray-50 p-6 rounded-xl mb-12">
              <p className="text-xl text-gray-700 text-center leading-relaxed">
                {service.description}
              </p>
            </div>

            <div className="space-y-12">
              {/* Full Description */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Overview</h2>
                <div className="space-y-4">
                  {service.fullDescription.map((paragraph, index) => (
                    <p key={index} className="text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="text-primary-600 mt-1 mr-3 flex-shrink-0" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="text-secondary-600 mt-1 mr-3 flex-shrink-0" size={20} />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-8 rounded-xl mt-12">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Ready to get started?</h3>
                <p className="text-gray-700 mb-6">
                  Contact our team today to discuss how our {service.title} can help your business thrive.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/contact"
                    className="px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg hover:shadow-lg transition-all duration-300 text-center"
                  >
                    Contact Us
                  </a>
                  <a
                    href="/get-started"
                    className="px-6 py-3 bg-white text-primary-700 border border-primary-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all duration-300 text-center"
                  >
                    Learn About Our Process
                  </a>
                </div>
              </div>

              {/* Related Services */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Related Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {SERVICES.filter(s => s.id !== service.id)
                    .slice(0, 3)
                    .map((relatedService) => (
                      <a
                        key={relatedService.id}
                        href={`/services/${relatedService.id}`}
                        className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group"
                      >
                        <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                          {relatedService.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {relatedService.description}
                        </p>
                        <div className="flex items-center text-primary-600 font-medium">
                          Learn more <ArrowRight className="ml-2 group-hover:ml-3 transition-all duration-300" size={16} />
                        </div>
                      </a>
                    ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;
