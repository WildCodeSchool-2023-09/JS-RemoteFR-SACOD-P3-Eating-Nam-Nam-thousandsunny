function isValidUsername() {
  // Récupère le champ username et la balise erreur correspondante
  const username = document.querySelector("#username").value;
  const usernameErrorMsg = document.querySelector("#username-error");

  // Verifie si la taille de username est OK
  if (username.length < 5 || username.length > 20) {
    usernameErrorMsg.innerText =
      "Le nom d'utilisateur doit contenir 5 à 20 caractères.";
    return false;
  }

  // Sinon la fonction renvoie 'true' sans message d'erreur pour indiquer le username comme OK
  return true;
}

function isValidEmail() {
  // Récupère le champ email et la balise erreur correspondante
  const email = document.querySelector("#email").value;
  const emailErrorMsg = document.querySelector("#email-error");

  // Vérifie le format de l'email grâce à une REGEX
  const validEmail = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/.test(
    email
  );

  // Si le format est incorrect (false) renvoie un msg d'erreur dans la balise et la fonction retourne "false"
  if (validEmail === false) {
    emailErrorMsg.innerText =
      "Format de l'adresse mail invalide. (Exemple valide : eating@nam-nam.fr)";
    return false;
  }

  // Sinon la fonction renvoie 'true' sans message d'erreur pour indiquer le mail comme OK
  return true;
}

function isValidPassword() {
  // Récupère le champ du mot de passe et la balise erreur correspondante
  const password = document.querySelector("#password").value;
  const passwordErrorMsg = document.querySelector("#password-error");

  // Vérifie le format du password grâce à une REGEX
  const validPassword =
    /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}/.test(
      password
    );

  // Si le format du password est invalide en renvoie un massage d'erreur dans la balise et la fonction renvoie 'false'
  if (validPassword === false) {
    passwordErrorMsg.innerText =
      "Le mot de passe doit contenir 8 à 15 caractères avec au minimun : \n une majuscule, une minuscule, un chiffre et un caractère spéciale.";
    return false;
  }
  // Sinon la fonction renvoie 'true' sans message d'erreur
  passwordErrorMsg.innerText = "";
  return true;
}

function isPassMatch() {
  // Récupère le champ du mot de passe  et passconf ainsi que la balise erreur correspondante
  const password = document.querySelector("#password").value;
  const passconf = document.querySelector("#passConf").value;

  const passConfErrorMsg = document.querySelector("#passConf-error");

  // Si les mots de passes ne matchent pas, elle renvoie un massage d'erreur dans la balise et la fonction renvoie 'false'
  if (password !== passconf || passconf === "") {
    passConfErrorMsg.innerText =
      "Les mots de passes ne correspondent pas, veuillez entrer des mots de passes identiques.";
    return false;
  }
  passConfErrorMsg.innerText = "";
  return true;
}

// Supprime le message d'erreur de la balise username
function resetErrMsgUserSign() {
  const usernameErrorMsg = document.querySelector("#username-error");
  usernameErrorMsg.innerText = "";
}

// Supprime le message d'erreur de la balise email
function resetErrMsgMailSign() {
  const usernameErrorMsg = document.querySelector("#email-error");
  usernameErrorMsg.innerText = "";
}

// Supprime le message d'erreur de la balise password
function resetErrMsgPassSign() {
  const usernameErrorMsg = document.querySelector("#password-error");
  usernameErrorMsg.innerText = "";
}

// Supprime le message d'erreur de la balise passconf
function resetErrMsgPassConfSign() {
  const usernameErrorMsg = document.querySelector("#passConf-error");
  usernameErrorMsg.innerText = "";
}

// Supprime tout les messages d'erreurs de  toutes les balises
function resetAllErrMsgSign() {
  resetErrMsgUserSign();
  resetErrMsgMailSign();
  resetErrMsgPassSign();
  resetErrMsgPassConfSign();
}

export {
  isValidUsername,
  isValidEmail,
  isValidPassword,
  isPassMatch,
  resetErrMsgUserSign,
  resetErrMsgMailSign,
  resetErrMsgPassSign,
  resetErrMsgPassConfSign,
  resetAllErrMsgSign,
};
