export type TabType = 'auth' | 'room' | 'intro' | 'maze' | 'victory' | 'letter';

export type SubScreenType = 'auth' | 'room' | 'intro' | 'maze' | 'victory' | 'letter';

export interface BookItem {
  id: string;
  name: string;
  isMisused: boolean; // true = goes to quest score (green), false = bookcase (red feedback)
  title: string;
  description: string;
  hint: string;
  x: number; // percentage
  y: number; // percentage
  width: number;
  height: number;
}

export interface MazeCollectible {
  id: string;
  name: string;
  emoji: string;
  icon?: string;
  fact?: string;
  r: number;
  c: number;
}
