import React from 'react';
import { Layers } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const platforms = [
    { name: 'Google Ads', category: 'Search & Shopping' },
    { name: 'Meta Ads', category: 'Social Commerce' },
    { name: 'Shopify', category: 'E-Commerce' },
    { name: 'HubSpot', category: 'CRM & Automation' },
    { name: 'LinkedIn Ads', category: 'B2B Targeting' },
    { name: 'Google Analytics 4', category: 'Attribution & Insights' },
    { name: 'Figma', category: 'UI/UX & Creative' },
    { name: 'Webflow', category: 'CMS & Web Development' }
  ];

  return (
    <section className="py-8 bg-white border-y border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center mb-5">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center justify-center space-x-2">
          <Layers className="w-4 h-4 text-[#7C3AED]" />
          <span>Platforms & Technologies We Master</span>
        </p>
      </div>

      <div className="relative w-full overflow-hidden flex">
        {/* Infinite Scroll Container */}
        <div className="animate-ticker flex items-center space-x-12 sm:space-x-16">
          {[...platforms, ...platforms, ...platforms].map((platform, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-2 text-slate-500 hover:text-[#111827] transition-colors cursor-pointer select-none group"
            >
              <span className="text-sm font-bold font-heading tracking-wider uppercase text-[#111827]">
                {platform.name}
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-[#7C3AED] font-semibold">
                {platform.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
