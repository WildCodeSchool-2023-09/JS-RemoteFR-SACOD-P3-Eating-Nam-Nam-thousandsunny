const AbstractManager = require("./AbstractManager");

class CommentManager extends AbstractManager {
  constructor() {
    super({ table: "comment" });
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);

    return rows;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT  c.description, u.username FROM comment AS c
JOIN recipe AS r ON r.ID = c.recipe_ID
JOIN user AS u ON u.ID = c.user_ID
WHERE r.ID = ${id};`,
      [id]
    );
    return rows;
  }
}
module.exports = CommentManager;
