import { useCallback, useState } from 'react';
import { ShowIncrementCBH } from './';

export const CallbackHook = () => {
  const [counter, setCounter] = useState(0);

  const incrementFather = useCallback((value) => {
    setCounter((count) => count + value);
  }, []);

  return (
    <>
      <h1>useCallback Hook: {counter}</h1>
      <hr />
      <ShowIncrementCBH increment={incrementFather} />
    </>
  );
};
