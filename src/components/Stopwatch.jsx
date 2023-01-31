import { useEffect } from 'react';

export default function Stopwatch({ start, time, dispatch }) {
  useEffect(() => {
    let interval = null;
    if (start) {
      interval = setInterval(() => {
        dispatch({ type: 'tick' });
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [start, dispatch]);

  return (
    <>
      <span>{('0' + (Math.floor(time / 36000) % 60)).slice(-2)}</span>:
      <span>{('0' + (Math.floor(time / 600) % 60)).slice(-2)}</span>:
      <span>{('0' + time / 10).slice(-2)}</span>
    </>
  );
}
