import React, { useContext, createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const InstructionCreationContext = createContext(null);
export const useInstructionCreation = () =>
  useContext(InstructionCreationContext);

export function InstructionProvider({ children }) {
  const [instructionCreation, setInstructionCreation] = useState({
    description: "",
  });

  const handleChangeCreation = (e) => {
    setInstructionCreation({
      ...instructionCreation,
      [e.target.name]: e.target.value,
    });
  };

  const value = useMemo(() => {
    return { instructionCreation, handleChangeCreation };
  }, [instructionCreation, handleChangeCreation]);

  return (
    <InstructionCreationContext.Provider value={value}>
      {children}
    </InstructionCreationContext.Provider>
  );
}

InstructionProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
