import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { Moon, Sun, Phone, Calendar } from 'lucide-react';
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
      className="fixed top-0 left-0 right-0 z-50 bg-white/20 dark:bg-black/30 backdrop-blur-xl border-b border-gray-200/20 dark:border-gray-800/20 w-full"
    >
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 w-full">
          {/* Logo and Company Name */}
          <motion.div 
            className="flex items-center space-x-1 sm:space-x-3 cursor-pointer flex-shrink-0 min-w-0 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
            onClick={handleLogoClick}
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center">
              <img src="/OphysioHD_logo.png" alt="Ophysio Logo" />
            </div>
            <span className="text-base sm:text-xl lg:text-2xl font-display font-bold text-gray-900 dark:text-white tracking-tight truncate drop-shadow-sm">
              OPHYSIO.
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 flex-shrink-0">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg bg-white/30 dark:bg-black/40 text-gray-700 dark:text-gray-200 hover:bg-white/50 dark:hover:bg-black/60 transition-all duration-200 backdrop-blur-md border border-white/20 dark:border-gray-700/30 shadow-lg"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleContactUs}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/30 dark:bg-black/40 text-gray-700 dark:text-gray-200 hover:bg-white/50 dark:hover:bg-black/60 transition-all duration-200 font-medium backdrop-blur-md border border-white/20 dark:border-gray-700/30 shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span className="font-sans">Contact Us</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBookService}
              className="flex items-center space-x-2 px-6 py-2 rounded-lg bg-primary-500/70 text-white hover:bg-primary-600/80 transition-all duration-200 font-semibold font-sans backdrop-blur-md border border-primary-400/30 shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Service</span>
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-1 flex-shrink-0">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg bg-white/30 dark:bg-black/40 text-gray-700 dark:text-gray-200 backdrop-blur-md border border-white/20 dark:border-gray-700/30 shadow-lg"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleContactUs}
              className="p-2 rounded-lg bg-white/30 dark:bg-black/40 text-gray-700 dark:text-gray-200 backdrop-blur-md border border-white/20 dark:border-gray-700/30 shadow-lg"
            >
              <Phone className="w-4 h-4" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBookService}
              className="p-2 rounded-lg bg-primary-500/70 text-white backdrop-blur-md border border-primary-400/30 shadow-lg"
            >
              <Calendar className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;