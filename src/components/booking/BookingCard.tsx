import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import BasicDetailsStep from './steps/BasicDetailsStep';
import ServiceLocationStep from './steps/ServiceLocationStep';
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
    selectedState: '',
    selectedCity: '',
    isOnlineRehab: false,
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
    // Skip step 3 (Select Services) if Online Rehab is selected
    if (currentStep === 2 && bookingData.isOnlineRehab) {
      setCurrentStep(4); // Go directly to Date & Time
    } else if (currentStep < 5) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    // Handle back navigation when Online Rehab was selected
    if (currentStep === 4 && bookingData.isOnlineRehab) {
      setCurrentStep(2); // Go back to Service Location
    } else if (currentStep > 1) {
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
          <ServiceLocationStep
            data={bookingData}
            updateData={updateBookingData}
            onNext={nextStep}
            onBack={prevStep}
          />
        );
      case 3:
        return (
          <SelectServicesStep
            data={bookingData}
            updateData={updateBookingData}
            onNext={nextStep}
            onBack={prevStep}
          />
        );
      case 4:
        return (
          <DateTimeStep
            data={bookingData}
            updateData={updateBookingData}
            onNext={nextStep}
            onBack={prevStep}
          />
        );
      case 5:
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
              Step {currentStep} of 5
            </span>
            <span className="text-sm font-display font-medium text-gray-600 dark:text-darkBlue-300">
              {Math.round((currentStep / 5) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-darkBlue-700 rounded-full h-2">
            <motion.div
              className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
              initial={{ width: '20%' }}
              animate={{ width: `${(currentStep / 5) * 100}%` }}
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