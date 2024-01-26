import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useInstructionCreation } from "../contexts/InstructionCreationContext";

export default function Step3() {
  const { setInstructionList, instructionList } = useInstructionCreation();

  // eslint-disable-next-line no-unused-vars
  const [addInstruction, setAddInstruction] = React.useState([]);
  const [description, setDescription] = React.useState("");
  const handleAddingInstruction = () => {
    const instructionToAdd = {
      name: description,
    };
    setAddInstruction((prev) => [...prev, instructionToAdd]);
    setInstructionList((prev) => [...prev, instructionToAdd]);
  };
  const handleReset = () => {
    setDescription("");
  };

  const combineHandler = async () => {
    handleReset();
    await handleAddingInstruction();
  };

  return (
    <div>
      <h1>Step 3</h1>
      <TextField
        className="instruction"
        id="instruction"
        maxRows={4}
        label="instruction"
        helperText="Instruction"
        variant="filled"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        name="quantity"
      />
      <Button
        onClick={() => {
          combineHandler();
        }}
      >
        Ajouter une instruction
      </Button>
      <div className="instruction-list">
        {instructionList.map((item) => (
          <div key={item.id}>
            <span>{item.name}</span>
            <button type="button">❌</button>
          </div>
        ))}
      </div>
    </div>
  );
}
