import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Accueil from "./components/Accueil";
import Connexion from "./pages/Connexion";
import RecipeDetails from "./components/RecipeDetails";
import RecipeList from "./components/RecipeList";
import Profil from "./components/Profil";

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
      { path: "/home", element: <Accueil /> },
      {
        path: "/Profil",
        element: <Profil />,
      },
    ],
  },
  {
    path: "Connexion/",
    element: <Connexion />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
