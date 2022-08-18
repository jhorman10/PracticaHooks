import { memo } from 'react';

//tambien se puede con React.memo
export const Small = memo(({ value }) => {
  console.log('Small render');
  return <small className="fst-italic">{value}</small>;
});
