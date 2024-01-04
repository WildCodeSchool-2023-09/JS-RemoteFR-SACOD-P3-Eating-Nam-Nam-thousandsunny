import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Accueil from "./pages/Accueil";
import Connexion from "./pages/Connexion";
import RecipeDetails from "./pages/RecipeDetails";
import RecipeList from "./pages/RecipeList";

import Profil from "./pages/Profil";


const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Accueil /> },
      {
        path: "/recipes",
        element: <RecipeList />,
      },
      {
        path: "/recipes/:id",
        element: <RecipeDetails />,
      },
      {
        path: "/Profil",
        element: <Profil />,
      },
      { path: "/connexion", element: <Connexion /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
