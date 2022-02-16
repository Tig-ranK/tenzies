import React from 'react';

export default function Dice(props) {
  return (
    <button
      className={props.isHeld ? 'dice selected' : 'dice'}
      onClick={props.hold}
    >
      {props.value}
    </button>
  );
}
