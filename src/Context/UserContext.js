import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = (props) => {
  const [userState, setUserState] = useState({
    userName: "",
    userId: "",
    loggedIn: false,
    userRole: "",
  });

  return (
    <UserContext.Provider value={[userState, setUserState]}>
      {props.children}
    </UserContext.Provider>
  );
};