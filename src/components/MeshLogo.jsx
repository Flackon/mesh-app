import React from 'react';
import { useTheme } from '../hooks/useTheme';

export const MeshLogo = ({ size = 'md' }) => {
  const { isDark, accentColor } = useTheme();
  
  const sizeMap = {
    sm: { ring: 60, head: 30, text: 14 },
    md: { ring: 120, head: 60, text: 24 },
    lg: { ring: 180, head: 90, text: 36 },
  };
  
  const { ring, head, text } = sizeMap[size];
  
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {/* Gold Ring with Profile Head */}
      <svg
        width={ring}
        height={ring}
        viewBox="0 0 120 120"
        className="drop-shadow-lg"
      >
        {/* Outer Circle - Gold Ring */}
        <circle
          cx="60"
          cy="60"
          r="58"
          fill="none"
          stroke={accentColor}
          strokeWidth="4"
        />
        
        {/* Inner Circle */}
        <circle
          cx="60"
          cy="60"
          r="50"
          fill={isDark ? '#1a1a1a' : '#f5f5f5'}
          stroke={accentColor}
          strokeWidth="2"
        />
        
        {/* Profile Head - Minimalist */}
        <g>
          {/* Head outline */}
          <circle
            cx="60"
            cy="45"
            r="18"
            fill="none"
            stroke={accentColor}
            strokeWidth="2"
          />
          
          {/* Profile line (facing right) */}
          <path
            d="M 72 45 Q 80 45 80 55 L 80 65"
            fill="none"
            stroke={accentColor}
            strokeWidth="2"
            strokeLinecap="round"
          />
          
          {/* Face features */}
          <circle cx="68" cy="42" r="2" fill={accentColor} /> {/* Eye */}
          <path
            d="M 65 50 Q 67 52 70 50"
            fill="none"
            stroke={accentColor}
            strokeWidth="1.5"
            strokeLinecap="round"
          /> {/* Smile */}
        </g>
      </svg>
      
      {/* M Text Below */}
      <div
        className="text-center font-bold tracking-widest"
        style={{
          fontSize: `${text}px`,
          color: accentColor,
          letterSpacing: '8px',
        }}
      >
        M
      </div>
      
      {/* MESH text spread under */}
      <div
        className="text-center font-light tracking-[8px]"
        style={{
          fontSize: `${text * 0.5}px`,
          color: isDark ? '#ffffff' : '#000000',
          letterSpacing: '6px',
        }}
      >
        MESH
      </div>
    </div>
  );
};

export default MeshLogo;
