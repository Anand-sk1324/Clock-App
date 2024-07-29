import React, { useEffect, useState } from 'react';
import Input from './modules/Input';
import Button from './modules/Button';

const StopWatchComponent = () => {
  const [seconds, setSeconds] = useState(0);

  const [isRunning, setIsRunning] = useState(false);

  const handleChange = (value) => {
    if (value >= 0) setSeconds(value);
    else {
      setIsRunning(false);
      return;
    }
  };

  const handleStart = () => {
    setIsRunning(true);
  };
  const handleStop = () => {
    setIsRunning(false);
  };

  useEffect(() => {
    if (isRunning) {
      const timer = setInterval(() => {
        handleChange(seconds + 0.01);
      }, 10);
      return () => clearInterval(timer);
    }
  }, [isRunning, seconds]);
  return (
    <>
      <div
        className={`flex gap-1 *:w-4 border px-6 py-3 mb-5 rounded-md transition-all ${isRunning && 'animate-pulse rounded-xl'}`}
      >
        <div>{('00' + (Math.floor(seconds / 3600) % 60)).slice(-2)}</div>
        <div>:</div>
        <div>{('00' + (Math.floor(seconds / 60) % 60)).slice(-2)}</div>
        <div>:</div>
        <div>{('00' + (Math.floor(seconds) % 60)).slice(-2)}</div>
        <div>:</div>
        <div>{(seconds % 1).toString().slice(2, 4) || '00'}</div>
      </div>

      <div className="flex gap-3">
        <Button
          model="danger"
          disabled={seconds === 0 || isRunning}
          onClick={() => setSeconds(0)}
        >
          Reset
        </Button>
        {isRunning ? (
          <Button model="primary" onClick={handleStop}>
            Stop
          </Button>
        ) : (
          <Button model="primary" onClick={handleStart}>
            Start
          </Button>
        )}
      </div>
    </>
  );
};

export default StopWatchComponent;
