const AbstractManager = require("./AbstractManager");

class MaterialManager extends AbstractManager {
  constructor() {
    super({ table: "material" });
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);

    return rows;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT m.name FROM material AS m
JOIN recipe_material AS rm ON m.ID = rm.material_ID
JOIN recipe AS r ON r.ID = rm.recipe_ID
WHERE r.ID = ${id};`,
      [id]
    );
    return rows;
  }
}
module.exports = MaterialManager;
