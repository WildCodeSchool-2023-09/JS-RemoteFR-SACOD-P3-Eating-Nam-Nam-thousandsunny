import { useState } from "react";
import addimage from "../assets/addimage.svg";
import "./style/Profil.scss";

function Profil() {
  const [editing, setEditing] = useState(false);
  const [userData, setUserData] = useState({
    age: "...Age",
    recipes: 0,
    comments: 0,
    average: 0,
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
                    value={userData.age}
                    onChange={handleChange}
                  />
                ) : (
                  userData.age
                )}
              </label>
              <p className="recipes">Mes recettes : {userData.recipes}</p>
              <p className="comments">Commentaires: {userData.comments}</p>
              <p className="mid">Moyenne : {userData.average}</p>
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
