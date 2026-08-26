import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { playSparkleSound } from '../../utils/audio';

interface IntroScreenProps {
  onStartMaze: () => void;
}

export const IntroScreen: React.FC<IntroScreenProps> = ({ onStartMaze }) => {
  const [typedMessage, setTypedMessage] = useState('');
  const [isTypingDone, setIsTypingDone] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);

  const fullText =
    "Поздравляю, ты спасла знания, что могли кануть в небытие! Но не спеши радоваться, тебе предстоит вспомнить, что было в этом году и с чем теперь связаны предметы и воспоминания.";

  // Typewriter effect for dialogue
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedMessage(fullText.slice(0, index));
        index++;
      } else {
        setIsTypingDone(true);
        clearInterval(interval);
      }
    }, 28);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-lg mx-auto p-4 sm:p-6 flex flex-col items-center select-none">
      {/* Character Image & Dialogue Card */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full bg-white border-[2.5px] border-[#231f20] rounded-3xl p-5 sm:p-7 shadow-[4.5px_4.5px_0px_#231f20] mb-5 flex flex-col items-center"
      >
        {/* 8.png Picture */}
        <div className="w-full flex justify-center py-2 max-h-[300px]">
          {!imgFailed ? (
            <img
              src="./8.png"
              alt="Крыска"
              onError={() => setImgFailed(true)}
              className="w-full max-w-[260px] max-h-[260px] object-contain drop-shadow-sm"
            />
          ) : (
            <img
              src="./1.png"
              alt="Крыска"
              className="w-full max-w-[260px] max-h-[260px] object-contain drop-shadow-sm"
            />
          )}
        </div>

        {/* Speech Dialogue Bubble */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="relative w-full mt-3 bg-[#fdfbf7] border-[2px] border-[#231f20] rounded-2xl p-4 sm:p-5 shadow-[2px_2px_0px_#231f20]"
        >
          {/* Speech bubble arrow */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[10px] border-b-[#231f20]" />
          <div className="absolute -top-[9px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[8px] border-b-[#fdfbf7]" />

          <p className="font-serif text-sm sm:text-base text-[#231f20] leading-relaxed min-h-[70px]">
            {typedMessage}
            {!isTypingDone && <span className="inline-block w-1.5 h-4 ml-0.5 bg-[#934c4c] animate-pulse" />}
          </p>
        </motion.div>
      </motion.div>

      {/* Button to proceed to Maze */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="w-full"
      >
        <button
          onClick={() => {
            playSparkleSound();
            onStartMaze();
          }}
          className="w-full py-4 px-6 bg-[#934c4c] hover:bg-[#7d3f3f] text-white font-serif font-bold text-base sm:text-lg rounded-xl border-[2.5px] border-[#231f20] shadow-[3.5px_3.5px_0px_#231f20] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#231f20] transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <Sparkles className="w-5 h-5 text-amber-300 animate-spin" />
          <span>Далее</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </motion.div>
    </div>
  );
};
