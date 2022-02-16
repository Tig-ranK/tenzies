import React, { useState, useEffect } from 'react';

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    let interval = null;
    if (start) {
      interval = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [start]);

  return (
    <div className='stopwatch'>
        <span>{('0' + Math.floor(time/36000)%60).slice(-2)}</span>
        :
        <span>{('0' + Math.floor(time/600)%60).slice(-2)}</span>
        :
        <span>{('0'+(time/10)).slice(-2)}</span>
        <br />
        <button onClick={() => setStart((prev) => !prev)}>Start</button>
    </div>
  );
}
