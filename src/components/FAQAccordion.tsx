import React, { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { faqsData } from '../data/faqs';
import type { FAQItem } from '../data/faqs';

interface FAQAccordionProps {
  faqs?: FAQItem[];
  showSearch?: boolean;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  faqs = faqsData,
  showSearch = true
}) => {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {showSearch && (
        <div className="relative max-w-xl mx-auto mb-8">
          <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search FAQs (e.g. SEO, Google Ads, reporting)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-full bg-white border border-slate-200 focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20 text-sm shadow-xs"
          />
        </div>
      )}

      {filteredFaqs.length === 0 ? (
        <div className="text-center py-8 text-slate-500 text-sm">
          No questions found matching "{searchQuery}". Please contact our team for assistance.
        </div>
      ) : (
        <div className="space-y-4 max-w-4xl mx-auto">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                  isOpen
                    ? 'bg-white border-[#7C3AED] shadow-md'
                    : 'bg-white/80 hover:bg-white border-slate-200/80'
                }`}
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between space-x-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-bold font-heading text-base md:text-lg text-slate-900">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-[#7C3AED] text-white rotate-180' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-slate-600 text-sm leading-relaxed border-t border-slate-100 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
