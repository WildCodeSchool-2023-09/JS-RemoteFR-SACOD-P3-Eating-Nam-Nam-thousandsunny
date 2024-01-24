import React from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

function Step2({ ingredient }) {
  const [ingredientsFields, setIngredientsFields] = React.useState([]);
  const handleAddIngredient = () => {
    const ingredientsArray = [...ingredientsFields, []];
    setIngredientsFields(ingredientsArray);
  };

  return (
    <div>
      <h1>Step 2</h1>
      <Button onClick={() => handleAddIngredient()}>
        {" "}
        Ajouter un ingrédient
      </Button>
      {ingredientsFields.map((ingredientField, index) => (
        <>
          <TextField
            id={index}
            label="Ingrédient"
            select
            helperText="Choisissez un ingrédient"
            variant="filled"
            name="Ingrédient"
          >
            {ingredient.map((option) => (
              <MenuItem key={option.id} value={option.name}>
                {option.name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="Quantité"
            label="Quantité"
            helperText="Quantité requise pour la recette"
            variant="filled"
            name="quantity"
          />
          <p> {ingredient.unit}</p>
        </>
      ))}
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

export default Step2;
