import PropTypes from "prop-types";

function Step4({ post }) {
  return (
    <div>
      <h1>Step 4</h1>
      <button type="submit" onClick={post}>
        Poster la recette
      </button>
    </div>
  );
}
Step4.propTypes = {
  post: PropTypes.func.isRequired,
};

export default Step4;
