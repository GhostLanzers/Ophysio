import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { Heart, Moon, Sun, Phone, Calendar } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';

const Navbar: React.FC = () => {
  const { isDark, setIsDark } = useDarkMode();
  const navigate = useNavigate();
  const location = useLocation();

  const handleBookService = () => {
    navigate('/book');
  };

  const handleContactUs = () => {
    if (location.pathname === '/') {
      // Scroll to contact section if on home page
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page and then scroll to contact
      navigate('/', { state: { scrollToContact: true } });
    }
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-black/95 backdrop-blur-md border-b border-gray-200 dark:border-darkBlue-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Company Name */}
          <motion.div 
            className="flex items-center space-x-3 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
            onClick={handleLogoClick}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-display font-bold text-gray-900 dark:text-white tracking-tight">
              Ophysio physiotherapy.
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-darkBlue-800 text-gray-700 dark:text-darkBlue-200 hover:bg-gray-200 dark:hover:bg-darkBlue-700 transition-colors"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleContactUs}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-darkBlue-800 text-gray-700 dark:text-darkBlue-200 hover:bg-gray-200 dark:hover:bg-darkBlue-700 transition-colors font-medium"
            >
              <Phone className="w-4 h-4" />
              <span className="font-sans">Contact Us</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBookService}
              className="flex items-center space-x-2 px-6 py-2 rounded-lg bg-primary-500 text-white hover:bg-primary-600 transition-colors font-semibold font-sans"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Service</span>
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-darkBlue-800 text-gray-700 dark:text-darkBlue-200"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBookService}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-primary-500 text-white font-semibold font-sans"
            >
              <Calendar className="w-4 h-4" />
              <span>Book</span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;