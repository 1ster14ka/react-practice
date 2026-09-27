import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./assets/components/App";
import "modern-normalize";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import { Toaster } from "react-hot-toast";
import Modal from "react-modal";

Modal.setAppElement("#root");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <App />
      <Toaster />
    </AuthProvider>
  </StrictMode>,
);
