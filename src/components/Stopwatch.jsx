import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Center, Box } from '@chakra-ui/react';

const Stopwatch = () => {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);

  React.useEffect(() => {
    let interval = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  const StartButton = (
    <div className="btn btn-one btn-start"
      onClick={handleStart}>
      Start
    </div>
  );
  const ActiveButtons = (
    <div className="btn-grp">
      <div className="btn btn-two"
        onClick={handleReset}>
        Reset
      </div>
      <div className="btn btn-one"
        onClick={handlePauseResume}>
        {isPaused ? "Resume" : "Pause"}
      </div>
    </div>
  );

  return (
    <Box>
      <div className="timer">
        <div>
          <span className="digits">
            {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
          </span>
          <span className="digits">
            {("0" + Math.floor((time / 1000) % 60)).slice(-2)}.
          </span>
          <span className="digits mili-sec">
            {("0" + ((time / 10) % 100)).slice(-2)}
          </span>
        </div>
      </div>
      <div className="Control-Buttons">
        <div>{isActive ? ActiveButtons : StartButton}</div>
      </div>
    </Box>
  );
};

export default Stopwatch;