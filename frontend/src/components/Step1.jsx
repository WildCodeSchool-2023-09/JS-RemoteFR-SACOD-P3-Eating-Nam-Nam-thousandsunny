import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useRecipeCreation } from "../contexts/RecipeCreationContext";

function Step1({ tag }) {
  const { recipeCreation, handleChangeCreation, handleImg } =
    useRecipeCreation();

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

  return (
    <div>
      <h3> Votre recette commence ici... </h3>
      <TextField
        label="Nom de votre recette"
        value={recipeCreation.recipeName}
        onChange={handleChangeCreation}
        variant="filled"
        name="recipeName"
      />
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={recipeCreation.media}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Votre photo
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <input
            type="file"
            name="media"
            accept="image/*"
            style={{ display: "none" }}
            onChange={(event) => {
              const file = event.target.files[0];
              if (file) {
                handleImg(URL.createObjectURL(file));
              }
            }}
            id="fileUpload"
          />
          <Button
            size="small"
            color="primary"
            onClick={() => document.getElementById("fileUpload").click()}
          >
            Upload
          </Button>
        </CardActions>
      </Card>
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
      />
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
        defaultValue={tag[0]}
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
        defaultValue={tag[0]}
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
        defaultValue={tag[0]}
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
