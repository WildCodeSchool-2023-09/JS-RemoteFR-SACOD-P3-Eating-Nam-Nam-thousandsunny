// Import access to database tables
const tables = require("../tables");

// BROWSE
const browse = async (req, res, next) => {
  try {
    const comments = await tables.comment.readAll();
    res.json(comments);
  } catch (err) {
    next(err);
  }
};

// READ
const readByRecipe = async (req, res, next) => {
  try {
    const comment = await tables.comment.readByRecipe(req.params.id);
    if (comment == null) {
      res.sendStatus(404);
    } else {
      res.json(comment);
    }
  } catch (err) {
    next(err);
  }
};

const readByUser = async (req, res, next) => {
  try {
    const comment = await tables.comment.readByUser(req.params.id);
    if (comment == null) {
      res.sendStatus(404);
    } else {
      res.json(comment);
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
  const comment = req.body;

  try {
    const insertId = await tables.comment.create(comment);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  browse,
  readByRecipe,
  readByUser,
  // edit,
  add,
  // destroy,
};
