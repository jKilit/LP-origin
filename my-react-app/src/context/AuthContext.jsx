import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    try {
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error("Error parsing stored user:", error);
      return null;
    }
  });
  const updateUser = (data) => {
    setCurrentUser(data);
    localStorage.setItem("user", JSON.stringify(data));
    console.log("currentUser updated:", data);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
    console.log("currentUser saved to localStorage:", currentUser);
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
