function isValidUsername(username) {
  const error = "Le nom d'utilisateur doit contenir 2 à 25 caractères.";
  const usernameErrorMsg = document.querySelector("#username-error");
  if (username.length < 2 || username.length > 25) {
    usernameErrorMsg.innerText = error;
    return false;
  }
  usernameErrorMsg.innerText = "";
  return true;
}

function isValidEmail(email) {
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

function isValidPassword(password) {
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

function isPassMatch(password, passconf) {
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

function resetErrorMessageSignIn() {
  const usernameErrorMsg = document.querySelector("#username-error");
  const emailErrorMsg = document.querySelector("#email-error");
  const passwordErrorMsg = document.querySelector("#password-error");
  const passConfErrorMsg = document.querySelector("#passConf-error");

  usernameErrorMsg.innerText = "";
  emailErrorMsg.innerText = "";
  passwordErrorMsg.innerText = "";
  passConfErrorMsg.innerText = "";
}

export {
  isValidUsername,
  isValidEmail,
  isValidPassword,
  isPassMatch,
  resetErrorMessageSignIn,
};
