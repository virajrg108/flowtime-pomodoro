import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Center, Box, Flex, Span, Icon, Button, Input } from '@chakra-ui/react';
import { FaCirclePlay, FaCirclePause, FaArrowRotateLeft } from "react-icons/fa6";
import { useStopwatch } from 'react-timer-hook';

const Stopwatch = (props) => {
  const [activeSession, setActiveSession] = useState(false);
  const [sessionType, setSessionType] = useState('focus');
  const { totalSeconds, seconds, minutes, hours, isRunning, start, pause, reset } = useStopwatch({ autoStart: false });

  const handleStart = (sesType) => {
    setSessionType(sesType);
    setActiveSession(true);
    start();
  };

  const handlePause = () => {
    pause();
  };

  const handleResume = () => {
    start();
  };

  /* To auto select content of input tag when in focus */
  const handleFocus = (event) => {
    event.target.select();
  }

  const handleReset = (...args) => {
    reset(null, false); // first argument is offsetTimestamp, second arguement is boolean flag whether the stopwatch should auto start after reset
    setActiveSession(false);

    const d = new Date();
    if (args.length > 0) {
      console.log("record session");
      console.log("Duration: ",);
      console.log("Start Time: ", new Date());
      console.log("Duration: ", (hours * 60) + (minutes * 60) + seconds);
      props.addNewSession({
        duration: (hours * 60) + (minutes * 60) + seconds,
        date: d.getDate() + '-' + d.getMonth() + '-' + d.getFullYear(),
        sessionType,
      });
    }
  };

  const SessionStartState = (
    <div>
      <Button onClick={() => handleStart('focus')} marginRight="10px" bg="cyan.700">
        Start Focus Session
      </Button>
      <Button onClick={() => handleStart('break')} bg="red.800">
        Start Break Session
      </Button>
      <Flex justifyContent="center" marginTop="20px">
        <Icon fontSize="40px" color="transparent"><FaArrowRotateLeft /></Icon>
      </Flex>
    </div>
  );
  const SessionOngoingState = (
    <div>
      {sessionType == 'focus' ?
        <Button
          onClick={() => handleReset(true)}>
          End Focus Session
        </Button> :
        <Button
          onClick={() => handleReset(true)}>
          End Break Session
        </Button>}

      <Flex justifyContent="center" marginTop="20px">
        <Icon fontSize="40px" marginRight="20px">{isRunning ? <FaCirclePause onClick={handlePause} /> : <FaCirclePlay onClick={handleResume} />}</Icon>
        <Icon onClick={handleReset} fontSize="40px"><FaArrowRotateLeft /></Icon>
      </Flex>
    </div>
  );

  return (
    <Flex gap="1" justify="center" height="100%" alignItems="center" direction="column">
      <div>
        <div>
          {hours !== 0 ? <Span textStyle="6xl" fontFamily='"M PLUS Rounded 1c", sans-serif' fontWeight="900">{hours < 10 ? "0" + hours : hours}:</Span> : <span></span>}
          <Span textStyle="6xl" fontFamily='"M PLUS Rounded 1c", sans-serif' fontWeight="900">{minutes < 10 ? "0" + minutes : minutes}:</Span>
          <Span textStyle="6xl" fontFamily='"M PLUS Rounded 1c", sans-serif' fontWeight="900">{seconds < 10 ? "0" + seconds : seconds}</Span>
        </div>
      </div>
      {/* <Box marginBottom="10px">
        <Input placeholder="Activity Name" ref={inputRef} defaultValue={sessionType === "focus" ? "FocusSession" : "BreakSession"} onFocus={handleFocus} />
      </Box> */}
      <Box>
        <div>{activeSession ? SessionOngoingState : SessionStartState}</div>
      </Box>
    </Flex>
  );
};

export default Stopwatch;