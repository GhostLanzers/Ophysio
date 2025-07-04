import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Calendar, MessageCircle } from 'lucide-react';

const ContactSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["123 Healthcare Boulevard", "Medical District, City 12345"],
      color: "text-red-500"
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "Emergency: +1 (555) 987-6543"],
      color: "text-green-500"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@ophysio.com", "appointments@ophysio.com"],
      color: "text-blue-500"
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Fri: 7:00 AM - 8:00 PM", "Sat-Sun: 9:00 AM - 5:00 PM"],
      color: "text-purple-500"
    }
  ];

  return (
    <section ref={ref} id="contact" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 tracking-tight">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-600">Touch</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-darkBlue-300 max-w-3xl mx-auto px-4 font-sans leading-relaxed">
            Ready to start your journey to better health? Contact us today to schedule your consultation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="flex items-start space-x-4 p-4 sm:p-6 bg-gradient-to-br from-gray-50 to-white dark:from-darkBlue-900 dark:to-darkBlue-800 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gray-100 dark:bg-darkBlue-700 ${item.color} flex-shrink-0`}>
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg font-display font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2 tracking-wide">
                    {item.title}
                  </h3>
                  {item.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-sm sm:text-base text-gray-600 dark:text-darkBlue-300 break-words font-sans">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-primary-50 to-blue-50 dark:from-darkBlue-900 dark:to-darkBlue-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl"
          >
            <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 text-center tracking-wide">
              Schedule Your Consultation
            </h3>
            
            <form className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-display font-medium text-gray-700 dark:text-darkBlue-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-white dark:bg-darkBlue-800 border border-gray-300 dark:border-darkBlue-600 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base font-sans text-gray-900 dark:text-white"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-display font-medium text-gray-700 dark:text-darkBlue-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-white dark:bg-darkBlue-800 border border-gray-300 dark:border-darkBlue-600 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base font-sans text-gray-900 dark:text-white"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-display font-medium text-gray-700 dark:text-darkBlue-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-white dark:bg-darkBlue-800 border border-gray-300 dark:border-darkBlue-600 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base font-sans text-gray-900 dark:text-white"
                  placeholder="john.doe@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-display font-medium text-gray-700 dark:text-darkBlue-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-white dark:bg-darkBlue-800 border border-gray-300 dark:border-darkBlue-600 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base font-sans text-gray-900 dark:text-white"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              
              <div>
                <label className="block text-sm font-display font-medium text-gray-700 dark:text-darkBlue-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-white dark:bg-darkBlue-800 border border-gray-300 dark:border-darkBlue-600 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base resize-none font-sans text-gray-900 dark:text-white"
                  placeholder="Tell us about your condition or how we can help you..."
                ></textarea>
              </div>
              
              <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:space-x-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="flex-1 flex items-center justify-center space-x-2 py-3 sm:py-4 bg-primary-500 text-white rounded-lg sm:rounded-xl hover:bg-primary-600 transition-colors font-semibold text-sm sm:text-base font-sans"
                >
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Book Appointment</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  className="flex-1 flex items-center justify-center space-x-2 py-3 sm:py-4 bg-darkBlue-700 text-white rounded-lg sm:rounded-xl hover:bg-darkBlue-600 transition-colors font-semibold text-sm sm:text-base font-sans"
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Send Message</span>
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;