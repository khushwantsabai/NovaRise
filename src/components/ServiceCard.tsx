import React from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  TrendingUp,
  Share2,
  Palette,
  Code,
  FileText,
  Users,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { NIcon } from './NIcon';
import type { ServiceItem } from '../data/services';

const iconMap: Record<string, React.ReactNode> = {
  Search: <Search className="w-6 h-6" />,
  TrendingUp: <TrendingUp className="w-6 h-6" />,
  Share2: <Share2 className="w-6 h-6" />,
  Palette: <Palette className="w-6 h-6" />,
  Code: <Code className="w-6 h-6" />,
  FileText: <FileText className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  Sparkles: <NIcon className="w-6 h-6" />,
  NIcon: <NIcon className="w-6 h-6" />
};

interface ServiceCardProps {
  service: ServiceItem;
  index?: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index = 0 }) => {
  const icon = iconMap[service.iconName] || <NIcon className="w-6 h-6" />;

  return (
    <Link
      to={`/services/${service.slug}`}
      className="group relative p-8 rounded-3xl bg-white border border-slate-200/80 hover:border-[#7C3AED] shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between overflow-hidden"
    >
      {/* Background radial glow on hover */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#7C3AED]/10 to-[#06B6D4]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div>
        {/* Top Header & Icon */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7C3AED]/10 to-[#06B6D4]/10 text-[#7C3AED] group-hover:bg-gradient-to-br group-hover:from-[#7C3AED] group-hover:to-[#06B6D4] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm group-hover:scale-110">
            {icon}
          </div>
          <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-[#7C3AED] transition-colors">
            0{index + 1}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold font-heading text-[#111827] group-hover:text-[#7C3AED] transition-colors mb-3">
          {service.title}
        </h3>

        {/* Short Description */}
        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          {service.shortDescription}
        </p>

        {/* Feature bullets preview */}
        <ul className="space-y-2 mb-8">
          {service.features.slice(0, 4).map((feature, fIdx) => (
            <li key={fIdx} className="flex items-center text-xs text-slate-700 space-x-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#06B6D4] shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer Link */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#111827] group-hover:text-[#7C3AED]">
        <span>Explore Service</span>
        <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-[#7C3AED] group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:translate-x-1">
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
};
