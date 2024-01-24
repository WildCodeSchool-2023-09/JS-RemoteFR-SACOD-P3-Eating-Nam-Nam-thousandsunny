import { useInstructionCreation } from "../contexts/InstructionCreationContext";

function Step3() {
  const { instructionCreation, handleChangeCreation } =
    useInstructionCreation();
  console.info(instructionCreation);
  return (
    <div>
      <h1>Step 3</h1>
      <h2>Instructions</h2>
      <form>
        <input
          id="instructtionInput"
          type="text"
          name="description"
          placeholder="instructions"
          value={instructionCreation.description}
          onChange={handleChangeCreation}
        />
      </form>
    </div>
  );
}

export default Step3;
