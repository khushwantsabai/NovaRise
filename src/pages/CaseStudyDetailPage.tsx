import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, TrendingUp } from 'lucide-react';
import { SEO } from '../components/SEO';
import { CaseStudyCard } from '../components/CaseStudyCard';
import { QuickEnquiryModal } from '../components/QuickEnquiryModal';
import { caseStudiesData } from '../data/caseStudies';

export const CaseStudyDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [modalOpen, setModalOpen] = useState(false);

  const study = caseStudiesData.find((cs) => cs.slug === slug);

  if (!study) {
    return <Navigate to="/work" replace />;
  }

  const relatedProjects = caseStudiesData.filter((cs) => cs.slug !== study.slug).slice(0, 3);

  return (
    <>
      <SEO
        title={`${study.clientName} Case Study — NovaRise Digital`}
        description={study.shortResult}
      />

      {/* Case Study Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[#111827] text-white relative overflow-hidden">
        <img
          src={study.heroImage}
          alt={study.clientName}
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/80 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <Link
            to="/work"
            className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Case Studies</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md border border-white/20 text-[#06B6D4]">
              {study.industry}
            </span>
            {study.services.map((s, idx) => (
              <span key={idx} className="px-3 py-1 rounded-full text-xs font-semibold bg-[#7C3AED]/30 text-purple-200">
                {s}
              </span>
            ))}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight leading-tight max-w-4xl">
            {study.clientName}: <span className="gradient-text-light">{study.tagline}</span>
          </h1>

          {/* Highlight Key Metric Badge */}
          <div className="pt-4 flex flex-wrap gap-4">
            {study.metrics.map((m, mIdx) => (
              <div key={mIdx} className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 min-w-[140px]">
                <div className="text-2xl font-extrabold text-[#06B6D4] font-heading">{m.value}</div>
                <div className="text-xs text-slate-300 font-medium">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Overview & Challenge */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#7C3AED]">
                Client Background
              </span>
              <h2 className="text-3xl font-extrabold font-heading text-[#111827]">
                Project Overview
              </h2>
              <p className="text-slate-600 leading-relaxed text-base">
                {study.overview}
              </p>

              <div className="pt-4 space-y-3">
                <h3 className="text-xl font-bold font-heading text-[#111827]">The Challenge</h3>
                <p className="text-slate-600 leading-relaxed text-sm p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                  {study.challenge}
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#06B6D4]">
                Target Goals
              </span>
              <h2 className="text-3xl font-extrabold font-heading text-[#111827]">
                Core Objectives
              </h2>
              <ul className="space-y-3">
                {study.objectives.map((obj, oIdx) => (
                  <li key={oIdx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-[#7C3AED] shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-800">{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Strategy & Execution */}
          <div className="space-y-8 pt-8 border-t border-slate-100">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#7C3AED]">
                Our Approach
              </span>
              <h2 className="text-3xl font-extrabold font-heading text-[#111827]">
                Growth Strategy & Execution
              </h2>
              <p className="text-slate-600 leading-relaxed text-base">
                {study.strategy}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {study.execution.map((ex, exIdx) => (
                <div key={exIdx} className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="text-xs font-mono font-bold text-[#06B6D4]">Phase 0{exIdx + 1}</div>
                  <p className="text-sm font-semibold text-slate-800 leading-relaxed">{ex}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Creative Direction & Outcome */}
          <div className="p-8 md:p-12 rounded-3xl bg-slate-900 text-white space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#06B6D4]">
                Visual Language
              </span>
              <h3 className="text-2xl font-bold font-heading">Creative Direction</h3>
              <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
                {study.creativeDirection}
              </p>
            </div>

            <div className="pt-6 border-t border-slate-800 space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                Business Impact
              </span>
              <h3 className="text-2xl font-bold font-heading">Final Outcome</h3>
              <p className="text-slate-300 text-base max-w-3xl leading-relaxed">
                {study.finalOutcome}
              </p>
            </div>
          </div>



          {/* Related Projects */}
          <div className="space-y-8 pt-8 border-t border-slate-100">
            <h3 className="text-2xl font-bold font-heading text-[#111827]">More Success Stories</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((rel) => (
                <CaseStudyCard key={rel.id} study={rel} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#111827] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading">
            Ready To Write Your Brand's Success Story?
          </h2>
          <button
            onClick={() => setModalOpen(true)}
            className="px-8 py-4 rounded-full gradient-btn text-white font-bold text-sm shadow-xl inline-flex items-center space-x-2 cursor-pointer"
          >
            <span>Start Your Campaign</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <QuickEnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};
