import React, { createContext, useState } from "react";

export const textContext = createContext();

export const textContextProvider = ({ children }) => {
  const [texts, setTexts] = useState(() =>
    localStorage.getItem("texts")
      ? JSON.parse(localStorage.getItem("texts"))
      : []
  );

  return (
    <textContext.Provider value={{ texts, setTexts }}>
      {children}
    </textContext.Provider>
  );
};
