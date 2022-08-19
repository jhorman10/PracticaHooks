import { useContext } from 'react';
import { UserContext } from './context/UserContext';

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <h2>LoginPage</h2>
      <hr />
      <pre>{JSON.stringify(user, null, 3)}</pre>
      <button
        onClick={() => {
          setUser({ name: 'John Doe', age: 30, email: 'johndoe@mail.com' });
        }}
        className="btn btn-outline-primary"
      >
        Establecer usuario
      </button>
    </>
  );
};
