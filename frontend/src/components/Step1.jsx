import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

function Step1() {
  const [recipename, setRecipename] = React.useState("");
  const [recipedescription, setRecipedescription] = React.useState("");
  const [prepTime, setPrepTime] = React.useState("");
  const [nbPeople, setNbPeople] = React.useState("");
  // eslint-disable-next-line no-unused-vars
  const [difficulty, setDifficulty] = React.useState("easy");
  const difficulties = [
    {
      value: "easy",
      label: "Facile",
    },
    {
      value: "medium",
      label: "Moyen",
    },
    {
      value: "hard",
      label: "Difficile",
    },
  ];
  const handleNbPeopleChange = (event) => {
    setNbPeople(event.target.value);
  };
  const handleRecipeNameChange = (event) => {
    setRecipename(event.target.value);
  };

  const handleRecipeDescriptionChange = (event) => {
    setRecipedescription(event.target.value);
  };

  const handlePrepTimeChange = (event) => {
    setPrepTime(event.target.value);
  };

  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value);
  };

  return (
    <div>
      <h3> Votre recette commence ici... </h3>
      <TextField
        label="Nom de votre recette"
        value={recipename}
        onChange={handleRecipeNameChange}
        variant="filled"
      />
      <TextField
        label="Description"
        value={recipedescription}
        onChange={handleRecipeDescriptionChange}
        variant="filled"
        multiline
        maxRows={4}
      />
      <TextField
        label="Temps de préparation (en minutes)"
        value={prepTime}
        onChange={handlePrepTimeChange}
        variant="filled"
      />
      <TextField
        label="Nombre de personnes"
        value={nbPeople}
        onChange={handleNbPeopleChange}
        variant="filled"
      />
      <TextField
        id="Difficulty"
        select
        label="Difficulté"
        defaultValue={difficulties[0].value}
        helperText="Choisissez la difficulté de votre recette"
        variant="filled"
        onChange={handleDifficultyChange}
      >
        {difficulties.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
}

export default Step1;
