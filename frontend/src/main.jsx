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
import { RecipeProvider } from "./contexts/RecipeCreationContext";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Accueil /> },
      {
        path: "/recipes",
        element: <RecipeList />,
        loader: () => {
          return Promise.all([
            axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/recipes`, {
              withCredentials: true,
            }),
            axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/tags`, {
              withCredentials: true,
            }),
          ])
            .then(([recipeResponse, tagsResponse]) => {
              const recipe = recipeResponse.data;
              const tags = tagsResponse.data;
              return Promise.all([{ recipe }, { tags }]);
            })
            .catch(() => {
              window.location.href = "/connexion";
            });
        },
      },
      {
        path: "/recipes/:id",
        element: <RecipeDetails />,
        loader: ({ params }) => {
          return axios
            .get(
              `${import.meta.env.VITE_BACKEND_URL}/api/recipes/${params.id}`,
              {
                withCredentials: true,
              }
            )
            .then((recipeResponse) => {
              const recipe = recipeResponse.data;
              return { recipe };
            })
            .catch(() => {
              window.location.href = "/connexion";
            });
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
    <RecipeProvider>
      <RouterProvider router={router} />
    </RecipeProvider>
  </React.StrictMode>
);
