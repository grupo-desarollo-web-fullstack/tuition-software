import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@router/App";
import "@styles/index.scss";
import "@styles/components.scss";


const rootRef = document.querySelector("#root");

const root = createRoot(rootRef);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
