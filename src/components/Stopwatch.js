import React, { useState, useEffect } from 'react';

export default function Stopwatch({ start, setStart }) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;
    if (start) {
      setTime(0)
      interval = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [start]);

  return (
    <>
      <span>{('0' + (Math.floor(time / 36000) % 60)).slice(-2)}</span>:
      <span>{('0' + (Math.floor(time / 600) % 60)).slice(-2)}</span>:
      <span>{('0' + time / 10).slice(-2)}</span>
    </>
  );
}
