import PropTypes from "prop-types";

function Step1({ name, image, description }) {
  return (
    <div>
      <h1>Step 1</h1>
      <p>{name}</p>
      <p>{image}</p>
      <p>{description}</p>
    </div>
  );
}
Step1.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Step1;
