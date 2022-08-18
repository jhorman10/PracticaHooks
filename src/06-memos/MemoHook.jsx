import { useMemo, useState } from 'react';
import { useCounter } from '../hooks';

const heavyStuff = (iteratorNumber = 100) => {
  for (let i = 0; i < iteratorNumber; i++) {
    console.log('heavy stuff');
  }

  return `${iteratorNumber} iteraciones realizadas`;
};

export const MemoHook = () => {
  const { counter, increment } = useCounter(4000);
  const [show, setShow] = useState(true);
  const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
      <h1>
        Counter: <small className="fst-italic">{counter}</small>
      </h1>
      <hr />
      <h4>{ memorizedValue }</h4>
      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>
      <button className="btn btn-primary ml-2" onClick={() => setShow(!show)}>
        {show ? 'Ocultar' : 'Mostrar'}
      </button>
    </>
  );
};
