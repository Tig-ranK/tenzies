import Die from './Die';

export default function Dice({ dice, hold }) {
  return (
    <div className='dice-grid'>
      {dice.map((elem) => (
        <Die {...elem} key={elem.id} hold={() => hold(elem.id)} />
      ))}
    </div>
  );
}
