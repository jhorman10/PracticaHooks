import React from 'react';

export const Badges = ({ done, pending }) => {
  return (
    <>
      {done > 0 && (
        <small className="badge rounded-pill text-bg-success">
          Realizados: {done}
        </small>
      )}

      {pending > 0 && (
        <small className="badge rounded-pill text-bg-warning">
          Pendientes: {pending}
        </small>
      )}
    </>
  );
};
