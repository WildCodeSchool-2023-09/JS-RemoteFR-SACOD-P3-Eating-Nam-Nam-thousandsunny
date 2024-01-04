import { Link } from "react-router-dom";

function Accueil() {
  return (
    <div>
      <Link to="/recipes">
        <p>Voir les recettes</p>
      </Link>
      <a href="/Connexion">
        Connexion
        <br />
        ou
        <br />
        Inscription
      </a>
      <p>Inscription</p>
    </div>
  );
}

export default Accueil;
