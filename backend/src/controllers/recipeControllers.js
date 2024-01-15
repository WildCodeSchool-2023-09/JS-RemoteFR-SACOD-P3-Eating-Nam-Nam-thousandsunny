const fs = require("fs");
const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const recipe = await tables.recipe.readAll();

    res.json(recipe);
  } catch (err) {
    next(err);
  }
};
const read = async (req, res, next) => {
  try {
    const recipe = await tables.recipe.read(+req.params.id);

    if (recipe == null) {
      res.sendStatus(404);
    } else {
      res.json(recipe);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  // Extract the user data from the request body
  const recipe = req.body;
  const image = req.file;
  fs.renameSync(
    `${image.destination}/${image.filename}`,
    `${image.destination}/${image.filename}-${image.originalname}`
  );

  try {
    // Insert the recipe into the database
    const insertId = await tables.recipe.create(recipe);
    // Respond with HTTP 201 (Created) and the ID of the newly inserted recipe
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
module.exports = { browse, read, add };
