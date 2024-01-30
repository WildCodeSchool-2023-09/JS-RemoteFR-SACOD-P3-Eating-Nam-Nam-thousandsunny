const AbstractManager = require("./AbstractManager");

class RecipeIngredientManager extends AbstractManager {
  constructor() {
    super({ table: "recipe_ingredient" });
  }

  async create(item) {
    // Execute the SQL INSERT query to add a new user to the "recipe" table
    const [result] = await this.database.query(
      `insert into ${this.table} (recipe_id, ingredient_id, quantity)
             values (?, ?, ?)`,
      [item.recipe_id, item.ingredient_id, item.quantity]
    );

    // Return the ID of the newly inserted recipe
    return result.insertId;
  }
}
module.exports = RecipeIngredientManager;
