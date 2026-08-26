import React, { useState } from 'react';

export const CupcakeRatIllustration: React.FC<{ className?: string }> = ({ className = "w-full max-w-[280px] h-auto" }) => {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Custom user image (6.png) */}
      {!imgFailed ? (
        <img
          src="./6.png"
          alt="Крыска с капкейком"
          onError={() => setImgFailed(true)}
          className="w-full max-h-[300px] h-auto object-contain drop-shadow-sm"
        />
      ) : (
        <svg
          viewBox="0 0 320 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto drop-shadow-sm select-none"
        >
        {/* Rat Standing and Hugging a Delicious Birthday Cupcake */}

        {/* Ears */}
        {/* Left Ear */}
        <path
          d="M 105 130 C 85 110, 75 125, 88 145 C 95 155, 110 155, 118 150"
          stroke="#231f20"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#fefcf8"
        />
        <path
          d="M 92 130 C 85 122, 85 135, 96 142"
          stroke="#4a423e"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Right Ear */}
        <path
          d="M 165 122 C 180 108, 195 120, 185 142 C 178 152, 165 152, 155 146"
          stroke="#231f20"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#fefcf8"
        />
        <path
          d="M 175 125 C 182 120, 184 132, 175 140"
          stroke="#4a423e"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Head */}
        <path
          d="M 110 152 C 105 145, 125 120, 140 120 C 158 120, 168 140, 165 155 C 160 170, 148 180, 135 180 C 120 180, 112 168, 110 152 Z"
          stroke="#231f20"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#fdfcf8"
        />

        {/* Eyes */}
        <circle cx="126" cy="148" r="4.5" fill="#231f20" />
        <circle cx="128" cy="146" r="1.5" fill="#ffffff" />
        <circle cx="152" cy="146" r="4.5" fill="#231f20" />
        <circle cx="154" cy="144" r="1.5" fill="#ffffff" />

        {/* Nose & Snout */}
        <path
          d="M 136 156 C 133 156, 131 160, 135 162 C 139 164, 144 162, 142 158 C 140 156, 138 156, 136 156 Z"
          fill="#231f20"
        />
        <path d="M 138 162 L 138 167" stroke="#231f20" strokeWidth="1.5" />
        <path d="M 132 167 C 136 170, 142 170, 146 167" stroke="#231f20" strokeWidth="1.5" strokeLinecap="round" />

        {/* Happy open mouth enjoying the cake */}
        <path d="M 134 168 C 136 174, 142 174, 144 168 Z" fill="#934c4c" stroke="#231f20" strokeWidth="1.2" />

        {/* Whiskers */}
        <path d="M 125 158 C 105 152, 85 155, 68 162" stroke="#231f20" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M 125 162 C 100 162, 80 170, 65 178" stroke="#231f20" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M 126 166 C 105 172, 88 185, 75 195" stroke="#231f20" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M 148 158 C 168 152, 188 155, 205 162" stroke="#231f20" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M 148 162 C 172 162, 192 170, 208 178" stroke="#231f20" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M 147 166 C 168 172, 185 185, 198 195" stroke="#231f20" strokeWidth="1.2" strokeLinecap="round" />

        {/* Head tuft hair */}
        <path d="M 135 120 L 132 108" stroke="#231f20" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M 140 120 L 142 106" stroke="#231f20" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M 145 120 L 152 110" stroke="#231f20" strokeWidth="1.4" strokeLinecap="round" />

        {/* Body Outline Behind Cake */}
        <path
          d="M 108 180 C 85 205, 72 245, 78 285 C 82 315, 96 345, 120 355 C 150 358, 178 350, 192 320 C 205 285, 200 230, 175 180"
          stroke="#231f20"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#fdfcf8"
        />

        {/* Big Delicious Birthday Cupcake Held in Paws */}
        {/* Cupcake Base (paper cup with ridges) */}
        <path
          d="M 98 250 L 112 305 C 114 310, 168 310, 170 305 L 184 250 Z"
          stroke="#231f20"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#faf4e8"
        />
        {/* Paper cup vertical fold ridges */}
        <line x1="110" y1="252" x2="120" y2="306" stroke="#231f20" strokeWidth="1.2" />
        <line x1="124" y1="252" x2="130" y2="307" stroke="#231f20" strokeWidth="1.2" />
        <line x1="138" y1="252" x2="142" y2="308" stroke="#231f20" strokeWidth="1.2" />
        <line x1="152" y1="252" x2="152" y2="307" stroke="#231f20" strokeWidth="1.2" />
        <line x1="166" y1="252" x2="162" y2="306" stroke="#231f20" strokeWidth="1.2" />
        <line x1="178" y1="252" x2="168" y2="305" stroke="#231f20" strokeWidth="1.2" />

        {/* Fluffy Swirled Cream Frosting with Berries/Sprinkles */}
        <path
          d="M 92 250 C 88 238, 98 226, 110 230 C 114 220, 126 215, 138 220 C 146 210, 162 210, 170 222 C 182 222, 192 232, 188 248 C 185 256, 172 258, 160 255 C 145 258, 120 258, 98 254"
          stroke="#231f20"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#ffffff"
        />
        {/* Cream Swirl highlights */}
        <path d="M 112 236 C 125 228, 145 230, 155 240" stroke="#231f20" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 125 222 C 135 212, 148 214, 152 225" stroke="#231f20" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 138 210 C 140 200, 146 198, 148 206" stroke="#231f20" strokeWidth="1.8" strokeLinecap="round" />
        
        {/* Top Strawberry / Cherry / Candle on cupcake */}
        <path
          d="M 138 198 C 134 192, 142 186, 148 190 C 154 194, 150 202, 142 202 Z"
          fill="#d9534f"
          stroke="#231f20"
          strokeWidth="1.5"
        />
        {/* Candle flame sparkle */}
        <path
          d="M 144 186 C 142 178, 146 172, 146 172 C 146 172, 150 178, 148 186 Z"
          fill="#fcd34d"
          stroke="#231f20"
          strokeWidth="1.2"
        />

        {/* Paws wrapped hugging around cupcake */}
        {/* Left Paw */}
        <path
          d="M 75 225 C 70 235, 78 255, 92 258 C 98 258, 102 250, 98 240 C 92 228, 85 220, 75 225 Z"
          stroke="#231f20"
          strokeWidth="2.2"
          fill="#fdfcf8"
        />
        <path d="M 94 246 L 102 246" stroke="#231f20" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 96 250 L 104 250" stroke="#231f20" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 94 254 L 100 255" stroke="#231f20" strokeWidth="1.5" strokeLinecap="round" />

        {/* Right Paw */}
        <path
          d="M 195 230 C 200 240, 192 256, 180 258 C 174 258, 170 250, 174 240 C 180 230, 188 222, 195 230 Z"
          stroke="#231f20"
          strokeWidth="2.2"
          fill="#fdfcf8"
        />
        <path d="M 178 246 L 170 246" stroke="#231f20" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 176 250 L 168 250" stroke="#231f20" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 178 254 L 172 255" stroke="#231f20" strokeWidth="1.5" strokeLinecap="round" />

        {/* Feet */}
        {/* Left Foot */}
        <path
          d="M 108 348 C 98 355, 88 360, 80 364 C 76 366, 78 370, 84 370 C 95 369, 110 360, 118 352"
          stroke="#231f20"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#fdfcf8"
        />
        <path d="M 80 364 L 72 366" stroke="#231f20" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M 82 367 L 75 370" stroke="#231f20" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M 85 370 L 80 374" stroke="#231f20" strokeWidth="1.8" strokeLinecap="round" />

        {/* Right Foot */}
        <path
          d="M 160 348 C 168 355, 178 360, 188 364 C 192 366, 190 370, 184 370 C 172 369, 158 360, 150 352"
          stroke="#231f20"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#fdfcf8"
        />
        <path d="M 188 364 L 196 366" stroke="#231f20" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M 186 367 L 193 370" stroke="#231f20" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M 183 370 L 188 374" stroke="#231f20" strokeWidth="1.8" strokeLinecap="round" />

        {/* Long tail sweeping gracefully onto the floor */}
        <path
          d="M 145 352 C 140 375, 170 380, 205 380 C 240 378, 275 395, 285 410 C 290 418, 290 425, 275 428 C 245 432, 215 410, 190 395"
          stroke="#231f20"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      )}
    </div>
  );
};
