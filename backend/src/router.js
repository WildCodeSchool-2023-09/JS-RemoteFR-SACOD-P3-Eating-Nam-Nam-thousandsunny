const express = require("express");
// const multer = require("multer");

// const upload = multer({ dest: "uploads/" });

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import userControllers module for handling item-related operations
const UserControllers = require("./controllers/userControllers");
const RecipeControllers = require("./controllers/recipeControllers");
const IngredientControllers = require("./controllers/ingredientControllers");
const MaterialControllers = require("./controllers/materialControllers");
const CommentControllers = require("./controllers/commentControllers");
const InstructionControllers = require("./controllers/instructionControllers");
const FavControllers = require("./controllers/favControllers");
const TagControllers = require("./controllers/tagControllers");

// Route to get a list of items
router.get("/users", UserControllers.browse);
router.get("/recipes", RecipeControllers.browse);
router.get("/tags", TagControllers.browse);

// Route to get a specific item by ID
router.get("/users/:id", UserControllers.read);
router.get("/recipes/:id", RecipeControllers.read);
router.get("/ingredient/:id", IngredientControllers.read);
router.get("/material/:id", MaterialControllers.read);
router.get("/comment/:id", CommentControllers.read);
router.get("/instruction/:id", InstructionControllers.read);
router.get("/fav/:id", FavControllers.read);

// Route to add a new item
router.post("/users", UserControllers.add);

/* ************************************************************************* */

module.exports = router;
