import React from 'react';

interface NIconProps {
  className?: string;
}

export const NIcon: React.FC<NIconProps> = ({ className = 'w-4 h-4' }) => {
  return (
    <img
      src="/logo-n-mark.png"
      alt="N"
      className={`${className} object-contain inline-block shrink-0 select-none`}
    />
  );
};

export default NIcon;
