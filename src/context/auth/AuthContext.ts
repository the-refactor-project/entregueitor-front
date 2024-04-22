import { createContext } from "react";

export interface AuthContextValue {
  student: string;
  setStudent: React.Dispatch<React.SetStateAction<string>>;
}

export const AuthContext = createContext<AuthContextValue>(
  {} as AuthContextValue
);
