import { useContext } from "react";
import { FontContext } from "../providers";

export const useFont = () => {
  return useContext(FontContext);
};
