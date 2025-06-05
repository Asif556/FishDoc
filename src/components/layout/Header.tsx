import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Fish, Menu, X } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Disease Detection', path: '/detection' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <motion.div
            whileHover={{ rotate: 15 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Fish 
              size={32} 
              className={`mr-2 ${isScrolled ? 'text-primary-600' : 'text-white'}`} 
              fill={isScrolled ? '#0074CC' : '#ffffff'} 
              strokeWidth={1.5} 
            />
          </motion.div>
          <span className={`text-xl font-heading font-bold ${isScrolled ? 'text-primary-600' : 'text-white'}`}>
            Fishdoc
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <NavLink 
              key={item.path}
              to={item.path}
              className={({ isActive }) => `
                text-base font-medium transition-all duration-200 relative
                ${isScrolled 
                  ? (isActive ? 'text-primary-600' : 'text-neutral-700 hover:text-primary-600') 
                  : (isActive ? 'text-white' : 'text-neutral-100 hover:text-white')}
                  after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] 
                  after:bg-current after:transition-all after:duration-200
                  ${isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
              `}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <button 
          className="md:hidden p-2 rounded-lg"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className={isScrolled ? 'text-neutral-800' : 'text-white'} size={24} />
          ) : (
            <Menu className={isScrolled ? 'text-neutral-800' : 'text-white'} size={24} />
          )}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="container-custom py-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => `
                    text-base font-medium py-2 px-4 rounded-lg transition-all duration-200
                    ${isActive 
                      ? 'text-white bg-primary-600' 
                      : 'text-neutral-700 hover:text-primary-600 hover:bg-neutral-100'
                    }
                  `}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;