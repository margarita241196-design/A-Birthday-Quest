import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, ArrowUp, ArrowDown, ArrowLeft, RotateCcw, Trophy, CheckCircle } from 'lucide-react';
import { playSparkleSound, playClickSound } from '../../utils/audio';

interface MazeScreenProps {
  onComplete: () => void;
}

interface ItemDefinition {
  id: string;
  name: string;
  emoji: string;
  fact: string;
  r: number;
  c: number;
}

// 16 items specified in user requirements
export const MAZE_ITEMS: ItemDefinition[] = [
  { id: 'item-1', name: 'Зубная щётка', emoji: '🪥', fact: 'Чистота и свежесть с самого утра!', r: 1, c: 3 },
  { id: 'item-2', name: 'Парик', emoji: '💇‍♀️', fact: 'Яркий образ для весёлых экспериментов!', r: 1, c: 7 },
  { id: 'item-3', name: 'Картофелина', emoji: '🥔', fact: '«Помню, как всё съестное колосилось...»', r: 3, c: 1 },
  { id: 'item-4', name: 'Зонтик', emoji: '☂️', fact: 'Укрытие от любого неожиданного дождика!', r: 3, c: 5 },
  { id: 'item-5', name: 'Цветы', emoji: '💐', fact: 'Букет для прекрасного настроения!', r: 3, c: 9 },
  { id: 'item-6', name: 'Сыр', emoji: '🧀', fact: 'Любимое лакомство нашего мышонка!', r: 5, c: 1 },
  { id: 'item-7', name: 'Ноутбук', emoji: '💻', fact: 'Для великих дел, проектов и вдохновения!', r: 5, c: 5 },
  { id: 'item-8', name: 'Солнышко', emoji: '☀️', fact: '«Трава — зелёная, небо — голубое»!', r: 5, c: 9 },
  { id: 'item-9', name: 'Рамка с фото', emoji: '🖼️', fact: 'Тёплые воспоминания этого года!', r: 7, c: 1 },
  { id: 'item-10', name: 'Скутер', emoji: '🛵', fact: 'Быстрый старт навстречу новым дорогам!', r: 7, c: 5 },
  { id: 'item-11', name: 'Куртка', emoji: '🧥', fact: 'Уют и тепло в любую погоду!', r: 7, c: 9 },
  { id: 'item-12', name: 'Книга', emoji: '📖', fact: 'Спасённые знания и мудрость!', r: 9, c: 1 },
  { id: 'item-13', name: 'Ручка', emoji: '🖊️', fact: 'Чтобы записывать самые смелые мечты!', r: 9, c: 5 },
  { id: 'item-14', name: 'Рюкзак', emoji: '🎒', fact: 'Всё необходимое для путешествий с собой!', r: 9, c: 9 },
  { id: 'item-15', name: 'Радуга', emoji: '🌈', fact: 'Свет, радость и разнообразие эмоций!', r: 9, c: 3 },
  { id: 'item-16', name: 'Тортик', emoji: '🎂', fact: 'Главная цель! Праздничный торт с днём рождения!', r: 9, c: 7 },
];

// Maze Grid Layout (11 rows x 11 cols): 0 = Path, 1 = Wall
const MAZE_GRID: number[][] = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

export const MazeScreen: React.FC<MazeScreenProps> = ({ onComplete }) => {
  const [ratPos, setRatPos] = useState<{ r: number; c: number }>({ r: 1, c: 1 });
  const [collectedIds, setCollectedIds] = useState<string[]>([]);
  const [lastItem, setLastItem] = useState<ItemDefinition | null>(null);
  const [isFinished, setIsFinished] = useState(false);

  const totalRequired = MAZE_ITEMS.length; // 16 items
  const collectedCount = collectedIds.length;

  const moveRat = useCallback(
    (dr: number, dc: number) => {
      if (isFinished) return;

      const newR = ratPos.r + dr;
      const newC = ratPos.c + dc;

      // Check boundary & walls
      if (
        newR >= 0 &&
        newR < MAZE_GRID.length &&
        newC >= 0 &&
        newC < MAZE_GRID[0].length &&
        MAZE_GRID[newR][newC] === 0
      ) {
        setRatPos({ r: newR, c: newC });
        playClickSound();

        // Check if stepped on any item
        const itemOnCell = MAZE_ITEMS.find((it) => it.r === newR && it.c === newC);
        if (itemOnCell && !collectedIds.includes(itemOnCell.id)) {
          // Special logic for cake (must collect other 15 items first or collects as finale)
          const nextCollected = [...collectedIds, itemOnCell.id];
          setCollectedIds(nextCollected);
          setLastItem(itemOnCell);
          playSparkleSound();

          if (nextCollected.length === totalRequired) {
            setIsFinished(true);
          }
        }
      }
    },
    [ratPos, collectedIds, isFinished, totalRequired]
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['ArrowUp', 'KeyW'].includes(e.code)) {
        e.preventDefault();
        moveRat(-1, 0);
      } else if (['ArrowDown', 'KeyS'].includes(e.code)) {
        e.preventDefault();
        moveRat(1, 0);
      } else if (['ArrowLeft', 'KeyA'].includes(e.code)) {
        e.preventDefault();
        moveRat(0, -1);
      } else if (['ArrowRight', 'KeyD'].includes(e.code)) {
        e.preventDefault();
        moveRat(0, 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [moveRat]);

  const handleRestart = () => {
    setRatPos({ r: 1, c: 1 });
    setCollectedIds([]);
    setLastItem(null);
    setIsFinished(false);
  };

  return (
    <div className="w-full max-w-lg mx-auto p-4 sm:p-6 flex flex-col items-center select-none">
      {/* Top Header Card */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full bg-white border-[2.5px] border-[#231f20] rounded-2xl p-4 shadow-[3.5px_3.5px_0px_#231f20] mb-4"
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 bg-[#934c4c] text-white text-xs font-serif font-bold rounded-lg border border-[#231f20]">
              ЭКРАН 4
            </span>
            <h2 className="font-serif font-bold text-base sm:text-lg text-[#231f20]">
              Лабиринт воспоминаний
            </h2>
          </div>

          <div className="flex items-center gap-1.5 bg-[#fdfaf3] px-3 py-1 rounded-full border border-[#231f20] text-xs sm:text-sm font-serif font-bold text-[#231f20]">
            <Trophy className="w-4 h-4 text-amber-600" />
            <span>{collectedCount} / {totalRequired}</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-[#f1ece1] h-2.5 rounded-full overflow-hidden border border-[#231f20] p-[1px] mb-2">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${(collectedCount / totalRequired) * 100}%` }}
            transition={{ duration: 0.3 }}
            className="h-full bg-gradient-to-r from-amber-500 via-[#934c4c] to-emerald-500 rounded-full"
          />
        </div>

        <div className="flex items-center justify-between text-xs font-serif text-[#635950]">
          <p>Собери все 16 предметов года, чтобы дойти до торта!</p>
          <button
            onClick={handleRestart}
            className="text-[11px] text-[#8c827a] hover:text-[#934c4c] underline flex items-center gap-1 cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" /> С начала
          </button>
        </div>
      </motion.div>

      {/* Maze Grid Board */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full bg-[#fefdfb] border-[2.5px] border-[#231f20] rounded-2xl p-3 sm:p-4 shadow-[4px_4px_0px_#231f20] mb-4"
      >
        <div className="grid grid-cols-11 gap-1 sm:gap-1.5 aspect-square w-full max-w-[380px] mx-auto bg-[#faf6ed] p-2 rounded-xl border border-[#231f20]">
          {MAZE_GRID.map((row, rIdx) =>
            row.map((cell, cIdx) => {
              const isRatHere = ratPos.r === rIdx && ratPos.c === cIdx;
              const itemHere = MAZE_ITEMS.find((it) => it.r === rIdx && it.c === cIdx);
              const isItemCollected = itemHere && collectedIds.includes(itemHere.id);

              return (
                <div
                  key={`${rIdx}-${cIdx}`}
                  className={`relative flex items-center justify-center rounded-sm sm:rounded-md transition-colors ${
                    cell === 1
                      ? 'bg-[#231f20] shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)]'
                      : 'bg-white border border-[#e5dfd5]'
                  }`}
                >
                  {/* Item icon */}
                  {itemHere && !isItemCollected && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="text-xs sm:text-base leading-none select-none drop-shadow-sm"
                    >
                      {itemHere.emoji}
                    </motion.span>
                  )}

                  {/* Rat character avatar */}
                  {isRatHere && (
                    <motion.div
                      layoutId="rat-runner"
                      className="absolute inset-0.5 bg-[#934c4c] text-white rounded-full flex items-center justify-center text-[10px] sm:text-sm font-bold shadow-md border border-[#231f20] z-10"
                    >
                      🐭
                    </motion.div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* D-Pad Touch Controller for Mobile & Desktop */}
        <div className="mt-3 flex flex-col items-center gap-1">
          <button
            onClick={() => moveRat(-1, 0)}
            className="w-12 h-10 bg-white hover:bg-[#faf6ed] border-2 border-[#231f20] rounded-xl shadow-[2px_2px_0px_#231f20] active:translate-y-0.5 active:shadow-none flex items-center justify-center text-[#231f20] cursor-pointer"
          >
            <ArrowUp className="w-5 h-5 stroke-[2.5]" />
          </button>
          <div className="flex gap-4">
            <button
              onClick={() => moveRat(0, -1)}
              className="w-12 h-10 bg-white hover:bg-[#faf6ed] border-2 border-[#231f20] rounded-xl shadow-[2px_2px_0px_#231f20] active:translate-y-0.5 active:shadow-none flex items-center justify-center text-[#231f20] cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5 stroke-[2.5]" />
            </button>
            <button
              onClick={() => moveRat(1, 0)}
              className="w-12 h-10 bg-white hover:bg-[#faf6ed] border-2 border-[#231f20] rounded-xl shadow-[2px_2px_0px_#231f20] active:translate-y-0.5 active:shadow-none flex items-center justify-center text-[#231f20] cursor-pointer"
            >
              <ArrowDown className="w-5 h-5 stroke-[2.5]" />
            </button>
            <button
              onClick={() => moveRat(0, 1)}
              className="w-12 h-10 bg-white hover:bg-[#faf6ed] border-2 border-[#231f20] rounded-xl shadow-[2px_2px_0px_#231f20] active:translate-y-0.5 active:shadow-none flex items-center justify-center text-[#231f20] cursor-pointer"
            >
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Item Collection Ribbon */}
      <div className="w-full bg-[#fbf9f4] border-[2px] border-[#231f20] rounded-xl p-3 shadow-[2px_2px_0px_#231f20] mb-4">
        <h4 className="text-xs font-serif font-bold text-[#231f20] mb-2 flex items-center justify-between">
          <span>Собранные воспоминания ({collectedCount}/{totalRequired}):</span>
          {isFinished && <span className="text-emerald-600 font-bold">Готово! ✨</span>}
        </h4>
        <div className="grid grid-cols-8 gap-1.5">
          {MAZE_ITEMS.map((it) => {
            const isGot = collectedIds.includes(it.id);
            return (
              <div
                key={it.id}
                title={it.name}
                className={`p-1.5 rounded-lg border text-center transition-all ${
                  isGot
                    ? 'bg-amber-100 border-amber-400 scale-105 shadow-sm'
                    : 'bg-gray-100/60 border-gray-300 opacity-40 grayscale'
                }`}
              >
                <span className="text-sm block">{it.emoji}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Last Picked Item Toast */}
      <AnimatePresence>
        {lastItem && (
          <motion.div
            key={lastItem.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="w-full bg-emerald-50 border-2 border-emerald-500 rounded-xl p-3 shadow-[2px_2px_0px_#059669] mb-4 flex items-center gap-3 text-xs font-serif text-emerald-950"
          >
            <span className="text-2xl">{lastItem.emoji}</span>
            <div>
              <span className="font-bold text-emerald-900 block">{lastItem.name} найдено!</span>
              <p className="text-emerald-800">{lastItem.fact}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Maze Completion Card (Transition to Screen 5) */}
      <AnimatePresence>
        {isFinished && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="w-full bg-white border-[2.5px] border-[#231f20] rounded-2xl p-5 shadow-[4px_4px_0px_#231f20] text-center"
          >
            <div className="inline-flex p-3 bg-amber-100 rounded-full text-amber-700 mb-2 border border-amber-300">
              <Sparkles className="w-6 h-6 text-[#934c4c] animate-spin" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#231f20] mb-1">
              Лабиринт полностью пройден! 🎂
            </h3>
            <p className="font-serif text-sm sm:text-base text-[#5d544c] font-medium mb-4">
              «Ты полностью готова к новому, увлекательному году!»
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
