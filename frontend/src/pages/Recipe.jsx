import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import img from "../assets/crepe.jpeg";

function Recipe({ name, title, difficulty, id, image, tag1, tag2, tag3 }) {
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
        <p>{tag1}</p>
        <p>{tag2}</p>
        <p>{tag3}</p>
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
  title: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  tag1: PropTypes.string.isRequired,
  tag2: PropTypes.string.isRequired,
  tag3: PropTypes.string.isRequired,
};
export default Recipe;
