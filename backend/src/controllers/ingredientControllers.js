// Import access to database tables
const tables = require("../tables");

// BROWSE
const browse = async (req, res, next) => {
  try {
    const ingredients = await tables.ingredient.readAll();
    res.json(ingredients);
  } catch (err) {
    next(err);
  }
};

// READ
const read = async (req, res, next) => {
  try {
    const ingredient = await tables.ingredient.read(req.params.id);
    if (ingredient == null) {
      res.sendStatus(404);
    } else {
      res.json(ingredient);
    }
  } catch (err) {
    next(err);
  }
};
const readByRecipe = async (req, res, next) => {
  try {
    const ingredient = await tables.ingredient.readByRecipe(req.params.id);
    if (ingredient == null) {
      res.sendStatus(404);
    } else {
      res.json(ingredient);
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
  const ingredient = req.body;

  try {
    const insertId = await tables.ingredient.create(ingredient);
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
  read,
  readByRecipe,
  // edit,
  add,
  // destroy,
};
