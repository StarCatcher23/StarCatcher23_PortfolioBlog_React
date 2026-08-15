import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");

    if (savedUser) {
      Promise.resolve().then(() => {
        setUser(JSON.parse(savedUser));
      });
    }
  }, []);

  const login = (email) => {
    const userData = { email };
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const signup = (email) => {
    const userData = { email };
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext value={{ user, login, signup, logout }}>
      {children}
    </AuthContext>
  );
}
