import Stopwatch from './Stopwatch';

export default function Stats({
  count,
  start,
  time,
  dispatch,
  currentBest,
  prevBest,
}) {
  return (
    <div className='stats'>
      <p>Roll Count: {count}</p>
      <p>
        Current Time:{' '}
        <Stopwatch start={start} time={time} dispatch={dispatch} />
      </p>
      <p>
        Best Time: <Stopwatch time={currentBest} />
        {/* TODO add a diff for best times */}
      </p>
    </div>
  );
}
