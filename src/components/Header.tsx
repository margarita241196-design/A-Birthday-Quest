import React, { useState } from 'react';
import { Menu, X, Volume2, VolumeX, RotateCcw, Award, Heart, Sparkles, KeyRound, MapPin, Footprints, Grid, Gift, Mail } from 'lucide-react';
import { SubScreenType } from '../types';

interface HeaderProps {
  currentScreen: SubScreenType;
  title: string;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onResetQuest: () => void;
  onSelectScreen: (screen: SubScreenType) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentScreen,
  title,
  soundEnabled,
  onToggleSound,
  onResetQuest,
  onSelectScreen,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const screens: { id: SubScreenType; number: number; label: string; icon: any }[] = [
    { id: 'auth', number: 1, label: 'Вход', icon: KeyRound },
    { id: 'room', number: 2, label: 'Задание 1: Поиск книг', icon: MapPin },
    { id: 'intro', number: 3, label: 'Послание крыски', icon: Footprints },
    { id: 'maze', number: 4, label: 'Лабиринт', icon: Grid },
    { id: 'victory', number: 5, label: 'Финиш', icon: Gift },
    { id: 'letter', number: 6, label: 'Письмо', icon: Mail },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[#faf7ee]/95 backdrop-blur-sm border-b-[1.5px] border-[#231f20]/20 px-4 py-3 flex items-center justify-between">
        {/* Hamburger Menu Button */}
        <button
          id="btn-hamburger"
          onClick={() => setMenuOpen(true)}
          className="p-1.5 rounded hover:bg-black/5 active:scale-95 transition text-[#231f20] cursor-pointer"
          aria-label="Menu"
        >
          <Menu className="w-6 h-6 stroke-[2.2]" />
        </button>

        {/* Dynamic Center Title */}
        <div className="flex flex-col items-center">
          <h1
            id="header-title"
            className="text-lg sm:text-xl font-bold tracking-tight text-[#1c1917] font-serif text-center select-none"
          >
            {title}
          </h1>
        </div>

        {/* Sound toggle button */}
        <button
          id="btn-sound-toggle"
          onClick={onToggleSound}
          className="p-1.5 rounded-lg border border-[#231f20]/30 bg-white shadow-[1.5px_1.5px_0px_#231f20] hover:bg-[#faf7ee] active:scale-95 transition text-[#231f20] cursor-pointer"
          aria-label="Sound Toggle"
        >
          {soundEnabled ? (
            <Volume2 className="w-5 h-5 text-emerald-700" />
          ) : (
            <VolumeX className="w-5 h-5 text-[#8c827a]" />
          )}
        </button>
      </header>

      {/* Drawer Menu Modal */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={() => setMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="relative w-72 max-w-[80vw] bg-[#faf6ed] border-r-2 border-[#231f20] h-full shadow-2xl p-5 flex flex-col justify-between z-10 overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#231f20]/20">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🐭</span>
                  <h2 className="font-serif font-bold text-lg text-[#231f20]">
                    Навигация по квесту
                  </h2>
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-1 rounded hover:bg-black/5 text-[#231f20] cursor-pointer"
                >
                  <X className="w-5 h-5 stroke-[2.5]" />
                </button>
              </div>

              {/* Screen jump list */}
              <div className="mt-4 space-y-2">
                {screens.map((sc) => {
                  const Icon = sc.icon;
                  const isActive = currentScreen === sc.id;
                  return (
                    <button
                      key={sc.id}
                      onClick={() => {
                        onSelectScreen(sc.id);
                        setMenuOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl border text-left text-sm font-serif font-semibold transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#934c4c] text-white border-[#231f20] shadow-[2px_2px_0px_#231f20]'
                          : 'bg-white text-[#231f20] border-[#e2dad0] hover:bg-[#f3ede0]'
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#934c4c]'}`} />
                      <span>{sc.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom drawer actions */}
            <div className="pt-4 border-t border-[#231f20]/20 space-y-2">
              <button
                onClick={() => {
                  onResetQuest();
                  setMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-white hover:bg-red-50 text-red-700 border border-red-300 rounded-xl text-xs font-serif font-bold cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Начать всё с 1 экрана</span>
              </button>
              <p className="text-center text-[10px] text-[#8c827a] font-serif">
                День Рождения Танюши ✨ 2026
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
