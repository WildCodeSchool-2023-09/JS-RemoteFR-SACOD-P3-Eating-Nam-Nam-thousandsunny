import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import PropTypes from "prop-types";

function Step1({ tag }) {
  const [recipename, setRecipename] = React.useState("");
  const [recipedescription, setRecipedescription] = React.useState("");
  const [prepTime, setPrepTime] = React.useState("");
  const [nbPeople, setNbPeople] = React.useState("");
  // eslint-disable-next-line no-unused-vars
  const [tag1, setTag1] = React.useState("");
  // eslint-disable-next-line no-unused-vars
  const [tag2, setTag2] = React.useState("");
  // eslint-disable-next-line no-unused-vars
  const [tag3, setTag3] = React.useState("");
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
  console.info(tag);
  const handleInputChange = (callback) => (event) => {
    callback(event.target.value);
  };

  return (
    <div>
      <h3> Votre recette commence ici... </h3>
      <TextField
        label="Nom de votre recette"
        value={recipename}
        onChange={handleInputChange(setRecipename)}
        variant="filled"
      />
      <TextField
        label="Description"
        value={recipedescription}
        onChange={handleInputChange(setRecipedescription)}
        variant="filled"
        multiline
        maxRows={4}
      />
      <TextField
        label="Temps de préparation (en minutes)"
        value={prepTime}
        onChange={handleInputChange(setPrepTime)}
        variant="filled"
      />
      <TextField
        label="Nombre de personnes"
        value={nbPeople}
        onChange={handleInputChange(setNbPeople)}
        variant="filled"
      />
      <TextField
        id="Difficulty"
        select
        label="Difficulté"
        defaultValue={difficulties[0].value}
        helperText="Choisissez la difficulté de votre recette"
        variant="filled"
        onChange={handleInputChange(setDifficulty)}
      >
        {difficulties.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        key={tag.id}
        id="Tag1"
        select
        label="Tag 1"
        defaultValue={tag[0]}
        helperText="Choisissez un tag parmi la liste"
        variant="filled"
        onChange={handleInputChange(setTag1)}
      >
        {tag.map((option) => (
          <MenuItem key={option.id} value={option.name}>
            {option.name}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        key={tag.id}
        id="Tag2"
        select
        label="Tag 2"
        defaultValue={tag[0]}
        helperText="Choisissez un tag parmi la liste"
        variant="filled"
        onChange={handleInputChange(setTag2)}
      >
        {tag.map((option) => (
          <MenuItem key={option.id} value={option.name}>
            {option.name}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        key={tag.id}
        id="Tag3"
        select
        label="Tag 3"
        defaultValue={tag[0]}
        helperText="Choisissez un tag parmi la liste"
        variant="filled"
        onChange={handleInputChange(setTag3)}
      >
        {tag.map((option) => (
          <MenuItem key={option.id} value={option.name}>
            {option.name}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
}

Step1.propTypes = {
  tag: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default Step1;
