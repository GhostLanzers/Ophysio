import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Activity, Shield, Zap } from 'lucide-react';
import { services } from '../data/services';

const HeroSection: React.FC = () => {
  // Create a doubled array for seamless scrolling
  const scrollingServices = [...services, ...services];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-black dark:via-darkBlue-950 dark:to-darkBlue-900 pt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          
          {/* Left Side - Scrolling Services */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="text-center lg:text-left">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 dark:text-white mb-6 tracking-tight leading-tight"
              >
                Your Path to
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-600 font-serif"> Recovery</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-600 dark:text-darkBlue-300 mb-8 font-sans leading-relaxed"
              >
                Professional physiotherapy services tailored to your unique needs
              </motion.p>
            </div>

            {/* Auto-scrolling Services List */}
            <div className="relative h-96 overflow-hidden rounded-xl bg-white/50 dark:bg-darkBlue-900/50 backdrop-blur-sm border border-gray-200 dark:border-darkBlue-800 shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/80 dark:to-darkBlue-900/80 z-10 pointer-events-none"></div>
              <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-white/80 dark:from-darkBlue-900/80 to-transparent h-12 z-10 pointer-events-none"></div>
              
              <motion.div 
                className="animate-scroll-up"
                style={{ 
                  animation: 'scroll-up 20s linear infinite',
                }}
              >
                {scrollingServices.map((service, index) => (
                  <div 
                    key={index}
                    className="p-6 border-b border-gray-200 dark:border-darkBlue-800 last:border-b-0"
                  >
                    <h3 className="text-lg font-display font-semibold text-gray-900 dark:text-white mb-2 tracking-wide">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-darkBlue-300 text-sm font-sans leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Logo and Features */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center space-y-8"
          >
            {/* Large Logo */}
            <motion.div 
              className="w-64 h-64 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center shadow-2xl animate-float"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Heart className="w-32 h-32 text-white" />
            </motion.div>

            {/* Feature Icons */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              <motion.div 
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center space-y-2 p-4 rounded-xl bg-white/60 dark:bg-darkBlue-800/60 backdrop-blur-sm border border-gray-200 dark:border-darkBlue-700"
              >
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                  <Activity className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-sm font-display font-medium text-gray-700 dark:text-darkBlue-300">Recovery</span>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center space-y-2 p-4 rounded-xl bg-white/60 dark:bg-darkBlue-800/60 backdrop-blur-sm border border-gray-200 dark:border-darkBlue-700"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="text-sm font-display font-medium text-gray-700 dark:text-darkBlue-300">Prevention</span>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center space-y-2 p-4 rounded-xl bg-white/60 dark:bg-darkBlue-800/60 backdrop-blur-sm border border-gray-200 dark:border-darkBlue-700"
              >
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <span className="text-sm font-display font-medium text-gray-700 dark:text-darkBlue-300">Performance</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;