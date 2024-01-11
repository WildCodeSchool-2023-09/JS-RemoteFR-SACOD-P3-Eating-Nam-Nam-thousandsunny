import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Recipe({
  name,
  titre,
  prep,
  nb,
  difficulty,
  id,
  image,
  tag1,
  tag2,
  tag3,
}) {
  return (
    <div>
      <h1>{name}</h1>
      <img src={image} height={50} width={50} alt="recette" />
      <p>"{titre}"</p>
      <p>{prep} minutes</p>
      <p>{nb} personne(s)</p>
      <p>{difficulty}</p>
      <p>{tag1}</p>
      <p>{tag2}</p>
      <p>{tag3}</p>
      <Link to={`/recipes/${id}`}>
        <p>En savoir plus</p>
      </Link>
    </div>
  );
}

Recipe.propTypes = {
  name: PropTypes.string.isRequired,
  titre: PropTypes.string.isRequired,
  prep: PropTypes.number.isRequired,
  nb: PropTypes.number.isRequired,
  difficulty: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  tag1: PropTypes.string.isRequired,
  tag2: PropTypes.string.isRequired,
  tag3: PropTypes.string.isRequired,
};
export default Recipe;
