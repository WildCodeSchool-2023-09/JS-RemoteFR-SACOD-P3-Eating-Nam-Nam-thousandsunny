// Import access to database tables
const tables = require("../tables");

// BROWSE
const browse = async (req, res, next) => {
  try {
    const instructions = await tables.instruction.readAll();
    res.json(instructions);
  } catch (err) {
    next(err);
  }
};

// READ
const read = async (req, res, next) => {
  try {
    const instruction = await tables.instruction.read(req.params.id);
    if (instruction == null) {
      res.sendStatus(404);
    } else {
      res.json(instruction);
    }
  } catch (err) {
    next(err);
  }
};

const readByRecipe = async (req, res, next) => {
  try {
    const instruction = await tables.instruction.readByRecipe(req.params.id);
    if (instruction == null) {
      res.sendStatus(404);
    } else {
      res.json(instruction);
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
  const instruction = req.body;

  try {
    const insertId = await tables.instruction.create(instruction);
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
