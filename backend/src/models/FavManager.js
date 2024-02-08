const AbstractManager = require("./AbstractManager");

class CommentManager extends AbstractManager {
  constructor() {
    super({ table: "fav" });
  }

  async create(id, userId) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (recipe_id, user_id) VALUES (?, ?)`,
      [id, userId]
    );
    return result.insertId;
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);

    return rows;
  }

  async readUserFav(id, userId) {
    const [rows] = await this.database.query(
      `SELECT id FROM ${this.table} WHERE recipe_id = ? AND user_id = ?`,
      [id, userId]
    );

    return rows;
  }

  async readAllUserFav(userId) {
    const [rows] = await this.database.query(
      `SELECT recipe.* 
    FROM recipe
    JOIN fav ON recipe.id = fav.recipe_id
    JOIN user ON fav.user_id = user.id
    WHERE user.id = ?`,
      [userId]
    );

    return rows;
  }

  async readByRecipe(id) {
    const [rows] = await this.database.query(
      `SELECT  f.id FROM fav AS f
JOIN recipe AS r ON r.id = f.recipe_id
JOIN user AS u ON u.id = f.user_id
WHERE r.id = ?`,
      [id]
    );
    return rows;
  }

  async readByUser(id) {
    const [rows] = await this.database.query(
      `SELECT  f.id, r.name, r.titre FROM fav AS f
JOIN recipe AS r ON r.id = f.recipe_id
JOIN user AS u ON u.id = f.user_id
WHERE r.id = ?`,
      [id]
    );
    return rows;
  }

  async delete(id, userId) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE recipe_id = ? AND user_id = ?`,
      [id, userId]
    );

    // Return the ID of the newly inserted item
    return result.affectedRows;
  }
}
module.exports = CommentManager;
