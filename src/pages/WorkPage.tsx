import React, { useState } from 'react';
import { Target, ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';
import { CaseStudyCard } from '../components/CaseStudyCard';
import { QuickEnquiryModal } from '../components/QuickEnquiryModal';
import { caseStudiesData } from '../data/caseStudies';

export const WorkPage: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  const industries = ['All', 'Real Estate', 'Fashion eCommerce', 'Healthcare', 'Finance', 'Lifestyle', 'Education'];

  const filteredStudies = activeFilter === 'All'
    ? caseStudiesData
    : caseStudiesData.filter((s) => s.industry.toLowerCase() === activeFilter.toLowerCase());

  return (
    <>
      <SEO
        title="Our Work — NovaRise Digital | Case Studies & Portfolio"
        description="Explore NovaRise Digital's portfolio of successful client projects across real estate, fashion eCommerce, healthcare, finance, lifestyle, and education."
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-xs">
            <Target className="w-4 h-4 text-[#7C3AED]" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Selected Client Work
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#111827] tracking-tight max-w-4xl mx-auto leading-tight">
            Work That Made <br />
            <span className="gradient-text">An Impact.</span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Real brands. Real challenges. Real business results. Explore how we've helped ambitious companies scale organic reach and generate millions in revenue.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {industries.map((ind) => (
              <button
                key={ind}
                onClick={() => setActiveFilter(ind)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeFilter === ind
                    ? 'bg-[#111827] text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-600 hover:border-[#7C3AED] hover:text-[#7C3AED]'
                }`}
              >
                {ind}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((study) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats Banner */}
      <section className="py-20 bg-[#111827] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading">
            Want Similar Results For Your Brand?
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Let's analyze your current digital presence and build a growth roadmap tailored to your market segment.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="px-8 py-4 rounded-full gradient-btn text-white font-bold text-sm shadow-xl inline-flex items-center space-x-2 cursor-pointer"
          >
            <span>Book A Free Strategy Audit</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <QuickEnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};
