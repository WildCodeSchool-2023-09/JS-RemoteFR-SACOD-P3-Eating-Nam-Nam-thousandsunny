import { Link, useLoaderData } from "react-router-dom";
import Detail from "./Detail";
import "./style/RecipeDetail.scss";

function RecipeDetails() {
  const detail = useLoaderData();
  return (
    <div className="body-content recipe-detail">
      <Detail
        name={detail.recipe.name}
        prep={detail.recipe.prep_time}
        id={detail.recipe.id}
      />
      <Link to="/recipes">
        <p>retour</p>
      </Link>
    </div>
  );
}

export default RecipeDetails;
