
"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-sm border border-amber-100 overflow-hidden transition-all duration-300 hover:shadow-md"
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full flex items-center justify-between p-6 text-left hover:bg-amber-50/50 transition-colors duration-200"
          >
            <h3 className="font-semibold text-lg text-gray-900 pr-4">
              {item.question}
            </h3>
            <ChevronDown
              className={`w-5 h-5 text-gray-600 flex-shrink-0 transition-transform duration-300 ${
                openIndex === index ? 'transform rotate-180' : ''
              }`}
            />
          </button>
          
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-96' : 'max-h-0'
            }`}
          >
            <div className="p-6 pt-0 text-gray-700 leading-relaxed">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
