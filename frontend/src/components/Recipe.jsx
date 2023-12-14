import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Recipe({ name, prep, nb, difficulty, id }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{prep}</p>
      <p>{nb}</p>
      <p>{difficulty}</p>
      <Link to={`/recipes/${id}`}>
        <p>En savoir plus</p>
      </Link>
    </div>
  );
}
Recipe.propTypes = {
  name: PropTypes.string.isRequired,
  prep: PropTypes.number.isRequired,
  nb: PropTypes.number.isRequired,
  difficulty: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
export default Recipe;
