import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import axios from "axios";

import App from "./App";
import Accueil from "./pages/Accueil";
import Connexion from "./pages/Connexion";
import RecipeDetails from "./pages/RecipeDetails";
import RecipeList from "./pages/RecipeList";
import Profil from "./pages/Profil";
import CreateRecipe from "./pages/CreateRecipe";

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
        loader: ({ params }) => {
          return axios.get(
            `${import.meta.env.VITE_BACKEND_URL}/api/recipes/${params.id}`,
            {
              withCredentials: true,
            }
          );
        },
      },
      {
        path: "/Profil",
        element: <Profil />,
      },
      { path: "/connexion", element: <Connexion /> },
      {
        path: "/createrecipe",
        element: <CreateRecipe />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
