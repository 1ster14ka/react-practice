import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./assets/components/App";
import "modern-normalize";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import { Toaster } from "react-hot-toast";
import Modal from "react-modal";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./assets/components/redux/store";

Modal.setAppElement("#root");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <BrowserRouter>
          <PersistGate loading={null} persistor={persistor}>
            <App />
            <Toaster />
          </PersistGate>
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  </StrictMode>,
);
