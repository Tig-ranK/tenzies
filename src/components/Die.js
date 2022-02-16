import React from 'react';

export default function Die(props) {
  return (
    <button
      className={props.isHeld ? 'dice selected' : 'dice'}
      onClick={props.hold}
    >
      {props.value}
    </button>
  );
}
