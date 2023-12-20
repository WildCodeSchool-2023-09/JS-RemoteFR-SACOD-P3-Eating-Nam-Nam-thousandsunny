import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Acceuil from "./components/Acceuil";
import Connexion from "./pages/Connexion";
import RecipeDetails from "./components/RecipeDetails";
import RecipeList from "./components/RecipeList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/recipes",
        element: <RecipeList />,
      },
      {
        path: "/recipes/:id",
        element: <RecipeDetails />,
      },
      { path: "/home", element: <Acceuil /> },
    ],
  },
  {
    path: "connexion/",
    element: <Connexion />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
