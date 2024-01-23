import PropTypes from "prop-types";

function Step1({ name, image, description }) {
  return (
    <div>
      <p>Step 1</p>
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
