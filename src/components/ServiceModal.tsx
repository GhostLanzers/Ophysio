import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, Shield, Zap, Activity, Users, Clock, Award, CheckCircle } from 'lucide-react';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    description: string;
  } | null;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onClose, service }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!service) return null;

  const getServiceIcon = (title: string) => {
    if (title.includes('Sports')) return Heart;
    if (title.includes('Manual')) return Shield;
    if (title.includes('Orthopedic')) return Zap;
    if (title.includes('Neurological')) return Activity;
    if (title.includes('Pediatric')) return Users;
    if (title.includes('Geriatric')) return Clock;
    if (title.includes('Workplace')) return Award;
    return CheckCircle;
  };

  const getDetailedInfo = (title: string) => {
    const serviceDetails: Record<string, any> = {
      'Sports Injury Rehabilitation': {
        duration: '45-60 minutes',
        sessions: '6-12 sessions typically',
        techniques: ['Movement Analysis', 'Strength Training', 'Flexibility Work', 'Sport-Specific Exercises'],
        benefits: ['Faster Recovery', 'Injury Prevention', 'Performance Enhancement', 'Safe Return to Sport'],
        conditions: ['Muscle Strains', 'Ligament Injuries', 'Joint Sprains', 'Overuse Injuries']
      },
      'Manual Therapy': {
        duration: '30-45 minutes',
        sessions: '4-8 sessions typically',
        techniques: ['Joint Mobilization', 'Soft Tissue Massage', 'Trigger Point Release', 'Myofascial Release'],
        benefits: ['Pain Relief', 'Improved Mobility', 'Better Circulation', 'Muscle Relaxation'],
        conditions: ['Back Pain', 'Neck Stiffness', 'Joint Restrictions', 'Muscle Tension']
      },
      'Orthopedic Physiotherapy': {
        duration: '45-60 minutes',
        sessions: '8-16 sessions typically',
        techniques: ['Exercise Therapy', 'Manual Techniques', 'Electrotherapy', 'Gait Training'],
        benefits: ['Pain Reduction', 'Improved Function', 'Faster Healing', 'Prevent Re-injury'],
        conditions: ['Post-Surgery Recovery', 'Fractures', 'Arthritis', 'Chronic Pain']
      },
      'Neurological Rehabilitation': {
        duration: '60-90 minutes',
        sessions: '12-24 sessions typically',
        techniques: ['Balance Training', 'Coordination Exercises', 'Strength Building', 'Functional Training'],
        benefits: ['Improved Independence', 'Better Quality of Life', 'Enhanced Mobility', 'Cognitive Support'],
        conditions: ['Stroke Recovery', 'Spinal Cord Injuries', 'Multiple Sclerosis', 'Parkinson\'s Disease']
      },
      'Pediatric Physiotherapy': {
        duration: '30-45 minutes',
        sessions: '6-12 sessions typically',
        techniques: ['Play-Based Therapy', 'Developmental Activities', 'Family Education', 'Adaptive Equipment'],
        benefits: ['Improved Development', 'Better Motor Skills', 'Enhanced Confidence', 'Family Support'],
        conditions: ['Developmental Delays', 'Cerebral Palsy', 'Muscular Dystrophy', 'Sports Injuries']
      },
      'Geriatric Care': {
        duration: '30-45 minutes',
        sessions: '8-12 sessions typically',
        techniques: ['Balance Training', 'Strength Exercises', 'Fall Prevention', 'Mobility Training'],
        benefits: ['Improved Independence', 'Fall Prevention', 'Better Quality of Life', 'Pain Management'],
        conditions: ['Arthritis', 'Osteoporosis', 'Balance Issues', 'Post-Surgery Recovery']
      },
      'Workplace Injury Recovery': {
        duration: '45-60 minutes',
        sessions: '6-10 sessions typically',
        techniques: ['Ergonomic Assessment', 'Strengthening Exercises', 'Posture Training', 'Work Simulation'],
        benefits: ['Safe Return to Work', 'Injury Prevention', 'Improved Productivity', 'Pain Relief'],
        conditions: ['Back Injuries', 'Repetitive Strain', 'Neck Pain', 'Shoulder Problems']
      },
      'Chronic Pain Management': {
        duration: '45-60 minutes',
        sessions: '10-16 sessions typically',
        techniques: ['Pain Education', 'Graded Exercise', 'Relaxation Techniques', 'Lifestyle Modification'],
        benefits: ['Pain Reduction', 'Improved Function', 'Better Sleep', 'Enhanced Mood'],
        conditions: ['Fibromyalgia', 'Chronic Back Pain', 'Arthritis', 'Neuropathic Pain']
      }
    };

    return serviceDetails[title] || {
      duration: '45 minutes',
      sessions: '6-8 sessions typically',
      techniques: ['Assessment', 'Treatment Planning', 'Exercise Therapy', 'Education'],
      benefits: ['Pain Relief', 'Improved Function', 'Better Quality of Life', 'Prevention'],
      conditions: ['Various musculoskeletal conditions']
    };
  };

  const IconComponent = getServiceIcon(service.title);
  const details = getDetailedInfo(service.title);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative w-full max-w-2xl max-h-[90vh] bg-white dark:bg-darkBlue-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-darkBlue-800 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex-shrink-0 bg-white dark:bg-darkBlue-900 border-b border-gray-200 dark:border-darkBlue-800 p-6 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white">
                    {service.title}
                  </h2>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-darkBlue-800 text-gray-600 dark:text-darkBlue-300 hover:bg-gray-200 dark:hover:bg-darkBlue-700 transition-colors"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

            {/* Content - Scrollable with hidden scrollbar */}
            <div className="flex-1 overflow-y-auto scrollbar-hide p-6 space-y-6">
              {/* Description */}
              <div>
                <h3 className="text-lg font-display font-semibold text-gray-900 dark:text-white mb-3">
                  Overview
                </h3>
                <p className="text-gray-600 dark:text-darkBlue-300 font-sans leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Session Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-darkBlue-800 rounded-xl p-4">
                  <h4 className="font-display font-semibold text-gray-900 dark:text-white mb-2">
                    Session Duration
                  </h4>
                  <p className="text-gray-600 dark:text-darkBlue-300 font-sans">
                    {details.duration}
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-darkBlue-800 rounded-xl p-4">
                  <h4 className="font-display font-semibold text-gray-900 dark:text-white mb-2">
                    Treatment Course
                  </h4>
                  <p className="text-gray-600 dark:text-darkBlue-300 font-sans">
                    {details.sessions}
                  </p>
                </div>
              </div>

              {/* Techniques */}
              <div>
                <h3 className="text-lg font-display font-semibold text-gray-900 dark:text-white mb-3">
                  Treatment Techniques
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {details.techniques.map((technique: string, index: number) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-darkBlue-300 font-sans text-sm">
                        {technique}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="text-lg font-display font-semibold text-gray-900 dark:text-white mb-3">
                  Key Benefits
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {details.benefits.map((benefit: string, index: number) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-600 dark:text-darkBlue-300 font-sans text-sm">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conditions Treated */}
              <div>
                <h3 className="text-lg font-display font-semibold text-gray-900 dark:text-white mb-3">
                  Conditions Treated
                </h3>
                <div className="flex flex-wrap gap-2">
                  {details.conditions.map((condition: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium font-sans"
                    >
                      {condition}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-xl p-6 text-center">
                <h3 className="text-lg font-display font-semibold text-gray-900 dark:text-white mb-2">
                  Ready to Start Your Recovery?
                </h3>
                <p className="text-gray-600 dark:text-darkBlue-300 font-sans mb-4">
                  Book a consultation to discuss your specific needs and create a personalized treatment plan.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    onClose();
                    // Navigate to booking page
                    window.location.href = '/book';
                  }}
                  className="px-6 py-3 bg-primary-500 text-white rounded-xl hover:bg-primary-600 transition-colors font-semibold font-sans"
                >
                  Book Consultation
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ServiceModal;