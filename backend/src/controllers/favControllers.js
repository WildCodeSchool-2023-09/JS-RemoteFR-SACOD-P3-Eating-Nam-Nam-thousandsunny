// Import access to database tables
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

// READ
const readByRecipe = async (req, res, next) => {
  try {
    const fav = await tables.fav.readByRecipe(req.params.id);
    if (fav == null) {
      res.sendStatus(404);
    } else {
      res.json(fav);
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
  const fav = req.body;

  try {
    const insertId = await tables.fav.create(fav);
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
  // edit,
  add,
  // destroy,
};
