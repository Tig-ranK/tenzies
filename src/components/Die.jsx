import Dots from './Dots';

export default function Die(props) {
  return 0 ? (
    <button
      className={props.isHeld ? 'dice selected' : 'dice'}
      onClick={props.hold}
    >
      {props.value}
    </button>
  ) : (
    <Dots value={props.value} isHeld={props.isHeld} hold={props.hold} />
  );
}
