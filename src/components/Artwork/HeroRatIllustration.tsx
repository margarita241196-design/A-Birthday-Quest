import React, { useState } from 'react';

export const HeroRatIllustration: React.FC<{ className?: string }> = ({ className = "w-full max-w-[280px] h-auto" }) => {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Custom user image (1.png) */}
      {!imgFailed ? (
        <img
          src="./1.png"
          alt="Крыска"
          onError={() => setImgFailed(true)}
          className="w-full max-h-[280px] h-auto object-contain drop-shadow-sm"
        />
      ) : (
        <svg
          viewBox="0 0 320 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto drop-shadow-sm select-none"
        >
        {/* Dynamic Rat Hand-Drawn Sketch (Pose: Standing on hind legs, welcoming hand) */}
        
        {/* Left ear */}
        <path
          d="M 85 188 C 75 170, 70 155, 82 150 C 95 145, 110 162, 112 178"
          stroke="#231f20"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#fefcf8"
        />
        <path
          d="M 84 175 C 80 165, 84 157, 92 156 C 98 156, 102 165, 102 172"
          stroke="#4a423e"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Right ear */}
        <path
          d="M 125 182 C 130 162, 142 155, 155 160 C 165 165, 160 185, 148 195"
          stroke="#231f20"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#fefcf8"
        />
        <path
          d="M 134 176 C 138 168, 145 166, 150 170 C 153 174, 150 183, 143 188"
          stroke="#4a423e"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Head outline */}
        <path
          d="M 85 188 C 72 202, 68 218, 76 226 C 85 235, 105 232, 115 224 C 128 228, 142 222, 148 208 C 150 200, 146 192, 144 190"
          stroke="#231f20"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#fdfcf8"
        />

        {/* Snout & Nose */}
        <path
          d="M 76 226 C 73 228, 71 232, 73 234 C 76 236, 80 234, 82 230"
          stroke="#231f20"
          strokeWidth="2"
          fill="#231f20"
        />
        {/* Mouth curve */}
        <path
          d="M 78 234 C 84 238, 92 237, 98 233"
          stroke="#231f20"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Eye (Dark gleaming bead) */}
        <circle cx="104" cy="208" r="5" fill="#231f20" />
        <circle cx="106" cy="206" r="1.5" fill="#ffffff" />
        
        {/* Whiskers */}
        <path d="M 75 220 C 55 215, 38 216, 28 220" stroke="#231f20" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M 74 224 C 52 225, 36 230, 25 238" stroke="#231f20" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M 77 228 C 58 233, 42 242, 32 252" stroke="#231f20" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M 85 230 C 95 236, 110 242, 120 245" stroke="#231f20" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M 86 234 C 98 242, 112 250, 122 256" stroke="#231f20" strokeWidth="1.2" strokeLinecap="round" />

        {/* Left hand (tucked cute paw) */}
        <path
          d="M 72 260 C 62 258, 48 266, 42 278 C 38 286, 44 294, 52 292 C 58 290, 68 278, 74 272"
          stroke="#231f20"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#fdfcf8"
        />
        {/* Little claws on left paw */}
        <path d="M 42 275 L 36 270" stroke="#231f20" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M 40 282 L 34 278" stroke="#231f20" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M 42 288 L 36 286" stroke="#231f20" strokeWidth="1.8" strokeLinecap="round" />

        {/* Right arm & paw (outstretched pointing dramatically) */}
        <path
          d="M 145 238 C 170 230, 200 215, 230 198 C 240 192, 246 195, 244 202 C 240 208, 225 220, 200 236 C 180 250, 168 258, 155 264"
          stroke="#231f20"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#fdfcf8"
        />
        {/* Claws on pointing hand */}
        <path d="M 242 195 L 252 190" stroke="#231f20" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M 245 199 L 255 196" stroke="#231f20" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M 244 203 L 253 203" stroke="#231f20" strokeWidth="1.8" strokeLinecap="round" />

        {/* Body (chubby, expressive silhouette) */}
        <path
          d="M 82 250 C 65 275, 52 305, 58 335 C 62 355, 82 368, 115 365 C 150 362, 175 348, 185 320 C 195 290, 180 260, 155 248"
          stroke="#231f20"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#fdfcf8"
        />

        {/* Belly sketch fur texture lines */}
        <path d="M 75 325 C 80 340, 92 350, 105 352" stroke="#4a423e" strokeWidth="1.2" strokeDasharray="3 3" />
        <path d="M 98 270 C 96 285, 100 300, 102 312" stroke="#4a423e" strokeWidth="1.2" strokeDasharray="2 3" />
        <path d="M 125 275 C 130 290, 134 308, 132 322" stroke="#4a423e" strokeWidth="1.2" strokeDasharray="3 4" />
        <path d="M 150 285 C 156 300, 160 320, 155 335" stroke="#4a423e" strokeWidth="1.2" strokeDasharray="2 3" />

        {/* Left Foot (grounded) */}
        <path
          d="M 68 350 C 60 354, 48 358, 42 362 C 40 365, 42 368, 48 368 C 58 368, 70 360, 78 354"
          stroke="#231f20"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#fdfcf8"
        />
        <path d="M 42 362 L 36 364" stroke="#231f20" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M 44 365 L 38 368" stroke="#231f20" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M 47 368 L 42 372" stroke="#231f20" strokeWidth="1.8" strokeLinecap="round" />

        {/* Right Foot (extended) */}
        <path
          d="M 152 348 C 160 354, 180 362, 195 365 C 200 366, 202 363, 198 358 C 190 352, 175 344, 165 340"
          stroke="#231f20"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#fdfcf8"
        />
        <path d="M 195 365 L 202 368" stroke="#231f20" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M 198 362 L 205 363" stroke="#231f20" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M 196 358 L 204 357" stroke="#231f20" strokeWidth="1.8" strokeLinecap="round" />

        {/* Long expressive elegant curved tail sweeping high */}
        <path
          d="M 175 330 C 200 310, 205 260, 195 220 C 185 180, 210 140, 245 110 C 270 90, 295 80, 312 75"
          stroke="#231f20"
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 178 335 C 202 312, 208 262, 197 222 C 187 182, 212 142, 247 112 C 272 92, 297 82, 312 75"
          stroke="#68605c"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      )}
    </div>
  );
};
