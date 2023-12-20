import { Link } from "react-router-dom";
/* UseEffect for loading data
import { useEffect } from "react";
import axios from "axios";


useEffect(() => {
  axios
    .get("http://localhost:3310/api/recipes/{id}")
    .then((res) => setAllRecipe(res.data))
    .catch((err) => console.error(err));
}, []);
 */
function RecipeDetails() {
  return (
    <div>
      <p>GROS TEST DES Familles</p>
      <Link to="/recipes">
        <p>retour</p>
      </Link>
    </div>
  );
}

export default RecipeDetails;
