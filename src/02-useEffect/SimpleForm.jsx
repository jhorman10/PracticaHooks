import { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: 'Jhorman',
    email: 'jhorman@mail.com',
  });

  const { username, email } = formState;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    // console.log('useEffect called!');
  }, []);

  useEffect(() => {
    // console.log('formState change!');
  }, [formState]);

  useEffect(() => {
    // console.log('email change!');
  }, [email]);

  //   useEffect(() => {
  //     first

  //     return () => {
  //       second
  //     }
  //   }, [third])

  return (
    <>
      <h1>Formulario</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="mail@mail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      {username === 'Jhorman2' && <Message />}
    </>
  );
};
