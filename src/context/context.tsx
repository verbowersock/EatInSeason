'use client';
import { createContext, useState, ReactNode } from 'react';

export interface UserIdContextProps {
  loggedInUser: undefined | string;
  setLoggedInUser: React.Dispatch<React.SetStateAction<undefined | string>>;
}

export const UserId = createContext<UserIdContextProps | undefined>(undefined);

export function UserContext({ children }: { children: ReactNode }) {
  const [loggedInUser, setLoggedInUser] = useState<undefined | string>();

  return (
    <UserId.Provider value={{ loggedInUser, setLoggedInUser }}>
      {children}
    </UserId.Provider>
  );
}
export default UserContext;
