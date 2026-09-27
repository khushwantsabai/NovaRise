import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { Logo } from './Logo';
import { NIcon } from './NIcon';

export const Footer: React.FC = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#111827] text-white pt-20 pb-10 border-t border-slate-800 relative overflow-hidden">
      {/* Background glowing gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#7C3AED]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#06B6D4]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Newsletter Banner inside Footer */}
        <div className="mb-16 p-8 md:p-12 rounded-3xl bg-gradient-to-r from-[#1E293B] to-[#0F172A] border border-slate-800 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <div className="text-xs uppercase font-bold tracking-widest text-[#06B6D4] mb-2 flex items-center gap-2">
              <NIcon className="w-4 h-4" />
              <span>Stay Ahead Of The Curve</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold font-heading">
              Subscribe to NovaRise Digital Insights
            </h3>
            <p className="text-slate-400 text-sm mt-2">
              Get bi-weekly actionable growth strategies, SEO updates, and ad creative teardowns directly in your inbox.
            </p>
          </div>

          <div className="w-full lg:w-auto min-w-[320px]">
            {subscribed ? (
              <div className="px-6 py-3.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-sm font-medium flex items-center justify-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>You're subscribed! Welcome aboard.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center p-1.5 rounded-full bg-[#111827] border border-slate-700/80">
                <input
                  type="email"
                  required
                  placeholder="Enter your business email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent px-4 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none flex-1 min-w-[200px]"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-full gradient-btn text-white text-xs font-bold uppercase tracking-wider flex items-center space-x-1 cursor-pointer"
                >
                  <span>Join</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-slate-800">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-1 space-y-4">
            <Logo variant="dark" size="md" />
            <p className="text-slate-400 text-xs leading-relaxed">
              "Digital Growth. Designed to Perform."
            </p>
            <p className="text-slate-400 text-xs leading-relaxed">
              A modern full-service digital marketing and creative growth agency helping businesses improve online presence, generate leads, and build recognizable brands.
            </p>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#06B6D4] mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-white transition-colors">Our Work / Portfolio</Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-white transition-colors">Industries We Serve</Link>
              </li>
              <li>
                <Link to="/insights" className="hover:text-white transition-colors">Insights & Articles</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#06B6D4] mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link to="/services/seo" className="hover:text-white transition-colors">Search Engine Optimization</Link>
              </li>
              <li>
                <Link to="/services/performance-marketing" className="hover:text-white transition-colors">Performance Marketing</Link>
              </li>
              <li>
                <Link to="/services/social-media" className="hover:text-white transition-colors">Social Media Marketing</Link>
              </li>
              <li>
                <Link to="/services/branding" className="hover:text-white transition-colors">Branding & Identity</Link>
              </li>
              <li>
                <Link to="/services/web-development" className="hover:text-white transition-colors">Website Development</Link>
              </li>
              <li>
                <Link to="/services/lead-generation" className="hover:text-white transition-colors">Lead Generation</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#06B6D4] mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link to="/insights" className="hover:text-white transition-colors">Blog & Case Studies</Link>
              </li>
              <li>
                <Link to="/work/auraspace" className="hover:text-white transition-colors">AuraSpace Case Study</Link>
              </li>
              <li>
                <Link to="/work/kova-apparel" className="hover:text-white transition-colors">Kova Apparel Study</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">FAQs & Support</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact Info */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#06B6D4] mb-4">
              Get In Touch
            </h4>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5" />
                <span>Jaipur, Rajasthan 302001, India</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#06B6D4] shrink-0" />
                <a href="mailto:hello@novarisedigital.com" className="hover:text-white transition-colors">
                  hello@novarisedigital.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#7C3AED] shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 <strong>NovaRise Digital</strong>. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/privacy-policy" className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-slate-200 transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
