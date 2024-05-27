import React, { createContext, useState } from "react";

export const TextContext = createContext();

export const TextContextProvider = ({ children }) => {
  const [texts, setTexts] = useState(() =>
    localStorage.getItem("texts")
      ? JSON.parse(localStorage.getItem("texts"))
      : []
  );

  return (
    <TextContext.Provider value={{ texts, setTexts }}>
      {children}
    </TextContext.Provider>
  );
};
