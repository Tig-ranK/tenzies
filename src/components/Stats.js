import React from 'react';
import Stopwatch from './Stopwatch';

export default function Stats({ count, start, setStart }) {
  return (
    <div className='stats'>
      <p>Roll Count: {count}</p>
      <p>
        Current Time: <Stopwatch start={start} setStart={setStart} />
      </p>
      <p>Best Time: 00:20:00</p>
    </div>
  );
}
