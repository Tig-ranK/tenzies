import React, { useEffect, useState } from 'react';
import Dice from './Dice';

export default function App() {
  const [dice, setDice] = useState([
    true,
    true,
    false,
    false,
    false,
    true,
    false,
    true,
    false,
    false,
  ]);

  let diceArray = [];
  for (let i = 0; i < 10; i++) {
    diceArray.push(
      <Dice
        key={i}
        selected={dice[i]}
        content={i}
        handleClick={() => handleClick(i)}
      />
    );
  }

  function handleClick(i) {
    console.log(`${i} was clicked`);
    setDice((prev) => {
      let diceCopy = prev.slice();
      diceCopy[i] = !diceCopy[i];
      return diceCopy;
    });
  }

  function handleRoll() {
    console.log(randomOutOfSix());
  }
  function randomOutOfSix() {
    return Math.ceil(Math.random() * 6);
  }
  return (
    <main className='main'>
      <h1>Tenzies</h1>
      <h3>
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </h3>
      <div className='dice-grid'>{diceArray}</div>
      <button onClick={handleRoll}>Roll</button>
    </main>
  );
}
