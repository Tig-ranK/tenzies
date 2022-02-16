import React, { useEffect, useState } from 'react';
import Die from './Die';
import { randSix } from '../helpers';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';

export default function App() {
  const [dice, setDice] = useState(newDice());
  const [tenzies, setTenzies] = useState(false);

  function checkWin() {
    // check if every element is held AND
    // every element is equal to the first one, i.e. they're all the same
    return dice.every((elem) => elem.isHeld && elem.value === dice[0].value);
  }

  useEffect(() => {
    if (checkWin()) {
      setTenzies(true);
    }
  }, [dice, checkWin]);

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

  function updateDice() {
    if (!tenzies) {
      setDice((prev) =>
        prev.map((elem) => (elem.isHeld ? elem : { ...elem, value: randSix() }))
      );
    } else {
      setTenzies(false)
      setDice(newDice())
    }
  }

  function hold(id) {
    setDice((prev) =>
      prev.map((elem) => {
        return id === elem.id ? { ...elem, isHeld: !elem.isHeld } : elem;
      })
    );
  }

  const mappedDice = dice.map((elem) => (
    <Die {...elem} key={elem.id} hold={() => hold(elem.id)} />
  ));

  return (
    <main className='main'>
      {tenzies && <Confetti />}
      <h1>Tenzies</h1>
      <h3>
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </h3>
      <div className='dice-grid'>{mappedDice}</div>
      <button onClick={() => updateDice()}>
        {tenzies ? 'New Game' : 'Roll'}
      </button>
    </main>
  );
}
