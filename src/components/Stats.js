import React, { useState } from 'react';
import Stopwatch from './Stopwatch';

export default function Stats({ count, start, setStart, time, setTime, best }) {

  return (
    <div className='stats'>
      <p>Roll Count: {count}</p>
      <p>
        Current Time:{' '}
        <Stopwatch
          start={start}
          setStart={setStart}
          time={time}
          setTime={setTime}
        />
      </p>
      <p>
        Best Time: <Stopwatch time={best}/>
      </p>
    </div>
  );
}
