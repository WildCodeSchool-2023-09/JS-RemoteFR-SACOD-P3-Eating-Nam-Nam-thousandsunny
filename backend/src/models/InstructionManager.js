const AbstractManager = require("./AbstractManager");

class InstructionManager extends AbstractManager {
  constructor() {
    super({ table: "instruction" });
  }

  async create(instruction) {
    const [rows] = await this.database.query(
      `INSERT INTO ${this.table} (recipe_id, description) VALUES (?, ?)`,
      [instruction.recipeId, instruction.description]
    );

    return rows.insertId;
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);

    return rows;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT i.description FROM instruction AS i
      JOIN recipe AS r ON r.ID = i.recipe_ID
WHERE r.ID = ${id};`,
      [id]
    );
    return rows;
  }

  async readByRecipe(id) {
    const [rows] = await this.database.query(
      `SELECT i.description from instruction AS i 
JOIN recipe ON recipe.ID= i.recipe_ID
WHERE recipe.ID= ?`,
      [id]
    );
    return rows;
  }
}

module.exports = InstructionManager;
