import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Globe } from 'lucide-react';
import { statesAndCities } from '../data/locations';

const ServiceLocationsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Get random cities from all available cities
  const getAllCities = () => {
    const allCities: string[] = [];
    statesAndCities.forEach(state => {
      allCities.push(...state.cities);
    });
    return allCities;
  };

  const getRandomCities = (count: number) => {
    const allCities = getAllCities();
    const shuffled = [...allCities].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const displayCities = getRandomCities(12); // Show 12 random cities

  return (
    <section ref={ref} className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-darkBlue-950 dark:via-darkBlue-900 dark:to-black">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 tracking-tight px-2">
            Our Service <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-600">Locations</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-darkBlue-300 max-w-3xl mx-auto font-sans leading-relaxed px-4">
            We're proud to serve patients across multiple cities with our expert physiotherapy services
          </p>
        </motion.div>

        {/* City Blocks */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6 mb-12 sm:mb-16">
          {displayCities.map((city, index) => (
            <motion.div
              key={city}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white dark:bg-darkBlue-900 rounded-xl p-3 sm:p-4 lg:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-darkBlue-800 text-center group cursor-pointer"
            >
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary-500 mx-auto mb-2 sm:mb-3 group-hover:text-primary-600 transition-colors" />
              <h3 className="text-xs sm:text-sm lg:text-base font-display font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors tracking-wide">
                {city}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Expansion Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-white dark:bg-darkBlue-900 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl border border-gray-200 dark:border-darkBlue-800 text-center"
        >
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
              <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
          </div>
          
          <h3 className="text-lg sm:text-xl lg:text-2xl font-display font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 tracking-wide">
            Expanding Across India
          </h3>
          
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-darkBlue-300 font-sans leading-relaxed max-w-4xl mx-auto mb-4 sm:mb-6">
            We are rapidly expanding our services throughout India, reaching every state and every city very soon. 
            To get immediate service in locations where we aren't available yet, please reach out to us or book an online session.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-6 py-3 bg-primary-500 text-white rounded-xl hover:bg-primary-600 transition-colors font-semibold font-sans text-sm sm:text-base"
            >
              Contact Us
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                window.location.href = '/book';
              }}
              className="px-6 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors font-semibold font-sans text-sm sm:text-base"
            >
              Book Online Session
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceLocationsSection;