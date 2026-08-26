import React, { useState } from 'react';

export const WineRatIllustration: React.FC<{ className?: string }> = ({ className = "w-40 h-auto" }) => {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Custom user image (7.png) */}
      {!imgFailed ? (
        <img
          src="./7.png"
          alt="Крыска с бокалом"
          onError={() => setImgFailed(true)}
          className="w-full max-h-[160px] h-auto object-contain drop-shadow-sm"
        />
      ) : (
        <svg
          viewBox="0 0 200 130"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto drop-shadow-sm select-none"
        >
        {/* Cute Rat Sitting next to Wine/Champagne Glass */}
        
        {/* Wine glass */}
        <path
          d="M 50 45 C 50 65, 75 65, 75 45 Z"
          stroke="#4a423e"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="#fbf5eb"
        />
        {/* Wine drink fill */}
        <path
          d="M 53 50 C 53 62, 72 62, 72 50 Z"
          fill="#e28b8b"
          opacity="0.6"
        />
        {/* Glass stem and base */}
        <line x1="62.5" y1="65" x2="62.5" y2="85" stroke="#4a423e" strokeWidth="1.6" />
        <ellipse cx="62.5" cy="85" rx="14" ry="3" stroke="#4a423e" strokeWidth="1.4" fill="#faf7ee" />

        {/* Rat sitting holding the glass stem with paw */}
        {/* Left ear */}
        <path
          d="M 72 32 C 68 22, 76 18, 82 25 C 86 28, 84 35, 78 37"
          stroke="#231f20"
          strokeWidth="1.6"
          fill="#fdfcf8"
        />
        {/* Right ear */}
        <path
          d="M 88 28 C 92 18, 100 20, 98 28 C 96 33, 92 34, 88 32"
          stroke="#231f20"
          strokeWidth="1.6"
          fill="#fdfcf8"
        />

        {/* Head */}
        <path
          d="M 74 38 C 68 45, 62 48, 60 52 C 60 55, 64 56, 70 54 C 76 52, 85 48, 88 44 C 92 40, 90 35, 84 34 Z"
          stroke="#231f20"
          strokeWidth="1.8"
          fill="#fdfcf8"
        />
        {/* Eye */}
        <circle cx="76" cy="42" r="2.2" fill="#231f20" />
        <circle cx="77" cy="41" r="0.7" fill="#ffffff" />
        {/* Nose */}
        <circle cx="60" cy="53" r="1.5" fill="#231f20" />

        {/* Paw on the glass */}
        <path
          d="M 68 55 C 65 58, 62 68, 62 72"
          stroke="#231f20"
          strokeWidth="1.8"
          strokeLinecap="round"
        />

        {/* Body */}
        <path
          d="M 85 44 C 95 48, 105 58, 106 72 C 106 82, 98 88, 82 86 C 75 85, 72 78, 72 74"
          stroke="#231f20"
          strokeWidth="1.8"
          fill="#fdfcf8"
        />

        {/* Hind leg / foot */}
        <path
          d="M 84 84 C 88 88, 96 88, 100 86"
          stroke="#231f20"
          strokeWidth="1.8"
          strokeLinecap="round"
        />

        {/* Long tail trailing to the right */}
        <path
          d="M 104 80 C 120 78, 140 85, 160 88 C 175 90, 185 92, 192 90"
          stroke="#231f20"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      )}
    </div>
  );
};
