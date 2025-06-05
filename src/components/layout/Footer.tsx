import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Fish, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Send 
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-800 text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Fish size={24} className="mr-2" fill="#ffffff" strokeWidth={1.5} />
              <span className="text-xl font-heading font-bold">fishdoc</span>
            </div>
            <p className="text-neutral-300 mb-4">
              Advanced fish disease detection using cutting-edge AI technology to help 
              fish farmers and enthusiasts maintain healthy aquatic environments.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-300 hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-neutral-300 hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-neutral-300 hover:text-primary-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-neutral-300 hover:text-primary-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/detection" className="text-neutral-300 hover:text-white transition-colors">
                  Disease Detection
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0 text-primary-400" />
                <span className="text-neutral-300">
                  123 Aquatic Drive, Marine City, Ocean State 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0 text-primary-400" />
                <span className="text-neutral-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0 text-primary-400" />
                <span className="text-neutral-300">info@fishdoc.com</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-neutral-300 mb-4">
              Subscribe to our newsletter for the latest updates on fish health and technology.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-l-lg bg-neutral-700 text-white border-none focus:outline-none focus:ring-2 focus:ring-primary-500 w-full"
              />
              <button 
                type="submit" 
                className="bg-primary-600 hover:bg-primary-700 transition-colors px-4 py-2 rounded-r-lg"
              >
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-neutral-700 mt-8 pt-6 text-center text-neutral-400">
          <p>&copy; {currentYear} fishdoc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;