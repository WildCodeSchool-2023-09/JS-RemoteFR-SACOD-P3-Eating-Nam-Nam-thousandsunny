const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const tables = require("../tables");

// Middleware pour hasher le password dans la DB lors de l'ajout d'un utilisateur
const hashPwd = async (req, res, next) => {
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

const verifyToken = async (req, res, next) => {
  const token = req.body.cookies;

  console.info(token);
  if (!token) {
    res.status(401).json({ error: "No token founded" });
  } else {
    try {
      const decoded = jwt.verify(token, process.env.APP_SECRET);
      const user = await tables.user.read(decoded.id);
      console.info({ user });
      next();
    } catch (err) {
      res.status(401).json({ error: "The token is invalid" });
    }
  }
};

module.exports = {
  hashPwd,
  verifyToken,
};
