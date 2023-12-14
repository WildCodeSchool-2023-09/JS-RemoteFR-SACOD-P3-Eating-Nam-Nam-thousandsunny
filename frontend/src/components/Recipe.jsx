import PropTypes from "prop-types";

function Recipe({ name, prep, nb, difficulty }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{prep}</p>
      <p>{nb}</p>
      <p>{difficulty}</p>
    </div>
  );
}
Recipe.propTypes = {
  name: PropTypes.string.isRequired,
  prep: PropTypes.number.isRequired,
  nb: PropTypes.number.isRequired,
  difficulty: PropTypes.string.isRequired,
};
export default Recipe;
