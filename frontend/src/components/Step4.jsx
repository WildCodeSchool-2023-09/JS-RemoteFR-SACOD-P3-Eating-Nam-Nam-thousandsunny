import axios from "axios";
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

  const Post = () => {
    axios
      .post(
        `${import.meta.env.VITE_BACKEND_URL}/api/recipes`,
        {
          name: recipeCreation.recipeName,
          title: recipeCreation.recipeDesc,
          prep_time: recipeCreation.prepTime,
          nb_people: recipeCreation.nbPeople,
          tag1: recipeCreation.tag1,
          tag2: recipeCreation.tag2,
          tag3: recipeCreation.tag3,
          difficulty: recipeCreation.difficulty,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => res.status(201))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h1>Step 4</h1>
      <button type="submit" onClick={Post}>
        Poster la recette
      </button>
    </div>
  );
}

export default Step4;
