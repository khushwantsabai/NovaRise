import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, ShieldCheck, Award, HeartHandshake, Mail } from 'lucide-react';
import { LinkedinIcon, InstagramIcon } from '../components/SocialIcons';
import { SEO } from '../components/SEO';
import { QuickEnquiryModal } from '../components/QuickEnquiryModal';
import { NIcon } from '../components/NIcon';
import { teamData } from '../data/team';

export const About: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const values = [
    {
      title: 'Performance Precision',
      desc: 'We focus on metrics that impact your P&L statement — sales, CPA, and ROAS — not just vanity social media interactions.'
    },
    {
      title: 'Radical Transparency',
      desc: 'No hidden ad margins or vague monthly summaries. You get live dashboards and 100% ownership of your digital assets.'
    },
    {
      title: 'Creative Excellence',
      desc: 'We believe exceptional design and compelling storytelling are the highest-converting assets in modern digital marketing.'
    },
    {
      title: 'Continuous Evolution',
      desc: 'Digital channels change rapidly. We constantly test emerging ad formats, SEO tactics, and AI workflows to keep your brand ahead.'
    }
  ];

  return (
    <>
      <SEO
        title="About Us — NovaRise Digital | Full-Service Growth Agency"
        description="Learn about NovaRise Digital, our mission, vision, values, leadership team, and our proven digital growth approach for ambitious brands."
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-xs">
            <NIcon className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Who We Are
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#111827] tracking-tight max-w-4xl mx-auto leading-tight">
            We Connect Strategy & Creativity <br />
            <span className="gradient-text">With Commercial Results.</span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            NovaRise Digital is a modern full-service digital marketing and creative growth agency helping businesses improve their online presence, generate qualified leads and build recognizable brands.
          </p>
        </div>
      </section>

      {/* Who We Are & Mission Split Layout */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#06B6D4]">
                Our Story & Vision
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#111827]">
                Founded To Eliminate Wasteful Marketing Spend.
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                NovaRise Digital was founded in Jaipur with a clear objective: to bridge the gap between creative design agencies that lack performance tracking, and technical ad agencies that lack visual polish.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Over the past 8+ years, we have scaled brands across 24 industries — ranging from real estate and healthcare to D2C apparel and SaaS companies — delivering compounding organic search visibility and performance ad funnels.
              </p>
            </div>
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#7C3AED]/10 text-[#7C3AED] flex items-center justify-center font-bold">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold font-heading text-[#111827]">Our Mission</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    To empower ambitious businesses with predictable digital marketing engines that turn attention into sustainable revenue growth.
                  </p>
                </div>
                <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#06B6D4]/10 text-[#06B6D4] flex items-center justify-center font-bold">
                    <Eye className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold font-heading text-[#111827]">Our Vision</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    To be India's most trusted digital growth partner recognized for strategic integrity, creative distinction, and performance excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs uppercase font-bold tracking-widest text-[#7C3AED]">
                Core Principles
              </span>
              <h2 className="text-3xl font-extrabold font-heading text-[#111827]">
                What Drives NovaRise Digital
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-3 hover:bg-white hover:shadow-lg hover:border-[#7C3AED] transition-all">
                  <div className="text-[#7C3AED] font-mono font-bold text-xs">0{idx + 1}</div>
                  <h3 className="text-lg font-bold font-heading text-[#111827]">{v.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Marketplace Verification Banner */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#0F172A] border border-slate-800 shadow-2xl text-white flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#7C3AED]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-start space-x-4 z-10 max-w-2xl">
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-1 text-left">
                <h3 className="text-base sm:text-lg font-bold font-heading text-white">
                  Also verified on trusted marketplaces
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Our growth frameworks, digital guides & marketing templates are verified on trusted global platforms — access them directly here or via any of these marketplaces.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-start md:justify-end gap-2.5 z-10 shrink-0 w-full md:w-auto">
              <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-slate-800/80 text-slate-200 border border-slate-700/80 hover:border-[#7C3AED] transition-colors">
                CopeCart
              </span>
              <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-slate-800/80 text-slate-200 border border-slate-700/80 hover:border-[#06B6D4] transition-colors">
                Digistore24
              </span>
              <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-slate-800/80 text-slate-200 border border-slate-700/80 hover:border-emerald-500 transition-colors">
                ClickBank
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-20 md:py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase font-bold tracking-widest text-[#06B6D4]">
              Multidisciplinary Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#111827]">
              Specialized Agency Capabilities.
            </h2>
            <p className="text-slate-600 text-sm">
              Our growth squads combine deep analytics, creative art direction, technical SEO architecture, and performance copywriting.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamData.map((member) => (
              <div
                key={member.id}
                className="group rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl hover:border-[#7C3AED] transition-all duration-300 p-8 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.color} text-white font-extrabold font-heading text-xl flex items-center justify-center shadow-md`}>
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading text-[#111827]">
                      {member.name}
                    </h3>
                    <div className="text-xs font-semibold text-[#7C3AED] mt-1">
                      {member.role}
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pt-1">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-[#111827] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading">
            Ready To Partner With <br />
            <span className="gradient-text-light">NovaRise Digital?</span>
          </h2>
          <p className="text-slate-300 text-base max-w-xl mx-auto">
            Book a complimentary 30-minute growth consultation with our leadership team today.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="px-8 py-4 rounded-full gradient-btn text-white font-bold text-sm shadow-xl inline-flex items-center space-x-2 cursor-pointer"
          >
            <span>Book Strategy Call</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <QuickEnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};
