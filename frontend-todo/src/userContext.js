import React, { createContext, useState } from 'react';

// User context create karna
const UserContext = createContext();

// User context provider component
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // User state
  const [name, setName] = useState("Adnan"); // Name state (optional, aapki zaroorat ke hisaab se)

  return (
    <UserContext.Provider value={{ user, setUser, name, setName }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider };
export default UserContext;
