import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';
import DatePicker from 'react-datepicker';
import { BookingData } from '../../../types/booking';
import 'react-datepicker/dist/react-datepicker.css';

interface DateTimeStepProps {
  data: BookingData;
  updateData: (data: Partial<BookingData>) => void;
  onNext: () => void;
  onBack: () => void;
}

const DateTimeStep: React.FC<DateTimeStepProps> = ({ data, updateData, onNext, onBack }) => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
    '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM'
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!data.selectedDate) {
      newErrors.date = 'Please select a date';
    }

    if (!data.selectedTime) {
      newErrors.time = 'Please select a time slot';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onNext();
    }
  };

  const handleDateChange = (date: Date | null) => {
    updateData({ selectedDate: date });
    if (errors.date) {
      setErrors(prev => ({ ...prev, date: '' }));
    }
  };

  const handleTimeSelect = (time: string) => {
    updateData({ selectedTime: time });
    if (errors.time) {
      setErrors(prev => ({ ...prev, time: '' }));
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
          Pick Date & Time
        </h2>
        <p className="text-gray-600 dark:text-darkBlue-300 font-sans">
          Choose your preferred appointment date and time
        </p>
      </motion.div>

      <div className="space-y-6">
        {/* Date Picker */}
        <div>
          <label className="block text-sm font-display font-medium text-gray-700 dark:text-darkBlue-300 mb-3">
            <Calendar className="inline w-4 h-4 mr-2" />
            Select Date
          </label>
          <div className="relative">
            <DatePicker
              selected={data.selectedDate}
              onChange={handleDateChange}
              minDate={new Date()}
              dateFormat="MMMM d, yyyy"
              className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-darkBlue-800 border ${
                errors.date ? 'border-red-500' : 'border-gray-300 dark:border-darkBlue-600'
              } focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white font-sans`}
              placeholderText="Select appointment date"
              calendarClassName="dark:bg-darkBlue-800 dark:border-darkBlue-600"
            />
          </div>
          {errors.date && (
            <p className="mt-1 text-sm text-red-500 font-sans">{errors.date}</p>
          )}
        </div>

        {/* Time Slots */}
        <div>
          <label className="block text-sm font-display font-medium text-gray-700 dark:text-darkBlue-300 mb-3">
            <Clock className="inline w-4 h-4 mr-2" />
            Available Time Slots
          </label>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 max-h-64 overflow-y-auto">
            {timeSlots.map((time) => (
              <motion.button
                key={time}
                type="button"
                onClick={() => handleTimeSelect(time)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  data.selectedTime === time
                    ? 'bg-primary-500 text-white border-2 border-primary-500'
                    : 'bg-gray-50 dark:bg-darkBlue-800 text-gray-700 dark:text-darkBlue-300 border-2 border-gray-200 dark:border-darkBlue-700 hover:border-primary-300 dark:hover:border-primary-600'
                }`}
              >
                {time}
              </motion.button>
            ))}
          </div>
          {errors.time && (
            <p className="mt-1 text-sm text-red-500 font-sans">{errors.time}</p>
          )}
        </div>
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

export default DateTimeStep;