import React, { useState } from 'react';
import { Search, Layers, ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';
import { ServiceCard } from '../components/ServiceCard';
import { FAQAccordion } from '../components/FAQAccordion';
import { QuickEnquiryModal } from '../components/QuickEnquiryModal';
import { servicesData } from '../data/services';

export const ServicesPage: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = servicesData.filter(
    (s) =>
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <>
      <SEO
        title="Services — NovaRise Digital | Full 360° Digital Agency"
        description="Explore NovaRise Digital's core services: SEO, Performance Marketing, Social Media, Branding, Website Development, Lead Generation, Content, and Creative Design."
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-xs">
            <Layers className="w-4 h-4 text-[#7C3AED]" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Our Digital Capabilities
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#111827] tracking-tight max-w-4xl mx-auto leading-tight">
            Everything You Need <br />
            <span className="gradient-text">To Grow Digitally.</span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            From strategic search engine optimization to performance paid ads and brand identity, we connect creativity with measurable business outcomes.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative pt-4">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 mt-2" />
            <input
              type="text"
              placeholder="Search services (e.g. SEO, Google Ads, Branding)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-full bg-white border border-slate-200 focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20 text-sm shadow-xs"
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {filteredServices.length === 0 ? (
            <div className="text-center py-12 text-slate-500">
              No services found matching "{searchQuery}".
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredServices.map((service, idx) => (
                <ServiceCard key={service.id} service={service} index={idx} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Growth Guarantee Banner */}
      <section className="py-16 bg-[#111827] text-white">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
          <span className="text-xs uppercase font-bold tracking-widest text-[#06B6D4]">
            Customized Service Plans
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading">
            Need A Custom Marketing Retainer For Your Business?
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            We build tailored packages combining SEO, paid advertising, content creation, and web development specifically around your monthly revenue targets.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="px-8 py-3.5 rounded-full gradient-btn text-white font-bold text-sm shadow-lg inline-flex items-center space-x-2 cursor-pointer"
          >
            <span>Request Custom Scope</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-[#7C3AED]">
              Service Questions
            </span>
            <h2 className="text-3xl font-extrabold font-heading text-[#111827]">
              Frequently Asked Questions
            </h2>
          </div>
          <FAQAccordion />
        </div>
      </section>

      <QuickEnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};
