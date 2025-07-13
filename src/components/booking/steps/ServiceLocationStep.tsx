import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, MapPin, ChevronDown } from 'lucide-react';
import { BookingData } from '../../../types/booking';
import { getStates, getCitiesByState } from '../../../data/locations';

interface ServiceLocationStepProps {
  data: BookingData;
  updateData: (data: Partial<BookingData>) => void;
  onNext: () => void;
  onBack: () => void;
}

const ServiceLocationStep: React.FC<ServiceLocationStepProps> = ({ data, updateData, onNext, onBack }) => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const states = getStates();
  const cities = data.selectedState ? getCitiesByState(data.selectedState) : [];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!data.selectedState) {
      newErrors.state = 'Please select a state';
    }

    if (!data.selectedCity) {
      newErrors.city = 'Please select a city';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onNext();
    }
  };

  const handleStateChange = (state: string) => {
    updateData({ selectedState: state, selectedCity: '' }); // Reset city when state changes
    if (errors.state) {
      setErrors(prev => ({ ...prev, state: '' }));
    }
  };

  const handleCityChange = (city: string) => {
    updateData({ selectedCity: city });
    if (errors.city) {
      setErrors(prev => ({ ...prev, city: '' }));
    }
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <MapPin className="w-16 h-16 text-primary-500 mx-auto mb-4" />
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 dark:text-white mb-2">
          Service Location
        </h2>
        <p className="text-gray-600 dark:text-darkBlue-300 font-sans">
          Select your preferred state and city for the service
        </p>
      </motion.div>

      <div className="space-y-6">
        {/* State Dropdown */}
        <div>
          <label className="block text-sm font-display font-medium text-gray-700 dark:text-darkBlue-300 mb-2">
            Select State
          </label>
          <div className="relative">
            <select
              value={data.selectedState}
              onChange={(e) => handleStateChange(e.target.value)}
              className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-darkBlue-800 border ${
                errors.state ? 'border-red-500' : 'border-gray-300 dark:border-darkBlue-600'
              } focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white font-sans appearance-none cursor-pointer`}
            >
              <option value="">Choose a state</option>
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-darkBlue-400 pointer-events-none" />
          </div>
          {errors.state && (
            <p className="mt-1 text-sm text-red-500 font-sans">{errors.state}</p>
          )}
        </div>

        {/* City Dropdown */}
        <div>
          <label className="block text-sm font-display font-medium text-gray-700 dark:text-darkBlue-300 mb-2">
            Select City
          </label>
          <div className="relative">
            <select
              value={data.selectedCity}
              onChange={(e) => handleCityChange(e.target.value)}
              disabled={!data.selectedState}
              className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-darkBlue-800 border ${
                errors.city ? 'border-red-500' : 'border-gray-300 dark:border-darkBlue-600'
              } focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white font-sans appearance-none cursor-pointer ${
                !data.selectedState ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              <option value="">
                {data.selectedState ? 'Choose a city' : 'Select a state first'}
              </option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-darkBlue-400 pointer-events-none" />
          </div>
          {errors.city && (
            <p className="mt-1 text-sm text-red-500 font-sans">{errors.city}</p>
          )}
        </div>

        {/* Selected Location Display */}
        {data.selectedState && data.selectedCity && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-4 border border-primary-200 dark:border-primary-800"
          >
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              <span className="text-primary-700 dark:text-primary-300 font-medium font-sans">
                Selected Location: {data.selectedCity}, {data.selectedState}
              </span>
            </div>
          </motion.div>
        )}
      </div>

      <div className="flex space-x-4 mt-8">
        <motion.button
          type="button"
          onClick={onBack}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center justify-center space-x-2 px-6 py-4 bg-gray-200 dark:bg-darkBlue-700 text-gray-700 dark:text-darkBlue-200 rounded-xl hover:bg-gray-300 dark:hover:bg-darkBlue-600 transition-colors font-semibold font-sans"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </motion.button>

        <motion.button
          type="button"
          onClick={handleSubmit}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex-1 flex items-center justify-center space-x-2 py-4 bg-primary-500 text-white rounded-xl hover:bg-primary-600 transition-colors font-semibold font-sans"
        >
          <span>Continue</span>
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </div>
    </div>
  );
};

export default ServiceLocationStep;