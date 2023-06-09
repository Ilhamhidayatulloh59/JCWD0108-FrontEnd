import { useState } from "react";

export const Stopwatch = () => {
  const [time, setTime] = useState(0);

  const onStart = () => {
      setInterval(() => {
        setTime((time) => time + 1);
      }, 1000)
  };
  return (
    <div>
      <h1>Ini Stopwatch</h1>
      <h2> { Math.floor(time / 60) < 10 ? "0" + Math.floor(time / 60) : Math.floor(time / 60) } : {time % 60 < 10 ? "0" + (time % 60) : time % 60}</h2>
      <button onClick={onStart}>start</button>
    </div>
  );
};
