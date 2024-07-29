import { useWorkStore } from '../utils/PomodoroStore';
import Button from './modules/Button';
import Timer from './modules/Timer';

const PomodoroWork = () => {
  return <Timer useTimeStore={useWorkStore}></Timer>;
};

export default PomodoroWork;
