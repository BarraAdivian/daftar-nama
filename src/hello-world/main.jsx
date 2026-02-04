import React from "react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import HelloWorld from "./HelloWorld";


createRoot(document.getElementById("root")).render(
    <StrictMode>
        <HelloWorld />
    </StrictMode>
)