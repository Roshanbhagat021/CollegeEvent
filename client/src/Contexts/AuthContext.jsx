import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState("");
  const [userName, setUserName] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    const savedToken = localStorage.getItem("authToken");
    const savedName = localStorage.getItem("userName");
    const savedRole = localStorage.getItem("role");

    if (savedToken && savedName) {
      setToken(savedToken);
      setUserName(savedName);
      setRole(savedRole);
      setIsAuth(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, token, setToken, userName, setUserName,role,setRole }}>
      {children}
    </AuthContext.Provider>
  );
}
