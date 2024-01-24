import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Recipe from "./Recipe";
import "./style/RecipeList.scss";

function RecipeList() {
  const allRecipe = useLoaderData()[0].recipe;
  const filters = useLoaderData()[1].tags;
  const [filtersRecipe, setFiltersRecipe] = useState("");

  /*
  useEffect(() => {
    const endpoints = [
      "http://localhost:3310/api/recipes",
      "http://localhost:3310/api/tags",
    ];
    Promise.all(
      endpoints.map((endpoint) =>
        axios.get(endpoint, {
          withCredentials: true,
        })
      )
    )
      .then(([{ data: recipe }, { data: tag }]) => {
        setAllRecipe(recipe);
        setFilters(tag);
        console.info(recipe, tag);
      })
      .catch(() => {
        window.location.href = "/connexion";
      });
  }, []);

  */

  return (
    <div className="body-content recipe-content">
      <div className="filter">
        <label htmlFor="select-tag">
          <select
            id="select-tag"
            onChange={(e) => setFiltersRecipe(e.target.value)}
          >
            <option value="">Filtrer par :</option>
            {filters &&
              filters.map((filtre) => (
                <option key={filtre.ID} value={filtre.name}>
                  {filtre.name}
                </option>
              ))}
          </select>
        </label>
      </div>
      <ul className="recipe-list">
        {allRecipe &&
          allRecipe
            .filter((recipe) => {
              if (
                (recipe.tag1 === filtersRecipe ||
                  recipe.tag2 === filtersRecipe ||
                  recipe.tag3 === filtersRecipe) &&
                filtersRecipe !== ""
              ) {
                return recipe;
              }
              if (filtersRecipe === "") {
                return recipe;
              }
              return null;
            })
            .map((recipe) => (
              <li key={recipe.ID} className="recipe">
                <Recipe
                  id={recipe.ID}
                  name={recipe.name}
                  title={recipe.title}
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
