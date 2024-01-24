import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

function Detail({ name, prep, id }) {
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);

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

  return (
    <div>
      <h1>{name}</h1>
      <p>{prep} minutes</p>
      <div>
        {ingredients.map((element) => (
          <li key={element.id}>
            <p>
              {element.name} : {element.quantity}
              {element.unit} de {element.kcal} kcal
            </p>
          </li>
        ))}
      </div>
      <div>
        {instructions.map((inst) => (
          <li key={inst.id}>
            <p>{inst.description}</p>
          </li>
        ))}
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
