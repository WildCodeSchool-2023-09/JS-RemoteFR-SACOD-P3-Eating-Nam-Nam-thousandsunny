import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import img from "../assets/crepe.jpeg";

function Recipe({ name, title, difficulty, id, image }) {
  let test = image;
  test = img;
  return (
    <>
      <div className="image-recipe-pos">
        <img src={test} alt="recette" className="image-recipe" />
      </div>
      <div className="desc-recipe">
        <h2>{name}</h2>
        <p>{title}</p>
        <p className="level-recipe">{difficulty}</p>
        <div className="link-to">
          <Link to={`/recipes/${id}`}>
            <p>En savoir plus</p>
          </Link>
        </div>
      </div>
    </>
  );
}

Recipe.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.number.isRequired,
  difficulty: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};
export default Recipe;
