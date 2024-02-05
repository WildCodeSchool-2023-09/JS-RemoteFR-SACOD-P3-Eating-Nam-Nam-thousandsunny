const fs = require("fs");
const jwt = require("jsonwebtoken");
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

const readByUser = async (req, res, next) => {
  try {
    const recipe = await tables.recipe.readByUser(+req.params.id);

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
  const { token } = req.cookies;
  const { id } = jwt.verify(token, process.env.APP_SECRET);
  const recipe = req.body;
  const image = req.file;
  console.info(req.file);
  let newPath;
  if (!image) {
    newPath = "public/assets/usersAvatars/defaultavatar.png";
  } else {
    fs.renameSync(
      `${image.destination}/${image.filename}`,
      `${image.destination}/${image.filename}-${image.originalname}`
    );
    newPath = `${image.destination}/${image.filename}-${image.originalname}`;
  }

  try {
    // Insert the recipe into the database
    const insertId = await tables.recipe.create(recipe, newPath, id);
    // Respond with HTTP 201 (Created) and the ID of the newly inserted recipe
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
module.exports = { browse, read, readByUser, add };
