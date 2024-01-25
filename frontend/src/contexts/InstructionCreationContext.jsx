import React, { useContext, createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const InstructionCreationContext = createContext(null);
export const useInstructionCreation = () =>
  useContext(InstructionCreationContext);

export function InstructionProvider({ children }) {
  const [instructionList, setInstructionList] = useState([]);

  const value = useMemo(() => {
    return { instructionList, setInstructionList };
  }, [instructionList, setInstructionList]);

  return (
    <InstructionCreationContext.Provider value={value}>
      {children}
    </InstructionCreationContext.Provider>
  );
}

InstructionProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
