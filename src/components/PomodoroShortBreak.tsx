import React from 'react';
import Timer from './modules/Timer';
import { useShortBreakStore } from '../utils/PomodoroStore';

const PomodoroShortBreak = () => {
  return <Timer useTimeStore={useShortBreakStore}></Timer>;
};

export default PomodoroShortBreak;
