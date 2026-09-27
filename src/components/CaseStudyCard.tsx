import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, TrendingUp } from 'lucide-react';
import type { CaseStudyItem } from '../data/caseStudies';

interface CaseStudyCardProps {
  study: CaseStudyItem;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ study }) => {
  return (
    <Link
      to={`/work/${study.slug}`}
      className="group relative rounded-3xl overflow-hidden bg-[#111827] text-white border border-slate-800 hover:border-[#7C3AED] shadow-xl transition-all duration-300 flex flex-col justify-end min-h-[400px]"
    >
      {/* Background Image with Zoom */}
      <img
        src={study.featuredImage}
        alt={study.clientName}
        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 ease-out"
        loading="lazy"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/70 to-transparent z-10" />

      {/* Top Industry & Services Badges */}
      <div className="absolute top-6 left-6 right-6 z-20 flex items-center justify-between">
        <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md border border-white/20 text-white">
          {study.industry}
        </span>
        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-[#7C3AED] group-hover:scale-110 transition-all">
          <ArrowUpRight className="w-5 h-5 text-white group-hover:rotate-45 transition-transform" />
        </div>
      </div>

      {/* Bottom Card Content */}
      <div className="relative z-20 p-8 space-y-3">
        <div className="flex flex-wrap gap-2">
          {study.services.map((s, sIdx) => (
            <span key={sIdx} className="text-[10px] uppercase tracking-wider font-semibold text-[#06B6D4]">
              {s} {sIdx < study.services.length - 1 ? '•' : ''}
            </span>
          ))}
        </div>

        <h3 className="text-2xl font-bold font-heading group-hover:text-[#06B6D4] transition-colors">
          {study.clientName}
        </h3>

        <p className="text-slate-300 text-xs line-clamp-2 leading-relaxed">
          {study.tagline}
        </p>

        {/* Short Highlighted Metric Badge */}
        <div className="pt-2">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#7C3AED]/30 to-[#06B6D4]/30 border border-[#7C3AED]/40 text-white text-xs font-bold">
            <TrendingUp className="w-4 h-4 text-[#06B6D4]" />
            <span>{study.shortResult}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
