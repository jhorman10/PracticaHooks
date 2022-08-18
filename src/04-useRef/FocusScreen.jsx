import { useRef } from 'react';

export const FocusScreen = () => {
  const inputRef = useRef();

  const onclick = () => {
    inputRef.current.select();
  };

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />
      <input
        ref={inputRef}
        name="name"
        className="form-control"
        type="text"
        placeholder="Ingrese su nombre"
      />
      <button className="btn btn-primary mt-2" onClick={onclick}>
        Set focus
      </button>
    </>
  );
};
