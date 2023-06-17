import { useState, useEffect } from "react";

function TimerComponent() {
  const [time, setTime] = useState({ time: {}, seconds: 120 });
  const [timer, setTimer] = useState(0);

  const secondsToTime = (secs) => {
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
  };

  useEffect(() => {
    let timeLeftVar = secondsToTime(time.seconds);
    setTime({ ...time, time: timeLeftVar });
  }, []);

  const startTimer = () => {
    if (timer == 0 && time.seconds > 0) {
      setTimer(setInterval(countDown, 1000));
    }
  };

  const countDown = () => {
    // Remove one second, set state so a re-render happens.
    setTime((prevTime) => {
      let seconds = prevTime.seconds - 1;

      if (seconds == 0) {
        clearInterval(timer);
      }

      return {
        time: secondsToTime(seconds),
        seconds: seconds,
      };
    });
  };

  return (
    <div>
      <button onClick={startTimer}>Start</button>
      m: {time.time.m} s: {time.time.s}
    </div>
  );
}

export default TimerComponent;
