import PropTypes from "prop-types";

function Step2({ ingredient, material }) {
  return (
    <div>
      <h1>Step 2</h1>
      <div>
        <label htmlFor="select-ingredient">
          <select id="select-ingredient">
            <option value="">Choisir son ingredient :</option>
            {ingredient &&
              ingredient.map((ingr) => (
                <option key={ingr.ID} value={ingr.name}>
                  {ingr.name} {ingr.kcal} {ingr.unit}
                </option>
              ))}
          </select>
        </label>
      </div>
      <div>
        <label htmlFor="select-material">
          <select id="select-material">
            <option value="">Choisir son materiel :</option>
            {material &&
              material.map((mate) => (
                <option key={mate.ID} value={mate.name}>
                  {mate.name}
                </option>
              ))}
          </select>
        </label>
      </div>
    </div>
  );
}
Step2.propTypes = {
  ingredient: PropTypes.string.isRequired,
  material: PropTypes.string.isRequired,
};

export default Step2;
