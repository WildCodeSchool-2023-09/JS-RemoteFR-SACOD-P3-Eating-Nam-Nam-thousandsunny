import { useEffect, useState } from "react";
import axios from "axios";

import addimage from "../assets/addimage.svg";
import "./style/Profil.scss";

function Profil() {
  const [editing, setEditing] = useState(false);
  const [recipeBy, setRecipeBy] = useState([]);
  const [userData, setUserData] = useState({
    username: null,
    firstname: null,
    lastname: null,
    birthdate: null,
    description: null,
  });

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleKeepClick = () => {
    const params = { id: "value" };
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/users/${params.id}`, {
        withCredentials: true,
      })
      .then((res) => {
        setUserData(res.data);
        setEditing(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSaveClick = () => {
    const params = { id: "value" };
    axios
      .put(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/${params.id}`,
        {
          username: userData.username,
          description: userData.description,
          firstname: userData.firstname,
          lastname: userData.lastname,
          birthdate: userData.birthdate,
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.info(res.data.firstname);
        setEditing(false);
      })
      .catch((error) => {
        console.error(error);
      });
    setEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const params = { id: "value" };
    const endpoints = [
      `${import.meta.env.VITE_BACKEND_URL}/api/recipebyuser/${params.id}`,
    ];
    Promise.all(
      endpoints.map((endpoint) =>
        axios.get(endpoint, {
          withCredentials: true,
        })
      )
    )
      .then(([{ data: recipebyuser }]) => {
        setRecipeBy(recipebyuser);
      })
      .catch((erreur) => {
        console.error(erreur);
      });
  }, []);

  return (
    <div className="body-content">
      <div className="Profil_container">
        <div className="first">
          <div className="left-bloc">
            <img className="No-photo" src={addimage} alt="No Photos" />
          </div>
          <div className="right-bloc">
            <label className="stats-label">
              {editing ? (
                <input
                  type="text"
                  name="username"
                  value={userData.username || ""}
                  onChange={handleChange}
                  className="username-input"
                  placeholder="Votre nom d'utilisateur..."
                />
              ) : (
                userData.username || "Nom d'utilisateur..."
              )}
              <br />
              <br />
            </label>
            {editing ? (
              <input
                type="text"
                name="firstname"
                value={userData.firstname || ""}
                onChange={handleChange}
                className="firstname-input"
                placeholder="Votre prénom..."
              />
            ) : (
              <label>{userData.firstname || "Mon prénom..."}</label>
            )}
            <br />
            <br />
            {editing ? (
              <input
                type="text"
                name="lastname"
                value={userData.lastname || ""}
                onChange={handleChange}
                className="lastname-input"
                placeholder="Votre nom de famille..."
              />
            ) : (
              <label>{userData.lastname || "Nom de Famille..."}</label>
            )}
            <br />
            <br />
            {editing ? (
              <input
                type="text"
                name="birthdate"
                value={userData.birthdate || ""}
                onChange={handleChange}
                className="birthdate-input"
                placeholder="Votre date de naissance..."
              />
            ) : (
              <label>{userData.birthdate || "Date de Naissance..."}</label>
            )}
            <br />
          </div>
        </div>
        <div className="second">
          <div className="Stats">
            {editing ? (
              <input
                type="text"
                name="description"
                value={userData.description || ""}
                onChange={handleChange}
                className="description-input"
                placeholder="Votre description..."
              />
            ) : (
              <label>{userData.description || "Ma description..."}</label>
            )}
            <p className="recipes">
              Mes recettes :{" "}
              {recipeBy &&
                recipeBy.map((recipeU) => (
                  <li key={recipeU.user_id}>
                    {recipeU.name} {recipeU.title}
                  </li>
                ))}
            </p>
            <p className="comments">Commentaires: </p>
          </div>
          <button
            className="Edit"
            type="button"
            onClick={
              editing ? handleSaveClick : handleKeepClick && handleEditClick
            }
          >
            {editing ? "Save" : "Edit"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profil;
