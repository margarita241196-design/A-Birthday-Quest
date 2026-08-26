import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface WalkingRatAnimationProps {
  className?: string;
  onEntered?: () => void;
}

export const WalkingRatAnimation: React.FC<WalkingRatAnimationProps> = ({
  className = "w-full max-w-[280px] h-auto",
  onEntered,
}) => {
  const [frame, setFrame] = useState<number>(0); // 0: 3.png (crawl), 1: 4.png (mid), 2: 5.png (upright), 3: 1.png (hero front)
  const [isWalking, setIsWalking] = useState(true);
  const [imgFailed, setImgFailed] = useState(false);

  useEffect(() => {
    // Frame step sequencing: 0 -> 1 -> 2 -> 0 -> 1 -> 2 -> 3 (stop & greet)
    const sequence = [0, 1, 2, 0, 1, 2, 3];
    let step = 0;

    const interval = setInterval(() => {
      step++;
      if (step < sequence.length) {
        setFrame(sequence[step]);
      } else {
        clearInterval(interval);
        setFrame(3);
        setIsWalking(false);
        if (onEntered) onEntered();
      }
    }, 380);

    return () => clearInterval(interval);
  }, [onEntered]);

  const frameSrcMap: Record<number, string> = {
    0: '/3.png',
    1: '/4.png',
    2: '/5.png',
    3: '/1.png',
  };

  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`}>
      {/* Animated Walk-in Container */}
      <motion.div
        initial={{ x: -120, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2.4, ease: "easeOut" }}
        className="w-full relative flex items-center justify-center min-h-[220px]"
      >
        {/* If custom frames are uploaded (3.png, 4.png, 5.png, 1.png) */}
        {!imgFailed ? (
          <img
            key={frame}
            src={frameSrcMap[frame]}
            alt={`rat-frame-${frame}`}
            onError={() => setImgFailed(true)}
            className="w-full max-h-[34vh] object-contain drop-shadow-sm"
          />
        ) : (
          <>
            {/* Frame 0: 3.png - Low Crawl Rat */}
            {frame === 0 && (
          <motion.svg
            key="frame-3"
            viewBox="0 0 340 280"
            className="w-full h-auto max-h-[36vh] select-none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Long arched tail */}
            <path
              d="M 120 230 C 70 240, 25 180, 45 110 C 58 60, 68 80, 72 100 C 65 140, 95 190, 130 200"
              stroke="#231f20"
              strokeWidth="2.2"
              strokeLinecap="round"
              fill="none"
            />
            {/* Body */}
            <path
              d="M 125 210 C 110 170, 140 120, 195 115 C 240 110, 275 140, 280 180 C 285 205, 270 230, 240 240 C 200 250, 145 245, 125 210 Z"
              stroke="#231f20"
              strokeWidth="2.2"
              fill="#fefdfa"
            />
            {/* Head & Snout */}
            <path
              d="M 270 145 C 290 140, 310 165, 320 175 C 315 185, 290 195, 275 190"
              stroke="#231f20"
              strokeWidth="2.2"
              fill="#fefdfa"
            />
            {/* Ears */}
            <path
              d="M 235 125 C 230 100, 255 95, 265 115"
              stroke="#231f20"
              strokeWidth="2.2"
              fill="#fefdfa"
            />
            <path
              d="M 255 120 C 255 105, 275 105, 280 125"
              stroke="#231f20"
              strokeWidth="2.2"
              fill="#fefdfa"
            />
            {/* Eye */}
            <circle cx="288" cy="155" r="4.5" fill="#231f20" />
            <circle cx="290" cy="153" r="1.2" fill="#ffffff" />
            {/* Whiskers */}
            <path d="M 315 170 L 335 165" stroke="#231f20" strokeWidth="1.2" />
            <path d="M 315 175 L 338 178" stroke="#231f20" strokeWidth="1.2" />
            <path d="M 312 180 L 332 190" stroke="#231f20" strokeWidth="1.2" />
            {/* Front paws walking low */}
            <path d="M 260 210 L 275 245 L 290 245" stroke="#231f20" strokeWidth="2" strokeLinecap="round" />
            <path d="M 240 215 L 250 250 L 262 250" stroke="#231f20" strokeWidth="2" strokeLinecap="round" />
            {/* Back paws */}
            <path d="M 140 220 L 135 255 L 155 258" stroke="#231f20" strokeWidth="2" strokeLinecap="round" />
            <path d="M 160 225 L 165 255 L 180 257" stroke="#231f20" strokeWidth="2" strokeLinecap="round" />
          </motion.svg>
        )}

        {/* Frame 1: 4.png - Mid Step Rising Rat */}
        {frame === 1 && (
          <motion.svg
            key="frame-4"
            viewBox="0 0 340 300"
            className="w-full h-auto max-h-[36vh] select-none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Tail */}
            <path
              d="M 110 240 C 60 260, 20 220, 35 150 C 45 100, 60 120, 65 140 C 55 180, 85 220, 120 230"
              stroke="#231f20"
              strokeWidth="2.2"
              strokeLinecap="round"
              fill="none"
            />
            {/* Rising body 45 deg */}
            <path
              d="M 120 220 C 105 180, 130 130, 180 100 C 230 75, 275 95, 285 140 C 295 180, 260 225, 220 245 C 170 260, 135 250, 120 220 Z"
              stroke="#231f20"
              strokeWidth="2.2"
              fill="#fefdfa"
            />
            {/* Head */}
            <path
              d="M 270 105 C 290 90, 315 110, 325 125 C 315 138, 290 145, 275 135"
              stroke="#231f20"
              strokeWidth="2.2"
              fill="#fefdfa"
            />
            {/* Ears */}
            <path d="M 245 85 C 240 60, 265 55, 275 75" stroke="#231f20" strokeWidth="2.2" fill="#fefdfa" />
            <path d="M 265 80 C 268 65, 290 68, 292 90" stroke="#231f20" strokeWidth="2.2" fill="#fefdfa" />
            {/* Eye */}
            <circle cx="292" cy="112" r="4.5" fill="#231f20" />
            <circle cx="294" cy="110" r="1.2" fill="#ffffff" />
            {/* Whiskers */}
            <path d="M 320 120 L 340 115" stroke="#231f20" strokeWidth="1.2" />
            <path d="M 322 126 L 342 128" stroke="#231f20" strokeWidth="1.2" />
            <path d="M 318 132 L 336 142" stroke="#231f20" strokeWidth="1.2" />
            {/* Paws lifted in mid step */}
            <path d="M 240 160 L 265 180 L 275 178" stroke="#231f20" strokeWidth="2" strokeLinecap="round" />
            <path d="M 225 170 L 250 190 L 260 190" stroke="#231f20" strokeWidth="2" strokeLinecap="round" />
            {/* Back feet */}
            <path d="M 140 235 L 145 270 L 165 272" stroke="#231f20" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M 175 240 L 195 270 L 215 272" stroke="#231f20" strokeWidth="2.2" strokeLinecap="round" />
          </motion.svg>
        )}

        {/* Frame 2: 5.png - Upright Standing Rat */}
        {frame === 2 && (
          <motion.svg
            key="frame-5"
            viewBox="0 0 340 320"
            className="w-full h-auto max-h-[36vh] select-none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Tail trailing low */}
            <path
              d="M 140 260 C 90 280, 30 260, 20 200 C 10 150, 40 140, 50 160 C 40 190, 70 240, 140 255"
              stroke="#231f20"
              strokeWidth="2.2"
              strokeLinecap="round"
              fill="none"
            />
            {/* Tall body 70 deg */}
            <path
              d="M 140 240 C 125 190, 150 120, 200 80 C 245 50, 280 70, 290 120 C 300 170, 260 230, 220 260 C 180 270, 150 260, 140 240 Z"
              stroke="#231f20"
              strokeWidth="2.2"
              fill="#fefdfa"
            />
            {/* Head */}
            <path
              d="M 270 70 C 290 55, 318 75, 325 90 C 315 105, 285 110, 270 98"
              stroke="#231f20"
              strokeWidth="2.2"
              fill="#fefdfa"
            />
            {/* Ears */}
            <path d="M 255 50 C 255 28, 278 28, 285 48" stroke="#231f20" strokeWidth="2.2" fill="#fefdfa" />
            <path d="M 278 45 C 285 30, 305 35, 305 58" stroke="#231f20" strokeWidth="2.2" fill="#fefdfa" />
            {/* Eye */}
            <circle cx="295" cy="78" r="4.5" fill="#231f20" />
            <circle cx="297" cy="76" r="1.2" fill="#ffffff" />
            {/* Whiskers */}
            <path d="M 320 86 L 340 82" stroke="#231f20" strokeWidth="1.2" />
            <path d="M 322 92 L 342 94" stroke="#231f20" strokeWidth="1.2" />
            <path d="M 318 98 L 336 108" stroke="#231f20" strokeWidth="1.2" />
            {/* Front paws held up */}
            <path d="M 240 125 L 260 145 L 270 140" stroke="#231f20" strokeWidth="2" strokeLinecap="round" />
            <path d="M 230 135 L 250 155 L 260 150" stroke="#231f20" strokeWidth="2" strokeLinecap="round" />
            {/* Strong hind feet */}
            <path d="M 160 250 L 165 285 L 188 288" stroke="#231f20" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M 195 255 L 210 288 L 235 290" stroke="#231f20" strokeWidth="2.2" strokeLinecap="round" />
          </motion.svg>
        )}

        {/* Frame 3: 1.png - Hero Front Facing Smiling Rat */}
        {frame === 3 && (
          <motion.svg
            key="frame-1"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            viewBox="0 0 320 380"
            className="w-full h-auto max-h-[38vh] select-none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Tail */}
            <path
              d="M 80 320 C 30 310, 10 270, 30 230 C 50 200, 100 240, 140 280"
              stroke="#231f20"
              strokeWidth="2.2"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M 220 280 C 260 260, 300 280, 310 320"
              stroke="#231f20"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />

            {/* Body */}
            <path
              d="M 110 160 C 80 200, 70 260, 85 320 C 95 350, 225 350, 235 320 C 250 260, 240 200, 210 160 Z"
              stroke="#231f20"
              strokeWidth="2.4"
              fill="#fefdfa"
            />

            {/* Fur texture marks */}
            <path d="M 120 220 C 130 250, 125 280, 130 300" stroke="#4a423e" strokeWidth="1" strokeDasharray="3 4" />
            <path d="M 190 220 C 185 250, 190 280, 185 300" stroke="#4a423e" strokeWidth="1" strokeDasharray="3 4" />

            {/* Paws held to chest */}
            <path
              d="M 135 220 C 145 240, 160 240, 170 225"
              stroke="#231f20"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path d="M 148 238 L 148 248" stroke="#231f20" strokeWidth="1.5" />
            <path d="M 155 240 L 155 250" stroke="#231f20" strokeWidth="1.5" />
            <path d="M 162 238 L 162 248" stroke="#231f20" strokeWidth="1.5" />

            {/* Head */}
            <path
              d="M 120 160 C 100 130, 120 80, 160 80 C 200 80, 220 130, 200 160 Z"
              stroke="#231f20"
              strokeWidth="2.4"
              fill="#fefdfa"
            />

            {/* Big Round Ears (1.png style) */}
            <path
              d="M 125 100 C 95 85, 90 45, 120 45 C 135 45, 140 70, 138 90"
              stroke="#231f20"
              strokeWidth="2.2"
              fill="#fefdfa"
            />
            <path
              d="M 195 100 C 225 85, 230 45, 200 45 C 185 45, 180 70, 182 90"
              stroke="#231f20"
              strokeWidth="2.2"
              fill="#fefdfa"
            />

            {/* Eyes */}
            <circle cx="138" cy="108" r="5" fill="#231f20" />
            <circle cx="140" cy="106" r="1.5" fill="#ffffff" />
            <circle cx="182" cy="108" r="5" fill="#231f20" />
            <circle cx="184" cy="106" r="1.5" fill="#ffffff" />

            {/* Cute Snout & Smile */}
            <path
              d="M 152 125 C 152 120, 168 120, 168 125 C 168 132, 152 132, 152 125 Z"
              fill="#231f20"
            />
            <path
              d="M 160 130 L 160 138 C 150 145, 145 140, 140 136"
              stroke="#231f20"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M 160 138 C 170 145, 175 140, 180 136"
              stroke="#231f20"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            {/* Open smile */}
            <path
              d="M 150 142 Q 160 152 170 142"
              stroke="#231f20"
              strokeWidth="1.5"
              fill="#fca5a5"
            />

            {/* Whiskers */}
            <path d="M 130 125 L 80 115" stroke="#231f20" strokeWidth="1.2" />
            <path d="M 130 130 L 75 130" stroke="#231f20" strokeWidth="1.2" />
            <path d="M 130 136 L 82 145" stroke="#231f20" strokeWidth="1.2" />
            <path d="M 190 125 L 240 115" stroke="#231f20" strokeWidth="1.2" />
            <path d="M 190 130 L 245 130" stroke="#231f20" strokeWidth="1.2" />
            <path d="M 190 136 L 238 145" stroke="#231f20" strokeWidth="1.2" />

            {/* Feet */}
            <path d="M 105 340 L 95 365 L 125 365" stroke="#231f20" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M 215 340 L 225 365 L 195 365" stroke="#231f20" strokeWidth="2.2" strokeLinecap="round" />
          </motion.svg>
        )}
          </>
        )}
      </motion.div>

      {/* Walking Status Badge */}
      <div className="mt-1 flex items-center gap-1 text-[11px] text-[#6b625a] font-serif">
        <span>Кадр {frame + 1} из 4</span>
        <span className="text-[#934c4c] font-bold">
          {frame === 0 ? '🐾 Крадётся' : frame === 1 ? '🐾 Шагает' : frame === 2 ? '🐾 Поднимается' : '✨ На месте!'}
        </span>
      </div>
    </div>
  );
};
