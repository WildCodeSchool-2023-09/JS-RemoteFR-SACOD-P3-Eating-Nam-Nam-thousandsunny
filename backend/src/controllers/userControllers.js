// Import access to database tables
const fs = require("fs");
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const users = await tables.user.readAll();

    // Respond with the items in JSON format
    res.json(users);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific user from the database based on the provided ID
    const user = await tables.user.read(req.params.id);

    // If the user is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the user in JSON format
    if (user == null) {
      res.sendStatus(404);
    } else {
      res.json(user);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
const edit = async (req, res, next) => {
  const wantedId = parseInt(req.params.id, 10);
  // Extract the user data from the request body
  const item = req.body;
  item.ID = wantedId;

  const avatar = req.file;

  fs.renameSync(
    `${avatar.destination}/${avatar.filename}`,
    `${avatar.destination}/${avatar.filename}-${avatar.originalname}`
  );
  const newpath = `${avatar.destination}/${avatar.filename}-${avatar.originalname}`;

  console.info({ item, avatar });
  try {
    // Insert the recipe into the database
    const user = await tables.user.update(item, newpath);
    // Respond with HTTP 201 (Created) and the ID of the newly inserted recipe
    res.status(200).json(user);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the user data from the request body
  const item = req.body;

  const existingUsername = await tables.user.readByUsername(item.username);
  const existingEmail = await tables.user.readByEmail(item.email);

  if (existingUsername && existingEmail) {
    res.status(400).json({
      message:
        "Il semblerait qu'un compte soit déjà existant avec ce nom d'utilisateur et cette adresse email, essayez de vous connecter",
    });
  } else if (existingUsername) {
    res.status(400).json({ message: "Nom d'utilisateur déjà utilisé" });
  } else if (existingEmail) {
    res
      .status(400)
      .json({ message: "Cette adresse mail est déjà associé avec un compte" });
  }

  if (!existingUsername && !existingEmail) {
    try {
      // Insert the user into the database
      const insertId = await tables.user.create(item);

      // Respond with HTTP 201 (Created) and the ID of the newly inserted user
      res.status(201).json({ insertId });
    } catch (err) {
      // Pass any errors to the error-handling middleware
      next(err);
    }
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  edit,
  add,
  // destroy,
};
