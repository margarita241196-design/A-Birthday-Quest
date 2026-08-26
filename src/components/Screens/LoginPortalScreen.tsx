import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ArrowRight, Sparkles, KeyRound, User, HelpCircle, ShieldCheck } from 'lucide-react';
import { HeroRatIllustration } from '../Artwork/HeroRatIllustration';
import { playSparkleSound, playClickSound } from '../../utils/audio';

interface LoginPortalScreenProps {
  onSuccess: () => void;
}

export const LoginPortalScreen: React.FC<LoginPortalScreenProps> = ({ onSuccess }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [typedText, setTypedText] = useState('');
  const [isTypingDone, setIsTypingDone] = useState(false);

  const fullDialogue = "Привет! Чтобы войти в приключение, нужно представиться.";

  // Typewriter effect word by word / letter by letter
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullDialogue.length) {
        setTypedText(fullDialogue.slice(0, index));
        index++;
      } else {
        setIsTypingDone(true);
        clearInterval(interval);
      }
    }, 45);

    return () => clearInterval(interval);
  }, []);

  // Validation logic
  const cleanLogin = login.trim().toLowerCase();
  const isLoginValid = cleanLogin === 'танюша';
  const showLoginHint = login.trim().length > 0 && !isLoginValid;

  const cleanPassword = password.trim().toLowerCase();
  const isPasswordValid = cleanPassword === 'я';
  const showPasswordHint = password.trim().length > 0 && !isPasswordValid;

  const isFormComplete = isLoginValid && isPasswordValid;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormComplete) {
      playSparkleSound();
      onSuccess();
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto p-4 sm:p-6 flex flex-col items-center select-none">
      {/* Top Section: Hero Rat 1.png + Typewriter Dialogue Bubble */}
      <div className="w-full flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-6">
        {/* Rat from 1.png */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-36 sm:w-44 shrink-0 flex justify-center"
        >
          <HeroRatIllustration className="w-full h-auto" />
        </motion.div>

        {/* Speech Card with Typewriter Effect */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="relative flex-1 bg-white border-[2.5px] border-[#231f20] rounded-2xl p-4 sm:p-5 shadow-[3px_3px_0px_#231f20]"
        >
          {/* Speech bubble pointer */}
          <div className="hidden sm:block absolute top-1/2 -left-3 -translate-y-1/2 w-0 h-0 border-t-[8px] border-t-transparent border-r-[12px] border-r-[#231f20] border-b-[8px] border-b-transparent" />
          <div className="hidden sm:block absolute top-1/2 -left-[9px] -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-r-[10px] border-r-white border-b-[6px] border-b-transparent" />

          <p className="font-serif text-base sm:text-lg text-[#231f20] leading-snug min-h-[50px]">
            {typedText}
            {!isTypingDone && <span className="inline-block w-1.5 h-4 ml-0.5 bg-[#934c4c] animate-pulse" />}
          </p>

          <div className="mt-2 flex items-center justify-between text-xs text-[#796f66] font-serif border-t border-[#e5ded4] pt-1.5">
            <span>🐭 Твой верный спутник</span>
            <span className="text-[#934c4c]">Шаг 1 из 6</span>
          </div>
        </motion.div>
      </div>

      {/* Authorization Form Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="w-full bg-[#fdfcf9] border-[2.5px] border-[#231f20] rounded-2xl p-5 sm:p-7 shadow-[4px_4px_0px_#231f20]"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Login Field */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label htmlFor="login-input" className="block text-xs font-bold font-serif tracking-wider text-[#231f20] uppercase">
                Логин
              </label>
              {isLoginValid && (
                <span className="inline-flex items-center gap-1 text-xs font-serif font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-300">
                  <Check className="w-3.5 h-3.5 text-emerald-600" /> Верно!
                </span>
              )}
            </div>

            <div className="relative flex items-center">
              <input
                id="login-input"
                type="text"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                placeholder="ВВЕДИТЕ ЛОГИН"
                className={`w-full px-4 py-3 bg-white font-serif text-base border-[2px] rounded-xl outline-none transition-all placeholder:text-[#a89f91] ${
                  isLoginValid
                    ? 'border-emerald-500 bg-emerald-50/20 text-[#231f20]'
                    : showLoginHint
                    ? 'border-amber-400 bg-amber-50/20 text-[#231f20]'
                    : 'border-[#231f20] focus:ring-2 focus:ring-[#934c4c]/30'
                }`}
              />
              {/* Green checkmark indicator */}
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center">
                {isLoginValid ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-sm"
                  >
                    <Check className="w-4 h-4 stroke-[3]" />
                  </motion.div>
                ) : (
                  <User className="w-5 h-5 text-[#a89f91]" />
                )}
              </div>
            </div>

            {/* Hint speech bubble if login is incorrect */}
            <AnimatePresence>
              {showLoginHint && (
                <motion.div
                  initial={{ opacity: 0, y: -6, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: 'auto' }}
                  exit={{ opacity: 0, y: -6, height: 0 }}
                  className="bg-amber-50 border border-amber-300 text-amber-900 rounded-xl p-3 text-xs font-serif shadow-sm flex items-start gap-2 mt-1.5"
                >
                  <HelpCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    💡 Подсказка: <em>«Эту уменьшительно-ласкательную вариацию мы с Катей, использовали когда жили с тобой - Т - - - - - .»</em>
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Password Field */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label htmlFor="password-input" className="block text-xs font-bold font-serif tracking-wider text-[#231f20] uppercase">
                Пароль
              </label>
              {isPasswordValid && (
                <span className="inline-flex items-center gap-1 text-xs font-serif font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-300">
                  <Check className="w-3.5 h-3.5 text-emerald-600" /> Верно!
                </span>
              )}
            </div>

            <p className="text-xs font-serif text-[#5d544c]">
              Наводящий вопрос: <strong className="text-[#934c4c]">«Кто молодец, тот — ?»</strong>
            </p>

            <div className="relative flex items-center">
              <input
                id="password-input"
                type="text"
                value={password}
                maxLength={4}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="ВВЕДИТЕ ОТВЕТ (1 буква)"
                className={`w-full px-4 py-3 bg-white font-serif text-base border-[2px] rounded-xl outline-none transition-all placeholder:text-[#a89f91] ${
                  isPasswordValid
                    ? 'border-emerald-500 bg-emerald-50/20 text-[#231f20]'
                    : showPasswordHint
                    ? 'border-amber-400 bg-amber-50/20 text-[#231f20]'
                    : 'border-[#231f20] focus:ring-2 focus:ring-[#934c4c]/30'
                }`}
              />
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center">
                {isPasswordValid ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-sm"
                  >
                    <Check className="w-4 h-4 stroke-[3]" />
                  </motion.div>
                ) : (
                  <KeyRound className="w-5 h-5 text-[#a89f91]" />
                )}
              </div>
            </div>

            {/* Hint if wrong password */}
            <AnimatePresence>
              {showPasswordHint && (
                <motion.div
                  initial={{ opacity: 0, y: -6, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: 'auto' }}
                  exit={{ opacity: 0, y: -6, height: 0 }}
                  className="bg-amber-50 border border-amber-300 text-amber-900 rounded-xl p-2.5 text-xs font-serif shadow-sm flex items-start gap-2 mt-1.5"
                >
                  <HelpCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <p>
                    Подсказка: ответ состоит всего из одной буквы русского алфавита!
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Proceed Button (Screen 1 -> Screen 2) */}
          <AnimatePresence>
            {isFormComplete && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="pt-2"
              >
                <button
                  type="submit"
                  onClick={() => playSparkleSound()}
                  className="w-full py-3.5 px-6 bg-[#934c4c] hover:bg-[#7d3f3f] text-white font-serif font-bold text-base rounded-xl border-[2.5px] border-[#231f20] shadow-[3px_3px_0px_#231f20] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#231f20] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-5 h-5 text-amber-300 animate-spin" />
                  <span>Далее</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </motion.div>
    </div>
  );
};
