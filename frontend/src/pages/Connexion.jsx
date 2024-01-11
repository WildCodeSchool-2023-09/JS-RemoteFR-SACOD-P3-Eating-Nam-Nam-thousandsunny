import { useState } from "react";
import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import {
  isValidUsername,
  isValidEmail,
  isValidPassword,
  isPassMatch,
  resetErrMsgUserSign,
  resetErrMsgMailSign,
  resetErrMsgPassSign,
  resetErrMsgPassConfSign,
  resetAllErrMsgSign,
} from "./services/postUserValid";
import "react-toastify/dist/ReactToastify.css";
import "./style/Connexion.scss";

// Formulaires de LogIn ou SignIn

function TypeOfForm({ checkbox, setCheckbox }) {
  const handleClickLogin = async (event) => {
    event.preventDefault();

    const username = document.querySelector("#login-username").value;
    const password = document.querySelector("#login-password").value;
    const loginErrorMsg = document.querySelector("#login-error");
    const usernameErrorMsg = document.querySelector("#username-error");
    const passwordErrorMsg = document.querySelector("#password-error");

    loginErrorMsg.innerText = "";

    if (!username) {
      usernameErrorMsg.innerText = "Veuillez saisir votre nom d'utilisateur";
    }
    if (!password) {
      passwordErrorMsg.innerText = "Veuillez saisir votre mot de passe";
    }

    if (username && password) {
      usernameErrorMsg.innerText = "";
      passwordErrorMsg.innerText = "";

      const formData = {
        username,
        password,
      };
      console.info(formData);

      try {
        // Appel à l'API pour demander une connexion
        const response = await axios
          .post(`${import.meta.env.VITE_BACKEND_URL}/api/login`, formData)
          .catch((err) => console.error(err));

        // Redirection vers la page de connexion si la création réussit

        if (response && response.status === 200) {
          const userLogged = response.data;
          console.info("user =", userLogged);
          toast.success(
            "Authentification réussie ! 😎 Redirection en cours..",
            {
              onClose: () => {
                // Redirection après la fermeture du toast
                setTimeout(() => {
                  window.location.href = "/recipes";
                }, 3000);
              },
            }
          );
        } else {
          toast.error("Erreur d'authentification 😕");
          loginErrorMsg.innerText =
            "Nom d'utilisateur ou mot de passe incorrect";
        }
      } catch (err) {
        // Log des erreurs possibles
        console.info(err);
      }
    }
  };

  // Vérifie en temps réel si le password est valide et qu'il correspond au passConf si celui-ci est renseigné
  const handleBlur = () => {
    resetErrMsgPassConfSign();
    isValidPassword();
    isPassMatch();
  };

  // Actions réalisés au submit "Connexion"
  const handleClickRegister = (event) => {
    event.preventDefault();

    // Verification du formulaire d'inscription
    const usernameIsValid = isValidUsername();
    const emailIsValid = isValidEmail();
    const passwordIsValid = isValidPassword();
    const passConfIsValid = isPassMatch();

    // Si tout est OK (true) on exécute la suite du code
    if (usernameIsValid && emailIsValid && passwordIsValid && passConfIsValid) {
      // Récuperation des valeurs du formulaire
      const username = document.querySelector("#username").value;
      const email = document.querySelector("#email").value;
      const password = document.querySelector("#password").value;

      // Création de l'objet contenant la data à envoyer
      const formData = {
        username,
        email,
        password,
      };

      // Envoie des données vers notre API
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/api/users`, formData)
        .then((res) => {
          if (res.status === 201) {
            // Message pop-up de succès
            toast.success("Votre compte à bien été créé ! 😎");

            // Redirection sur le login en gardant la valeur de username
            document.getElementsByTagName("form")[2].email.value = "";
            if (!checkbox) setCheckbox(true);
            console.info("response =", res);
          }
        })
        .catch((err) => {
          // Affiche un pop-up du message d'erreur
          toast.error(err.response.data.message);
        });
    } else toast.error("Saisie du formulaire incorrect 🫠");
  };

  // Affiche soit un formulaire de connexion soit d'inscription
  return checkbox ? (
    // Formulaire de connexion
    <form className="form" id="form" onSubmit={handleClickLogin}>
      {/* Label et champ du nom de l'adresse email */}
      <label htmlFor="login-username">Nom d'utilisateur :</label>
      <input type="text" name="login-username" id="login-username" />
      <div id="username-error" className="error-msg" />

      {/* Label et champ du mot de passe */}
      <label htmlFor="login-password">Mot de passe :</label>
      <input type="password" name="login-password" id="login-password" />
      <div id="password-error" className="error-msg" />
      <div id="login-error" className="error-msg" />

      {/* Bouton d'action de la demande de connexion à un compte */}
      <button type="submit" name="submit" id="submit">
        Se connecter
      </button>
    </form>
  ) : (
    // Formulaire d'inscription
    // Les fonctions 'onBlur' et 'onFocus' permettent de vérifier et d'afficher "en temps réel" si il y a des erreurs lors de la saisie du formulaire
    <form className="form" id="form" onSubmit={handleClickRegister}>
      {/* Label et champ du nom d'utilisateur */}
      <label htmlFor="username">Nom d'utilisateur :</label>
      <input
        type="text"
        name="username"
        id="username"
        onBlur={isValidUsername}
        onFocus={resetErrMsgUserSign}
      />
      <div id="username-error" className="error-msg" />

      {/* Label et champ du nom de l'adresse email */}
      <label htmlFor="email">Adresse e-mail :</label>
      <input
        type="email"
        name="email"
        id="email"
        onBlur={isValidEmail}
        onFocus={resetErrMsgMailSign}
      />
      <div id="email-error" className="error-msg" />

      {/* Label et champ du mot de passe */}
      <label htmlFor="password">Mot de passe :</label>
      <input
        type="password"
        name="password"
        id="password"
        onBlur={handleBlur}
        onFocus={resetErrMsgPassSign}
      />
      <div id="password-error" className="error-msg" />

      {/* Label et champ de la confirmation du mot de passe */}
      <label htmlFor="passConf">Confirmer le mot de passe :</label>
      <input
        type="password"
        name="passConf"
        id="passConf"
        onBlur={isPassMatch}
        onFocus={resetErrMsgPassConfSign}
      />
      <div id="passConf-error" className="error-msg" />

      {/* Bouton d'action de l'envoie de la requête de création de compte */}
      <button type="submit" name="submit" id="submit">
        Créer mon compte
      </button>
    </form>
  );
}
TypeOfForm.propTypes = {
  checkbox: PropTypes.bool.isRequired,
  setCheckbox: PropTypes.func.isRequired,
};

function Connexion() {
  // Permet de switch d'un formulaire à l'autre
  const [checkbox, setCheckbox] = useState(true);

  const handleChange = () => {
    document.getElementsByTagName("form")[2].reset();
    if (!checkbox) resetAllErrMsgSign();
    return !checkbox ? setCheckbox(true) : setCheckbox(false);
  };
  // Affiche l'en-tête du composant du formulaire (bouton switch)
  return (
    <div className="body-content connect-content">
      <ToastContainer autoClose={2000} pauseOnHover={false} />
      <div className="wrapper">
        <div className="form-container">
          <div className="slide-controls">
            <input
              type="radio"
              name="slide"
              id="login"
              checked={checkbox === true}
              onChange={handleChange}
            />
            <input
              type="radio"
              name="slide"
              id="signup"
              checked={checkbox === false}
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
        <TypeOfForm checkbox={checkbox} setCheckbox={setCheckbox} />
      </div>
    </div>
  );
}

export default Connexion;
