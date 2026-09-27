import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, BookOpen } from 'lucide-react';
import { SEO } from '../components/SEO';
import { blogData } from '../data/blog';

export const InsightsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Conversion Optimization', 'SEO & Organic Search', 'Social Media', 'Paid Ads', 'Branding', 'Growth Strategy'];

  const filteredArticles = blogData.filter((article) => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <SEO
        title="Insights & Blog — NovaRise Digital"
        description="Actionable guides, SEO strategies, paid ad teardowns, and brand position insights for modern business growth."
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-xs">
            <BookOpen className="w-4 h-4 text-[#7C3AED]" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Agency Publication
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#111827] tracking-tight max-w-4xl mx-auto leading-tight">
            Ideas For <br />
            <span className="gradient-text">The Digital Age.</span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            In-depth guides, technical SEO breakdowns, conversion optimization frameworks, and performance marketing strategies.
          </p>

          {/* Search & Categories */}
          <div className="max-w-xl mx-auto relative pt-2">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 mt-1" />
            <input
              type="text"
              placeholder="Search articles by title or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full bg-white border border-slate-200 focus:outline-none focus:border-[#7C3AED] text-sm shadow-xs"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#111827] text-white'
                    : 'bg-white border border-slate-200 text-slate-600 hover:border-[#7C3AED]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-12 text-slate-500">
              No articles found matching your filter criteria.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <Link
                  key={article.id}
                  to={`/insights/${article.slug}`}
                  className="group rounded-3xl bg-white border border-slate-200/80 overflow-hidden hover:border-[#7C3AED] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={article.featuredImage}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
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

                      <h3 className="text-xl font-bold font-heading text-[#111827] group-hover:text-[#7C3AED] transition-colors leading-snug">
                        {article.title}
                      </h3>

                      <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                        {article.shortDescription}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-100 mt-4 text-xs font-bold">
                    <div className="text-slate-400 font-normal">
                      NovaRise Insights
                    </div>
                    <div className="text-[#7C3AED] flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};
