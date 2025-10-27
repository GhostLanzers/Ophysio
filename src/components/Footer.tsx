import React from "react";
import { Heart } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-darkBlue-900 border-t border-gray-200 dark:border-darkBlue-800 py-1 sm:py-1.5">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-1 sm:space-y-0 text-xs sm:text-sm text-gray-600 dark:text-darkBlue-300">
          <div className="flex items-center space-x-1">
            <span className="font-sans">
              © {currentYear} OPHYSIO. All rights reserved.
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="font-sans">Developed & Maintained with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-current" />
            <span className="font-sans">
              by{" "}
              <a
                href="https://ghostlanzers.onrender.com/"
                target="_blank"
                className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors font-medium"
              >
                GHOSTLANZERS.
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
