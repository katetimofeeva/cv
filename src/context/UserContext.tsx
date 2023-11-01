import { createContext, useState, useEffect } from "react";

import {
  onAuthStateChangedListener,
  createUserDoc,
} from "../utils/firebase/Firebase";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
  step: 0,
  setStep: () => null,
});

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentUser, setCurrentUser] = useState(null);

  const value: any = { currentUser, setCurrentUser };
  
  useEffect(() => {
    const unSubscribe = onAuthStateChangedListener((user: any) => {
      if (user) {
        createUserDoc(user);
      }
      setCurrentUser(user);
    });
    return unSubscribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
