import { React, useState } from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import { useIngredientCreation } from "../contexts/IngredientCreationContext";

export default function Step2({ ingredient }) {
  const { setIngredientList, ingredientList } = useIngredientCreation();

  const [ingredientName, setIngredientName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("");
  const [kcal, setKcal] = useState("");

  const handleAddIngredient = () => {
    const ingredientToAdd = {
      index: ingredientList.length,
      name: ingredientName,
      quantity,
      unit,
      kcal,
      totalKcal: quantity * kcal,
      id: ingredient.find((i) => i.name === ingredientName)?.id,
    };
    setIngredientList((prev) => [...prev, ingredientToAdd]);
  };
  const handleInputChange = (event, newInputValue) => {
    setIngredientName(newInputValue);
    const ingredientItem = ingredient.find(
      (item) => item.name === newInputValue
    );
    if (ingredientItem) {
      setKcal(ingredientItem.kcal);
      setUnit(ingredientItem.unit);
    }
  };

  const handleReset = () => {
    setIngredientName("");
    setQuantity("");
    setUnit("");
    setKcal("");
  };

  const handleDeleteIngredient = (id) => {
    setIngredientList(ingredientList.filter((object) => object.id !== id));
  };

  const combineHandler = async () => {
    handleReset();
    await handleAddIngredient();
  };

  return (
    <div className="step-two">
      <h2> Ajouter tous les ingrédients nécessaires... </h2>
      <div className="selection-div">
        <Autocomplete
          className="ingredient-autocomplete"
          value={ingredientName}
          onChange={handleInputChange}
          id="ingredient-autocomplete"
          options={ingredient.map((option) => option.name)}
          /* eslint-disable-next-line react/jsx-props-no-spreading */
          renderInput={(params) => <TextField {...params} label="Ingrédient" />}
        />
        <div className="ingredient-selection">
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
            className="kcal"
            id="Kcal"
            label="Kcal"
            variant="filled"
            value={kcal}
            name="kcal"
          />
          <Button onClick={() => combineHandler()}>
            {" "}
            Ajouter l'ingrédient
          </Button>
        </div>
      </div>
      <div className="ingredient-list">
        {ingredientList.map((item) => (
          <div className="ingredient-item" key={item.index}>
            <span className="ingredient-span"> - {item.name} : </span>
            <span className="ingredient-span" style={{ margin: "0 10px" }}>
              {item.quantity}
            </span>
            <span className="ingredient-span">{item.unit}</span>
            <button
              type="button"
              onClick={() => handleDeleteIngredient(item.id)}
            >
              ❌
            </button>
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
      totalKcal: PropTypes.number.isRequired,
    })
  ).isRequired,
};
