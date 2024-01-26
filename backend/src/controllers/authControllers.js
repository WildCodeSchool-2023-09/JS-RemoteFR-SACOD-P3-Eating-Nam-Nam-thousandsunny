const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const tables = require("../tables");

const readByUsername = async (req, res, next) => {
  try {
    // Fetch a specific user from the database based on the provided Username
    const user = await tables.user.readByUsername(req.params.username);

    // If the user is not found, respond with HTTP 404 (Not Found)
    if (user == null) {
      res.sendStatus(404);
    } else {
      // Otherwise, respond with the user in JSON format
      res.json(user);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const readByEmail = async (req, res, next) => {
  try {
    // Fetch a specific user from the database based on the provided Email
    const user = await tables.user.readByEmail(req.params.email);

    // If the user is not found, respond with HTTP 404 (Not Found)
    if (user == null) {
      res.sendStatus(404);
    } else {
      // Otherwise, respond with the user in JSON format
      res.json(user);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    // Verify if the username exist in the database
    const user = await tables.user.readByUsername(req.body.username);

    if (user) {
      // Verify if the password match with the hashed in the database
      const verified = await argon2.verify(user.password, req.body.password);

      if (verified) {
        // Create a token for open & keep the user session as logged
        const token = jwt.sign(
          { id: user.id, username: user.username, is_admin: user.is_admin },
          process.env.APP_SECRET,
          { expiresIn: "1h" }
        );
        // Respond with the Token of the user, in JSON format
        res.cookie("token", token, {
          httpOnly: true,
          maxAge: 3600000, // 1h in ms
        });
        res.status(200).send(token);
      } else {
        res.sendStatus(422);
      }
    } else {
      res.sendStatus(422);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const verifyToken = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      res.status(401).json({ error: "No token founded" });
    } else {
      const decoded = jwt.verify(token, process.env.APP_SECRET);
      const user = await tables.user.read(decoded.id);
      if (user)
        res.status(200).json({
          success: "User is valid",
          is_loggin: true,
          is_admin: decoded.is_admin,
          description: user.description,
        });
      else
        res
          .status(401)
          .json({ error: "The token is invalid", is_loggin: false });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  // browse,
  readByUsername,
  readByEmail,
  login,
  verifyToken,
  // edit,
  // add,
  // destroy,
};
