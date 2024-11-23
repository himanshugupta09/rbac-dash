import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (credentials) => {
    if (
      credentials.email === "admin@example.com" &&
      credentials.password === "admin123"
    ) {
      setUser({ name: "Admin", role: "admin" });
    } else if (
      credentials.email === "user@example.com" &&
      credentials.password === "user123"
    ) {
      setUser({ name: "User", role: "user" });
    } else {
      throw new Error("Invalid credentials");
    }
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
