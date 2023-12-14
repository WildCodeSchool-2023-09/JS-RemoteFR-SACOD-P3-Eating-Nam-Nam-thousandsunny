import Navbar from "../components/Navbar";
import "./style/Connexion.scss";

function Connexion() {
  return (
    <>
      <Navbar />
      <div className="InscriptionGroup">
        <div className="slide-controls">
          <input type="radio" name="slide" id="login" checked />
          <input type="radio" name="slide" id="signup" />
          <label htmlFor="login" className="slide login">
            Connexion
          </label>
          <label htmlFor="signup" className="slide signup">
            Inscription
          </label>
        </div>
        <form action="#" className="InscriptionForm">
          <label htmlFor="username">Nom d'utilisateur :</label>
          <br />
          <input
            type="text"
            id="username"
            name="Nom d'utilisateur"
            placeholder="Entrer votre nom"
          />
          <br />
          <label htmlFor="email">Votre adresse mail :</label>
          <br />
          <input
            type="email"
            id="email"
            name="Votre adresse mail"
            placeholder="Entrer votre adresse mail"
          />
          <br />
          <label htmlFor="password">Mot de passe :</label>
          <br />
          <input
            type="password"
            id="password"
            name="Mot de passe"
            placeholder="Entrer votre mot de passe"
          />
          <br />
          <label htmlFor="passconf">Confirmer le mot de passe :</label>
          <br />
          <input
            type="password"
            id="passconf"
            name="Confirmer le mot de passe"
            placeholder="Confirmer le mot de passe"
          />
          <button type="button">S'inscire</button>
        </form>
        <form action="#" className="ConnexionForm">
          <label htmlFor="username">Nom d'utilisateur :</label>
          <br />
          <input
            type="text"
            id="username"
            name="Nom d'utilisateur"
            placeholder="Entrer votre nom"
          />
          <br />
          <label htmlFor="password">Mot de passe :</label>
          <br />
          <input
            type="password"
            id="password"
            name="Mot de passe"
            placeholder="Entrer votre mot de passe"
          />
          <br />
          <button type="button">Se Connecter</button>
        </form>
      </div>
    </>
  );
}

export default Connexion;
