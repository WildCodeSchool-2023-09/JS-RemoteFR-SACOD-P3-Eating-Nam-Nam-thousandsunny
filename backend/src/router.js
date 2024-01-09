const express = require("express");
// const multer = require("multer");

// const upload = multer({ dest: "uploads/" });

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

/* ************************************************************************* */
// USER
/* ************************************************************************* */

// Import userControllers module for handling item-related operations
const UserControllers = require("./controllers/userControllers");
// Import the middleware for hash password in DB when a new user register
const hashPasswordMiddleware = require("./middleware/hashpassMiddleware");

router.get("/users", UserControllers.browse); // Route to get a list of items
router.get("/users/:id", UserControllers.read); // Route to get a specific item by ID
router.post("/users", hashPasswordMiddleware, UserControllers.add);

/* ************************************************************************* */
// RECIPE
/* ************************************************************************* */

// Import recipeControllers module for handling item-related operations
const RecipeControllers = require("./controllers/recipeControllers");

router.get("/recipes", RecipeControllers.browse); // Route to get a list of items
router.get("/recipes/:id", RecipeControllers.read); // Route to get a specific item by ID

/* ************************************************************************* */
// INGREDIENT
/* ************************************************************************* */

// Import ingredientControllers module for handling item-related operations
const IngredientControllers = require("./controllers/ingredientControllers");

router.get("/ingredient/:id", IngredientControllers.read); // Route to get a specific item by ID

/* ************************************************************************* */
// MATERIAL
/* ************************************************************************* */

// Import rmaterialControllers module for handling item-related operations
const MaterialControllers = require("./controllers/materialControllers");

router.get("/material/:id", MaterialControllers.read); // Route to get a specific item by ID

/* ************************************************************************* */
// COMMENT
/* ************************************************************************* */

// Import commentControllers module for handling item-related operations
const CommentControllers = require("./controllers/commentControllers");

router.get("/comment/:id", CommentControllers.read); // Route to get a specific item by ID

/* ************************************************************************* */
// INSTRUCTION
/* ************************************************************************* */

// Import recipeControllers module for handling item-related operations
const InstructionControllers = require("./controllers/instructionControllers");

router.get("/instruction/:id", InstructionControllers.read); // Route to get a specific item by ID

/* ************************************************************************* */
// FAV
/* ************************************************************************* */

// Import recipeControllers module for handling item-related operations
const FavControllers = require("./controllers/favControllers");

router.get("/fav/:id", FavControllers.read); // Route to get a specific item by ID

const TagControllers = require("./controllers/tagControllers");

// Middleware
const hashPasswordMiddleware = require("./middleware/hashpassMiddleware");

// Route to get a list of items
router.get("/users", UserControllers.browse);
router.get("/recipes", RecipeControllers.browse);
router.get("/tags", TagControllers.browse);

/* ************************************************************************* */
// AUTH
/* ************************************************************************* */

// Import authControllers module for register and connection
const AuthControllers = require("./controllers/authControllers");

// Route to get specific items and block the register if they exists
router.get("/username/:username", AuthControllers.readByUsername);
router.get("/email/:email", AuthControllers.readByEmail);
router.post("/login", AuthControllers.login);

/* ************************************************************************* */

module.exports = router;
