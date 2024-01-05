import axios from "axios";
import { useState, useEffect } from "react";
import Recipe from "./Recipe";

function RecipeList() {
  const [allRecipe, setAllRecipe] = useState([]);
  const [filters, setFilters] = useState([]);

  const getData = () => {
    const endpoints = [
      "http://localhost:3310/api/recipes",
      "http://localhost:3310/api/tag",
    ];
    Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
      ([{ data: recipe }, { data: tag }]) => {
        setAllRecipe(recipe);
        setFilters(tag);
      }
    );
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="body-content">
      <form>
        <label htmlFor="select-tag">
          <select id="select-tag" onChange={(e) => setFilters(e.target.value)}>
            <option value="">----</option>
            {filters.map((filtre) => {
              return (
                <option key={filtre.id} value={filtre.id}>
                  {filtre.name}
                </option>
              );
            })}
          </select>
        </label>
      </form>
      <ul>
        {allRecipe.map((recipe) => (
          <li key={recipe.ID}>
            <Recipe
              id={recipe.ID}
              name={recipe.name}
              prep={recipe.prep_time}
              nb={recipe.nb_people}
              difficulty={recipe.difficulty}
              image={recipe.image}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;
