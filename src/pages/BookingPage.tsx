import React from 'react';
import { motion } from 'framer-motion';
import BookingCard from '../components/booking/BookingCard';

const BookingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-black dark:via-darkBlue-950 dark:to-darkBlue-900 pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            Book Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-600">Appointment</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-darkBlue-300 max-w-2xl mx-auto font-sans leading-relaxed">
            Schedule your physiotherapy session in just a few simple steps
          </p>
        </motion.div>
        
        <BookingCard />
      </div>
    </div>
  );
};

export default BookingPage;