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

  const Post = () => {
    axios
      .post(
        `${import.meta.env.VITE_BACKEND_URL}/api/recipes`,
        {
          name: recipeName,
          title: recipeDesc,
          prep_time: prepTime,
          nb_people: nbPeople,
          tag1,
          tag2,
          tag3,
          difficulty,
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
