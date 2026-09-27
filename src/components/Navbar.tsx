import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { QuickEnquiryModal } from './QuickEnquiryModal';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page navigate
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Our Work', path: '/work' },
    { name: 'Insights', path: '/insights' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-white/85 backdrop-blur-xl border-b border-slate-200/80 shadow-sm'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Logo variant="light" size="md" />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 bg-white/60 p-1.5 rounded-full border border-slate-200/70 shadow-xs backdrop-blur-md">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                    active
                      ? 'bg-[#111827] text-white shadow-sm'
                      : 'text-slate-600 hover:text-[#111827] hover:bg-slate-100/70'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Header Action Button */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={() => setModalOpen(true)}
              className="px-5 py-2.5 rounded-full gradient-btn text-white text-xs font-bold tracking-wide uppercase flex items-center space-x-2 shadow-md shadow-[#7C3AED]/25 cursor-pointer group"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => setModalOpen(true)}
              className="px-3.5 py-1.5 rounded-full gradient-btn text-white text-xs font-bold shadow-sm"
            >
              Talk
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[73px] bottom-0 bg-[#111827]/95 backdrop-blur-2xl z-50 overflow-y-auto flex flex-col p-6 text-white animate-fade-in">
            <div className="space-y-2 flex-1">
              <div className="text-xs uppercase tracking-widest text-[#06B6D4] font-bold mb-4 px-3">
                Navigation
              </div>
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-3 rounded-2xl text-base font-medium transition-all ${
                      active
                        ? 'bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white font-bold'
                        : 'text-slate-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="pt-6 border-t border-slate-800 space-y-4">
              <div className="text-xs text-slate-400">
                Ready to turn attention into growth?
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setModalOpen(true);
                }}
                className="w-full py-3.5 rounded-2xl gradient-btn text-white font-bold text-center flex items-center justify-center space-x-2 shadow-lg"
              >
                <span>Book Free Strategy Call</span>
                <ArrowUpRight className="w-5 h-5" />
              </button>
              <div className="text-center text-xs text-slate-400 pt-2">
                Jaipur, Rajasthan • hello@novarisedigital.com
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Quick Enquiry Modal */}
      <QuickEnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};
