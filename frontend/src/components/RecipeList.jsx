import axios from "axios";
import { useState, useEffect } from "react";
import Recipe from "./Recipe";

function RecipeList() {
  const [allRecipe, setAllRecipe] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3310/api/recipes")
      .then((res) => setAllRecipe(res.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <ul>
        {allRecipe.map((recipes) => (
          <li key={recipes.ID}>
            <Recipe
              name={recipes.name}
              prep={recipes.prep_time}
              nb={recipes.nb_people}
              difficulty={recipes.difficulty}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;
