import { Link } from "react-router-dom";

function Accueil() {
  return (
    <div className="body-content">
      <Link to="/recipes">
        <p>Voir les recettes</p>
      </Link>
      <Link to="connexion/">
        <p>Connexion</p>
      </Link>
      <p>Inscription</p>
      <Link to="/Profil">
        <p>Profil</p>
      </Link>
      <Link to="/createRecipe">
        <p>Créer une recette</p>
      </Link>
    </div>
  );
}

export default Accueil;
