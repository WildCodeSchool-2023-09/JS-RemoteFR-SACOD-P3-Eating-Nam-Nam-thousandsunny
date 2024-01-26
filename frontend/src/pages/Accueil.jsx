import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "./style/Accueil.scss";

function Accueil() {
  const orangeButton = {
    background: "#d56c06",
    color: "#f8f7f2",
    borderRadius: "12px",
    transition: "transform 250ms",
    "&:hover": {
      backgroundColor: "rgb(213,    108,    6, 0.8)",
      transform: "scale(0.90)",
    },
  };
  const greenButton = {
    // Hériter des propriétés du styleBoutonOrange
    background: "#4caf50", // Couleur verte
    "&:hover": {
      backgroundColor: "rgba(76, 175, 80, 0.8)", // Couleur verte avec une transparence au survol
    },
  };
  return (
    <div className="body-content accueil-page">
      <nav>
        <div className="head">
          <p>Thèmes Actus Recettes</p>
        </div>
      </nav>
      <img
        className="image_cuisto"
        src="../src/assets/cooking.svg"
        alt="image_cuisto"
      />
      <p>
        Bienvenu sur notre site Eating-Nam-Nam. Il s'agit d'un site de cuisine
        dans lequel vous créez vos propres recettes et pouvez accéder à celles
        des autres.
      </p>
      <Button sx={greenButton} component={Link} to="/recipes">
        Voir les recettes
      </Button>
      <Button sx={orangeButton} component={Link} to="/connexion">
        connexion
      </Button>
      <Button sx={orangeButton} component={Link} to="/connexion">
        inscription
      </Button>
    </div>
  );
}

export default Accueil;
