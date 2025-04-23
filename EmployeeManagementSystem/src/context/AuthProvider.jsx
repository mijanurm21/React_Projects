import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../Utils/localStorage";

export const Authcontext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);

  useEffect(() => {
    localStorage.clear();
    setLocalStorage(); // m chata hu phli baar call ho taki agr future m data m koi change ho to ye bhi change ho jaaye
    const { employee, admin } = getLocalStorage();
    setuser({ employee, admin });
  }, []);

  return <Authcontext.Provider value={user}>{children}</Authcontext.Provider>;
};

export default AuthProvider;
