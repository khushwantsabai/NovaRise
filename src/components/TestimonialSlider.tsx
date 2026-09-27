import React, { useState } from 'react';
import { Star, ShieldCheck, MessageSquare, ArrowRight } from 'lucide-react';
import { testimonialsData } from '../data/testimonials';
import type { TestimonialItem } from '../data/testimonials';
import { QuickEnquiryModal } from './QuickEnquiryModal';

export const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  // If no real testimonials are present, show authentic client commitment card
  if (!testimonialsData || testimonialsData.length === 0) {
    return (
      <>
        <div className="rounded-3xl bg-gradient-to-r from-[#111827] via-[#1E293B] to-[#111827] text-white p-8 md:p-12 shadow-xl border border-slate-800 text-center space-y-6">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-[#7C3AED]/20 text-[#06B6D4] flex items-center justify-center">
            <ShieldCheck className="w-7 h-7" />
          </div>

          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase font-bold tracking-widest text-[#06B6D4]">
              Verified Client Integrity
            </span>
            <h3 className="text-2xl md:text-3xl font-bold font-heading text-white">
              Transparent Partnerships & Verified Feedback
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              We do not publish synthetic or simulated client reviews. We build genuine digital partnerships, and verifiable client references are available upon request for prospective retainer clients.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setModalOpen(true)}
              className="px-6 py-3 rounded-full gradient-btn text-white text-xs font-bold uppercase tracking-wider flex items-center space-x-2 cursor-pointer shadow-lg"
            >
              <span>Request Client References</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <QuickEnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      </>
    );
  }

  const activeTestimonial = testimonialsData[currentIndex];

  return (
    <div className="relative rounded-3xl bg-white border border-slate-200 p-8 md:p-12 shadow-xl overflow-hidden">
      <div className="relative z-10 max-w-3xl">
        <div className="flex items-center space-x-1 text-amber-400 mb-6">
          {[...Array(activeTestimonial.rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-amber-400" />
          ))}
        </div>

        <blockquote className="text-xl md:text-2xl font-medium font-heading text-slate-900 leading-relaxed italic mb-8">
          "{activeTestimonial.quote}"
        </blockquote>

        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] font-bold font-heading flex items-center justify-center text-lg">
            {activeTestimonial.author.charAt(0)}
          </div>
          <div>
            <h4 className="text-lg font-bold font-heading text-slate-900">
              {activeTestimonial.author}
            </h4>
            <p className="text-xs text-slate-500 font-medium">
              {activeTestimonial.role}, <span className="text-[#7C3AED] font-semibold">{activeTestimonial.company}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
