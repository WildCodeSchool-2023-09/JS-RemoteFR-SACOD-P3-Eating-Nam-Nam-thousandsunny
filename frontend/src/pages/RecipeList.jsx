import axios from "axios";
import { useState, useEffect } from "react";
import Recipe from "./Recipe";

function RecipeList() {
  const [allRecipe, setAllRecipe] = useState([]);
  const [filters, setFilters] = useState([]);

  const getData = () => {
    const endpoints = [
      "http://localhost:3310/api/recipes",
      "http://localhost:3310/api/tags",
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
          <select
            id="select-tag"
            onChange={(event) => setFilters(event.target.value)}
          >
            <option value="">----</option>
            {filters.map((filtre) => (
              <option key={filtre.id} value={filtre.id}>
                {filtre.name}
              </option>
            ))}
            ;
          </select>
        </label>
      </form>
      <ul>
        {allRecipe
          .filter((recipe) => (recipe.tag1 === filters ? recipe.tag1 : filters))
          .map((recipe) => (
            <li key={recipe.ID}>
              <Recipe
                id={recipe.ID}
                name={recipe.name}
                titre={recipe.titre}
                prep={recipe.prep_time}
                nb={recipe.nb_people}
                difficulty={recipe.difficulty}
                image={recipe.image}
                tag1={recipe.tag1}
                tag2={recipe.tag2}
                tag3={recipe.tag3}
              />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default RecipeList;
