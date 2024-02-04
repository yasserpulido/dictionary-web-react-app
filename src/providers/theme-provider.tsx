import { createContext, useEffect, useState } from "react";

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
  const [theme, setTheme] = useState(() => {
    const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return darkMode ? "dark-mode" : "light-mode";
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      setTheme(mediaQuery.matches ? "dark-mode" : "light-mode");
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const toggleTheme = (isChecked: boolean) => {
    setTheme(isChecked ? "dark-mode" : "light-mode");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
