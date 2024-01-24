import PropTypes from "prop-types";
import { useIngredientCreation } from "../contexts/IngredientCreationContext";
import { useInstructionCreation } from "../contexts/InstructionCreationContext";
import { useRecipeCreation } from "../contexts/RecipeCreationContext";

function Step4({ post }) {
  const { ingredientCreation } = useIngredientCreation();
  const { instructionCreation } = useInstructionCreation();
  const { recipeCreation } = useRecipeCreation();
  console.info(ingredientCreation);
  console.info(instructionCreation);
  console.info(recipeCreation);
  return (
    <div>
      <h1>Step 4</h1>
      <button type="submit" onClick={post}>
        Poster la recette
      </button>
    </div>
  );
}
Step4.propTypes = {
  post: PropTypes.func.isRequired,
};

export default Step4;
