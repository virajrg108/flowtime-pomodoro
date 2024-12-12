import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Center, Box, Flex, Span, Icon, Button } from '@chakra-ui/react';
import { FaCirclePlay, FaCirclePause, FaArrowRotateLeft } from "react-icons/fa6";

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
    <div>
      {/* <Box fontSize="32px">&nbsp;</Box> */}
      <div>
        <Icon fontSize="40px" marginBlock="10px" color="red"><FaArrowRotateLeft /></Icon>
      </div>
      <Button className=""
        onClick={handleStart}>
        Start Focus Session
      </Button>
    </div>
  );
  const ActiveButtons = (
    <div>
      <Flex className="btn btn-one" onClick={handlePauseResume} justifyContent="center" marginBottom="10px">
        <Icon fontSize="40px" marginRight="20px">{isPaused ? <FaCirclePlay /> : <FaCirclePause />}</Icon>
        <Icon fontSize="40px">
          <FaArrowRotateLeft />
        </Icon>
      </Flex>
      <Button className=""
        onClick={handleReset}>
        End Focus Session
      </Button>
    </div>
  );

  return (
    <Flex gap="4" justify="center" height="100%" alignItems="center" direction="column">
      <div className="timer">
        <div>
          {/* {time}<br/> */}
          <Span textStyle="6xl" fontFamily='"M PLUS Rounded 1c", sans-serif' fontWeight="800">
            {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
          </Span>
          <Span textStyle="6xl" fontFamily='"M PLUS Rounded 1c", sans-serif' fontWeight="800">
            {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
          </Span>
          {/* <span className="digits">
            {("0" + ((time / 10) % 100)).slice(-2)}
          </span> */}
        </div>
      </div>
      <div className="Control-Buttons">

        <div>{isActive ? ActiveButtons : StartButton}</div>
      </div>
    </Flex>
  );
};

export default Stopwatch;