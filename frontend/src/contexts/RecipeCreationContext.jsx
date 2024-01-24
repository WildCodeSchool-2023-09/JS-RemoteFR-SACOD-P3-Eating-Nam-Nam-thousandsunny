import React, { useContext, createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const RecipeCreationContext = createContext(null);
export const useRecipeCreation = () => useContext(RecipeCreationContext);

export function RecipeProvider({ children }) {
  const [recipeCreation, setRecipeCreation] = useState({
    recipeName: "",
    recipeDesc: "",
    prepTime: "",
    nbPeople: "",
    tag1: "",
    tag2: "",
    tag3: "",
    difficulty: "easy",
    media: "",
  });

  const handleChangeCreation = (e) => {
    setRecipeCreation({ ...recipeCreation, [e.target.name]: e.target.value });
  };

  const handleImg = (url) => {
    setRecipeCreation({ ...recipeCreation, media: url });
  };

  const value = useMemo(() => {
    return { recipeCreation, handleChangeCreation, handleImg };
  }, [recipeCreation, handleChangeCreation, handleImg]);

  return (
    <RecipeCreationContext.Provider value={value}>
      {children}
    </RecipeCreationContext.Provider>
  );
}

RecipeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
