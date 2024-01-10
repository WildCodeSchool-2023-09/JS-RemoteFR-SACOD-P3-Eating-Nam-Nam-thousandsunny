import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";

function Detail({ name, prep, titre }) {
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const getData = () => {
    const { id } = useParams();
    const endpoints = [
      `http://localhost:3310/api/ingredientbyrecipe/${id}`,
      `http://localhost:3310/api/instructionbyrecipe/${id}`,
    ];
    Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
      ([{ data: ingredient }, { data: instruction }]) => {
        setIngredients(ingredient);
        setInstructions(instruction);
      }
    );
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>{name}</h1>
      <p>{prep}</p>
      <p>{titre}</p>
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
  titre: PropTypes.string.isRequired,
};

export default Detail;
