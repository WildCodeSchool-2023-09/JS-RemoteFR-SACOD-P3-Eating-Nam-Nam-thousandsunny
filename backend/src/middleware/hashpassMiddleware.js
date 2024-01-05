/* const argon2 = require("argon2");

// Middleware pour hacher le mot de passe avant d'ajouter un utilisateur
const hashPasswordMiddleware = async (req, res, next) => {
  try {
    // Vérifiez si le mot de passe est présent dans le corps de la requête
    if (req.body.password) {
      // Hachez le mot de passe
      const hashedPassword = await argon2.hash(req.body.password);
      // Remplacez le mot de passe en clair par le mot de passe haché dans le corps de la requête
      req.body.password = hashedPassword;
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = hashPasswordMiddleware;

*/
