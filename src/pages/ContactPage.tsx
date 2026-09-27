import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Clock } from 'lucide-react';
import { SEO } from '../components/SEO';
import { NIcon } from '../components/NIcon';
import { FAQAccordion } from '../components/FAQAccordion';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    service: 'SEO',
    budget: '₹40,000 - ₹75,000',
    projectDetails: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SEO
        title="Contact Us — NovaRise Digital | Let's Talk Growth"
        description="Get in touch with NovaRise Digital. Have a project, campaign or growth challenge? Send us a project request or book a free consultation."
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-xs">
            <NIcon className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Get In Touch
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#111827] tracking-tight max-w-4xl mx-auto leading-tight">
            Let's Build Something <br />
            <span className="gradient-text">Worth Talking About.</span>
          </h1>
        </div>
      </section>

      {/* Contact Split Layout */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Side Info */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#06B6D4]">
                  Start A Conversation
                </span>
                <h2 className="text-3xl font-extrabold font-heading text-[#111827]">
                  Let's Talk
                </h2>
                <p className="text-slate-600 text-base leading-relaxed">
                  Have a project, campaign or growth challenge? Tell us what you're working on and we'll evaluate how we can help.
                </p>
              </div>

              {/* Demo Contact Cards */}
              <div className="space-y-4 pt-2">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-[#7C3AED]/10 text-[#7C3AED] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-semibold uppercase">Email Us</div>
                    <a href="mailto:hello@novarisedigital.com" className="text-sm font-bold text-slate-900 hover:text-[#7C3AED] transition-colors">
                      hello@novarisedigital.com
                    </a>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-[#06B6D4]/10 text-[#06B6D4] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-semibold uppercase">Call / WhatsApp</div>
                    <a href="tel:+919876543210" className="text-sm font-bold text-slate-900 hover:text-[#06B6D4] transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-semibold uppercase">Office Headquarters</div>
                    <div className="text-sm font-bold text-slate-900">
                      Jaipur, Rajasthan, India
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time Guarantee */}
              <div className="p-6 rounded-2xl bg-[#111827] text-white space-y-2">
                <div className="flex items-center space-x-2 text-xs font-bold text-[#06B6D4] uppercase tracking-wider">
                  <Clock className="w-4 h-4" />
                  <span>Fast Response Guarantee</span>
                </div>
                <p className="text-xs text-slate-300">
                  We reply to all project inquiries within 2 business hours with an initial audit review.
                </p>
              </div>
            </div>

            {/* Right Side Interactive Form */}
            <div className="lg:col-span-7">
              <div className="p-8 md:p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-xl">
                {submitted ? (
                  <div className="py-16 text-center space-y-4">
                    <div className="w-20 h-20 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center animate-bounce">
                      <CheckCircle2 className="w-12 h-12" />
                    </div>
                    <h3 className="text-3xl font-bold font-heading text-slate-900">Project Request Sent!</h3>
                    <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                      Thank you, <strong>{formData.fullName}</strong>. Our senior growth strategist will review your goals and reach back to <strong>{formData.email}</strong> shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 px-8 py-3 rounded-full bg-[#111827] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#7C3AED] transition-colors cursor-pointer"
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="text-xl font-bold font-heading text-slate-900 mb-2">Project Request Form</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Aarav Mehta"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#7C3AED] bg-white text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Business Email *</label>
                        <input
                          type="email"
                          required
                          placeholder="aarav@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#7C3AED] bg-white text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#7C3AED] bg-white text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Company Name</label>
                        <input
                          type="text"
                          placeholder="e.g. AuraSpace Living"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#7C3AED] bg-white text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Website URL</label>
                        <input
                          type="url"
                          placeholder="https://yourbrand.com"
                          value={formData.website}
                          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#7C3AED] bg-white text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Service Required *</label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#7C3AED] bg-white text-sm"
                        >
                          <option value="SEO">SEO (Search Engine Optimization)</option>
                          <option value="Google Ads">Google Ads / Paid Media</option>
                          <option value="Social Media">Social Media Marketing</option>
                          <option value="Website">Website Design & Development</option>
                          <option value="Branding">Branding & Visual Identity</option>
                          <option value="Lead Generation">Lead Generation Funnel</option>
                          <option value="Other">Other / Full 360 Retainer</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Monthly Marketing Budget</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#7C3AED] bg-white text-sm"
                      >
                        <option value="₹20,000 - ₹40,000">₹20,000 - ₹40,000 / month</option>
                        <option value="₹40,000 - ₹75,000">₹40,000 - ₹75,000 / month</option>
                        <option value="₹75,000 - ₹1,50,000">₹75,000 - ₹1,50,000 / month</option>
                        <option value="₹1,50,000+">₹1,50,000+ / month</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Project Details / Goals</label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about your current marketing challenges or target outcomes..."
                        value={formData.projectDetails}
                        onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#7C3AED] bg-white text-sm resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-full gradient-btn text-white font-bold text-sm tracking-wide shadow-xl flex items-center justify-center space-x-2 cursor-pointer"
                    >
                      <span>Send Project Request</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold font-heading text-[#111827]">
              Contact & Onboarding FAQs
            </h2>
          </div>
          <FAQAccordion />
        </div>
      </section>
    </>
  );
};
