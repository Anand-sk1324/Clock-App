import { useEffect, useState } from 'react';
import Button from './Button';

const Timer = ({ useTimeStore }) => {
  const { elapsedTime, setElapsedTime, resetElapsedTime } = useTimeStore();
  const [isRunning, setIsRunning] = useState(false);

  const handleReset = () => {
    resetElapsedTime();
  };

  const handleStart = () => {
    if (elapsedTime < 0) return;
    setIsRunning(true);
  };
  const handleStop = () => {
    setIsRunning(false);
  };

  useEffect(() => {
    if (elapsedTime < 0) {
      setIsRunning(false);
      return;
    }
    if (isRunning && elapsedTime > 0) {
      const timer = setInterval(() => {
        setElapsedTime(elapsedTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [elapsedTime, isRunning]);

  return (
    <>
      <div className="text-4xl">
        {('00' + Math.floor(elapsedTime / 60).toString()).slice(-2)}:
        {('00' + (elapsedTime % 60).toString()).slice(-2)}
      </div>
      <div className="space-x-4">
        <Button
          model="danger"
          onClick={() => handleReset()}
          disabled={isRunning}
        >
          Reset
        </Button>
        {isRunning ? (
          <Button model="primary" onClick={() => handleStop()}>
            Stop
          </Button>
        ) : (
          <Button
            model="primary"
            onClick={() => handleStart()}
            disabled={elapsedTime <= 0}
          >
            Start
          </Button>
        )}
      </div>
    </>
  );
};

export default Timer;
