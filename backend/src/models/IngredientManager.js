const AbstractManager = require("./AbstractManager");

class IngredientManager extends AbstractManager {
  constructor() {
    super({ table: "ingredient" });
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);

    return rows;
  }

  async readUnits() {
    const [rows] = await this.database.query(
      `select DISTINCT unité from ${this.table}`
    );

    return rows;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT  ri.quantity, i.name, i.kcal, i.unité FROM recipe_ingredient AS ri
JOIN recipe as R ON r.ID= ri.recipe_ID
JOIN ingredient AS i ON i.ID=ri.ingredient_ID
WHERE r.ID = ${id};`,
      [id]
    );
    return rows;
  }

  async readByRecipe(id) {
    const [rows] = await this.database.query(
      `SELECT i.name, i.unit, i.kcal, p.quantity from ingredient AS i 
JOIN recipe_ingredient AS p ON p.ingredient_ID = i.ID
JOIN recipe ON recipe.ID= p.recipe_ID
WHERE recipe.ID= ?`,
      [id]
    );
    return rows;
  }
}
module.exports = IngredientManager;
