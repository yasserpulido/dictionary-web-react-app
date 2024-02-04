import { createContext, useState } from "react";

export type ThemeContextType = {
  theme: string;
  toggleTheme: (isChecked: boolean) => void;
};

export const ThemeContext = createContext({
  theme: "light-mode",
  toggleTheme: (isChecked: boolean) => {},
});

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState("light-mode");

  const toggleTheme = (isChecked: boolean) => {
    setTheme(isChecked ? "dark-mode" : "light-mode");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
