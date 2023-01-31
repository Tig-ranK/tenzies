import Die from './Die';

export default function Dice({ dice, dispatch }) {
  return (
    <div className='dice-grid'>
      {dice.map((elem) => (
        <Die {...elem} key={elem.id} hold={() =>  dispatch({type: 'hold', id: elem.id})} />
      ))}
    </div>
  );
}
