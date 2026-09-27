import React, { useState } from 'react';
import { Building2, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { SEO } from '../components/SEO';
import { QuickEnquiryModal } from '../components/QuickEnquiryModal';
import { industriesData } from '../data/industries';

export const IndustriesPage: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState<string>(industriesData[0].id);

  const activeInd = industriesData.find((i) => i.id === selectedIndustry) || industriesData[0];

  return (
    <>
      <SEO
        title="Industries We Serve — NovaRise Digital"
        description="Tailored digital marketing, SEO, and paid ad strategies for Real Estate, Healthcare, Education, eCommerce, Hospitality, Tech SaaS, Finance, and Manufacturing."
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-xs">
            <Building2 className="w-4 h-4 text-[#7C3AED]" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Industry Verticals
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#111827] tracking-tight max-w-4xl mx-auto leading-tight">
            Built For Different <br />
            <span className="gradient-text">Kinds Of Businesses.</span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            We don't use one-size-fits-all templates. Every industry has unique buying cycles, customer friction points, and channel mechanics.
          </p>
        </div>
      </section>

      {/* Interactive Industry Selector & Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Industry Grid Selection Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {industriesData.map((ind) => {
              const isSelected = ind.id === activeInd.id;
              return (
                <button
                  key={ind.id}
                  onClick={() => setSelectedIndustry(ind.id)}
                  className={`p-4 rounded-2xl text-left border transition-all cursor-pointer space-y-1 ${
                    isSelected
                      ? 'bg-[#111827] text-white border-[#111827] shadow-lg scale-102'
                      : 'bg-slate-50 text-slate-800 border-slate-200/80 hover:bg-white hover:border-[#7C3AED]'
                  }`}
                >
                  <div className={`text-xs font-mono font-bold ${isSelected ? 'text-[#06B6D4]' : 'text-[#7C3AED]'}`}>
                    ✦
                  </div>
                  <div className="font-bold text-sm font-heading">{ind.name}</div>
                </button>
              );
            })}
          </div>

          {/* Selected Industry Full Detail Panel */}
          <div className="p-8 md:p-12 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-10 animate-fade-in">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-200/80 pb-8">
              <div className="space-y-2">
                <span className="text-xs uppercase font-bold tracking-widest text-[#7C3AED]">
                  Active Vertical Focus
                </span>
                <h2 className="text-3xl font-extrabold font-heading text-[#111827]">
                  {activeInd.name} Marketing Solutions
                </h2>
                <p className="text-slate-600 text-sm max-w-2xl">
                  {activeInd.fullDesc}
                </p>
              </div>

              <button
                onClick={() => setModalOpen(true)}
                className="px-6 py-3 rounded-full gradient-btn text-white text-xs font-bold uppercase tracking-wider shrink-0 cursor-pointer shadow-md"
              >
                Discuss {activeInd.name} Campaign
              </button>
            </div>

            {/* Challenges vs Solutions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-bold font-heading text-rose-600 flex items-center space-x-2">
                  <AlertCircle className="w-5 h-5" />
                  <span>Common Industry Challenges</span>
                </h3>
                <ul className="space-y-2.5">
                  {activeInd.keyChallenges.map((c, cIdx) => (
                    <li key={cIdx} className="p-4 rounded-xl bg-white border border-slate-200/80 text-xs text-slate-700 leading-relaxed">
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold font-heading text-emerald-600 flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Our Customized Solutions</span>
                </h3>
                <ul className="space-y-2.5">
                  {activeInd.ourSolutions.map((s, sIdx) => (
                    <li key={sIdx} className="p-4 rounded-xl bg-white border border-slate-200/80 text-xs text-slate-700 leading-relaxed">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Expected Outcomes */}
            <div className="p-6 rounded-2xl bg-[#111827] text-white space-y-3">
              <div className="text-xs font-bold uppercase text-[#06B6D4] tracking-widest">
                Target Business Outcomes
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {activeInd.expectedOutcomes.map((out, oIdx) => (
                  <div key={oIdx} className="flex items-center space-x-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#06B6D4] shrink-0" />
                    <span>{out}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuickEnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};
