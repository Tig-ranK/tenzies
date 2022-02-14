import React from 'react';

export default function Dice(props) {
  return (
    <button
      className={props.selected ? 'dice selected' : 'dice'}
      onClick={props.handleClick}
    >
      {props.content}
    </button>
  );
}
