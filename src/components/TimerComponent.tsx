import React, { useEffect, useState } from 'react';
import Input from './modules/Input';
import Button from './modules/Button';
import { ToastContainer, toast } from 'react-toastify';

const TimerComponent = () => {
  const [seconds, setSeconds] = useState(0);

  const [isRunning, setIsRunning] = useState(false);

  const handleChange = (value) => {
    if (value >= 0) {
      setSeconds(value);
    } else {
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
        handleChange(seconds - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isRunning, seconds]);
  return (
    <>
      <div className="  rounded-md mb-4 pr-2">
        <Input
          value={seconds}
          handleChange={handleChange}
          disabled={isRunning}
        ></Input>
        <label htmlFor="seconds" className="hover:cursor-text ml-2">
          Seconds
        </label>
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
          <Button
            model="primary"
            onClick={handleStart}
            disabled={seconds === 0}
          >
            Start
          </Button>
        )}
      </div>
    </>
  );
};

export default TimerComponent;
