import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, HelpCircle, Layers, ArrowLeft } from 'lucide-react';
import { SEO } from '../components/SEO';
import { ServiceCard } from '../components/ServiceCard';
import { QuickEnquiryModal } from '../components/QuickEnquiryModal';
import { NIcon } from '../components/NIcon';
import { servicesData } from '../data/services';

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [modalOpen, setModalOpen] = useState(false);

  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const relatedServices = servicesData.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <SEO
        title={`${service.title} Services — NovaRise Digital`}
        description={service.fullDescription}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Link
            to="/services"
            className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-[#7C3AED] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Services</span>
          </Link>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold uppercase tracking-wider">
              <NIcon className="w-3.5 h-3.5" />
              <span>Specialized Agency Capability</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-[#111827] tracking-tight leading-tight">
              {service.title}
            </h1>

            <p className="text-slate-600 text-lg leading-relaxed">
              {service.fullDescription}
            </p>

            {/* Quick Metrics Bar */}
            <div className="flex flex-wrap gap-6 pt-4">
              {service.stats.map((st, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-2xl font-extrabold text-[#7C3AED]">{st.value}</div>
                  <div className="text-xs text-slate-500 font-medium">{st.label}</div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={() => setModalOpen(true)}
                className="px-8 py-4 rounded-full gradient-btn text-white font-bold text-sm shadow-xl inline-flex items-center space-x-2 cursor-pointer"
              >
                <span>Get Started with {service.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & What We Do */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#06B6D4]">
                Overview
              </span>
              <h2 className="text-3xl font-extrabold font-heading text-[#111827]">
                Why Strategic {service.title} Matters
              </h2>
              <p className="text-slate-600 leading-relaxed text-base">
                {service.overview}
              </p>

              {/* Benefits list */}
              <div className="pt-4 space-y-3">
                <h3 className="text-lg font-bold font-heading text-[#111827]">Key Business Benefits</h3>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, bIdx) => (
                    <li key={bIdx} className="flex items-start space-x-3 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#7C3AED]">
                Scope of Work
              </span>
              <h2 className="text-3xl font-extrabold font-heading text-[#111827]">
                What We Do
              </h2>
              <div className="space-y-3">
                {service.whatWeDo.map((item, wIdx) => (
                  <div key={wIdx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center space-x-3">
                    <div className="w-7 h-7 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] flex items-center justify-center font-bold text-xs shrink-0">
                      0{wIdx + 1}
                    </div>
                    <span className="text-sm font-semibold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Process Section */}
          <div className="space-y-8 pt-8 border-t border-slate-100">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#06B6D4]">
                Execution Roadmap
              </span>
              <h2 className="text-3xl font-extrabold font-heading text-[#111827]">
                Our {service.title} Process
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.process.map((step, pIdx) => (
                <div key={pIdx} className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-3">
                  <div className="text-[#7C3AED] font-mono font-bold text-sm">Step 0{pIdx + 1}</div>
                  <h3 className="text-lg font-bold font-heading text-[#111827]">{step.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div className="p-8 rounded-3xl bg-gradient-to-r from-[#111827] to-[#1E293B] text-white space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase font-bold text-[#06B6D4] tracking-widest">
                  Tangible Assets
                </span>
                <h3 className="text-2xl font-bold font-heading text-white mt-1">
                  What You Receive
                </h3>
              </div>
              <button
                onClick={() => setModalOpen(true)}
                className="px-6 py-2.5 rounded-full gradient-btn text-white text-xs font-bold uppercase tracking-wider cursor-pointer"
              >
                Inquire About Scope
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              {service.deliverables.map((del, dIdx) => (
                <div key={dIdx} className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200 flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#06B6D4] shrink-0" />
                  <span>{del}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs for Service */}
          {service.faqs && service.faqs.length > 0 && (
            <div className="space-y-6 pt-8">
              <div className="text-center max-w-xl mx-auto space-y-2">
                <span className="text-xs uppercase font-bold tracking-widest text-[#7C3AED]">
                  Common Questions
                </span>
                <h3 className="text-2xl font-bold font-heading text-[#111827]">
                  {service.title} FAQs
                </h3>
              </div>

              <div className="space-y-4 max-w-3xl mx-auto">
                {service.faqs.map((faq, fIdx) => (
                  <div key={fIdx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <h4 className="font-bold text-slate-900 font-heading">{faq.question}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Services */}
          <div className="space-y-8 pt-12 border-t border-slate-100">
            <h3 className="text-2xl font-bold font-heading text-[#111827]">Related Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((rel, rIdx) => (
                <ServiceCard key={rel.id} service={rel} index={rIdx} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <QuickEnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService={service.title}
      />
    </>
  );
};
