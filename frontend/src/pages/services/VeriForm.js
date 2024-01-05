import axios from "axios";

async function isValidUsername() {
  // Récupère le username et la balise erreur correspondante
  const username = document.querySelector("#username").value;
  const usernameErrorMsg = document.querySelector("#username-error");

  // Verifie si la taille de username est OK
  if (username.length < 5 || username.length > 20) {
    usernameErrorMsg.innerText =
      "Le nom d'utilisateur doit contenir 5 à 20 caractères.";
    return false;
  }
  // Verifie si l'utilisateur existe dans la BDD
  try {
    const response = await axios.get(
      `http://localhost:3310/api/users/${username}`
    );
    // Si oui : retourne une erreur dans la balise et la fonction renvoie false
    if (response.data.username === username) {
      usernameErrorMsg.innerText = "Le nom d'utilisateur est déjà utilisé";
      return false;
    }
  } catch (error) {
    // Si une erreur 404, cela signifie que l'utilisateur n'existe pas dans la BDD
    if (error.response.status === 404) {
      usernameErrorMsg.innerText = ""; // Aucune erreur n'est affichée dans ce cas
    }
  }

  // On peut donc renvoyer le username comme étant OK
  return true;
}

function isValidEmail() {
  const email = document.querySelector("#email").value;
  const error =
    "Format de l'adresse mail invalide. (Exemple valide : nom@nam-nam.fr)";
  const emailErrorMsg = document.querySelector("#email-error");
  const validEmail = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/.test(
    email
  );
  if (validEmail === false) {
    emailErrorMsg.innerText = error;
    return false;
  }
  emailErrorMsg.innerText = "";
  return true;
}

function isValidPassword() {
  const password = document.querySelector("#password").value;
  const error =
    "Le mot de passe doit contenir 8 à 15 caractères avec au minimun : \n une majuscule, une minuscule, un chiffre et un caractère spéciale.";
  const passwordErrorMsg = document.querySelector("#password-error");
  const validPassword =
    /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}/.test(
      password
    );
  if (validPassword === false) {
    passwordErrorMsg.innerText = error;
    return false;
  }
  passwordErrorMsg.innerText = "";
  return true;
}

function isPassMatch() {
  const password = document.querySelector("#password").value;
  const passconf = document.querySelector("#passConf").value;
  const error =
    "Les mots de passes ne correspondent pas, veuillez entrer des mots de passes identiques.";
  const passConfErrorMsg = document.querySelector("#passConf-error");
  if (password !== passconf || passconf === "") {
    passConfErrorMsg.innerText = error;
    return false;
  }
  passConfErrorMsg.innerText = "";
  return true;
}

function resetErrMsgUserSignIn() {
  const usernameErrorMsg = document.querySelector("#username-error");
  usernameErrorMsg.innerText = "";
}

function resetErrMsgMailSignIn() {
  const usernameErrorMsg = document.querySelector("#email-error");
  usernameErrorMsg.innerText = "";
}

function resetErrMsgPassSignIn() {
  const usernameErrorMsg = document.querySelector("#password-error");
  usernameErrorMsg.innerText = "";
}

function resetErrMsgPassConfSignIn() {
  const usernameErrorMsg = document.querySelector("#passConf-error");
  usernameErrorMsg.innerText = "";
}

function resetAllErrMsgSignIn() {
  resetErrMsgUserSignIn();
  resetErrMsgMailSignIn();
  resetErrMsgPassSignIn();
  resetErrMsgPassConfSignIn();
}

export {
  isValidUsername,
  isValidEmail,
  isValidPassword,
  isPassMatch,
  resetErrMsgUserSignIn,
  resetErrMsgMailSignIn,
  resetErrMsgPassSignIn,
  resetErrMsgPassConfSignIn,
  resetAllErrMsgSignIn,
};
