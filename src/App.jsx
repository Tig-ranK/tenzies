import { useEffect, useReducer } from 'react';
import { randSix } from './helpers';
// npm packages
import { useWindowSize } from 'react-use';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';
// components
import Stats from './components/Stats';
import Dice from './components/Dice';

export default function App() {
  const { width, height } = useWindowSize();
  // confetti canvas dimensions ☝️
  const [state, dispatch] = useReducer(reducer, initialState);
  const { dice, count, start, tenzies, time, currentBest, prevBest } = state;

  // stop stopwatch + update best time
  useEffect(() => {
    if (tenzies) {
      dispatch({ type: 'tenzies' });
    }
  }, [tenzies]);

  function rollDice() {
    if (tenzies) {
      dispatch({ type: 'dice:new' });
    } else {
      dispatch({ type: 'dice:roll' });
    }
  }

  return (
    <>
      {tenzies && <Confetti width={width} height={height} />}
      <main className='main'>
        <h1>Tenzies</h1>
        <h3>
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </h3>
        <Dice dice={dice} dispatch={dispatch} />
        <button onClick={rollDice}>{tenzies ? 'New Game' : 'Roll'}</button>
        <Stats
          count={count}
          start={start}
          time={time}
          currentBest={currentBest}
          prevBest={prevBest}
          dispatch={dispatch}
        />
      </main>
    </>
  );
}

const initialState = {
  dice: newDice(),
  tenzies: false,
  count: 0,
  start: false,
  time: 0,
  currentBest: localStorage.getItem('currentBest') ?? 0,
  prevBest: localStorage.getItem('prevBest') ?? 0,
};

const reducer = (state, action) => {
  const { dice, time, count, currentBest } = state;

  switch (action.type) {
    case 'tick': {
      return {
        ...state,
        time: time + 10,
      };
    }
    case 'hold':
      const newState = {
        ...state,
        start: true,
        dice: dice.map((elem) => {
          return action.id === elem.id
            ? { ...elem, isHeld: !elem.isHeld }
            : elem;
        }),
      };
      if (
        newState.dice.every(
          (elem) => elem.isHeld && elem.value === dice[0].value
        )
      ) {
        newState.tenzies = true;
      }
      return newState;
    case 'dice:new':
      return {
        ...state,
        time: 0,
        count: 0,
        tenzies: false,
        dice: newDice(),
      };
    case 'dice:roll':
      return {
        ...state,
        start: true,
        count: count + 1,
        dice: dice.map((elem) =>
          elem.isHeld ? elem : { ...elem, value: randSix() }
        ),
      };
    case 'tenzies':
      if (currentBest === 0 || time < currentBest) {
        localStorage.setItem('prevBest', currentBest);
        localStorage.setItem('currentBest', time);
        return {
          ...state,
          start: false,
          prevBest: currentBest,
          currentBest: time, // fix bug with 1 tick diff between currentBest and time
          time: time,
        };
      } else {
        return {
          ...state,
          start: false,
        };
      }
    default:
      throw new Error(
        `"${action.type}" is not a valid type for App.jsx reducer.`
      );
  }
};

function newDice() {
  let diceArray = [];
  for (let i = 0; i < 10; i++) {
    diceArray.push({
      id: nanoid(),
      value: randSix(),
      isHeld: false,
    });
  }
  return diceArray;
}
