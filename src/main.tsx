import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { FontProvider } from "./providers/font-provider.tsx";
import { ThemeProvider } from "./providers/theme-provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <FontProvider>
        <App />
      </FontProvider>
    </ThemeProvider>
  </React.StrictMode>
);
