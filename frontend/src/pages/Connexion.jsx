import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import {
  isValidUsername,
  isValidEmail,
  isValidPassword,
  isPassMatch,
  resetErrMsgUserSignIn,
  resetErrMsgMailSignIn,
  resetErrMsgPassSignIn,
  resetErrMsgPassConfSignIn,
  resetAllErrMsgSignIn,
} from "./services/VeriForm";
import "./style/Connexion.scss";

// Formulaires de LogIn ou SignIn

function TypeOfForm({ checkbox }) {
  const [success, setSuccess] = useState(false);

  const handleBlur = () => {
    resetErrMsgPassConfSignIn();
    isValidPassword();
    isPassMatch();
  };

  const handleClickSignIn = (event) => {
    event.preventDefault();
    // Verification du formulaire d'inscription
    const usernameIsValid = isValidUsername();
    const emailIsValid = isValidEmail();
    const passwordIsValid = isValidPassword();
    const passConfIsValid = isPassMatch();

    if (usernameIsValid && emailIsValid && passwordIsValid && passConfIsValid) {
      const username = document.querySelector("#username");
      const email = document.querySelector("#email");
      const password = document.querySelector("#password");

      // Création d'objet contenant la data à envoyer
      const formData = {
        username: username.value,
        email: email.value,
        password: password.value,
      };

      // Envoie des données vers notre API
      axios
        .post("http://localhost:3310/api/users", formData)
        .then(() => setSuccess(!success))
        .catch((err) => console.error(err));

      // Rechargement de la page
      window.location.reload(false);
    }
    console.error("Saisie du formulaire incorrect");
  };
  // Affiche soit un formulaire de connexion soit d'inscription
  return checkbox ? (
    // Formulaire de connexion
    <form className="form" id="form">
      <label htmlFor="login-username">Nom d'utilisateur :</label>
      <input type="text" name="login-username" id="login-username" />
      <div id="username-error" className="error-msg" />

      <label htmlFor="login-password">Mot de passe :</label>
      <input type="password" name="login-password" id="login-password" />
      <div id="password-error" className="error-msg" />

      <button type="submit" name="submit" id="submit">
        Se connecter
      </button>
    </form>
  ) : (
    // Formulaire d'inscription
    <form className="form" id="form" onSubmit={handleClickSignIn}>
      <label htmlFor="username">Nom d'utilisateur :</label>
      <input
        type="text"
        name="username"
        id="username"
        onBlur={isValidUsername}
        onFocus={resetErrMsgUserSignIn}
      />
      <div id="username-error" className="error-msg" />

      <label htmlFor="email">Adresse e-mail :</label>
      <input
        type="email"
        name="email"
        id="email"
        onBlur={isValidEmail}
        onFocus={resetErrMsgMailSignIn}
      />
      <div id="email-error" className="error-msg" />

      <label htmlFor="password">Mot de passe :</label>
      <input
        type="password"
        name="password"
        id="password"
        onBlur={handleBlur}
        onFocus={resetErrMsgPassSignIn}
      />
      <div id="password-error" className="error-msg" />

      <label htmlFor="passConf">Confirmer le mot de passe :</label>
      <input
        type="password"
        name="passConf"
        id="passConf"
        onBlur={isPassMatch}
        onFocus={resetErrMsgPassConfSignIn}
      />
      <div id="passConf-error" className="error-msg" />

      <button type="submit" name="submit" id="submit">
        Créer mon compte
      </button>
    </form>
  );
}
TypeOfForm.propTypes = {
  checkbox: PropTypes.bool.isRequired,
};

function Connexion() {
  // Permet de switch d'un formulaire à l'autre
  const [checkbox, setCheckbox] = useState(true);

  const handleChange = () => {
    document.getElementsByTagName("form")[2].reset();
    if (!checkbox) resetAllErrMsgSignIn();
    return !checkbox ? setCheckbox(true) : setCheckbox(false);
  };
  // Affiche l'en-tête du composant du formulaire (bouton switch)
  return (
    <div className="body-content">
      <div className="wrapper">
        <div className="form-container">
          <div className="slide-controls">
            <input
              type="radio"
              name="slide"
              id="login"
              defaultChecked
              onChange={handleChange}
            />
            <input
              type="radio"
              name="slide"
              id="signup"
              onChange={handleChange}
            />
            <label htmlFor="login" className="slide login">
              Connexion
            </label>
            <label htmlFor="signup" className="slide signup">
              Inscription
            </label>
            <div className="slider-tab" />
          </div>
        </div>
        <TypeOfForm checkbox={checkbox} />
      </div>
    </div>
  );
}

export default Connexion;
