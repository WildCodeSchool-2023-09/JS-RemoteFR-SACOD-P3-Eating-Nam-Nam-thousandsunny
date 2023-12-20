// Import access to database tables
const tables = require("../tables");

// BROWSE
const browse = async (req, res, next) => {
  try {
    const materials = await tables.material.readAll();
    res.json(materials);
  } catch (err) {
    next(err);
  }
};

// READ
const read = async (req, res, next) => {
  try {
    const material = await tables.material.read(req.params.id);
    if (material == null) {
      res.sendStatus(404);
    } else {
      res.json(material);
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
  const material = req.body;

  try {
    const insertId = await tables.material.create(material);
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
  // edit,
  add,
  // destroy,
};
