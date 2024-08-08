import { createContext, useState } from "react";

export const UserContext = createContext({
  toggleUser: null,
  user: {
    name: null,
    course: null,
  },
});

const abbas = {
  name: "Abbas",
  course: "FrontendExpert",
};

const ahmad = {
  name: "Ahmad",
  course: "AlgoExpert",
};

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(abbas);

  const toggleUser = () => {
    setUser(user === abbas ? ahmad : abbas);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        toggleUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
