import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2, CheckCircle2 } from 'lucide-react';
import { SEO } from '../components/SEO';
import { NIcon } from '../components/NIcon';
import { blogData } from '../data/blog';

export const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const article = blogData.find((b) => b.slug === slug);

  if (!article) {
    return <Navigate to="/insights" replace />;
  }

  const relatedArticles = blogData.filter((b) => b.slug !== article.slug).slice(0, 3);

  return (
    <>
      <SEO
        title={`${article.title} — NovaRise Digital`}
        description={article.shortDescription}
      />

      {/* Article Header */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-gradient-to-b from-slate-50 via-white to-slate-50">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <Link
            to="/insights"
            className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-[#7C3AED] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Insights</span>
          </Link>

          <div className="space-y-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#7C3AED]/10 text-[#7C3AED]">
              {article.category}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#111827] leading-tight">
              {article.title}
            </h1>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200">
              <div className="flex items-center space-x-2 text-xs text-slate-500 font-semibold uppercase tracking-wider">
                <NIcon className="w-4 h-4" />
                <span>NovaRise Insights</span>
              </div>

              <div className="flex items-center space-x-4 text-xs text-slate-500 font-medium">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4 text-[#06B6D4]" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4 text-[#7C3AED]" />
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="rounded-3xl overflow-hidden shadow-2xl h-80 sm:h-96 border border-slate-200">
          <img
            src={article.featuredImage}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Article Content & Table of Contents */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Article Body */}
          <div className="lg:col-span-12 space-y-8">
            {/* Table of Contents Box */}
            {article.tableOfContents && article.tableOfContents.length > 0 && (
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                <div className="text-xs uppercase font-bold text-[#7C3AED] tracking-widest">
                  Table of Contents
                </div>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {article.tableOfContents.map((toc) => (
                    <li key={toc.id}>
                      <a href={`#${toc.id}`} className="hover:text-[#7C3AED] hover:underline">
                        {toc.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Key Takeaways */}
            <div className="p-6 rounded-2xl bg-[#111827] text-white space-y-3">
              <div className="text-xs uppercase font-bold text-[#06B6D4] tracking-widest flex items-center space-x-1">
                <NIcon className="w-3.5 h-3.5" />
                <span>Executive Summary & Key Takeaways</span>
              </div>
              <ul className="space-y-2">
                {article.keyTakeaways.map((take, tIdx) => (
                  <li key={tIdx} className="flex items-start space-x-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#06B6D4] shrink-0 mt-0.5" />
                    <span>{take}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* HTML Rendered Content */}
            <div
              className="prose prose-slate max-w-none prose-headings:font-heading prose-headings:font-bold prose-h3:text-2xl prose-h3:text-[#111827] prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600 space-y-4"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Social Share Bar */}
            <div className="pt-8 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500">Share this article:</span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => alert('Link copied to clipboard!')}
                  className="px-4 py-2 rounded-full bg-slate-100 hover:bg-[#7C3AED] hover:text-white text-slate-700 text-xs font-semibold flex items-center space-x-2 transition-colors cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Copy Link</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h3 className="text-2xl font-bold font-heading text-[#111827]">Read Next</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.id}
                to={`/insights/${rel.slug}`}
                className="p-6 rounded-3xl bg-white border border-slate-200 space-y-3 hover:border-[#7C3AED] shadow-sm hover:shadow-lg transition-all"
              >
                <div className="text-xs text-slate-400">{rel.date}</div>
                <h4 className="font-bold text-slate-900 font-heading text-lg leading-snug">{rel.title}</h4>
                <p className="text-xs text-slate-600 line-clamp-2">{rel.shortDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
