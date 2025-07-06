import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, Stethoscope } from 'lucide-react';
import { BookingData, Service } from '../../../types/booking';
import { services } from '../../../data/services';

interface SelectServicesStepProps {
  data: BookingData;
  updateData: (data: Partial<BookingData>) => void;
  onNext: () => void;
  onBack: () => void;
}

const SelectServicesStep: React.FC<SelectServicesStepProps> = ({ data, updateData, onNext, onBack }) => {
  // Add General Consultancy as the first service
  const generalConsultancy: Service = {
    id: 0,
    title: "General Consultancy",
    description: "Comprehensive health assessment where our experienced physiotherapist will examine your condition, discuss your symptoms, and recommend the most suitable treatment plan. The final charges will be determined based on the specific services recommended after the consultation.",
    price: 300,
  };

  const servicesList: Service[] = [
    generalConsultancy,
    ...services.map((service, index) => ({
      id: index + 1,
      title: service.title,
      description: service.description,
      price: 500,
    }))
  ];

  const toggleService = (service: Service) => {
    const isSelected = data.selectedServices.some(s => s.id === service.id);
    
    if (isSelected) {
      updateData({
        selectedServices: data.selectedServices.filter(s => s.id !== service.id)
      });
    } else {
      updateData({
        selectedServices: [...data.selectedServices, service]
      });
    }
  };

  const isServiceSelected = (serviceId: number) => {
    return data.selectedServices.some(s => s.id === serviceId);
  };

  const canProceed = data.selectedServices.length > 0;

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 dark:text-white mb-2">
          Select Services
        </h2>
        <p className="text-gray-600 dark:text-darkBlue-300 font-sans">
          Choose the physiotherapy services you need
        </p>
        {data.selectedServices.length > 0 && (
          <p className="text-primary-600 dark:text-primary-400 font-sans mt-2">
            {data.selectedServices.length} service{data.selectedServices.length > 1 ? 's' : ''} selected
          </p>
        )}
      </motion.div>

      <div className="space-y-4 mb-8 max-h-96 overflow-y-auto">
        {servicesList.map((service, index) => {
          const isSelected = isServiceSelected(service.id);
          
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => toggleService(service)}
              className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                isSelected
                  ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                  : 'border-gray-200 dark:border-darkBlue-700 bg-gray-50 dark:bg-darkBlue-800 hover:border-primary-300 dark:hover:border-primary-600'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    {service.id === 0 && (
                      <Stethoscope className="w-5 h-5 text-primary-500 mr-2" />
                    )}
                    <h3 className="text-lg font-display font-semibold text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                    {service.id === 0 && (
                      <span className="ml-2 px-2 py-1 text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full font-medium">
                        Recommended
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-darkBlue-300 text-sm font-sans leading-relaxed mb-3">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-display font-bold text-primary-600 dark:text-primary-400">
                      ₹{service.price}
                      {service.id === 0 && (
                        <span className="text-sm font-normal text-gray-500 dark:text-darkBlue-400 ml-1">
                          (consultation fee)
                        </span>
                      )}
                    </span>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      isSelected
                        ? 'border-primary-500 bg-primary-500'
                        : 'border-gray-300 dark:border-darkBlue-600'
                    }`}>
                      {isSelected && <Check className="w-4 h-4 text-white" />}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="flex space-x-4">
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
          onClick={onNext}
          disabled={!canProceed}
          whileHover={canProceed ? { scale: 1.02 } : {}}
          whileTap={canProceed ? { scale: 0.98 } : {}}
          className={`flex-1 flex items-center justify-center space-x-2 py-4 rounded-xl transition-colors font-semibold font-sans ${
            canProceed
              ? 'bg-primary-500 text-white hover:bg-primary-600'
              : 'bg-gray-300 dark:bg-darkBlue-700 text-gray-500 dark:text-darkBlue-400 cursor-not-allowed'
          }`}
        >
          <span>Continue</span>
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </div>
    </div>
  );
};

export default SelectServicesStep;