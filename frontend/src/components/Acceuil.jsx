import { Link } from "react-router-dom";

function Acceuil() {
  return (
    <div>
      <Link to="/recipes">
        <p>Voir les recettes</p>
      </Link>
      <Link to="connexion/">
        <p>Connexion</p>
      </Link>
      <p>Inscription</p>
    </div>
  );
}

export default Acceuil;
