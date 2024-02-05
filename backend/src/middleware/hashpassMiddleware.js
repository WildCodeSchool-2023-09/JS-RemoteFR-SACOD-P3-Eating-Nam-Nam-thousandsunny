const argon2 = require("argon2");

// Middleware pour hasher le password dans la DB lors de l'ajout d'un utilisateur
const hashPasswordMiddleware = async (req, res, next) => {
  try {
    // Vérifie si le password est présent dans le corps de la requête
    if (req.body.password) {
      // Hash le password avec Argon2
      const hashedPassword = await argon2.hash(req.body.password);

      // Ecrase le password en clair par le password hashé (il le remplace) dans le corps de la requête
      req.body.password = hashedPassword;
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = hashPasswordMiddleware;
