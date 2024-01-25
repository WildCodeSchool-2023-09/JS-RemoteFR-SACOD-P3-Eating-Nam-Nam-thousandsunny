import React from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { useIngredientCreation } from "../contexts/IngredientCreationContext";

export default function Step2({ ingredient }) {
  const { setIngredientList, ingredientList } = useIngredientCreation();

  const [addIngredient, setAddIngredient] = React.useState([]);
  const [ingredientName, setIngredientName] = React.useState("");
  const [quantity, setQuantity] = React.useState("");
  const [unit, setUnit] = React.useState("");
  const handleAddIngredient = () => {
    const ingredientToAdd = {
      name: ingredientName,
      quantity,
      unit,
    };
    setAddIngredient((prev) => [...prev, ingredientToAdd]);
    setIngredientList((prev) => [...prev, ingredientToAdd]);
  };
  console.info(addIngredient);
  return (
    <div>
      <h1>Step 2</h1>
      <TextField
        className="quantity"
        id="Quantité"
        label="Quantité"
        helperText="Quantité requise pour la recette"
        variant="filled"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        name="quantity"
      />
      <TextField
        className="unit"
        id="Unité"
        label="Unité"
        helperText="L'unité de mesure de l'ingrédient"
        variant="filled"
        value={unit}
        onChange={(e) => setUnit(e.target.value)}
        name=" unit"
      />
      <TextField
        className="Ingredient"
        id="ingrédient"
        label="Ingrédient"
        select
        helperText="Choisissez un ingrédient"
        variant="filled"
        value={ingredientName}
        onChange={(e) => setIngredientName(e.target.value)}
        name="ingredient"
      >
        {ingredient.map((option) => (
          <MenuItem key={option.id} value={option.name}>
            {option.name}
          </MenuItem>
        ))}
      </TextField>
      <Button onClick={() => handleAddIngredient()}>
        {" "}
        Ajouter l'ingrédient
      </Button>
      <div className="ingredient-list">
        {ingredientList.map((item) => (
          <div key={item.id}>
            <span>{item.name}</span>
            <span style={{ margin: "0 10px" }}>{item.quantity}</span>
            <span>{item.unit}</span>
            <button type="button">❌</button>
          </div>
        ))}
      </div>
    </div>
  );
}
Step2.propTypes = {
  ingredient: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      unit: PropTypes.string.isRequired,
    })
  ).isRequired,
};
