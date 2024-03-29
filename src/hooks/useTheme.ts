import { useContext } from "react";
import { ThemeContext } from "../providers";

export const useTheme = () => {
  return useContext(ThemeContext);
};
