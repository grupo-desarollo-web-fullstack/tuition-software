import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./router/App";

const rootRef = document.querySelector("#root");

const root = createRoot(rootRef);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
