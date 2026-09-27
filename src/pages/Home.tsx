import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  TrendingUp,
  Users,
  Eye,
  BarChart3,
  CheckCircle2,
  Zap,
  Target,
  ShieldCheck,
  Award,
  Layers,
  Search,
  MessageSquare
} from 'lucide-react';
import { NIcon } from '../components/NIcon';
import { SEO } from '../components/SEO';
import { TrustBar } from '../components/TrustBar';
import { ServiceCard } from '../components/ServiceCard';
import { CaseStudyCard } from '../components/CaseStudyCard';
import { TestimonialSlider } from '../components/TestimonialSlider';
import { FAQAccordion } from '../components/FAQAccordion';
import { QuickEnquiryModal } from '../components/QuickEnquiryModal';
import { servicesData } from '../data/services';
import { caseStudiesData } from '../data/caseStudies';
import { blogData } from '../data/blog';
import { industriesData } from '../data/industries';

export const Home: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const whyChooseReasons = [
    {
      num: '01',
      title: 'Strategy First',
      desc: 'We never run random ads. Every campaign starts with deep market research, audience analysis, and competitor profiling.'
    },
    {
      num: '02',
      title: 'Creative Thinking',
      desc: 'Our design team crafts scroll-stopping visual assets that capture attention and communicate your brand story in seconds.'
    },
    {
      num: '03',
      title: 'Performance Focused',
      desc: 'We measure success by business outcomes — CAC, ROAS, qualified inquiries, and revenue growth, not vanity likes.'
    },
    {
      num: '04',
      title: 'Transparent Reporting',
      desc: 'Real-time dashboards and weekly updates ensure you know exactly where every rupee of your ad spend is going.'
    },
    {
      num: '05',
      title: 'Dedicated Experts',
      desc: 'You work directly with senior growth strategists, performance marketers, and creative designers focused on your goals.'
    },
    {
      num: '06',
      title: 'Long-Term Partnerships',
      desc: 'We build scalable digital infrastructure designed to compound returns and support your long-term business growth.'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discover',
      desc: 'We understand your business model, target audience, revenue goals, and competitive landscape.'
    },
    {
      step: '02',
      title: 'Strategize',
      desc: 'We map out a customized digital growth roadmap outlining channels, budgets, and KPIs.'
    },
    {
      step: '03',
      title: 'Create',
      desc: 'Our creative squad develops high-converting ad copy, visual assets, landing pages, and SEO architecture.'
    },
    {
      step: '04',
      title: 'Launch',
      desc: 'We deploy campaigns across search, social, and web channels with full conversion attribution.'
    },
    {
      step: '05',
      title: 'Optimize',
      desc: 'We analyze daily performance metrics and A/B test creatives to maximize ROI continuously.'
    },
    {
      step: '06',
      title: 'Scale',
      desc: 'We identify winning campaigns and systematically expand budget and channel reach.'
    }
  ];

  return (
    <>
      <SEO
        title="NovaRise Digital — Digital Growth. Designed to Perform."
        description="NovaRise Digital is a modern full-service digital marketing agency helping ambitious brands attract the right audience, generate qualified leads, and build recognizable brands."
      />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50">
        {/* Radial Purple/Cyan Background Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#7C3AED]/15 via-[#06B6D4]/10 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Top Tagline Badge */}
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-xs">
                <NIcon className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Digital Marketing Agency
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4]" />
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#111827] tracking-tight leading-[1.1]">
                Your Brand Deserves <br className="hidden sm:inline" />
                More Than Just Attention.{' '}
                <span className="gradient-text block mt-1">Growth.</span>
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                We build digital experiences, marketing campaigns and growth strategies that help ambitious brands attract the right audience and turn attention into measurable business results.
              </p>

              {/* Hero Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => setModalOpen(true)}
                  className="w-full sm:w-auto px-8 py-4 rounded-full gradient-btn text-white font-bold text-sm shadow-xl shadow-[#7C3AED]/25 flex items-center justify-center space-x-3 cursor-pointer group"
                >
                  <span>Start Your Growth Journey</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link
                  to="/services"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-white border border-slate-200/90 text-slate-800 hover:text-[#7C3AED] hover:border-[#7C3AED] font-bold text-sm shadow-xs transition-colors text-center"
                >
                  Explore Our Services
                </Link>
              </div>

              {/* Agency Assurance Badge */}
              <div className="pt-6 flex items-center justify-center lg:justify-start space-x-3 text-xs text-slate-500">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>
                  <strong>Full-Service Digital Growth Agency</strong> for Startups, SMEs & Enterprises
                </span>
              </div>
            </div>

            {/* Right Hero Visual / Animated UI Dashboard Card Mockup */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Central Dashboard Card */}
                <div className="rounded-3xl bg-[#111827] text-white p-6 shadow-2xl border border-slate-800 relative z-10 overflow-hidden">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500" />
                      <div className="w-3 h-3 rounded-full bg-amber-500" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">NovaRise Performance OS</span>
                  </div>

                  {/* Mock Analytics Interface */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs text-slate-400">Campaign Attribution</div>
                        <div className="text-xl font-bold font-heading text-white">Live Tracking Active</div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold">
                        GA4 + CAPI Sync
                      </span>
                    </div>

                    {/* SVG Curve Representation */}
                    <div className="h-28 w-full pt-2">
                      <svg viewBox="0 0 300 100" className="w-full h-full overflow-visible">
                        <defs>
                          <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.5" />
                            <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M 0,80 Q 50,20 100,50 T 200,30 T 300,10 L 300,100 L 0,100 Z"
                          fill="url(#chartGlow)"
                        />
                        <path
                          d="M 0,80 Q 50,20 100,50 T 200,30 T 300,10"
                          fill="none"
                          stroke="#06B6D4"
                          strokeWidth="3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Floating Metric Card 1: SEO Strategy */}
                <div className="absolute -top-6 -left-6 z-20 p-4 rounded-2xl bg-white shadow-xl border border-slate-200 text-slate-900 animate-float flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <Search className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-slate-900">SEO Strategy</div>
                    <div className="text-[10px] text-slate-500 font-medium uppercase">Technical & Organic</div>
                  </div>
                </div>

                {/* Floating Metric Card 2: Paid Media */}
                <div className="absolute -top-4 -right-4 z-20 p-4 rounded-2xl bg-white shadow-xl border border-slate-200 text-slate-900 animate-float-reverse flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#7C3AED] flex items-center justify-center">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-slate-900">Paid Media</div>
                    <div className="text-[10px] text-slate-500 font-medium uppercase">Google & Meta Ads</div>
                  </div>
                </div>

                {/* Floating Metric Card 3: CRO Conversion */}
                <div className="absolute -bottom-6 -right-6 z-20 p-4 rounded-2xl bg-white shadow-xl border border-slate-200 text-slate-900 animate-float flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-100 text-[#06B6D4] flex items-center justify-center">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-slate-900">CRO Funnels</div>
                    <div className="text-[10px] text-slate-500 font-medium uppercase">High Conversion</div>
                  </div>
                </div>

                {/* Floating Metric Card 4: Data Attribution */}
                <div className="absolute -bottom-6 -left-4 z-20 p-4 rounded-2xl bg-white shadow-xl border border-slate-200 text-slate-900 animate-float-reverse flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-slate-900">100% Data</div>
                    <div className="text-[10px] text-slate-500 font-medium uppercase">Account Ownership</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <TrustBar />

      {/* INTRO / ABOUT SECTION (Split Layout) */}
      <section className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold uppercase tracking-wider">
                <NIcon className="w-3.5 h-3.5" />
                <span>About NovaRise Digital</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#111827] leading-tight">
                Marketing That Moves <br />
                Your Business <span className="gradient-text">Forward.</span>
              </h2>

              <p className="text-slate-600 text-base leading-relaxed">
                NovaRise Digital is a full-service digital marketing and creative agency focused on building brands that are visible, memorable and commercially successful.
              </p>

              <p className="text-slate-600 text-base leading-relaxed">
                From strategy and SEO to paid advertising, social media, content and web experiences, we connect creativity with measurable business outcomes.
              </p>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center space-x-2 text-sm font-bold text-[#7C3AED] hover:text-[#06B6D4] transition-colors group"
                >
                  <span>Read Full Agency Story</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Large Visual */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                  alt="NovaRise Digital Agency Team Strategy"
                  className="w-full h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/90 backdrop-blur-md border border-white/40 text-slate-900 shadow-lg">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#7C3AED] mb-1">
                    Our Philosophy
                  </div>
                  <div className="text-base font-bold font-heading">
                    Strategy + Creativity + Performance = Predictable Growth
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 md:py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#06B6D4]/10 text-[#06B6D4] text-xs font-bold uppercase tracking-wider">
                <Layers className="w-3.5 h-3.5" />
                <span>Our Core Capabilities</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#111827]">
                Everything You Need <br />
                <span className="gradient-text">To Grow Digitally.</span>
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 text-sm font-bold text-[#7C3AED] hover:text-[#06B6D4] transition-colors group"
            >
              <span>View All 8 Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* 8 Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.map((service, idx) => (
              <ServiceCard key={service.id} service={service} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 md:py-28 bg-[#111827] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#7C3AED]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#06B6D4]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#06B6D4] text-xs font-bold uppercase tracking-wider border border-white/10">
              <Award className="w-3.5 h-3.5" />
              <span>The NovaRise Advantage</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
              Why Brands Choose <br />
              <span className="gradient-text-light">NovaRise Digital</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              We're more than just a marketing vendor. We operate as your dedicated digital growth partner focused strictly on measurable business impact.
            </p>
          </div>

          {/* 6 Interactive Cards with Large Numbers */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseReasons.map((reason, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#1E293B]/80 border border-slate-800 hover:border-[#7C3AED] transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="text-4xl font-extrabold font-mono text-[#06B6D4] group-hover:text-[#7C3AED] transition-colors mb-4">
                  {reason.num}
                </div>
                <h3 className="text-xl font-bold font-heading text-white mb-2">
                  {reason.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PROCESS (TIMELINE) */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5" />
              <span>Proven Growth Methodology</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#111827]">
              From First Idea <br />
              <span className="gradient-text">To Real Growth.</span>
            </h2>
          </div>

          {/* Process Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="relative p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#7C3AED] hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#06B6D4] text-white font-mono font-bold text-lg flex items-center justify-center mb-6 shadow-md">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold font-heading text-[#111827] mb-2 group-hover:text-[#7C3AED] transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AGENCY COMMITMENTS SECTION */}
      <section className="py-20 bg-gradient-to-r from-[#111827] via-[#1E293B] to-[#111827] text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs uppercase font-bold tracking-widest text-[#06B6D4]">
              Agency Service Standard
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
              Built On Integrity & Transparency.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs space-y-2">
              <div className="text-3xl sm:text-4xl font-extrabold font-heading gradient-text-light">
                100%
              </div>
              <div className="text-xs text-slate-400 font-medium">Data & Account Ownership</div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs space-y-2">
              <div className="text-3xl sm:text-4xl font-extrabold font-heading text-[#06B6D4]">
                Real-Time
              </div>
              <div className="text-xs text-slate-400 font-medium">Attribution Dashboards</div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs space-y-2">
              <div className="text-3xl sm:text-4xl font-extrabold font-heading text-purple-400">
                Full-Funnel
              </div>
              <div className="text-xs text-slate-400 font-medium">Omnichannel Strategy</div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs space-y-2">
              <div className="text-3xl sm:text-4xl font-extrabold font-heading text-emerald-400">
                Monthly
              </div>
              <div className="text-xs text-slate-400 font-medium">Creative Variety Sprints</div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs space-y-2 col-span-2 md:col-span-1">
              <div className="text-3xl sm:text-4xl font-extrabold font-heading text-amber-400">
                Zero
              </div>
              <div className="text-xs text-slate-400 font-medium">Hidden Ad Margins</div>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES / OUR WORK */}
      <section className="py-20 md:py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold uppercase tracking-wider">
                <Target className="w-3.5 h-3.5" />
                <span>Selected Portfolio</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#111827]">
                Work That Made <br />
                <span className="gradient-text">An Impact.</span>
              </h2>
            </div>
            <Link
              to="/work"
              className="inline-flex items-center space-x-2 text-sm font-bold text-[#7C3AED] hover:text-[#06B6D4] transition-colors group"
            >
              <span>Explore All Case Studies</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudiesData.map((study) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES PREVIEW */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs uppercase font-bold tracking-widest text-[#06B6D4]">
              Tailored Vertical Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#111827]">
              Built For Different Kinds Of Businesses.
            </h2>
            <p className="text-slate-600 text-sm">
              From real estate and healthcare to D2C apparel and SaaS, we craft industry-specific strategies.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {industriesData.slice(0, 10).map((ind) => (
              <Link
                key={ind.id}
                to="/industries"
                className="p-5 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200/80 hover:border-[#7C3AED] hover:shadow-lg transition-all duration-300 text-center space-y-2 group"
              >
                <div className="text-[#7C3AED] font-bold text-sm group-hover:scale-110 transition-transform">
                  ✦
                </div>
                <h3 className="text-sm font-bold font-heading text-[#111827] group-hover:text-[#7C3AED] transition-colors">
                  {ind.name}
                </h3>
                <p className="text-[11px] text-slate-500 line-clamp-2">
                  {ind.shortDesc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase font-bold tracking-widest text-[#7C3AED]">
              Client Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#111827]">
              What Our Clients Say.
            </h2>
          </div>

          <TestimonialSlider />
        </div>
      </section>

      {/* INSIGHTS / BLOG PREVIEW */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-xl">
              <span className="text-xs uppercase font-bold tracking-widest text-[#06B6D4]">
                Knowledge & Strategy
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#111827]">
                Ideas For The Digital Age.
              </h2>
            </div>
            <Link
              to="/insights"
              className="inline-flex items-center space-x-2 text-sm font-bold text-[#7C3AED] hover:text-[#06B6D4] transition-colors group"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogData.slice(0, 3).map((article) => (
              <Link
                key={article.id}
                to={`/insights/${article.slug}`}
                className="group rounded-3xl bg-white border border-slate-200 overflow-hidden hover:border-[#7C3AED] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.featuredImage}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] uppercase font-bold bg-[#111827]/80 text-white backdrop-blur-md">
                      {article.category}
                    </span>
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="text-xs text-slate-400 flex items-center space-x-3">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold font-heading text-[#111827] group-hover:text-[#7C3AED] transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2">
                      {article.shortDescription}
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0 text-xs font-bold text-[#7C3AED] flex items-center space-x-2 group-hover:translate-x-1 transition-transform">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FREE CONSULTATION CTA SECTION */}
      <section className="py-20 bg-[#111827] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/20 via-transparent to-[#06B6D4]/20 pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 text-center relative z-10 space-y-8">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-[#06B6D4] text-xs font-bold uppercase tracking-wider">
            <NIcon className="w-4 h-4" />
            <span>Ready To Scale?</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white leading-tight">
            Have A Growth Goal? <br />
            <span className="gradient-text-light">Let's Turn It Into A Plan.</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Tell us where you are today and where you want to go. We'll help you identify the digital opportunities that can move your business forward.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => setModalOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-full gradient-btn text-white font-bold text-sm shadow-xl shadow-[#7C3AED]/30 flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Book A Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm transition-colors text-center"
            >
              Send An Enquiry
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 md:py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase font-bold tracking-widest text-[#7C3AED]">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#111827]">
              Got Questions? We Have Answers.
            </h2>
          </div>

          <FAQAccordion />
        </div>
      </section>

      {/* Quick Enquiry Modal */}
      <QuickEnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};
