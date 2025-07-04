import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, Heart, Shield, Zap } from 'lucide-react';
import { services } from '../data/services';

const ServicesSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const getVisibleServices = () => {
    const visibleCount = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
    const result = [];
    for (let i = 0; i < visibleCount; i++) {
      result.push(services[(currentIndex + i) % services.length]);
    }
    return result;
  };

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-darkBlue-300 max-w-3xl mx-auto font-sans leading-relaxed">
            Comprehensive physiotherapy solutions designed to restore function, reduce pain, and enhance your quality of life
          </p>
        </motion.div>

        {/* Services Carousel */}
        <div className="relative">
          <div className="flex items-center justify-center space-x-6 mb-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="p-3 rounded-full bg-primary-500 text-white hover:bg-primary-600 transition-colors shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            
            <div className="flex space-x-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary-500' : 'bg-gray-300 dark:bg-darkBlue-600'
                  }`}
                />
              ))}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="p-3 rounded-full bg-primary-500 text-white hover:bg-primary-600 transition-colors shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getVisibleServices().map((service, index) => (
              <motion.div
                key={`${currentIndex}-${index}`}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-darkBlue-900 dark:to-darkBlue-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-darkBlue-700"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl mb-6 mx-auto">
                  {index === 0 && <Heart className="w-8 h-8 text-white" />}
                  {index === 1 && <Shield className="w-8 h-8 text-white" />}
                  {index === 2 && <Zap className="w-8 h-8 text-white" />}
                </div>
                
                <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4 text-center tracking-wide">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-darkBlue-300 leading-relaxed text-center font-sans">
                  {service.description}
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 w-full py-3 bg-primary-500 text-white rounded-xl hover:bg-primary-600 transition-colors font-semibold font-sans"
                >
                  Learn More
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;