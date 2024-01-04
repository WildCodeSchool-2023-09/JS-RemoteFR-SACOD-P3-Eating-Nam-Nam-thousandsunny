import addimage from "../assets/addimage.svg";

import "./style/Profil.scss";

function Profil() {
  return (
    <div className="body-content">
      <div className="Profil_container">
        <img className="No-photo" src={addimage} alt="No Photos" />
        <button className="Edit" type="button">
          Edit
        </button>
        <div className="Stats">
          <p className="pseudo">Pseudo</p>
          <p className="age">Mon âge</p>
          <p className="Recipes">Mes recettes :</p>
          <p className="comments">Commentaire: </p>
          <p className="mid">Moyenne :</p>
        </div>
      </div>
    </div>
  );
}
export default Profil;
