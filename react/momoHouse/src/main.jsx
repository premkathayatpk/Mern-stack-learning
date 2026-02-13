import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartProvider.jsx";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Auth0Provider } from "@auth0/auth0-react";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CartProvider>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
        transition={Bounce}
      />
      <Auth0Provider
        domain="dev-ev1j3wwodi04tnqb.us.auth0.com"
        clientId="ypb8FBw8RCXUvuws9ISxwjyEyjoxmqSH"
        authorizationParams={{ redirect_uri: window.location.origin }}
      >
        <App />
      </Auth0Provider>{" "}
    </CartProvider>
  </BrowserRouter>,
);
