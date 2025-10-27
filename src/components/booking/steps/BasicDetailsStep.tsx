import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Phone, Mail, ArrowRight, FileText } from 'lucide-react';
import { BookingData } from '../../../types/booking';

interface BasicDetailsStepProps {
  data: BookingData;
  updateData: (data: Partial<BookingData>) => void;
  onNext: () => void;
}

const BasicDetailsStep: React.FC<BasicDetailsStepProps> = ({ data, updateData, onNext }) => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!data.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!data.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-()]+$/.test(data.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!data.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!data.healthIssue.trim()) {
      newErrors.healthIssue = 'Please describe your health issue';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onNext();
    }
  };

  const handleInputChange = (field: keyof BookingData, value: string) => {
    updateData({ [field]: value });
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 dark:text-white mb-2">
          Basic Details
        </h2>
        <p className="text-gray-600 dark:text-darkBlue-300 font-sans">
          Let's start with your contact information and health concern
        </p>
      </motion.div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-display font-medium text-gray-700 dark:text-darkBlue-300 mb-2">
            Full Name
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-darkBlue-400" />
            <input
              type="text"
              value={data.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className={`w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-darkBlue-800 border ${
                errors.name ? 'border-red-500' : 'border-gray-300 dark:border-darkBlue-600'
              } focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white font-sans`}
              placeholder="Enter your full name"
            />
          </div>
          {errors.name && (
            <p className="mt-1 text-sm text-red-500 font-sans">{errors.name}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-display font-medium text-gray-700 dark:text-darkBlue-300 mb-2">
            Phone Number
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-darkBlue-400" />
            <input
              type="tel"
              value={data.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className={`w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-darkBlue-800 border ${
                errors.phone ? 'border-red-500' : 'border-gray-300 dark:border-darkBlue-600'
              } focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white font-sans`}
              placeholder="+91 90822 82143"
            />
          </div>
          {errors.phone && (
            <p className="mt-1 text-sm text-red-500 font-sans">{errors.phone}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-display font-medium text-gray-700 dark:text-darkBlue-300 mb-2">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-darkBlue-400" />
            <input
              type="email"
              value={data.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={`w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-darkBlue-800 border ${
                errors.email ? 'border-red-500' : 'border-gray-300 dark:border-darkBlue-600'
              } focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white font-sans`}
              placeholder="john.doe@email.com"
            />
          </div>
          {errors.email && (
            <p className="mt-1 text-sm text-red-500 font-sans">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-display font-medium text-gray-700 dark:text-darkBlue-300 mb-2">
            Describe the Health Issue
          </label>
          <div className="relative">
            <FileText className="absolute left-3 top-3 w-5 h-5 text-gray-400 dark:text-darkBlue-400" />
            <textarea
              value={data.healthIssue}
              onChange={(e) => handleInputChange('healthIssue', e.target.value)}
              rows={4}
              className={`w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-darkBlue-800 border ${
                errors.healthIssue ? 'border-red-500' : 'border-gray-300 dark:border-darkBlue-600'
              } focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white font-sans resize-none`}
              placeholder="Please describe your health issue, symptoms, or the reason for your visit..."
            />
          </div>
          {errors.healthIssue && (
            <p className="mt-1 text-sm text-red-500 font-sans">{errors.healthIssue}</p>
          )}
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center justify-center space-x-2 py-4 bg-primary-500 text-white rounded-xl hover:bg-primary-600 transition-colors font-semibold font-sans"
        >
          <span>Continue</span>
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </form>
    </div>
  );
};

export default BasicDetailsStep;