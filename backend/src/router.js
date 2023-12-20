const express = require("express");
const multer = require("multer");

const upload = multer({ dest: "uploads/" });

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import userControllers module for handling item-related operations
const userControllers = require("./controllers/userControllers");
const recipeControllers = require("./controllers/recipeControllers");
const ingredientControllers = require("./controllers/ingredientControllers");
// Route to get a list of items
router.get("/users", userControllers.browse);
router.get("/recipes", recipeControllers.show);
router.get("/showrecipe", recipeControllers.showRecipe);

// Route to get a specific item by ID
router.get("/users/:id", userControllers.read);
router.get("/recipes/:id", recipeControllers.see);
router.get("/ingredient/:id", ingredientControllers.read);

// Route to add a new item
router.post("/users", upload.single("avatar"), userControllers.add);

/* ************************************************************************* */

module.exports = router;
