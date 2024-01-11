import { Link, useLoaderData } from "react-router-dom";
import Detail from "./Detail";

function RecipeDetails() {
  const detail = useLoaderData();
  return (
    <div className="body-content">
      <Detail name={detail.name} prep={detail.prep_time} />
      <Link to="/recipes">
        <p>retour</p>
      </Link>
    </div>
  );
}

export default RecipeDetails;
