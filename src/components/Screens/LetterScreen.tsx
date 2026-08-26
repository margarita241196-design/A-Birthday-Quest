import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart, RotateCcw, PartyPopper } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CupcakeRatIllustration } from '../Artwork/CupcakeRatIllustration';
import { WineRatIllustration } from '../Artwork/WineRatIllustration';
import { playSparkleSound, playClickSound } from '../../utils/audio';

interface LetterScreenProps {
  onRestartQuest: () => void;
}

export const LetterScreen: React.FC<LetterScreenProps> = ({ onRestartQuest }) => {
  const triggerConfetti = () => {
    playSparkleSound();
    confetti({
      particleCount: 70,
      spread: 90,
      origin: { y: 0.5 },
    });
  };

  return (
    <div className="w-full max-w-xl mx-auto p-4 sm:p-6 flex flex-col items-center select-none">
      {/* Screen 6 Tag */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full bg-[#fdfbf7] border-2 border-[#231f20] px-4 py-2 rounded-xl shadow-[2px_2px_0px_#231f20] mb-4 flex items-center justify-between"
      >
        <span className="text-xs font-serif font-bold text-[#231f20] uppercase tracking-wider">
          ПИСЬМО
        </span>
        <span className="text-xs font-serif text-[#934c4c] font-bold flex items-center gap-1">
          <Heart className="w-4 h-4 fill-[#934c4c]" /> От всего сердца
        </span>
      </motion.div>

      {/* Main Parchment Letter Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full bg-[#fffefc] border-[2.5px] border-[#231f20] rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_#231f20] mb-6 relative overflow-hidden"
      >
        {/* Paper texture and vintage accents */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-200 via-[#934c4c]/40 to-amber-200 opacity-60" />

        {/* 1. Header greeting phrase */}
        <div className="text-center mb-4">
          <h1 className="font-serif font-bold text-2xl sm:text-3xl text-[#231f20] tracking-tight">
            Привет, Танюша! С днём рождения!
          </h1>
        </div>

        {/* 2. Image 6.png in the center under first phrase */}
        <div className="w-full flex justify-center my-3">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-44 sm:w-52"
          >
            <CupcakeRatIllustration className="w-full h-auto" />
          </motion.div>
        </div>

        {/* Decorative divider */}
        <div className="w-full flex items-center justify-center my-4 opacity-70">
          <svg width="160" height="12" viewBox="0 0 160 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 6C20 1 20 11 40 6C60 1 60 11 80 6C100 1 100 11 120 6C140 1 140 11 160 6" stroke="#934c4c" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>

        {/* 3. Letter Body Paragraphs in exact accordance with user prompt */}
        <div className="space-y-4 font-serif text-sm sm:text-base text-[#2e2926] leading-relaxed text-justify sm:text-left">
          <p>
            Прошёл год с момента, как мы праздновали твой день рождения в декорациях, которых раньше и представить не могли. А теперь мы в шоке от того, как много произошло за этот год — столько событий, переворачивающих жизнь и показывающих её с другой точки обзора.
          </p>

          <p>
            И всё же вот мы здесь, в этой точке, спустя один год. И в этот день я хочу, так же как и год назад, искренне поздравить тебя с днём рождения!
          </p>

          <p>
            На мой взгляд, ты уникальный человек во многих аспектах. Да-да, я помню, как всё съестное колосилось, и как физуха может быть и со смехом, и даже с кофейком, ну и, конечно, «трава — зелёная, небо — голубое» (последнее осмысляю до сих пор).
          </p>

          <p>
            Ты невероятным образом меняешь любое пространство вокруг себя. Стоит тебе только осмотреться, оно становится добрее, безопаснее, человечнее и образованнее. И я хочу сказать тебе за это большое спасибо!
          </p>

          <p>
            Надеюсь, все твои задумки исполнятся совершенно безопасным и приятным образом. И сейчас я хочу пожелать тебе простого — пожалуй, здоровья, которое позволит заниматься в удовольствие тем, к чему тянутся руки и лежит душа. Желаю быть там, где хочется, и без всяких страхов, ну и при этом быть наполненной и отдохнувшей (отдых не в стиле «ой, я тут давно отдыхаю»).
          </p>

          <div className="pt-2 border-t border-[#e2dad0] text-sm text-[#4a423d] italic bg-[#faf7ef] p-3.5 rounded-xl border border-[#d6ccbf]">
            <p>
              P.S. Я долго пыталась уйти от шаблона, но действительно сложно сказать что-то нетипичное. Я по большому счёту просто хотела бы, чтобы ты жила долго и процветала. С днём рождения!
            </p>
          </div>
        </div>

        {/* 4. Image 7.png in the center at the end */}
        <div className="w-full flex justify-center mt-6 mb-2">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="w-48 sm:w-56"
          >
            <WineRatIllustration className="w-full h-auto" />
          </motion.div>
        </div>

        <div className="text-center font-serif text-xs text-[#8c827a] mt-2">
          🍷 За твоё здоровье, вдохновение и счастье!
        </div>
      </motion.div>

      {/* Interactive Actions (Confetti & Restart) */}
      <div className="w-full flex flex-col sm:flex-row gap-3">
        <button
          onClick={triggerConfetti}
          className="flex-1 py-3 px-4 bg-amber-100 hover:bg-amber-200 text-[#231f20] font-serif font-bold text-sm rounded-xl border-[2px] border-[#231f20] shadow-[2.5px_2.5px_0px_#231f20] active:translate-y-0.5 active:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <PartyPopper className="w-4 h-4 text-[#934c4c]" />
          <span>Запустить праздничный салют! ✨</span>
        </button>

        <button
          onClick={() => {
            playClickSound();
            onRestartQuest();
          }}
          className="py-3 px-5 bg-white hover:bg-[#faf6ed] text-[#231f20] font-serif font-bold text-sm rounded-xl border-[2px] border-[#231f20] shadow-[2.5px_2.5px_0px_#231f20] active:translate-y-0.5 active:shadow-none transition-all flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Пройти снова</span>
        </button>
      </div>
    </div>
  );
};
