import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Users, Star, Trophy } from 'lucide-react';

const StakeholdersSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-16 sm:py-20 bg-white dark:bg-darkBlue-950">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 tracking-tight px-2">
            About the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-600">Stakeholders</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-darkBlue-300 max-w-3xl mx-auto font-sans leading-relaxed px-4">
            Meet the visionary leaders behind our commitment to excellence in physiotherapy care
          </p>
        </motion.div>

        {/* CEO Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-gray-50 to-white dark:from-darkBlue-900 dark:to-darkBlue-800 rounded-2xl p-6 sm:p-8 lg:p-12 shadow-xl border border-gray-200 dark:border-darkBlue-800">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 items-center">
              
              {/* CEO Photo */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex justify-center lg:justify-start"
              >
                <div className="relative">
                  <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-primary-200 dark:border-primary-800 shadow-2xl">
                    <img 
                      src="/Kunal.jpg"
                      alt="Dr. Kunal Habde - CEO & Founder"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Award Badge */}
                  <div className="absolute -top-2 -right-2 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg">
                    <Award className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                </div>
              </motion.div>

              {/* CEO Information */}
              <div className="lg:col-span-2 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 tracking-tight">
                    Dr. Kunal Habde
                  </h3>
                  <p className="text-lg sm:text-xl text-primary-600 dark:text-primary-400 font-display font-semibold mb-4 sm:mb-6 tracking-wide">
                    CEO & Founder
                  </p>

                  {/* Padma Bhushan Award Highlight */}
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl p-4 sm:p-6 mb-4 sm:mb-6 border border-yellow-200 dark:border-yellow-800">
                    <div className="flex items-center justify-center lg:justify-start space-x-3 mb-2">
                      <Trophy className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-600 dark:text-yellow-400" />
                      <span className="text-lg sm:text-xl font-display font-bold text-yellow-700 dark:text-yellow-300">
                        Bharat Vibhushan Awardee
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-yellow-700 dark:text-yellow-300 font-sans leading-relaxed">
                      Honoring the remarkable individuals and organizations making outstanding contributions in healthcare and physiotherapy.
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-darkBlue-300 font-sans leading-relaxed mb-4 sm:mb-6">
                    With over 25 years of experience in physiotherapy and healthcare management, Dr. Kumar has revolutionized rehabilitation services across India. His vision of accessible, quality physiotherapy care has transformed thousands of lives and established new standards in the industry.
                  </p>

                  {/* Key Achievements */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 sm:w-5 sm:h-5 text-primary-500" />
                      <span className="text-xs sm:text-sm text-gray-600 dark:text-darkBlue-300 font-sans">25+ Years Experience</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 sm:w-5 sm:h-5 text-primary-500" />
                      <span className="text-xs sm:text-sm text-gray-600 dark:text-darkBlue-300 font-sans">50,000+ Patients Treated</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="w-4 h-4 sm:w-5 sm:h-5 text-primary-500" />
                      <span className="text-xs sm:text-sm text-gray-600 dark:text-darkBlue-300 font-sans">Multiple Healthcare Awards</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-primary-500" />
                      <span className="text-xs sm:text-sm text-gray-600 dark:text-darkBlue-300 font-sans">Industry Pioneer</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-8 sm:mt-12"
        >
          <div className="max-w-4xl mx-auto bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6 sm:p-8 border border-primary-200 dark:border-primary-800">
            <h4 className="text-lg sm:text-xl font-display font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Our Vision
            </h4>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-darkBlue-300 font-sans leading-relaxed italic">
              "To make quality physiotherapy care accessible to every individual across India, empowering them to live pain-free, active lives through innovative treatment approaches and compassionate care."
            </p>
            <p className="text-sm sm:text-base text-primary-600 dark:text-primary-400 font-display font-semibold mt-3 sm:mt-4">
              - Dr. Kunal Habde
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StakeholdersSection;