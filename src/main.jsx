import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Styles/App.css";
import App from "./App.jsx";
import { GameProvider } from "./GameContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GameProvider>
      <App />
    </GameProvider>
  </StrictMode>,
);
