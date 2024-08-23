import React, { createContext, ReactNode, useReducer } from "react";
import { User } from "../types/user";

type AuthState = {
  user: User;
};

type AuthAction = { type: "SET_USER"; payload: User } | { type: "CLEAR_USER" };

const initialState: AuthState = {} as AuthState;

function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case "SET_USER":
      return { user: action.payload };
    case "CLEAR_USER":
      return { user: {} as User };
    default:
      return state;
  }
}

interface AuthContextType {
  state: AuthState;
  dispatch: React.Dispatch<AuthAction>;
}

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
