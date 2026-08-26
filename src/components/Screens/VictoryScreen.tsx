import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Mail, PartyPopper, Heart, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CupcakeRatIllustration } from '../Artwork/CupcakeRatIllustration';
import { playSparkleSound, playClickSound } from '../../utils/audio';

interface VictoryScreenProps {
  onOpenLetter: () => void;
}

export const VictoryScreen: React.FC<VictoryScreenProps> = ({ onOpenLetter }) => {
  // Launch celebratory confetti when screen loads
  useEffect(() => {
    playSparkleSound();
    const duration = 2.5 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors: ['#934c4c', '#f59e0b', '#10b981', '#6366f1'],
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors: ['#934c4c', '#f59e0b', '#10b981', '#6366f1'],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, []);

  const triggerMoreConfetti = () => {
    playSparkleSound();
    confetti({
      particleCount: 80,
      spread: 100,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className="w-full max-w-lg mx-auto p-4 sm:p-6 flex flex-col items-center select-none text-center">
      {/* Screen 5 Tag */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full bg-[#fdfbf7] border-2 border-[#231f20] px-4 py-2 rounded-xl shadow-[2px_2px_0px_#231f20] mb-4 flex items-center justify-between"
      >
        <span className="text-xs font-serif font-bold text-[#231f20] uppercase tracking-wider">
          ЭКРАН 5: ФИНАЛ УРОВНЕЙ
        </span>
        <span className="text-xs font-serif text-emerald-700 font-bold flex items-center gap-1">
          <PartyPopper className="w-4 h-4" /> 100% Завершено!
        </span>
      </motion.div>

      {/* Main Victory Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full bg-white border-[2.5px] border-[#231f20] rounded-3xl p-6 sm:p-8 shadow-[5px_5px_0px_#231f20] mb-6"
      >
        {/* Header */}
        <h1 className="font-serif font-bold text-2xl sm:text-3xl text-[#231f20] tracking-tight mb-2">
          Ура! Все уровни пройдены! 🎂✨
        </h1>

        <p className="font-serif text-sm sm:text-base text-[#5c534b] leading-relaxed mb-4">
          Ты блистательно прошла авторизацию, спасла книги и знания в комнате 26 августа и собрала все воспоминания года в лабиринте!
        </p>

        {/* Decorative Wavy Separator */}
        <div className="w-full flex items-center justify-center my-4 opacity-80">
          <svg width="200" height="16" viewBox="0 0 200 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 8C25 2 25 14 50 8C75 2 75 14 100 8C125 2 125 14 150 8C175 2 175 14 200 8"
              stroke="#934c4c"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* 6.png Drawing: Rat with delicious Cupcake */}
        <div className="w-full flex justify-center my-2">
          <motion.div
            initial={{ scale: 0.9, y: 10 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ type: 'spring', damping: 12 }}
            className="w-48 sm:w-56"
          >
            <CupcakeRatIllustration className="w-full h-auto" />
          </motion.div>
        </div>

        {/* Extra Confetti Trigger Button */}
        <div className="mt-3 flex justify-center">
          <button
            onClick={triggerMoreConfetti}
            className="px-4 py-2 bg-[#fbf9f4] hover:bg-[#f3ede0] border border-[#231f20] rounded-full text-xs font-serif text-[#231f20] flex items-center gap-1.5 shadow-[2px_2px_0px_#231f20] active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
          >
            <PartyPopper className="w-4 h-4 text-[#934c4c]" />
            <span>Ещё больше конфетти! 🎉</span>
          </button>
        </div>
      </motion.div>

      {/* Button to proceed to Screen 6: "Вам письмо!" */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="w-full"
      >
        <button
          onClick={() => {
            playSparkleSound();
            onOpenLetter();
          }}
          className="w-full py-4 px-6 bg-[#934c4c] hover:bg-[#7d3f3f] text-white font-serif font-bold text-lg rounded-2xl border-[2.5px] border-[#231f20] shadow-[4px_4px_0px_#231f20] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#231f20] transition-all flex items-center justify-center gap-2.5 cursor-pointer"
        >
          <Sparkles className="w-5 h-5 text-amber-300 animate-spin" />
          <span>Далее</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </motion.div>
    </div>
  );
};
