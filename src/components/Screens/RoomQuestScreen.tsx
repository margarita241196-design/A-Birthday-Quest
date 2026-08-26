import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, BookOpen, Award, CheckCircle2, RotateCcw } from 'lucide-react';
import { RoomIllustration, BookZone, BOOK_ZONES } from '../Artwork/RoomIllustration';
import { playSparkleSound, playClickSound } from '../../utils/audio';

interface RoomQuestScreenProps {
  onComplete: () => void;
}

export const RoomQuestScreen: React.FC<RoomQuestScreenProps> = ({ onComplete }) => {
  const [foundItems, setFoundItems] = useState<string[]>([]);
  const [lastDiscovered, setLastDiscovered] = useState<BookZone | null>(null);

  const targetCount = 3;
  const currentCount = foundItems.length;
  const isAllFound = currentCount >= targetCount;

  const handleZoneClick = (zone: BookZone) => {
    if (zone.isMisused) {
      if (!foundItems.includes(zone.id)) {
        const next = [...foundItems, zone.id];
        setFoundItems(next);
        setLastDiscovered(zone);
        playSparkleSound();
      } else {
        setLastDiscovered(zone);
      }
    }
  };

  const handleReset = () => {
    playClickSound();
    setFoundItems([]);
    setLastDiscovered(null);
  };

  return (
    <div className="w-full max-w-lg mx-auto p-4 sm:p-6 flex flex-col items-center select-none">
      {/* Top Header Card with Status & Hint */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full bg-white border-[2.5px] border-[#231f20] rounded-2xl p-4 sm:p-5 shadow-[3.5px_3.5px_0px_#231f20] mb-4"
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-[#934c4c] text-white text-xs font-serif font-bold rounded-lg border border-[#231f20] shadow-[1.5px_1.5px_0px_#231f20]">
              Задание 1
            </span>
            <h2 className="font-serif font-bold text-base sm:text-lg text-[#231f20]">
              Спасение знаний
            </h2>
          </div>

          <div className="flex items-center gap-1.5 bg-[#fdfaf3] px-3 py-1 rounded-full border border-[#231f20] text-sm font-serif font-bold text-[#231f20]">
            <BookOpen className="w-4 h-4 text-[#934c4c]" />
            <span>Найдено {currentCount} / {targetCount}</span>
          </div>
        </div>

        {/* Animated Progress Bar */}
        <div className="w-full bg-[#f1ece1] h-3 rounded-full overflow-hidden border border-[#231f20] p-[1px] mb-2.5">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${(currentCount / targetCount) * 100}%` }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="h-full bg-gradient-to-r from-[#934c4c] to-emerald-500 rounded-full"
          />
        </div>

        {/* Hint text */}
        <div className="flex items-center justify-between text-xs sm:text-sm font-serif text-[#5a5047]">
          <p className="italic">
            «Найди их и "спаси"! "Они" - свет!»
          </p>
          {currentCount > 0 && !isAllFound && (
            <button
              onClick={handleReset}
              className="text-[11px] text-[#8c827a] hover:text-[#934c4c] underline flex items-center gap-0.5 cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" /> Сбросить
            </button>
          )}
        </div>
      </motion.div>

      {/* Main Room Quest Visual Area */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="w-full mb-4"
      >
        <RoomIllustration
          foundItems={foundItems}
          onZoneClick={handleZoneClick}
        />
      </motion.div>

      {/* Discovered Zone Feedback Popup */}
      <AnimatePresence>
        {lastDiscovered && (
          <motion.div
            key={lastDiscovered.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="w-full bg-[#ecfdf5] border-[2px] border-emerald-600 rounded-xl p-3 shadow-[2.5px_2.5px_0px_#065f46] mb-4 text-xs font-serif text-emerald-950 flex items-start gap-2.5"
          >
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-emerald-900">{lastDiscovered.title}</h4>
              <p className="text-emerald-800 leading-snug">{lastDiscovered.description}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Transition to Screen 3 button once all 3 items are rescued */}
      <AnimatePresence>
        {isAllFound && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="w-full bg-white border-[2.5px] border-[#231f20] rounded-2xl p-4 sm:p-5 shadow-[4px_4px_0px_#231f20] text-center"
          >
            <div className="inline-flex p-2 bg-emerald-100 rounded-full text-emerald-700 mb-2 border border-emerald-300">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#231f20] mb-1">
              Все 3 книги спасены! 🎉
            </h3>
            <p className="font-serif text-xs sm:text-sm text-[#5d544c] mb-4">
              Ты вернула книгам их почётное назначение. Теперь наш крысиный проводник спешит к тебе!
            </p>

            <button
              onClick={() => {
                playSparkleSound();
                onComplete();
              }}
              className="w-full py-3.5 px-6 bg-[#934c4c] hover:bg-[#7d3f3f] text-white font-serif font-bold text-base rounded-xl border-[2.5px] border-[#231f20] shadow-[3px_3px_0px_#231f20] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#231f20] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-5 h-5 text-amber-300 animate-spin" />
              <span>Продолжим</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
