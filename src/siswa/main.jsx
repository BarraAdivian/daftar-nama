import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SiswaApp from "./SiswaApp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SiswaApp />
  </StrictMode>
);