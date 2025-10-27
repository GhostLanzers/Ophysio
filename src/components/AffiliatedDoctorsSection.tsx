import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Users, Stethoscope, Award, X, MapPin, Clock, Star } from 'lucide-react';

const AffiliatedDoctorsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const affiliatedDoctors = [
    {
      name: "Dr. Anita Sharma",
      specialization: "Sports Medicine & Rehabilitation",
      experience: "15+ Years",
      location: "Mumbai, Maharashtra",
      qualifications: ["MD Sports Medicine", "Fellowship in Orthopedic Rehabilitation", "Certified Manual Therapist"],
      availability: "Mon-Fri: 9:00 AM - 6:00 PM"
    },
    {
      name: "Dr. Vikram Patel",
      specialization: "Neurological Rehabilitation",
      experience: "12+ Years",
      location: "Pune, Maharashtra",
      qualifications: ["MD Physical Medicine", "Neurological Rehabilitation Specialist", "Stroke Recovery Expert"],
      availability: "Mon-Sat: 8:00 AM - 5:00 PM"
    },
    {
      name: "Dr. Meera Reddy",
      specialization: "Pediatric Physiotherapy",
      experience: "10+ Years",
      location: "Visakhapatnam, Andhra Pradesh",
      qualifications: ["MD Pediatric Medicine", "Child Development Specialist", "Early Intervention Expert"],
      availability: "Mon-Fri: 10:00 AM - 4:00 PM"
    },
    {
      name: "Dr. Rajesh Kumar",
      specialization: "Orthopedic Rehabilitation",
      experience: "18+ Years",
      location: "Nashik, Maharashtra",
      qualifications: ["MD Orthopedics", "Joint Replacement Specialist", "Arthritis Management Expert"],
      availability: "Mon-Sat: 9:00 AM - 7:00 PM"
    },
    {
      name: "Dr. Priya Joshi",
      specialization: "Geriatric Care & Pain Management",
      experience: "14+ Years",
      location: "Nagpur, Maharashtra",
      qualifications: ["MD Geriatric Medicine", "Chronic Pain Specialist", "Fall Prevention Expert"],
      availability: "Tue-Sat: 8:30 AM - 5:30 PM"
    },
    {
      name: "Dr. Arjun Singh",
      specialization: "Manual Therapy & Spine Care",
      experience: "16+ Years",
      location: "Kurnool, Andhra Pradesh",
      qualifications: ["MD Physical Medicine", "Spine Specialist", "Manual Therapy Certified"],
      availability: "Mon-Fri: 9:30 AM - 6:30 PM"
    }
  ];

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <section ref={ref} className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-darkBlue-950 dark:via-darkBlue-900 dark:to-black">
        <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 tracking-tight px-2">
              Affiliated <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-600">Doctors</span> with Ophysio
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-darkBlue-300 max-w-3xl mx-auto font-sans leading-relaxed px-4">
              Our network of experienced medical professionals ensures comprehensive care across all specializations
            </p>
          </motion.div>

          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white dark:bg-darkBlue-900 rounded-2xl p-6 sm:p-8 lg:p-12 shadow-xl border border-gray-200 dark:border-darkBlue-800">
              <div className="text-center">
                {/* Icon */}
                <div className="flex justify-center mb-6 sm:mb-8">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center shadow-lg">
                    <Stethoscope className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 tracking-tight">
                  Expert Medical Network
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-darkBlue-300 font-sans leading-relaxed mb-6 sm:mb-8 max-w-3xl mx-auto">
                  We collaborate with a distinguished network of specialized doctors across various medical fields. 
                  Our affiliated physicians bring decades of combined experience in sports medicine, neurological rehabilitation, 
                  pediatric care, orthopedics, geriatric medicine, and pain management.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  <div className="bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-xl p-4 sm:p-6">
                    <Users className="w-6 h-6 sm:w-8 sm:h-8 text-primary-500 mx-auto mb-2" />
                    <div className="text-2xl sm:text-3xl font-display font-bold text-gray-900 dark:text-white mb-1">
                      {/* {affiliatedDoctors.length}+ */}
                      50+
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-darkBlue-300 font-sans">
                      Affiliated Doctors
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-4 sm:p-6">
                    <Award className="w-6 h-6 sm:w-8 sm:h-8 text-green-500 mx-auto mb-2" />
                    <div className="text-2xl sm:text-3xl font-display font-bold text-gray-900 dark:text-white mb-1">
                      15+
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-darkBlue-300 font-sans">
                      Years Average Experience
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl p-4 sm:p-6">
                    <Star className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500 mx-auto mb-2" />
                    <div className="text-2xl sm:text-3xl font-display font-bold text-gray-900 dark:text-white mb-1">
                      10
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-darkBlue-300 font-sans">
                      Medical Specializations
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={openModal}
                  className="px-8 py-4 bg-primary-500 text-white rounded-xl hover:bg-primary-600 transition-colors font-semibold font-sans text-base sm:text-lg shadow-lg"
                >
                  View All Affiliated Doctors
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-darkBlue-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-darkBlue-800 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex-shrink-0 bg-white dark:bg-darkBlue-900 border-b border-gray-200 dark:border-darkBlue-800 p-6 rounded-t-2xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center">
                      <Stethoscope className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white">
                      Affiliated Doctors
                    </h2>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={closeModal}
                    className="p-2 rounded-lg bg-gray-100 dark:bg-darkBlue-800 text-gray-600 dark:text-darkBlue-300 hover:bg-gray-200 dark:hover:bg-darkBlue-700 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>

              {/* Content - Scrollable */}
              <div className="flex-1 overflow-y-auto scrollbar-hide p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {affiliatedDoctors.map((doctor, index) => (
                    <motion.div
                      key={doctor.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="bg-gray-50 dark:bg-darkBlue-800 rounded-xl p-6 border border-gray-200 dark:border-darkBlue-700"
                    >
                      <h3 className="text-lg font-display font-bold text-gray-900 dark:text-white mb-2">
                        {doctor.name}
                      </h3>
                      
                      <p className="text-primary-600 dark:text-primary-400 font-medium font-sans mb-3">
                        {doctor.specialization}
                      </p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-gray-600 dark:text-darkBlue-300">
                          <Award className="w-4 h-4 mr-2 text-green-500" />
                          <span className="font-sans">{doctor.experience} Experience</span>
                        </div>
                        
                        <div className="flex items-center text-sm text-gray-600 dark:text-darkBlue-300">
                          <MapPin className="w-4 h-4 mr-2 text-red-500" />
                          <span className="font-sans">{doctor.location}</span>
                        </div>
                        
                        <div className="flex items-center text-sm text-gray-600 dark:text-darkBlue-300">
                          <Clock className="w-4 h-4 mr-2 text-blue-500" />
                          <span className="font-sans">{doctor.availability}</span>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-display font-semibold text-gray-900 dark:text-white mb-2">
                          Qualifications
                        </h4>
                        <div className="space-y-1">
                          {doctor.qualifications.map((qualification, qIndex) => (
                            <div key={qIndex} className="flex items-center text-xs text-gray-600 dark:text-darkBlue-300">
                              <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2 flex-shrink-0"></div>
                              <span className="font-sans">{qualification}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AffiliatedDoctorsSection;