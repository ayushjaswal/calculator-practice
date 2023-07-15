import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Calculator from "./Calculator.js";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Calculator />
  </StrictMode>
);
