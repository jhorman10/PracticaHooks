import React, { memo } from 'react';

export const ShowIncrementCBH = memo(({ increment }) => {
  console.log('ShowIncrementCBH');
  return (
    <button className="btn btn-primary" onClick={() => increment(5)}>
      Incrementar +1
    </button>
  );
});
