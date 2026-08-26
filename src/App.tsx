/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { LoginPortalScreen } from './components/Screens/LoginPortalScreen';
import { RoomQuestScreen } from './components/Screens/RoomQuestScreen';
import { IntroScreen } from './components/Screens/IntroScreen';
import { MazeScreen } from './components/Screens/MazeScreen';
import { VictoryScreen } from './components/Screens/VictoryScreen';
import { LetterScreen } from './components/Screens/LetterScreen';
import { SubScreenType } from './types';
import { playClickSound } from './utils/audio';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<SubScreenType>('auth');
  const [soundEnabled, setSoundEnabled] = useState(true);

  const handleResetQuest = () => {
    playClickSound();
    setCurrentScreen('auth');
  };

  // Derive dynamic header title
  const getHeaderTitle = (): string => {
    switch (currentScreen) {
      case 'auth':
        return 'Авторизация';
      case 'room':
        return 'Задание 1';
      case 'intro':
        return 'Послание крыски';
      case 'maze':
        return 'Лабиринт воспоминаний';
      case 'victory':
        return 'Ура! Все уровни пройдены!';
      case 'letter':
        return 'Письмо для Танюши';
      default:
        return 'A Birthday Quest';
    }
  };

  return (
    <div className="min-h-screen bg-[#faf7ee] text-[#1c1917] paper-bg flex flex-col justify-between">
      {/* Mobile-first centered app shell */}
      <div className="w-full max-w-lg mx-auto min-h-screen flex flex-col bg-[#faf7ee]/95 shadow-[0px_0px_30px_rgba(0,0,0,0.06)] border-x border-[#231f20]/10 relative">
        {/* Sticky Header with Navigation */}
        <Header
          currentScreen={currentScreen}
          title={getHeaderTitle()}
          soundEnabled={soundEnabled}
          onToggleSound={() => setSoundEnabled((prev) => !prev)}
          onResetQuest={handleResetQuest}
          onSelectScreen={setCurrentScreen}
        />

        {/* Main Screen Content with Transitions */}
        <main className="flex-1 overflow-y-auto pb-16 custom-scrollbar">
          <AnimatePresence mode="wait">
            {/* Screen 1: Авторизация */}
            {currentScreen === 'auth' && (
              <motion.div
                key="auth"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <LoginPortalScreen onSuccess={() => setCurrentScreen('room')} />
              </motion.div>
            )}

            {/* Screen 2: «26 августа» (Мини-квест в комнате) */}
            {currentScreen === 'room' && (
              <motion.div
                key="room"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <RoomQuestScreen onComplete={() => setCurrentScreen('intro')} />
              </motion.div>
            )}

            {/* Screen 3: Анимация входа крысы 3.png - 5.png и реплика */}
            {currentScreen === 'intro' && (
              <motion.div
                key="intro"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <IntroScreen onStartMaze={() => setCurrentScreen('maze')} />
              </motion.div>
            )}

            {/* Screen 4: «Лабиринт» (16 предметов) */}
            {currentScreen === 'maze' && (
              <motion.div
                key="maze"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <MazeScreen onComplete={() => setCurrentScreen('victory')} />
              </motion.div>
            )}

            {/* Screen 5: «Победа» (6.png + конфетти + «Вам письмо!») */}
            {currentScreen === 'victory' && (
              <motion.div
                key="victory"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <VictoryScreen onOpenLetter={() => setCurrentScreen('letter')} />
              </motion.div>
            )}

            {/* Screen 6: «Письмо» (Текст + 6.png + 7.png) */}
            {currentScreen === 'letter' && (
              <motion.div
                key="letter"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <LetterScreen onRestartQuest={() => setCurrentScreen('auth')} />
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        {/* Bottom Navigation */}
        <BottomNav
          currentScreen={currentScreen}
          onSelectScreen={setCurrentScreen}
        />
      </div>
    </div>
  );
}
