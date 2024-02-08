import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import PropTypes from "prop-types";
import { useRecipeCreation } from "../contexts/RecipeCreationContext";

function Step1({ tag }) {
  const { recipeCreation, handleChangeCreation } = useRecipeCreation();

  const difficulties = [
    {
      value: "Facile",
      label: "Facile",
    },
    {
      value: "Moyen",
      label: "Moyen",
    },
    {
      value: "Difficile",
      label: "Difficile",
    },
  ];
  return (
    <div className="step-one">
      <div className="step-one-content content-left">
        <h2>
          {" "}
          Veuillez remplir les champs ci-dessous avant de passer à l'étape
          suivante...{" "}
        </h2>
        <TextField
          label="Nom de votre recette"
          value={recipeCreation.recipeName}
          onChange={handleChangeCreation}
          variant="filled"
          name="recipeName"
        />
        <TextField
          label="Description"
          value={recipeCreation.recipeDesc}
          onChange={handleChangeCreation}
          variant="filled"
          name="recipeDesc"
          multiline
          maxRows={4}
        />
        <TextField
          label="Temps de préparation (en minutes)"
          value={recipeCreation.prepTime}
          onChange={handleChangeCreation}
          name="prepTime"
          variant="filled"
        />
        <TextField
          label="Nombre de personnes"
          value={recipeCreation.nbPeople}
          name="nbPeople"
          onChange={handleChangeCreation}
          variant="filled"
          type="number"
        />
      </div>
      <div className="step-one-content content-right">
        <TextField
          id="Difficulty"
          select
          label="Difficulté"
          defaultValue={difficulties[0].value}
          helperText="Choisissez la difficulté de votre recette"
          variant="filled"
          name="difficulty"
          onChange={handleChangeCreation}
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
          name="tag1"
          helperText="Choisissez un tag parmi la liste"
          variant="filled"
          onChange={handleChangeCreation}
        >
          {tag.map((option) => (
            <MenuItem key={option.id} value={option.name}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          className="tag-selection"
          key={tag.id}
          id="Tag2"
          select
          label="Tag 2"
          name="tag2"
          helperText="Choisissez un tag parmi la liste"
          variant="filled"
          onChange={handleChangeCreation}
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
          name="tag3"
          helperText="Choisissez un tag parmi la liste"
          variant="filled"
          onChange={handleChangeCreation}
        >
          {tag.map((option) => (
            <MenuItem key={option.id} value={option.name}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
      </div>
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
