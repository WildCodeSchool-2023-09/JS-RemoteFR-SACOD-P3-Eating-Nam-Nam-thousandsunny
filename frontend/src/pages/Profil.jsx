import { useState, useEffect } from "react";
import axios from "axios";
import addimage from "../assets/addimage.svg";
import "./style/Profil.scss";

function Profil() {
  const [editing, setEditing] = useState(false);
  const [userData, setUserData] = useState({
    age: null,
    recipes: null,
    comments: null,
    average: null,
    description: null,
  });

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    // TODO: Ajouter la logique pour sauvegarder les données dans la base de données
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
    const endpoints = [`${import.meta.env.VITE_BACKEND_URL}/api/users`];
    Promise.all(
      endpoints.map((endpoint) =>
        axios.get(endpoint, {
          withCredentials: true,
        })
      )
    )
      .then(([{ data: user }]) => {
        setUserData(user);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="body-content">
      <div className="Profil_container">
        <div className="first">
          <div className="left-bloc">
            <img className="No-photo" src={addimage} alt="No Photos" />
          </div>
          <div className="mid-bloc">
            <div className="Stats">
              <p className="pseudo">Flavito</p>
              <label className="age">
                {editing ? (
                  <input
                    type="text"
                    name="age"
                    value={userData.age || ""}
                    onChange={handleChange}
                  />
                ) : (
                  userData.age || "...Mon Age"
                )}
              </label>
              <p className="recipes">Mes recettes : {userData.recipes}</p>
              <p className="comments">Commentaires: {userData.comments}</p>
            </div>
          </div>
          <div className="second">
            <div className="Stats">
              <label className="description">
                {editing ? (
                  <input
                    type="text"
                    name="description"
                    value={userData.description || ""}
                    onChange={handleChange}
                  />
                ) : (
                  userData.description || "...Ma Description"
                )}
              </label>
            </div>
          </div>

          <div className="right-block">
            <button
              className="Edit"
              type="button"
              onClick={editing ? handleSaveClick : handleEditClick}
            >
              {editing ? "Save" : "Edit"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profil;
