import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import { SEO } from '../components/SEO';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEO title="404 — Page Not Found | NovaRise Digital" />

      <section className="min-h-screen pt-32 pb-20 flex items-center justify-center bg-gradient-to-b from-slate-50 via-white to-slate-50 text-center px-4">
        <div className="max-w-xl mx-auto space-y-6">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-[#7C3AED]/10 text-[#7C3AED] flex items-center justify-center font-extrabold text-3xl">
            404
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-[#111827]">
            Page Not Found
          </h1>

          <p className="text-slate-600 text-sm max-w-md mx-auto">
            The page you are looking for might have been moved, renamed, or is temporarily unavailable. Let's get you back on track to growing your brand.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/"
              className="px-6 py-3 rounded-full gradient-btn text-white text-xs font-bold uppercase tracking-wider flex items-center space-x-2 shadow-lg"
            >
              <Home className="w-4 h-4" />
              <span>Back To Home</span>
            </Link>
            <Link
              to="/services"
              className="px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
