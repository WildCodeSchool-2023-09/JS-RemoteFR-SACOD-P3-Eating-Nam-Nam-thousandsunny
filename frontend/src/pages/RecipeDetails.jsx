import { useLoaderData } from "react-router-dom";
import Detail from "./Detail";
import "./style/RecipeDetail.scss";

function RecipeDetails() {
  const detail = useLoaderData();
  return (
    <Detail
      name={detail.recipe.name}
      prep={detail.recipe.prep_time}
      id={detail.recipe.id}
      image={detail.recipe.image}
    />
  );
}

export default RecipeDetails;
