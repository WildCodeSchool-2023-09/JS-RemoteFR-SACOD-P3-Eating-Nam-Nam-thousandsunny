import { useEffect, useState } from "react";
import axios from "axios";

import Recipe from "./Recipe";
import "./style/RecipeList.scss";
import addimage from "../assets/addimage.svg";
import "./style/Profil.scss";

function Profil() {
  const [id, setId] = useState();
  const [editing, setEditing] = useState(false);
  const [recipeBy, setRecipeBy] = useState([]);
  const [userData, setUserData] = useState({
    username: null,
    firstname: null,
    lastname: null,
    birthdate: null,
    description: null,
  });
  const [fav, setFav] = useState([]);

  const handleEditClick = () => {
    setEditing(true);
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/verify-token`, {
        withCredentials: true,
      })
      .then((res) => {
        setId(res.data.id);
        axios
          .get(`${import.meta.env.VITE_BACKEND_URL}/api/users/${res.data.id}`, {
            withCredentials: true,
          })
          .then((response) => {
            setUserData(response.data);
            setEditing(false);
          })
          .catch(() => {
            window.location.href = "/connexion";
          });
      });
  }, []);

  useEffect(() => {
    if (id) {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/recipebyuser/${id}`, {
          withCredentials: true,
        })
        .then((res) => {
          if (res.data) {
            setRecipeBy(res.data);
          }
        });
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/alluserfav`, {
          withCredentials: true,
        })
        .then((res) => {
          if (res.data) {
            setFav(res.data);
            console.info(res.data);
          }
        });
    }
  }, [id]);

  const handleSaveClick = () => {
    axios
      .put(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/${id}`,
        {
          username: userData.username,
          description: userData.description,
          firstname: userData.firstname,
          lastname: userData.lastname,
          birthdate: userData.birthdate,
        },
        { withCredentials: true }
      )
      .then(() => {
        setEditing(false);
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

  return (
    <div className="body-content" style={{ flexDirection: "column" }}>
      <div className="Profil_container">
        <div className="first">
          <div className="left-bloc">
          {editing ? (
              <div>
                <img src={selectedFileUrl} alt="Preview" />
                <input type="file" onChange={combineImagehandler} />
              </div>
            ) : (
              <img src={imageUrl} alt="vide" /> || "photo de profil"
            )}

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
                  <li key={recipeU.id}>
                    {recipeU.name} {recipeU.title}
                  </li>
                ))}
            </p>
          </div>
          <button
            className="Edit"
            type="button"
            onClick={editing ? handleSaveClick : handleEditClick}
          >
            {editing ? "Save" : "Edit"}
          </button>
        </div>
      </div>
      <div className="recipe-content">
        <h3>Favoris :</h3>
        <ul className="recipe-list">
          {fav.map((recipe) => (
            <li key={recipe.id} className="recipe">
              <Recipe
                id={recipe.id}
                name={recipe.name}
                title={recipe.title}
                difficulty={recipe.difficulty}
                image={recipe.image}
                kcal={recipe.total_kcal}
                tag1={recipe.tag1}
                tag2={recipe.tag2}
                tag3={recipe.tag3}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Profil;
