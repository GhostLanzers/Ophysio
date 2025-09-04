import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Star } from 'lucide-react';

const TeamSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const teamMembers = [
    {
      name: "Er. Bala Chandrashekhar",
      title: "Chief Information Officer",
      image: "/Bala.png",
      description: "Bala leads our technology initiatives and digital transformation efforts. With his B.Tech in Computer Science Engineering background, he has revolutionized our patient management systems and implemented cutting-edge healthcare technologies to enhance service delivery.",
      achievements: ["B.Tech CSE Graduate", "Digital Healthcare Expert", "System Architecture", "Technology Innovation"]
    },
    {
      name: "Dr. Priya Sharma",
      title: "Managing Director",
      image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      description: "With over 20 years of experience in healthcare management and physiotherapy, Dr. Priya leads our clinical operations with excellence. She holds advanced certifications in sports medicine and has been instrumental in establishing our treatment protocols.",
      achievements: ["MD in Sports Medicine", "20+ Years Experience", "Clinical Excellence Award", "Healthcare Leadership"]
    },
    {
      name: "Dr. Yogesh Parui",
      title: "Regional Director",
      image: "/RD.jpeg",
      description: "Yogesh oversees our expansion across multiple states and ensures consistent quality of care. His strategic vision has helped us establish centers in over 15 cities, making physiotherapy accessible to thousands of patients.",
      achievements: ["MBA Healthcare Management", "15+ Cities Expansion", "Strategic Planning Expert", "Quality Assurance Leader"]
    },
    {
      name: "Dr. Dhwani Bhanushali",
      title: "Chief Operating Officer",
      image: "/COO.jpeg",
      description: "Dhwani ensures smooth operations across all our facilities and maintains the highest standards of patient care. Her innovative approach to operational efficiency has improved patient satisfaction rates significantly.",
      achievements: ["Operations Excellence", "Patient Care Innovation", "Process Optimization", "Team Leadership"]
    }
  ];

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
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-600">Team</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-darkBlue-300 max-w-3xl mx-auto font-sans leading-relaxed px-4">
            Meet the dedicated professionals who lead our mission to provide exceptional physiotherapy care
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gradient-to-br from-gray-50 to-white dark:from-darkBlue-900 dark:to-darkBlue-800 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-darkBlue-800 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-primary-200 dark:text-primary-800">
                <Award className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              
              {/* Title */}
              <h4 className="text-base sm:text-lg font-display font-semibold text-primary-600 dark:text-primary-400 mb-3 sm:mb-4 tracking-wide text-center">
                {member.title}
              </h4>
              
              {/* Profile Picture */}
              <div className="flex justify-center mb-4 sm:mb-6">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-primary-200 dark:border-primary-800 shadow-lg"
                >
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
              
              {/* Name */}
              <h3 className="text-lg sm:text-xl font-display font-bold text-gray-900 dark:text-white text-center mb-3 sm:mb-4 tracking-wide">
                {member.name}
              </h3>
              
              {/* Description */}
              <p className="text-sm sm:text-base text-gray-600 dark:text-darkBlue-300 leading-relaxed text-center mb-4 sm:mb-6 font-sans">
                {member.description}
              </p>
              
              {/* Achievements */}
              <div className="space-y-2">
                <h5 className="text-sm font-display font-semibold text-gray-900 dark:text-white text-center mb-2">
                  Key Achievements
                </h5>
                <div className="grid grid-cols-2 gap-2">
                  {member.achievements.map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="flex items-center space-x-1">
                      <Star className="w-3 h-3 text-primary-500 flex-shrink-0" />
                      <span className="text-xs text-gray-600 dark:text-darkBlue-300 font-sans">
                        {achievement}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;