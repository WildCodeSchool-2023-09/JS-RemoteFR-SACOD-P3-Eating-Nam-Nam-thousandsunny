const argon2 = require("argon2");
const tables = require("../tables");

const readByUsername = async (req, res, next) => {
  try {
    // Fetch a specific user from the database based on the provided Username
    const username = await tables.user.readByUsername(req.params.username); // modifier id ?)

    // If the user is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the user in JSON format
    if (username == null) {
      res.sendStatus(404);
    } else {
      res.json(username);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const readByEmail = async (req, res, next) => {
  try {
    // Fetch a specific user from the database based on the provided Email
    const email = await tables.user.readByEmail(req.params.email); // modifier id ?)

    // If the user is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the user in JSON format
    if (email == null) {
      res.sendStatus(404);
    } else {
      res.json(email);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    // Fetch a specific user from the database based on the provided email
    const user = await tables.user.readByUsername(req.body.username);
    const verified = await argon2.verify(user.password, req.body.password);

    if (user == null || !verified) {
      res.sendStatus(422);
    } else {
      // Respond with the user in JSON format (but without the hashed password)
      res.json(user);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

module.exports = {
  // browse,
  readByUsername,
  readByEmail,
  login,
  // edit,
  // add,
  // destroy,
};
