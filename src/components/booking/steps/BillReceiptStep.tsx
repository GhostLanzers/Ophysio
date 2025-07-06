import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CreditCard, MapPin, Receipt, User, Phone, Mail, Calendar, Clock } from 'lucide-react';
import { BookingData } from '../../../types/booking';

interface BillReceiptStepProps {
  data: BookingData;
  onBack: () => void;
}

const BillReceiptStep: React.FC<BillReceiptStepProps> = ({ data, onBack }) => {
  const totalAmount = data.selectedServices.reduce((sum, service) => sum + service.price, 0);

  const handlePayNow = () => {
    alert('Payment gateway integration would be implemented here. Redirecting to payment...');
  };

  const handlePayOnVisit = () => {
    alert('Appointment booked successfully! You can pay during your visit. A confirmation email will be sent shortly.');
  };

  const formatDate = (date: Date | null) => {
    if (!date) return '';
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <Receipt className="w-16 h-16 text-primary-500 mx-auto mb-4" />
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 dark:text-white mb-2">
          Booking Summary
        </h2>
        <p className="text-gray-600 dark:text-darkBlue-300 font-sans">
          Please review your appointment details
        </p>
      </motion.div>

      <div className="bg-gray-50 dark:bg-darkBlue-800 rounded-xl p-6 mb-6">
        {/* Personal Details */}
        <div className="mb-6">
          <h3 className="text-lg font-display font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <User className="w-5 h-5 mr-2" />
            Personal Details
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center text-gray-600 dark:text-darkBlue-300">
              <span className="font-medium w-16">Name:</span>
              <span className="font-sans">{data.name}</span>
            </div>
            <div className="flex items-center text-gray-600 dark:text-darkBlue-300">
              <Phone className="w-4 h-4 mr-2" />
              <span className="font-sans">{data.phone}</span>
            </div>
            <div className="flex items-center text-gray-600 dark:text-darkBlue-300">
              <Mail className="w-4 h-4 mr-2" />
              <span className="font-sans">{data.email}</span>
            </div>
          </div>
        </div>

        {/* Appointment Details */}
        <div className="mb-6">
          <h3 className="text-lg font-display font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <Calendar className="w-5 h-5 mr-2" />
            Appointment Details
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center text-gray-600 dark:text-darkBlue-300">
              <Calendar className="w-4 h-4 mr-2" />
              <span className="font-sans">{formatDate(data.selectedDate)}</span>
            </div>
            <div className="flex items-center text-gray-600 dark:text-darkBlue-300">
              <Clock className="w-4 h-4 mr-2" />
              <span className="font-sans">{data.selectedTime}</span>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mb-6">
          <h3 className="text-lg font-display font-semibold text-gray-900 dark:text-white mb-4">
            Selected Services
          </h3>
          <div className="space-y-3">
            {data.selectedServices.map((service) => (
              <div key={service.id} className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-darkBlue-700 last:border-b-0">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white font-display">
                    {service.title}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-darkBlue-300 font-sans">
                    {service.description.substring(0, 60)}...
                  </p>
                </div>
                <span className="font-bold text-primary-600 dark:text-primary-400 font-display">
                  ₹{service.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Total */}
        <div className="border-t border-gray-200 dark:border-darkBlue-700 pt-4">
          <div className="flex justify-between items-center">
            <span className="text-lg font-display font-semibold text-gray-900 dark:text-white">
              Total Amount
            </span>
            <span className="text-2xl font-display font-bold text-primary-600 dark:text-primary-400">
              ₹{totalAmount}
            </span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <motion.button
            onClick={handlePayNow}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center space-x-2 py-4 bg-primary-500 text-white rounded-xl hover:bg-primary-600 transition-colors font-semibold font-sans"
          >
            <CreditCard className="w-5 h-5" />
            <span>Pay Now</span>
          </motion.button>

          <motion.button
            onClick={handlePayOnVisit}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center space-x-2 py-4 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors font-semibold font-sans"
          >
            <MapPin className="w-5 h-5" />
            <span>Pay on Visit</span>
          </motion.button>
        </div>

        <motion.button
          type="button"
          onClick={onBack}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center justify-center space-x-2 py-3 bg-gray-200 dark:bg-darkBlue-700 text-gray-700 dark:text-darkBlue-200 rounded-xl hover:bg-gray-300 dark:hover:bg-darkBlue-600 transition-colors font-medium font-sans"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Edit</span>
        </motion.button>
      </div>
    </div>
  );
};

export default BillReceiptStep;