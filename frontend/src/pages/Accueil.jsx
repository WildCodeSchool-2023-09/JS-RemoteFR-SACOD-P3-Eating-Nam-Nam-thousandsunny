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
    borderRadius: "12px",
    color: "#f8f7f2",
    marginBottom: "1rem",
    background: "#97BF0D",
    "&:hover": {
      backgroundColor: "rgba(76, 175, 80, 0.8)",
    },
  };
  return (
    <div className="body-content accueil-page">
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
      <div className="accueil-button">
        <Button sx={orangeButton} component={Link} to="/connexion">
          connexion
        </Button>
        <Button sx={orangeButton} component={Link} to="/connexion">
          inscription
        </Button>
      </div>
    </div>
  );
}

export default Accueil;
