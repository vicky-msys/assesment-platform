import React, { 
  createContext, useContext, useState 
} from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [authData, setAuthData] = useState({ isLoggedIn: false,token:"", userData: null });
  return (
    <AuthContext.Provider value={{
      authData,
      setAuthData
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};