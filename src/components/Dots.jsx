import React from 'react';

export default function Dots(props) {
  let dots = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  switch (props.value) {
    case 1:
      dots = [0, 0, 0, 0, 1, 0, 0, 0, 0];
      break;
    case 2:
      dots = [0, 0, 1, 0, 0, 0, 1, 0, 0];
      break;
    case 3:
      dots = [0, 0, 1, 0, 1, 0, 1, 0, 0];
      break;
    case 4:
      dots = [1, 0, 1, 0, 0, 0, 1, 0, 1];
      break;
    case 5:
      dots = [1, 0, 1, 0, 5, 0, 1, 0, 1];
      break;
    case 6:
      dots = [1, 0, 1, 1, 0, 1, 1, 0, 1];
      break;
    default:
      break;
  }
  const mappedDots = dots.map((select, index) => (
    <div key={index} className={select ? 'dot' : 'dot display'}></div>
  ));

  return (
    <div
      onClick={props.hold}
      className={props.isHeld ? 'dot-grid selected' : 'dot-grid'}
    >
      {mappedDots}
    </div>
  );
}
