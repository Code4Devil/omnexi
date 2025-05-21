import { Link } from 'react-router-dom';
import { Server, ChevronRight } from 'lucide-react';
import { SERVICES } from '../constants';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Server className="h-8 w-8 text-primary-400 mr-2" />
              <span className="text-2xl font-display font-bold text-white">
                Omnexi Solutions
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering businesses through innovative technology solutions that drive growth, efficiency, and competitive advantage in the digital economy.
            </p>
            <div className="mt-6">
              <p className="text-gray-400 mb-1">info@omnexisolutions.com</p>
              
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.id}`}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <ChevronRight size={16} className="mr-1" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                  <ChevronRight size={16} className="mr-1" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                  <ChevronRight size={16} className="mr-1" />
                  Team
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                  <ChevronRight size={16} className="mr-1" />
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                  <ChevronRight size={16} className="mr-1" />
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                  <ChevronRight size={16} className="mr-1" />
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/get-started" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                  <ChevronRight size={16} className="mr-1" />
                  Get Started
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                  <ChevronRight size={16} className="mr-1" />
                  All Services
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center md:flex md:justify-between md:items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} Omnexi Solutions. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6">
            <Link to="/contact" className="text-gray-500 hover:text-gray-300 transition-colors duration-300">
              Contact
            </Link>
            <Link to="/about" className="text-gray-500 hover:text-gray-300 transition-colors duration-300">
              About
            </Link>
            <Link to="/services" className="text-gray-500 hover:text-gray-300 transition-colors duration-300">
              Services
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;