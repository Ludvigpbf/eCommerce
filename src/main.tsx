import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import store from "@redux/store.ts";
import { Provider } from "react-redux";
import "@locales/i18n.tsx";
import App from "./App.tsx";
import "@styles/App.css";
import Landing from "@views/Landing.tsx";
import Contact from "@views/Contact.tsx";
import Products from "@views/Products.tsx";
import About from "@views/About.tsx";
import Login from "@views/auth/Login.tsx";
import Register from "@views/auth/Register.tsx";
import Cart from "@views/cart/Cart.tsx";
import Checkout from "@views/cart/Checkout.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import NotFound from "@views/NotFound.tsx";
import RegisterOrganization from "@views/auth/RegisterOrganization.tsx";
import ForgotPass from "@views/auth/ForgotPass.tsx";
import ResetPass from "@views/auth/ResetPassword.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <GoogleOAuthProvider
          clientId={import.meta.env.VITE_APP_GOOGLE_CLIENT_ID}
        >
          <Provider store={store}>
            <App />
          </Provider>
        </GoogleOAuthProvider>
      </>
    ),
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/kontakt",
        element: <Contact />,
      },
      {
        path: "/produkter",
        element: <Products />,
      },
      {
        path: "/om-oss",
        element: <About />,
      },
      {
        path: "/logga-in",
        element: <Login />,
      },
      {
        path: "/losenord",
        element: <ForgotPass />,
      },
      {
        path: "/losenord/aterstall",
        element: <ResetPass />,
      },
      {
        path: "/registrera",
        element: <Register />,
      },
      {
        path: "/registrera/foretag",
        element: <RegisterOrganization />,
      },
      {
        path: "/varukorg",
        element: <Cart />,
      },
      {
        path: "/kassa",
        element: <Checkout />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
