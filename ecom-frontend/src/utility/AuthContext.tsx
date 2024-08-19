import React, { useCallback, useContext, useEffect, useMemo, useState } from "react";

import { createContext } from "react";
import { useNavigate } from "react-router-dom";

type ContextType = {
    token: string;
    isLoggedIn: boolean;
    login: (token: string) => void
    logout: () => void
}

const AuthContext = createContext<ContextType | undefined>(undefined);

export function AuthWrapper({
  children,
}: {
  children: React.JSX.Element;
}): React.JSX.Element {
  const [token, setToken] = useState<string>(()=> localStorage.getItem('token') || '');
  const navigate = useNavigate();
  
  const logout = useCallback(() => {
    if(token){
    localStorage.removeItem("token");
    setToken("");
    navigate('/');
    }
  }, [navigate, token]);
  
  const login = useCallback((newToken: string) => {
    if(newToken){
    localStorage.setItem('token', newToken);
    setToken(newToken);
    navigate('/');
    } else {
      console.error('Attempted to login with an empty token');
    }
  }, [navigate, token]);
  
  useEffect(()=>{
    if (!token){ 
      logout();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  const contextValue = useMemo(()=>({
    token,
    isLoggedIn: !!token,
    login,
    logout
  }), [token, login, logout])
  
  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}

export const useAuth = ():ContextType => {
  const context = useContext(AuthContext);

  if(context==undefined){
    throw new Error("useAuth must be used within an AuthProvider!");
  }
  return context;
}
