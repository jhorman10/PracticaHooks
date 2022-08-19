import { useState } from 'react';
import { UserContext } from './UserContext';

// const user = {
//     name: 'John Doe',
//     age: 30,
//     email: 'mail@mail.com'
// }

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
