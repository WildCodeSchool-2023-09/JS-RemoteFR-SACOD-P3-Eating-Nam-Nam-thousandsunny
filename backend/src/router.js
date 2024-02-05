const express = require("express");
// const multer = require("multer");

// const upload = multer({ dest: "uploads/" });

const multer = require("multer");

const uploadRecipesImages = multer({ dest: "public/assets/recipeUploads" });
const uploadUsersAvatars = multer({ dest: "public/assets/usersAvatars" });
const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

/* ************************************************************************* */
// USER
/* ************************************************************************* */

// Import userControllers module for handling item-related operations
const UserControllers = require("./controllers/userControllers");
const AuthControllers = require("./controllers/authControllers");

// Import the middleware for hash password in DB when a new user register
const AuthMiddleware = require("./middleware/authMiddleware");

router.post("/login", AuthControllers.login);
router.post("/users", AuthMiddleware.hashPwd, UserControllers.add);
router.get("/verify-token", AuthControllers.verifyToken);

router.use(AuthMiddleware.verifyToken);

router.put(
  "/users/:id",
  uploadUsersAvatars.single("avatar"),
  UserControllers.edit
);
router.get("/users", UserControllers.browse); // Route to get a list of items
router.get("/users/:id", UserControllers.read); // Route to get a specific item by ID

// Route to update user
router.post(
  "/users",
  AuthMiddleware.hashPwd,
  uploadUsersAvatars.single("avatar"),
  UserControllers.add
);

// Route to get specific items and block the register if they exists
router.get("/username/:username", AuthControllers.readByUsername);
router.get("/email/:email", AuthControllers.readByEmail);

/* ************************************************************************* */
// RECIPE
/* ************************************************************************* */

// Import recipeControllers module for handling item-related operations
const RecipeControllers = require("./controllers/recipeControllers");

router.get("/recipes", RecipeControllers.browse); // Route to get a list of items
router.get("/recipes/:id", RecipeControllers.read); // Route to get a specific item by ID
router.get("/recipebyuser/:id", RecipeControllers.readByUser);
router.post(
  "/recipes",
  uploadRecipesImages.single("image"),
  RecipeControllers.add
);
/* ************************************************************************* */
// INGREDIENT
/* ************************************************************************* */

// Import ingredientControllers module for handling item-related operations
const IngredientControllers = require("./controllers/ingredientControllers");

router.get("/ingredients", IngredientControllers.browse); // Route to get a list of items
router.get("/ingredient/:id", IngredientControllers.read); // Route to get a specific item by ID
router.get("/ingredientbyrecipe/:id", IngredientControllers.readByRecipe); // Route to get ingredients for a specific Recipe
router.get("/units", IngredientControllers.browseUnits); // Route to get a list of units
/* ************************************************************************* */
// RECIPE_INGREDIENT
/* ************************************************************************* */
const recipeIngredientControllers = require("./controllers/recipeIngredientControllers");

router.post("/recipe_ingredient", recipeIngredientControllers.add); // Route to get a specific item by ID
/* ************************************************************************* */
// COMMENT
/* ************************************************************************* */

// Import commentControllers module for handling item-related operations
const CommentControllers = require("./controllers/commentControllers");

router.get("/commentbyrecipe/:id", CommentControllers.readByRecipe); // Route to get comments for a specific Recipe
router.get("/commentbyuser/:id", CommentControllers.readByUser); // Route to get comments for a specific User

/* ************************************************************************* */
// INSTRUCTION
/* ************************************************************************* */

// Import recipeControllers module for handling item-related operations
const InstructionControllers = require("./controllers/instructionControllers");

router.get("/instruction/:id", InstructionControllers.read); // Route to get a specific item by ID
router.get("/instructionbyrecipe/:id", InstructionControllers.readByRecipe); // Route to get instructions for a specific Recipe
router.post("/instruction", InstructionControllers.add); // Route to get a specific item by ID

/* ************************************************************************* */
// FAV
/* ************************************************************************* */

// Import recipeControllers module for handling item-related operations
const FavControllers = require("./controllers/favControllers");

router.get("/favbyrecipe/:id", FavControllers.readByUser); // Route to get a specific item by ID
router.post("/favbyrecipe", FavControllers.add);
router.delete("/favbyrecipe/:id", FavControllers.destroy);

const TagControllers = require("./controllers/tagControllers");

// Route to get a list of items
router.get("/users", UserControllers.browse);
router.get("/recipes", RecipeControllers.browse);
router.get("/tags", TagControllers.browse);

/* ************************************************************************* */

module.exports = router;
