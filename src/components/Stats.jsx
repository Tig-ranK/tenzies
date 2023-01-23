import React from 'react';
import Stopwatch from './Stopwatch';

export default function Stats({ count, start, time, setTime, best }) {
  return (
    <div className='stats'>
      <p>Roll Count: {count}</p>
      <p>
        Current Time: <Stopwatch start={start} time={time} setTime={setTime} />
      </p>
      <p>
        Best Time: <Stopwatch time={best.current} />{' '}
        <span className='time-dif'>
          {/* <Stopwatch time={best.previous-best.current}/> */}
        </span>
      </p>
    </div>
  );
}
