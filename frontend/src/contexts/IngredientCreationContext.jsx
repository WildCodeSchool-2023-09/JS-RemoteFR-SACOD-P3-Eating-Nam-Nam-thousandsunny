import React, { useContext, createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const IngredientCreationContext = createContext(null);
export const useIngredientCreation = () =>
  useContext(IngredientCreationContext);

export function IngredientProvider({ children }) {
  const [ingredientCreation, setIngredientCreation] = useState({
    ingredientName: "",
    kcal: "",
    unit: "",
    quantity: "",
  });

  const handleChangeCreation = (e) => {
    setIngredientCreation({
      ...ingredientCreation,
      [e.target.name]: e.target.value,
    });
  };

  const value = useMemo(() => {
    return { ingredientCreation, handleChangeCreation };
  }, [ingredientCreation, handleChangeCreation]);

  return (
    <IngredientCreationContext.Provider value={value}>
      {children}
    </IngredientCreationContext.Provider>
  );
}

IngredientProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
