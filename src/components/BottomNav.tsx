import React from 'react';
import { KeyRound, Search, Footprints, Grid, Gift, Mail } from 'lucide-react';
import { SubScreenType } from '../types';

interface BottomNavProps {
  currentScreen: SubScreenType;
  onSelectScreen: (screen: SubScreenType) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentScreen, onSelectScreen }) => {
  const tabs: { id: SubScreenType; label: string; icon: any }[] = [
    {
      id: 'auth',
      label: 'Вход',
      icon: KeyRound,
    },
    {
      id: 'room',
      label: 'Квест',
      icon: Search,
    },
    {
      id: 'intro',
      label: 'Крыска',
      icon: Footprints,
    },
    {
      id: 'maze',
      label: 'Лабиринт',
      icon: Grid,
    },
    {
      id: 'victory',
      label: 'Финал',
      icon: Gift,
    },
    {
      id: 'letter',
      label: 'Письмо',
      icon: Mail,
    },
  ];

  return (
    <nav
      id="bottom-navigation-bar"
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#f4eee1] border-t-2 border-[#231f20] px-2 py-1.5 max-w-md mx-auto shadow-[0px_-2px_6px_rgba(0,0,0,0.04)]"
    >
      <div className="grid grid-cols-6 gap-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = currentScreen === tab.id;

          return (
            <button
              key={tab.id}
              id={`tab-${tab.id}`}
              onClick={() => onSelectScreen(tab.id)}
              className={`flex flex-col items-center justify-center py-1 px-0.5 rounded-lg transition-all duration-200 select-none cursor-pointer ${
                isActive
                  ? 'bg-[#934c4c] text-white border border-[#231f20] shadow-[1px_1px_0px_#231f20]'
                  : 'bg-transparent text-[#574e47] hover:bg-black/5 active:scale-95'
              }`}
            >
              <Icon
                className={`w-4 h-4 mb-0.5 ${
                  isActive ? 'text-white stroke-[2.4]' : 'text-[#574e47] stroke-[2]'
                }`}
              />
              <span className="text-[9px] sm:text-[10px] font-serif font-bold tracking-tight whitespace-nowrap">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
