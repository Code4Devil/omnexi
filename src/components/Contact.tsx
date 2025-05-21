import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, ArrowRight, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        company: '',
        message: '',
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-700 to-secondary-600">
            Let's Start Your Digital Transformation
          </h2>
          <p className="text-lg text-gray-700">
            Ready to elevate your business with cutting-edge IT solutions? Reach out to our expert team today.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 bg-gradient-to-br from-primary-700 to-primary-900 text-white rounded-xl overflow-hidden shadow-xl"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <p className="mb-8">Fill out the form and our team will get back to you within 24 hours.</p>

                <div className="space-y-6">
                 

                  <div className="flex items-start">
                    <Mail className="mt-1 mr-4 flex-shrink-0" size={18} />
                    <div>
                      <p className="text-primary-100 text-sm">Email</p>
                      <p className="font-medium">info@omnexisolutions.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="mt-1 mr-4 flex-shrink-0" size={18} />
                    <div>
                      <p className="text-primary-100 text-sm">Office</p>
                      <p className="font-medium">BDA Tower, 2nd Floor, Konadasapura,</p>
                      <p> Bengaluru, Karnataka 560067</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-primary-600">
                  <p className="font-medium mb-4">Business Hours</p>
                  <p className="text-primary-100 text-sm">Monday - Friday</p>
                  <p className="font-medium mb-2">9:00 AM - 6:00 PM IST</p>
                  <p className="text-primary-100 text-sm">Saturday</p>
                  <p className="font-medium">10:00 AM - 2:00 PM IST</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3 bg-white rounded-xl shadow-lg p-8"
            >
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-12">
                  <CheckCircle className="text-green-500 mb-4" size={64} />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-lg text-gray-700 mb-8">
                    Thank you for reaching out. Our team will contact you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-3 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors duration-300"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company (Optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formState.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      How can we help?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                      placeholder="Tell us about your project or inquiry..."
                    ></textarea>
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="consent"
                      required
                      className="mt-1 mr-2"
                    />
                    <label htmlFor="consent" className="text-sm text-gray-700">
                      I agree to Omnexi's privacy policy and terms of service.
                    </label>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-primary-600 to-primary-700 text-white font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
                    >
                      Send Message <ArrowRight className="ml-2" size={16} />
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;