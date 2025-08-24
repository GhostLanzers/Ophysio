import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Calendar, MessageCircle } from 'lucide-react';

const ContactSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const contactInfo = [
    {
      icon: MapPin,
      title: "Head Office",
      details: ["301, Anant Nandadeep", "Jogeshwari, Mumbai 400060"],
      color: "text-red-500"
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 9082282143", "Emergency: +91 9167339766"],
      color: "text-green-500"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["ophysiophysiotherapy@gmail.com", "INFO: admin@ophysio.in"],
      color: "text-blue-500"
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Fri: 7:00 AM - 10:00 PM", "Saturday: 9:00 AM - 2:00 PM"],
      color: "text-purple-500"
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-()]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please describe your health issue';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBookAppointment = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Navigate to booking page with pre-filled data
      navigate('/book', {
        state: {
          formData: {
            name: `${formData.firstName} ${formData.lastName}`.trim(),
            phone: formData.phone,
            email: formData.email,
            healthIssue: formData.message
          }
        }
      });
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Message sent successfully! We will get back to you soon.');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
    }
  };

  return (
    <section ref={ref} id="contact" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-darkBlue-950">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 tracking-tight px-2">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-600">Touch</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-darkBlue-300 max-w-3xl mx-auto px-4 font-sans leading-relaxed">
            Ready to start your journey to better health? Contact us today to schedule your consultation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 lg:p-6 bg-gradient-to-br from-gray-50 to-white dark:from-darkBlue-900 dark:to-darkBlue-800 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gray-100 dark:bg-darkBlue-700 ${item.color} flex-shrink-0`}>
                  <item.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm sm:text-base lg:text-lg font-display font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2 tracking-wide">
                    {item.title}
                  </h3>
                  {item.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-darkBlue-300 break-words font-sans">
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
            className="bg-gradient-to-br from-primary-50 to-blue-50 dark:from-darkBlue-900 dark:to-darkBlue-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl"
          >
            <h3 className="text-lg sm:text-xl lg:text-2xl font-display font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 text-center tracking-wide">
              Schedule Your Consultation
            </h3>
            
            <form className="space-y-3 sm:space-y-4 lg:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                <div>
                  <label className="block text-xs sm:text-sm font-display font-medium text-gray-700 dark:text-darkBlue-300 mb-1 sm:mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-white dark:bg-darkBlue-800 border ${
                      errors.firstName ? 'border-red-500' : 'border-gray-300 dark:border-darkBlue-600'
                    } focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base font-sans text-gray-900 dark:text-white`}
                    placeholder="John"
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-xs sm:text-sm text-red-500 font-sans">{errors.firstName}</p>
                  )}
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-display font-medium text-gray-700 dark:text-darkBlue-300 mb-1 sm:mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-white dark:bg-darkBlue-800 border ${
                      errors.lastName ? 'border-red-500' : 'border-gray-300 dark:border-darkBlue-600'
                    } focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base font-sans text-gray-900 dark:text-white`}
                    placeholder="Doe"
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-xs sm:text-sm text-red-500 font-sans">{errors.lastName}</p>
                  )}
                </div>
              </div>
              
              <div>
                <label className="block text-xs sm:text-sm font-display font-medium text-gray-700 dark:text-darkBlue-300 mb-1 sm:mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-white dark:bg-darkBlue-800 border ${
                    errors.email ? 'border-red-500' : 'border-gray-300 dark:border-darkBlue-600'
                  } focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base font-sans text-gray-900 dark:text-white`}
                  placeholder="john.doe@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-xs sm:text-sm text-red-500 font-sans">{errors.email}</p>
                )}
              </div>
              
              <div>
                <label className="block text-xs sm:text-sm font-display font-medium text-gray-700 dark:text-darkBlue-300 mb-1 sm:mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-white dark:bg-darkBlue-800 border ${
                    errors.phone ? 'border-red-500' : 'border-gray-300 dark:border-darkBlue-600'
                  } focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base font-sans text-gray-900 dark:text-white`}
                  placeholder="+1 (555) 123-4567"
                />
                {errors.phone && (
                  <p className="mt-1 text-xs sm:text-sm text-red-500 font-sans">{errors.phone}</p>
                )}
              </div>
              
              <div>
                <label className="block text-xs sm:text-sm font-display font-medium text-gray-700 dark:text-darkBlue-300 mb-1 sm:mb-2">
                  Describe Your Health Issue
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-white dark:bg-darkBlue-800 border ${
                    errors.message ? 'border-red-500' : 'border-gray-300 dark:border-darkBlue-600'
                  } focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base resize-none font-sans text-gray-900 dark:text-white`}
                  placeholder="Tell us about your condition, symptoms, or how we can help you..."
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-xs sm:text-sm text-red-500 font-sans">{errors.message}</p>
                )}
              </div>
              
              <div className="flex flex-col space-y-2 sm:space-y-3 lg:space-y-0 lg:flex-row lg:space-x-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={handleBookAppointment}
                  className="flex-1 flex items-center justify-center space-x-2 py-2 sm:py-3 lg:py-4 bg-primary-500 text-white rounded-lg sm:rounded-xl hover:bg-primary-600 transition-colors font-semibold text-sm sm:text-base font-sans"
                >
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                  <span>Book Appointment</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={handleSendMessage}
                  className="flex-1 flex items-center justify-center space-x-2 py-2 sm:py-3 lg:py-4 bg-darkBlue-700 text-white rounded-lg sm:rounded-xl hover:bg-darkBlue-600 transition-colors font-semibold text-sm sm:text-base font-sans"
                >
                  <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
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