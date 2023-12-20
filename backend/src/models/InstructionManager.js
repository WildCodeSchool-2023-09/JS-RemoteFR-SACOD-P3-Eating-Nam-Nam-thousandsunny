const AbstractManager = require("./AbstractManager");

class InstructionManager extends AbstractManager {
  constructor() {
    super({ table: "instruction" });
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
}
module.exports = InstructionManager;
