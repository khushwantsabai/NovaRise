import React, { useState } from 'react';
import { Building2, CheckCircle2, AlertCircle } from 'lucide-react';
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
          {/* Industry Grid Selection Cards with Images */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {industriesData.map((ind) => {
              const isSelected = ind.id === activeInd.id;
              return (
                <button
                  key={ind.id}
                  onClick={() => setSelectedIndustry(ind.id)}
                  className={`group rounded-2xl text-left border transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#111827] text-white border-[#111827] shadow-xl scale-[1.03] ring-2 ring-[#7C3AED]'
                      : 'bg-slate-50 text-slate-800 border-slate-200/80 hover:bg-white hover:border-[#7C3AED] hover:shadow-lg'
                  }`}
                >
                  <div className="relative h-24 sm:h-28 w-full overflow-hidden">
                    <img
                      src={ind.image}
                      alt={ind.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${
                        isSelected
                          ? 'from-[#111827] via-[#111827]/40 to-transparent'
                          : 'from-slate-900/60 via-transparent to-transparent'
                      }`}
                    />
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-white/90 text-[#7C3AED] backdrop-blur-xs">
                      ✦
                    </div>
                  </div>

                  <div className="p-3.5 space-y-1">
                    <div className="font-bold text-sm font-heading line-clamp-1">{ind.name}</div>
                    <p className={`text-[11px] line-clamp-1 ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                      {ind.shortDesc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Industry Full Detail Panel with Hero Banner */}
          <div className="p-6 md:p-10 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-10 animate-fade-in shadow-xs">
            {/* Top Banner with Image + Details */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-slate-200/80 pb-8">
              <div className="lg:col-span-7 space-y-4">
                <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold uppercase tracking-wider">
                  <span>Active Vertical Focus</span>
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#111827]">
                  {activeInd.name} Marketing Solutions
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {activeInd.fullDesc}
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="px-6 py-3 rounded-full gradient-btn text-white text-xs font-bold uppercase tracking-wider cursor-pointer shadow-md"
                  >
                    Discuss {activeInd.name} Campaign
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 h-64 sm:h-72 group">
                  <img
                    src={activeInd.image}
                    alt={activeInd.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/90 backdrop-blur-md text-slate-900 border border-white/40">
                    <div className="text-[11px] font-bold uppercase text-[#7C3AED] tracking-wider">
                      {activeInd.name} Strategy
                    </div>
                    <div className="text-xs font-medium text-slate-700">
                      {activeInd.shortDesc}
                    </div>
                  </div>
                </div>
              </div>
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
                    <li key={cIdx} className="p-4 rounded-xl bg-white border border-slate-200/80 text-xs text-slate-700 leading-relaxed shadow-xs">
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
                    <li key={sIdx} className="p-4 rounded-xl bg-white border border-slate-200/80 text-xs text-slate-700 leading-relaxed shadow-xs">
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

