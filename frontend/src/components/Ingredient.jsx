import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import React from "react";

// eslint-disable-next-line react/prop-types
function Ingredient({ ingredient, i, setAddIngredientItem }) {
  const [ingredientItem, setIngredientItem] = React.useState({
    ingredientName: "",
    quantity: "",
  });

  const hChange = (e) => {
    setIngredientItem({ ...ingredientItem, [e.target.name]: e.target.value });
  };

  setAddIngredientItem(ingredientItem);

  return (
    <>
      <TextField
        id={i}
        label="Ingrédient"
        select
        helperText="Choisissez un ingrédient"
        variant="filled"
        value={ingredientItem.ingredientName}
        onChange={hChange}
        name="ingredientName"
      >
        {" "}
        {/* eslint-disable-next-line react/prop-types */}
        {ingredient.map((option) => (
          <MenuItem key={option.id} value={option.name}>
            {option.name}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id={i}
        label="Quantité"
        helperText="Quantité requise pour la recette"
        variant="filled"
        value={ingredientItem.quantity}
        onChange={hChange}
        name="quantity"
      />
    </>
  );
}

// eslint-disable-next-line react/no-typos
Ingredient.Proptypes = {
  ingredient: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      unit: PropTypes.string.isRequired,
    })
  ).isRequired,
  i: PropTypes.number.isRequired,
  setAddIngredientItem: PropTypes.func.isRequired,
};
export default Ingredient;
