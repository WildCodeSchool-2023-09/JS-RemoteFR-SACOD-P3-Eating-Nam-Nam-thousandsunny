import { React, useState, useEffect } from "react";
import axios from "axios";
import { useIngredientCreation } from "../contexts/IngredientCreationContext";
import { useInstructionCreation } from "../contexts/InstructionCreationContext";
import { useRecipeCreation } from "../contexts/RecipeCreationContext";

function Step4() {
  const { ingredientList } = useIngredientCreation();
  const { instructionList } = useInstructionCreation();
  const { recipeCreation } = useRecipeCreation();
  const [insertId, setInsertId] = useState(null);

  console.info({ ingredientList, instructionList, recipeCreation, insertId });

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

  let calculatedKcal = 0;
  ingredientList.forEach((item) => {
    calculatedKcal += item.totalKcal;
  });
  const totalKcalPerPerson = calculatedKcal / recipeCreation.nbPeople;
  recipeCreation.total_kcal = totalKcalPerPerson;

  const handlePostRecipe = async () => {
    try {
      await axios
        .post(
          `${import.meta.env.VITE_BACKEND_URL}/api/recipes`,
          {
            name: recipeCreation.recipeName,
            title: recipeCreation.recipeDesc,
            prep_time: Number(recipeCreation.prepTime),
            nb_people: Number(recipeCreation.nbPeople),
            difficulty: recipeCreation.difficulty,
            tag1: recipeCreation.tag1,
            tag2: recipeCreation.tag2,
            tag3: recipeCreation.tag3,
            image: recipeCreation.media,
            total_kcal: recipeCreation.total_kcal,
          },
          {
            withCredentials: true,
          }
        )
        .then((response) => {
          const newInsertId = response.data.insertId;
          setInsertId(newInsertId);
        });
    } catch (error) {
      console.error(error);
    }
  };
  const handlePostIngredient = () => {
    for (const item of ingredientList) {
      try {
        axios
          .post(
            `${import.meta.env.VITE_BACKEND_URL}/api/recipe_ingredient`,
            {
              ingredient_id: item.id,
              recipe_id: insertId,
              quantity: item.quantity,
            },
            {
              withCredentials: true,
            }
          )
          .then((response) => console.info(response));
      } catch (error) {
        console.error(error);
      }
    }
  };
  const handlePostInstruction = () => {
    for (const item of instructionList) {
      try {
        axios
          .post(
            `${import.meta.env.VITE_BACKEND_URL}/api/instruction`,
            {
              id: item.id,
              recipe_id: insertId,
              description: item.name,
            },
            {
              withCredentials: true,
            }
          )
          .then((response) => console.info(response));
      } catch (error) {
        console.error(error);
      }
    }
  };
  useEffect(() => {
    if (insertId) {
      handlePostIngredient();
      handlePostInstruction();
    }
  }, [insertId]);

  return (
    <div>
      <h1>Step 4</h1>
      <div className="recipe-name">
        {recipeCreation.media && (
          <img src={recipeCreation.media} alt="Recipe" />
        )}
        .{recipeName} {recipeDesc}
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
      <button type="submit" onClick={() => handlePostRecipe()}>
        Poster la recette
      </button>
    </div>
  );
}

export default Step4;
