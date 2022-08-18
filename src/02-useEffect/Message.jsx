import { useEffect, useState } from 'react';

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const onMouseMove = ({ x, y }) => {
      setCoords({ x, y });
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <>
      <small className="fst-italic text-danger">El usuario ya exite</small>
      <br />
      <code>Coords Mouse{JSON.stringify(coords)}</code>
    </>
  );
};
