import React, { createContext, useState } from "react";
import { Font } from "../enums";

type FontContextType = {
  selectedFont: string;
  changeFont: (newFont: string) => void;
};

export const FontContext = createContext<FontContextType>({
  selectedFont: Font.SansSerif,
  changeFont: () => {},
});

type FontProviderProps = {
  children: React.ReactNode;
};

export const FontProvider = ({ children }: FontProviderProps) => {
  const [selectedFont, setSelectedFont] = useState(Font.SansSerif as string);

  const changeFont = (newFont: string) => {
    setSelectedFont(newFont);
  };

  return (
    <FontContext.Provider value={{ selectedFont, changeFont }}>
      {children}
    </FontContext.Provider>
  );
};
