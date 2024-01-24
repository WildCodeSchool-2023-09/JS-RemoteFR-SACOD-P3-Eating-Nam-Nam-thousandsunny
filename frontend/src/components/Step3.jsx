import PropTypes from "prop-types";

function Step3({ instruction }) {
  return (
    <div>
      <h1>Step 3</h1>
      <h2>Instructions</h2>
      <form>
        <input
          id="instructtionInput"
          type="text"
          name="instruction"
          placeholder="instructions"
          value={instruction}
        />
      </form>
    </div>
  );
}
Step3.propTypes = {
  instruction: PropTypes.string.isRequired,
};

export default Step3;
