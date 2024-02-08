const tables = require("../tables");

const add = async (req, res, next) => {
  // Extract the user data from the request body

  const recipeIngredient = req.body;

  try {
    // Insert the recipe into the database
    const insertId = await tables.recipe_ingredient.create(recipeIngredient);
    // Respond with HTTP 201 (Created) and the ID of the newly inserted recipe
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
module.exports = { add };
