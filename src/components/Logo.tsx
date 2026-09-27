import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'light', size = 'md', className = '' }) => {
  const isDark = variant === 'dark';

  const iconHeights = {
    sm: 'h-8 sm:h-[34px]',
    md: 'h-10 sm:h-[42px]',
    lg: 'h-12 sm:h-[52px]'
  };

  const titleSizes = {
    sm: 'text-lg sm:text-xl',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl'
  };

  const subTitleSizes = {
    sm: 'text-[8.5px] sm:text-[9.5px] tracking-[0.2em]',
    md: 'text-[9.5px] sm:text-[11px] tracking-[0.24em]',
    lg: 'text-[11.5px] sm:text-[13px] tracking-[0.26em]'
  };

  return (
    <Link to="/" className={`inline-flex items-center space-x-3 group ${className}`}>
      {/* Ribbon N Icon Mark */}
      <img
        src="/logo-n-mark.png"
        alt="NovaRise Icon"
        className={`${iconHeights[size]} w-auto object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-xs shrink-0 self-center`}
      />

      {/* Brand Typography */}
      <div className="flex flex-col justify-center select-none py-0.5">
        <div className="flex items-center leading-none">
          <span
            className={`${titleSizes[size]} font-extrabold font-heading tracking-tight ${
              isDark ? 'text-white' : 'text-[#111827]'
            }`}
          >
            Nova
          </span>
          <span className={`${titleSizes[size]} font-extrabold font-heading tracking-tight gradient-text ml-0.5`}>
            Rise
          </span>
        </div>
        <span
          className={`${subTitleSizes[size]} font-bold uppercase mt-1.5 leading-none ${
            isDark ? 'text-slate-400' : 'text-slate-500'
          }`}
        >
          Digital Growth Agency
        </span>
      </div>
    </Link>
  );
};

export default Logo;
