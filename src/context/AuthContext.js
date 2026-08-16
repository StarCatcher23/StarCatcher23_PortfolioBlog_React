import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");

    if (savedUser) {
      // Avoid setState directly inside effect (React 19 rule)
      Promise.resolve().then(() => {
        setUser(JSON.parse(savedUser));
      });
    }
  }, []);

  const login = (email, password) => {
    const userData = { email, password };
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const signup = (name, email, password) => {
    const userData = { name, email, password };
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
