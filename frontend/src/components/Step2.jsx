import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Ingredient from "./Ingredient";

function Step2({ ingredient }) {
  const [ingredientsList, setIngredientsList] = React.useState([]);
  const [addIngredient, setAddIngredientItem] = React.useState({});

  const handleFinal = () => {
    setAddIngredientItem(addIngredient);
  };
  const handleAdd = () => {
    setIngredientsList([...ingredientsList, addIngredient]);
  };

  console.info(ingredientsList);

  return (
    <div>
      <h1>Step 2</h1>
      <Button onClick={() => handleAdd()}> Ajouter un ingrédient</Button>{" "}
      <Ingredient
        ingredient={ingredient}
        i={0}
        setAddIngredientItem={setAddIngredientItem}
      />
      {ingredientsList.map((data, i) => (
        <>
          <Ingredient
            ingredient={ingredient}
            i={i}
            setAddIngredientItem={setAddIngredientItem}
          />
          <p> {ingredient.unit}</p>
        </>
      ))}
      <button type="button" onClick={() => handleFinal()}>
        Avez vous fini 🧑‍🍳 ?
      </button>
    </div>
  );
}

Step2.propTypes = {
  ingredient: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      unit: PropTypes.string.isRequired,
    })
  ).isRequired,
};

// eslint-disable-next-line react/no-typos
Step2.PropTypes = {
  ingredient: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      unit: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default Step2;
