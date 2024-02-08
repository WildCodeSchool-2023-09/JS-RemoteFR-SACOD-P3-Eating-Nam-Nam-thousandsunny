// Import access to database tables
const jwt = require("jsonwebtoken");
const tables = require("../tables");

// BROWSE
const browse = async (req, res, next) => {
  try {
    const favs = await tables.fav.readAll();
    res.json(favs);
  } catch (err) {
    next(err);
  }
};

const readByUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { token } = req.cookies;
    if (token) {
      const user = jwt.verify(token, process.env.APP_SECRET);
      const [result] = await tables.fav.readUserFav(id, user.id);
      if (!result) {
        res.sendStatus(404);
      } else {
        res.json(result);
      }
    }
  } catch (err) {
    next(err);
  }
};

const readAllByUser = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (token) {
      const user = jwt.verify(token, process.env.APP_SECRET);
      const result = await tables.fav.readAllUserFav(user.id);
      if (!result) {
        res.sendStatus(404);
      } else {
        res.json(result);
      }
    }
  } catch (err) {
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
//  This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the user data from the request body
  try {
    const { id } = req.body;
    const { token } = req.cookies;
    if (token) {
      const user = jwt.verify(token, process.env.APP_SECRET);
      const insertId = await tables.fav.create(id, user.id);
      res.status(201).json({ insertId });
    } else {
      res.status(401);
    }
  } catch (err) {
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation

const destroy = async (req, res, next) => {
  // Extract the item data from the request body
  try {
    const { id } = req.params;
    const { token } = req.cookies;
    if (token) {
      const user = jwt.verify(token, process.env.APP_SECRET);
      const affectedRows = await tables.fav.delete(id, user.id);
      res.status(201).json({ affectedRows });
    } else {
      res.status(401);
    }
  } catch (err) {
    next(err);
  }
};

// Ready to export the controller functions
module.exports = {
  browse,
  readByUser,
  readAllByUser,
  // edit,
  add,
  destroy,
};
