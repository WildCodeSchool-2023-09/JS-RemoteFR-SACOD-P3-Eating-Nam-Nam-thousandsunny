import { React, useState, useEffect } from "react";
import axios from "axios";
import Typography from "@mui/material/Typography";
import { useIngredientCreation } from "../contexts/IngredientCreationContext";
import { useInstructionCreation } from "../contexts/InstructionCreationContext";
import { useRecipeCreation } from "../contexts/RecipeCreationContext";

function Step4() {
  const { ingredientList } = useIngredientCreation();
  const { instructionList } = useInstructionCreation();
  const { recipeCreation } = useRecipeCreation();
  const [insertId, setInsertId] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

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

  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  const handlePostRecipe = async () => {
    try {
      const formData = new FormData();
      formData.append("image", selectedFile);
      formData.append("name", recipeCreation.recipeName);
      formData.append("title", recipeCreation.recipeDesc);
      formData.append("prep_time", Number(recipeCreation.prepTime));
      formData.append("nb_people", Number(recipeCreation.nbPeople));
      formData.append("difficulty", recipeCreation.difficulty);
      formData.append("tag1", recipeCreation.tag1);
      formData.append("tag2", recipeCreation.tag2);
      formData.append("tag3", recipeCreation.tag3);
      formData.append("total_kcal", recipeCreation.total_kcal);

      await axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/api/recipes`, formData, {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
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
      <Typography>
        {" "}
        Sélectionnez une image pour illustrer votre recette !
      </Typography>
      <input type="file" onChange={handleFileInput} />
      <div className="recipe-name">
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
