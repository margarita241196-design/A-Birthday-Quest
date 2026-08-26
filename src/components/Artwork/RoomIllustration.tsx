import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, AlertCircle, BookOpen, Sparkles } from 'lucide-react';
import { playSparkleSound, playClickSound } from '../../utils/audio';

export interface BookZone {
  id: string;
  name: string;
  isMisused: boolean;
  title: string;
  description: string;
  x: number; // percentage coordinate
  y: number;
}

export const BOOK_ZONES: BookZone[] = [
  {
    id: 'book-under-rat',
    name: 'Книга под мышью на сундуке',
    isMisused: true,
    title: '📖 Книга-подстилка под крыской',
    description: 'Мышонок устроил себе уютное местечко прямо на редком томе! Знание спасено и освобождено!',
    x: 18,
    y: 78,
  },
  {
    id: 'books-on-table',
    name: 'Книги на столе под чайником и кружкой',
    isMisused: true,
    title: '☕ Книги-подставки для чая и кофе',
    description: 'На ценных книгах греются чашка с кофе и чайник! Спасаем страницы от горячих пятен!',
    x: 34,
    y: 56,
  },
  {
    id: 'books-under-chair',
    name: 'Книги, подпирающие кресло',
    isMisused: true,
    title: '🛋️ Стопка книг под ножкой кресла',
    description: 'Целая стопка книг вместо ножки кресла! Вытаскиваем их и возвращаем знания в безопасность!',
    x: 85,
    y: 86,
  },
  {
    id: 'shelf-top',
    name: 'Верхняя полка шкафа',
    isMisused: false,
    title: '📚 Книги на верхней полке',
    description: 'Эти книги стоят ровно в шкафу по прямому назначению! Ищи те, что используются как подставки!',
    x: 10,
    y: 18,
  },
  {
    id: 'shelf-mid',
    name: 'Средняя полка шкафа',
    isMisused: false,
    title: '📚 Книги на средней полке',
    description: 'Здесь книги стоят на своём законном месте в шкафу. Они в безопасности!',
    x: 10,
    y: 38,
  },
  {
    id: 'shelf-bot',
    name: 'Нижняя полка шкафа',
    isMisused: false,
    title: '📚 Книги на нижней полке',
    description: 'Эти тома аккуратно расставлены в книжном шкафу. Ищи книги, которые служат мебелью!',
    x: 10,
    y: 58,
  },
];

interface RoomIllustrationProps {
  foundItems: string[];
  onZoneClick: (zone: BookZone) => void;
}

export const RoomIllustration: React.FC<RoomIllustrationProps> = ({
  foundItems,
  onZoneClick,
}) => {
  const [hoveredZone, setHoveredZone] = useState<string | null>(null);
  const [wrongFeedback, setWrongFeedback] = useState<{ text: string; x: number; y: number } | null>(null);
  const [imgFailed, setImgFailed] = useState(false);

  const handleClick = (zone: BookZone) => {
    playClickSound();
    if (zone.isMisused) {
      playSparkleSound();
      setWrongFeedback(null);
      onZoneClick(zone);
    } else {
      // Wrong zone: show warning
      setWrongFeedback({
        text: '❌ Эти книги стоят на полке по назначению! Ищи те, что служат подставками!',
        x: zone.x,
        y: zone.y,
      });
      setTimeout(() => setWrongFeedback(null), 3000);
      onZoneClick(zone);
    }
  };

  const isCollected = (id: string) => foundItems.includes(id);

  return (
    <div className="relative w-full max-w-[460px] mx-auto select-none">
      {/* Hand-drawn styled container */}
      <div className="relative rounded-2xl bg-white border-[2.5px] border-[#231f20] shadow-[4px_4px_0px_#231f20] overflow-hidden">
        {/* Sole image: 2.png */}
        <div className="relative w-full aspect-[4/4.5] sm:aspect-[4/4.2] bg-[#fdfbf7] flex items-center justify-center">
          {!imgFailed ? (
            <img
              src="/2.png"
              alt="Комната"
              onError={() => setImgFailed(true)}
              className="w-full h-full object-contain pointer-events-none select-none"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-[#786e65]">
              <BookOpen className="w-12 h-12 text-[#934c4c] mb-2 stroke-[1.5]" />
              <p className="font-serif font-bold text-sm">Иллюстрация 2.png</p>
              <p className="text-xs mt-1">Кликайте по спрятанным книгам в комнате</p>
            </div>
          )}

          {/* Interactive clickable overlay hotspots mapped to 2.png */}
          <div className="absolute inset-0 z-10">
            {/* Zone 1: Book under rat on stool/chest (bottom-left) */}
            <button
              type="button"
              id="hotspot-book-under-rat"
              onClick={() => handleClick(BOOK_ZONES[0])}
              onMouseEnter={() => setHoveredZone(BOOK_ZONES[0].id)}
              onMouseLeave={() => setHoveredZone(null)}
              style={{ left: '10%', top: '66%', width: '22%', height: '22%' }}
              className={`absolute rounded-2xl transition-all duration-200 cursor-pointer ${
                isCollected('book-under-rat')
                  ? 'bg-emerald-500/25 ring-2 ring-emerald-600 shadow-sm'
                  : 'hover:bg-amber-400/30 active:scale-95 ring-1 ring-transparent hover:ring-amber-500/60'
              }`}
              title={BOOK_ZONES[0].name}
            >
              {isCollected('book-under-rat') && (
                <span className="absolute -top-2.5 -right-2.5 bg-emerald-600 text-white rounded-full p-1 shadow-md animate-bounce">
                  <Check className="w-4 h-4 stroke-[3]" />
                </span>
              )}
            </button>

            {/* Zone 2: Books on table under kettle & cups (middle-left) */}
            <button
              type="button"
              id="hotspot-books-on-table"
              onClick={() => handleClick(BOOK_ZONES[1])}
              onMouseEnter={() => setHoveredZone(BOOK_ZONES[1].id)}
              onMouseLeave={() => setHoveredZone(null)}
              style={{ left: '26%', top: '44%', width: '24%', height: '20%' }}
              className={`absolute rounded-2xl transition-all duration-200 cursor-pointer ${
                isCollected('books-on-table')
                  ? 'bg-emerald-500/25 ring-2 ring-emerald-600 shadow-sm'
                  : 'hover:bg-amber-400/30 active:scale-95 ring-1 ring-transparent hover:ring-amber-500/60'
              }`}
              title={BOOK_ZONES[1].name}
            >
              {isCollected('books-on-table') && (
                <span className="absolute -top-2.5 -right-2.5 bg-emerald-600 text-white rounded-full p-1 shadow-md animate-bounce">
                  <Check className="w-4 h-4 stroke-[3]" />
                </span>
              )}
            </button>

            {/* Zone 3: Books under armchair leg (bottom-right) */}
            <button
              type="button"
              id="hotspot-books-under-chair"
              onClick={() => handleClick(BOOK_ZONES[2])}
              onMouseEnter={() => setHoveredZone(BOOK_ZONES[2].id)}
              onMouseLeave={() => setHoveredZone(null)}
              style={{ left: '74%', top: '74%', width: '24%', height: '22%' }}
              className={`absolute rounded-2xl transition-all duration-200 cursor-pointer ${
                isCollected('books-under-chair')
                  ? 'bg-emerald-500/25 ring-2 ring-emerald-600 shadow-sm'
                  : 'hover:bg-amber-400/30 active:scale-95 ring-1 ring-transparent hover:ring-amber-500/60'
              }`}
              title={BOOK_ZONES[2].name}
            >
              {isCollected('books-under-chair') && (
                <span className="absolute -top-2.5 -right-2.5 bg-emerald-600 text-white rounded-full p-1 shadow-md animate-bounce">
                  <Check className="w-4 h-4 stroke-[3]" />
                </span>
              )}
            </button>

            {/* Bookshelf Zones on Left Side (Clicking shows they are correct storage) */}
            <button
              type="button"
              onClick={() => handleClick(BOOK_ZONES[3])}
              style={{ left: '2%', top: '6%', width: '18%', height: '18%' }}
              className="absolute rounded-lg hover:bg-red-400/15 transition cursor-pointer"
              title={BOOK_ZONES[3].name}
            />
            <button
              type="button"
              onClick={() => handleClick(BOOK_ZONES[4])}
              style={{ left: '2%', top: '25%', width: '18%', height: '18%' }}
              className="absolute rounded-lg hover:bg-red-400/15 transition cursor-pointer"
              title={BOOK_ZONES[4].name}
            />
            <button
              type="button"
              onClick={() => handleClick(BOOK_ZONES[5])}
              style={{ left: '2%', top: '44%', width: '18%', height: '18%' }}
              className="absolute rounded-lg hover:bg-red-400/15 transition cursor-pointer"
              title={BOOK_ZONES[5].name}
            />
          </div>

          {/* Dynamic Warning Notification for Shelf Click */}
          <AnimatePresence>
            {wrongFeedback && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute top-4 left-3 right-3 bg-[#fee2e2] border-2 border-[#ef4444] rounded-xl p-3 shadow-lg flex items-center gap-2 z-30"
              >
                <AlertCircle className="w-5 h-5 text-[#ef4444] shrink-0" />
                <p className="text-xs font-serif text-[#991b1b] font-semibold leading-tight">
                  {wrongFeedback.text}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Guide label */}
      <div className="mt-2 text-center text-xs font-serif text-[#574e47]">
        💡 Кликни по книгам в комнате, которые используются <span className="font-bold text-[#934c4c]">не по назначению</span>.
      </div>
    </div>
  );
};
