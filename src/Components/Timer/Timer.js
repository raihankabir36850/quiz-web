import { useState, useEffect } from "react";

// class TimerExample extends React.Component {
//   constructor() {
//     super();
//     this.state = { time: {}, seconds: 60 };
//     this.timer = 0;
//     this.startTimer = this.startTimer.bind(this);
//     this.countDown = this.countDown.bind(this);
//   }

//   secondsToTime(secs) {
//     let hours = Math.floor(secs / (60 * 60));
//     console.log(hours, "hours");

//     let divisor_for_minutes = secs % (60 * 60);
//     console.log(divisor_for_minutes, "divisor_for_minutes");

//     let minutes = Math.floor(divisor_for_minutes / 60);
//     console.log(minutes, "minutes");

//     let divisor_for_seconds = divisor_for_minutes % 60;
//     console.log(divisor_for_seconds, "divisor_for_seconds");
//     let seconds = Math.ceil(divisor_for_seconds);
//     console.log(seconds, "seconds");

//     let obj = {
//       h: hours,
//       m: minutes,
//       s: seconds,
//     };
//     return obj;
//   }

//   componentDidMount() {
//     console.log("componentDidMount");
//     let timeLeftVar = this.secondsToTime(this.state.seconds);
//     console.log(timeLeftVar, "timeLeftVar");
//     this.setState({ time: timeLeftVar });
//   }

//   startTimer() {
//     if (this.timer == 0 && this.state.seconds > 0) {
//       this.timer = setInterval(this.countDown, 1000);
//     }
//   }

//   countDown() {
//     // Remove one second, set state so a re-render happens.
//     let seconds = this.state.seconds - 1;
//     this.setState({
//       time: this.secondsToTime(seconds),
//       seconds: seconds,
//     });

//     // Check if we're at zero.
//     if (seconds == 0) {
//       console.log("why");
//       clearInterval(this.timer);
//     }
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.startTimer}>Start</button>
//         m: {this.state.time.m} s: {this.state.time.s}
//       </div>
//     );
//   }
// }

// export default TimerExample;
// this.state = { time: {}, seconds: 60 };

function TimerComponent() {
  const [time, setTime] = useState({ time: {}, seconds: 60 });
  const [timer, setTimer] = useState(0);

  const secondsToTime = (secs) => {
    let hours = Math.floor(secs / (60 * 60));
    console.log(hours, "hours");

    let divisor_for_minutes = secs % (60 * 60);
    console.log(divisor_for_minutes, "divisor_for_minutes");

    let minutes = Math.floor(divisor_for_minutes / 60);
    console.log(minutes, "minutes");

    let divisor_for_seconds = divisor_for_minutes % 60;
    console.log(divisor_for_seconds, "divisor_for_seconds");
    let seconds = Math.ceil(divisor_for_seconds);
    console.log(seconds, "seconds");

    let obj = {
      h: hours,
      m: minutes,
      s: seconds,
    };
    return obj;
  };

  useEffect(() => {
    console.log("componentDidMount", time);
    let timeLeftVar = secondsToTime(time.seconds);
    console.log(timeLeftVar, "timeLeftVar");
    setTime({ time: timeLeftVar, seconds: time.seconds });
  }, []);

  const startTimer = () => {
    console.log(timer, time);
    if (timer == 0 && time.seconds > 0) {
      console.log("enter");
      setTimer(setInterval(countDown, 1000));
    }
  };

  const countDown = () => {
    // Remove one second, set state so a re-render happens.
    let seconds = time.seconds - 1;
    console.log("countdown", seconds);
    setTime({
      time: secondsToTime(seconds),
      seconds: seconds,
    });
    if (seconds == 0) {
      console.log("why");
      clearInterval(timer);
    }
  };

  return (
    <div>
      <button onClick={startTimer}>Start</button>
      m: {time.time.m} s: {time.time.s}
    </div>
  );
}

export default TimerComponent;
