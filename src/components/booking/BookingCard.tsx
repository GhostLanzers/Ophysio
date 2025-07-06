import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import BasicDetailsStep from './steps/BasicDetailsStep';
import SelectServicesStep from './steps/SelectServicesStep';
import DateTimeStep from './steps/DateTimeStep';
import BillReceiptStep from './steps/BillReceiptStep';
import { BookingData, Service } from '../../types/booking';

const BookingCard: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState<BookingData>({
    name: '',
    phone: '',
    email: '',
    healthIssue: '',
    selectedServices: [],
    selectedDate: null,
    selectedTime: '',
  });

  const location = useLocation();

  // Pre-fill form data if coming from contact form
  useEffect(() => {
    if (location.state?.formData) {
      const { name, phone, email, healthIssue } = location.state.formData;
      setBookingData(prev => ({
        ...prev,
        name: name || '',
        phone: phone || '',
        email: email || '',
        healthIssue: healthIssue || '',
      }));
    }
  }, [location.state]);

  const updateBookingData = (data: Partial<BookingData>) => {
    setBookingData(prev => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <BasicDetailsStep
            data={bookingData}
            updateData={updateBookingData}
            onNext={nextStep}
          />
        );
      case 2:
        return (
          <SelectServicesStep
            data={bookingData}
            updateData={updateBookingData}
            onNext={nextStep}
            onBack={prevStep}
          />
        );
      case 3:
        return (
          <DateTimeStep
            data={bookingData}
            updateData={updateBookingData}
            onNext={nextStep}
            onBack={prevStep}
          />
        );
      case 4:
        return (
          <BillReceiptStep
            data={bookingData}
            onBack={prevStep}
          />
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="bg-white dark:bg-darkBlue-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-darkBlue-800 overflow-hidden">
        {/* Progress Bar */}
        <div className="bg-gray-50 dark:bg-darkBlue-800 px-6 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-display font-medium text-gray-600 dark:text-darkBlue-300">
              Step {currentStep} of 4
            </span>
            <span className="text-sm font-display font-medium text-gray-600 dark:text-darkBlue-300">
              {Math.round((currentStep / 4) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-darkBlue-700 rounded-full h-2">
            <motion.div
              className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
              initial={{ width: '25%' }}
              animate={{ width: `${(currentStep / 4) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Step Content */}
        <div className="p-6 sm:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default BookingCard;