import React from 'react';
import { motion } from 'framer-motion';
import BookingCard from '../components/booking/BookingCard';
import Footer from '../components/Footer';

const BookingPage: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-darkBlue-950 dark:via-darkBlue-900 dark:to-black pt-16 sm:pt-20 pb-8 sm:pb-12">
        <div className="w-full max-w-4xl mx-auto px-3 sm:px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-6 sm:mb-8"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 tracking-tight px-2">
              Book Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-600">Appointment</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-darkBlue-300 max-w-2xl mx-auto font-sans leading-relaxed px-4">
              Schedule your physiotherapy session in just a few simple steps
            </p>
          </motion.div>
          
          <BookingCard />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BookingPage;