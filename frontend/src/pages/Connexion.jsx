import { useState } from "react";
import PropTypes from "prop-types";
import {
  isValidUsername,
  isValidEmail,
  isValidPassword,
  isPassMatch,
  resetErrorMessageSignIn,
} from "./services/VeriForm";
import Navbar from "../components/Navbar";
import "./style/Connexion.scss";

// Formulaires de LogIn ou SignIn

function TypeOfForm({ checkbox }) {
  const handleClickSignIn = () => {
    // Verification du formulaire d'inscription
    const username = document.querySelector("#username");
    const usernameIsError = isValidUsername(username.value);

    const email = document.querySelector("#email");
    const emailIsError = isValidEmail(email.value);

    const password = document.querySelector("#password");
    const passwordIsError = isValidPassword(password.value);

    const passConf = document.querySelector("#passConf");
    const passConfIsError = isPassMatch(password.value, passConf.value);

    console.info(
      usernameIsError,
      emailIsError,
      passwordIsError,
      passConfIsError
    );

    if (usernameIsError && emailIsError && passwordIsError && passConfIsError) {
      // Envoie les datas si tout est ok
      console.info(username.value, email.value, password.value, passConf.value);
    }
  };

  return checkbox ? (
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
    <form className="form" id="form">
      <label htmlFor="username">Nom d'utilisateur :</label>
      <input type="text" name="username" id="username" />
      <div id="username-error" className="error-msg" />

      <label htmlFor="email">Adresse e-mail :</label>
      <input type="email" name="email" id="email" />
      <div id="email-error" className="error-msg" />

      <label htmlFor="password">Mot de passe :</label>
      <input type="password" name="password" id="password" />
      <div id="password-error" className="error-msg" />

      <label htmlFor="passConf">Confirmer le mot de passe :</label>
      <input type="password" name="passConf" id="passConf" />
      <div id="passConf-error" className="error-msg" />

      <button
        type="button"
        name="submit"
        id="submit"
        onClick={handleClickSignIn}
      >
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
    if (!checkbox) resetErrorMessageSignIn();
    return !checkbox ? setCheckbox(true) : setCheckbox(false);
  };

  return (
    <>
      <Navbar />
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
    </>
  );
}

export default Connexion;
