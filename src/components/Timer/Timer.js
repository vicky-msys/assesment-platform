import React, { useEffect, useState } from "react";
import propTypes from "prop-types";
import "./Timer.scss";
const size = 45;
export default function Timer(props) {
  const { totalInSeconds, startOnLoad, onComplete } = props;
  const [seconds, setSeconds] = useState(props.totalInSeconds);
  const [time, setTime] = useState({});
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    let timeLeftVar = secondsToTime(seconds);
    setTime(timeLeftVar);
    if (startOnLoad) {
      startTimer();
    }
  }, []);
  useEffect(() => {
    setTime(secondsToTime(seconds));
    if (seconds == 0) {
      clearInterval(timer);
      onComplete && onComplete();
    }
  }, [seconds]);

  function startTimer() {
    if (timer == 0 && seconds > 0) {
        setTimer(setInterval(countDown, 1000));
    }
  }

  function countDown() {
    setSeconds((prevTime) => prevTime - 1);
  }

  function secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));
    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      h: hours,
      m: minutes,
      s: seconds,
    };
    return obj;
  }

  function leadingZero(value) {
    return String(value).padStart(2, "0");
  }

  let percentage = 100 - (seconds / totalInSeconds) * 100;
  return (
    <div className="timer-container">
      <svg height={size} width={size} viewBox="-5 -3 30 26">
        <circle
          cx="10"
          cy="10"
          r="13"
          stroke="black"
          strokeWidth="3"
          fill="transparent"
        ></circle>
        <circle
          className="timer-inner-circle"
          cx="10"
          cy="10"
          r="5"
          strokeWidth="10"
          strokeDasharray={"calc(" + percentage + " * 31.9 / 100)31.9"}
          transform="rotate(-90) translate(-20)"
        />
      </svg>
      <div className="timer-label">
        {time.h > 0 ? leadingZero(time.h) + " : " : ""} {leadingZero(time.m)} :{" "}
        {leadingZero(time.s)}
      </div>
    </div>
  );
}
Timer.defaultProps = {
  totalInSeconds: 20,
  startOnLoad: true,
};
Timer.propTypes = {
  onComplete: propTypes.func.isRequired,
  totalInSeconds: propTypes.number,
  startOnLoad: propTypes.bool,
};
