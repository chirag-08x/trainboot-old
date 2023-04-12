import App from "./App";
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AppProvider } from "./context/AppContext";

const Index = () => {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<Index />);
