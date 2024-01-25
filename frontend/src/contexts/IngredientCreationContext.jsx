import React, { useContext, createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const IngredientCreationContext = createContext(null);
export const useIngredientCreation = () =>
  useContext(IngredientCreationContext);

export function IngredientProvider({ children }) {
  const [ingredientList, setIngredientList] = useState([]);

  const value = useMemo(() => {
    return {
      ingredientList,
      setIngredientList,
    };
  }, [ingredientList, setIngredientList]);

  return (
    <IngredientCreationContext.Provider value={value}>
      {children}
    </IngredientCreationContext.Provider>
  );
}

IngredientProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
