import React, { useContext, createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const IngredientCreationContext = createContext(null);
export const useIngredientCreation = () =>
  useContext(IngredientCreationContext);

export function IngredientProvider({ children }) {
  const [ingredientCreation, setIngredientCreation] = useState({
    name: "",
    quantity: "",
  });
  const [ingredientsFields, setIngredientsFields] = useState([]);

  const handleChangeCreation = (e) => {
    setIngredientCreation(...ingredientCreation, {
      [e.target.name]: e.target.value,
      [e.target.quantity]: e.target.value,
    });
  };
  const handleAddIngredient = () => {
    const ingredientsArray = [...ingredientsFields, []];
    setIngredientsFields(ingredientsArray);
  };
  const handleChangeIngredient = (onChangeValue, i) => {
    const inputdata = [...ingredientsFields];
    inputdata[i] = onChangeValue.target.value;
    setIngredientsFields(inputdata);
  };

  const value = useMemo(() => {
    return {
      ingredientCreation,
      ingredientsFields,
      handleChangeCreation,
      handleChangeIngredient,
      handleAddIngredient,
    };
  }, [
    ingredientCreation,
    ingredientsFields,
    handleChangeCreation,
    handleChangeIngredient,
    handleAddIngredient,
  ]);
  return (
    <IngredientCreationContext.Provider value={value}>
      {children}
    </IngredientCreationContext.Provider>
  );
}

IngredientProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
