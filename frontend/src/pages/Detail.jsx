import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import Button from "@mui/material/Button";

import img from "../assets/crepe.jpeg";

import "./style/detail.scss";

function Detail({ name, prep, id }) {
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);

  const test = img;

  useEffect(() => {
    const endpoints = [
      `${import.meta.env.VITE_BACKEND_URL}/api/ingredientbyrecipe/${id}`,
      `${import.meta.env.VITE_BACKEND_URL}/api/instructionbyrecipe/${id}`,
    ];
    Promise.all(
      endpoints.map((endpoint) =>
        axios.get(endpoint, {
          withCredentials: true,
        })
      )
    )
      .then(([ingredientResponse, instructionResponse]) => {
        setIngredients(ingredientResponse.data);
        setInstructions(instructionResponse.data);
      })
      .catch(() => {
        window.location.href = "/connexion";
      });
  }, []);
  console.info(ingredients);
  console.info(instructions);
  return (
    <div className="body-content">
      <div className="recipe-detail">
        <div className="detail-header">
          <h1 className="detail-title">{name}</h1>
          <Button
            component={Link}
            to="/recipes"
            sx={{
              marginLeft: "2rem",
              background: "#d56c06",
              color: "#f8f7f2",
              borderRadius: "12px",
              transition: "transform 250ms",
              "&:hover": {
                backgroundColor: "rgb(213,	108,	6, 0.8)",
                transform: "scale(0.90)",
              },
            }}
          >
            Retour
          </Button>
        </div>
        <img src={test} alt="recette" className="detail-image" />
        <h2 className="detail-prep">Préparation : {prep} minutes</h2>
        <h3 className="detail-ingrédients">Ingrédients :</h3>
        {ingredients.map((element) => (
          <li key={element.id} className="lists-style">
            <p>
              {element.name} : {element.quantity}
              {element.unit} de {element.kcal} kcal
            </p>
          </li>
        ))}
        <div className="detail-steps">
          {instructions.map((inst, index) => (
            <li key={inst.id} className="lists-style">
              <h4>Étape {index + 1} :</h4>
              <p>{inst.description}</p>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}

Detail.propTypes = {
  name: PropTypes.string.isRequired,
  prep: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default Detail;
