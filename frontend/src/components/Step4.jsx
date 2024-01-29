import axios from "axios";
import React from "react";
import { useIngredientCreation } from "../contexts/IngredientCreationContext";
import { useInstructionCreation } from "../contexts/InstructionCreationContext";
import { useRecipeCreation } from "../contexts/RecipeCreationContext";

function Step4() {
  const { ingredientList } = useIngredientCreation();
  const { instructionList } = useInstructionCreation();
  const { recipeCreation } = useRecipeCreation();
  console.info(ingredientList);
  console.info(instructionList);
  console.info(recipeCreation);
  const {
    recipeName,
    recipeDesc,
    prepTime,
    nbPeople,
    tag1,
    tag2,
    tag3,
    difficulty,
  } = recipeCreation;

  const handlePost = async () => {
    try {
      const response = await axios
        .post(
          `${import.meta.env.VITE_BACKEND_URL}/api/recipes`,
          {
            name: recipeCreation.recipeName,
            title: recipeCreation.recipeDesc,
            prep_time: recipeCreation.prepTime,
            nb_people: recipeCreation.nbPeople,
            difficulty: recipeCreation.difficulty,
            tag1: recipeCreation.tag1,
            tag2: recipeCreation.tag2,
            tag3: recipeCreation.tag3,
          },
          {
            withCredentials: true,
          }
        )
        .then(() => console.info(response));
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h1>Step 4</h1>
      <div className="recipe-name">
        {recipeName} {recipeDesc}
        {prepTime}
        {nbPeople}
        {tag1}
        {tag2}
        {tag3}
        {difficulty}
      </div>
      <div className="ingredient-list">
        {ingredientList.map((item) => (
          <div key={item.id} value={item.name}>
            {item.name}, {item.quantity} {item.unit}
          </div>
        ))}
      </div>
      <div className="instruction-list">
        {instructionList.map((item) => (
          <div key={item.id}>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      <button type="submit" onClick={() => handlePost()}>
        Poster la recette
      </button>
    </div>
  );
}

export default Step4;
