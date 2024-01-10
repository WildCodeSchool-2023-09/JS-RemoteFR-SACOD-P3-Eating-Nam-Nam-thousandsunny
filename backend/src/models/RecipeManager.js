const AbstractManager = require("./AbstractManager");

class RecipeManager extends AbstractManager {
  constructor() {
    super({ table: "recipe" });
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);

    return rows;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT r.*, u.username from recipe AS r
    JOIN user AS u ON u.ID = r.user_ID
    WHERE r.ID=?`,
      [id]
    );
    return rows[0];
  }
}

module.exports = RecipeManager;
