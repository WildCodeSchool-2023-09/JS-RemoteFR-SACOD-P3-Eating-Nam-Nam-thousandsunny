const AbstractManager = require("./AbstractManager");

class CommentManager extends AbstractManager {
  constructor() {
    super({ table: "fav" });
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);

    return rows;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT  f.id FROM fav AS f
JOIN recipe AS r ON r.ID = f.recipe_ID
JOIN user AS u ON u.ID = f.user_ID
WHERE r.ID = ${id};`,
      [id]
    );
    return rows;
  }
}
module.exports = CommentManager;
