import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials';

const TestimonialsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visibleCount = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
    const result = [];
    for (let i = 0; i < visibleCount; i++) {
      result.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return result;
  };

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
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-600">Patients Say</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-darkBlue-300 max-w-3xl mx-auto font-sans leading-relaxed px-4">
            Real stories from real people who have experienced life-changing results with our physiotherapy services
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="flex items-center justify-center space-x-4 sm:space-x-6 mb-6 sm:mb-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="p-2 sm:p-3 rounded-full bg-primary-500 text-white hover:bg-primary-600 transition-colors shadow-lg"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary-500' : 'bg-gray-300 dark:bg-darkBlue-600'
                  }`}
                />
              ))}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="p-2 sm:p-3 rounded-full bg-primary-500 text-white hover:bg-primary-600 transition-colors shadow-lg"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <motion.div
                key={`${currentIndex}-${index}`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white dark:bg-darkBlue-900 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-darkBlue-800 relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 text-primary-200 dark:text-primary-800">
                  <Quote className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                
                {/* Title */}
                <h4 className="text-base sm:text-lg font-display font-semibold text-primary-600 dark:text-primary-400 mb-3 sm:mb-4 tracking-wide">
                  {testimonial.title}
                </h4>
                
                {/* Profile Picture */}
                <div className="flex justify-center mb-4 sm:mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-4 border-primary-200 dark:border-primary-800"
                  >
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
                
                {/* Stars */}
                <div className="flex justify-center mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                {/* Feedback */}
                <p className="text-sm sm:text-base text-gray-600 dark:text-darkBlue-300 leading-relaxed text-center mb-4 sm:mb-6 italic font-sans">
                  "{testimonial.feedback}"
                </p>
                
                {/* Name */}
                <p className="text-sm sm:text-base text-gray-900 dark:text-white font-display font-semibold text-center tracking-wide">
                  {testimonial.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;