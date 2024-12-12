import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Center, Box, Flex, Span, Icon, Button, Input } from '@chakra-ui/react';
import { FaCirclePlay, FaCirclePause, FaArrowRotateLeft } from "react-icons/fa6";

const Stopwatch = () => {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  const inputRef = useRef();

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

  const handleFocus = (event) => {
    event.target.select();
  }

  const handleReset = (...args) => {
    if(args.length>0) {
      console.log("record session");
      console.log("Duration: ", );
      console.log("Activity Name: ", inputRef.current.value);
      console.log("Start Time: ", new Date());
      console.log("Duration: ", );
    }
    setIsActive(false);
    setTime(0);
    console.log(inputRef.current.value);
  };

  const StartButton = (
    <div>
      {/* <Box fontSize="32px">&nbsp;</Box> */}
      <Button
        onClick={handleStart}>
        Start Focus Session
      </Button>
      <Flex justifyContent="center" marginTop="20px">
        <Icon fontSize="40px" color="transparent"><FaArrowRotateLeft /></Icon>
      </Flex>
    </div>
  );
  const ActiveButtons = (
    <div>
      <Button
        onClick={()=>handleReset(true)}>
        End Focus Session
      </Button>
      <Flex justifyContent="center" marginTop="20px">
        <Icon onClick={handlePauseResume} fontSize="40px" marginRight="20px">{isPaused ? <FaCirclePlay /> : <FaCirclePause />}</Icon>
        <Icon onClick={handleReset} fontSize="40px"><FaArrowRotateLeft /></Icon>
      </Flex>
    </div>
  );

  return (
    <Flex gap="1" justify="center" height="100%" alignItems="center" direction="column">
      <div className="timer">
        <div>
          {/* {time}<br/> */}
          <Span textStyle="6xl" fontFamily='"M PLUS Rounded 1c", sans-serif' fontWeight="900">
            {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
          </Span>
          <Span textStyle="6xl" fontFamily='"M PLUS Rounded 1c", sans-serif' fontWeight="900">
            {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
          </Span>
          {/* <span className="digits">
            {("0" + ((time / 10) % 100)).slice(-2)}
          </span> */}
        </div>
      </div>
      <Box marginBottom="10px">
        <Input placeholder="Activity Name" ref={inputRef} defaultValue="FocusSession" onFocus={handleFocus} />
      </Box>
      <Box>
        <div>{isActive ? ActiveButtons : StartButton}</div>
      </Box>
    </Flex>
  );
};

export default Stopwatch;