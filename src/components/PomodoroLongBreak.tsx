import React from 'react';
import Timer from './modules/Timer';
import { useLongBreakStore } from '../utils/PomodoroStore';

const PomodorolongBreak = () => {
  return <Timer useTimeStore={useLongBreakStore}></Timer>;
};

export default PomodorolongBreak;
