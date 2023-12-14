const AbstractManager = require("./AbstractManager");

class RecipeManager extends AbstractManager {
  constructor() {
    super({ table: "recipe" });
  }

  async seeAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);

    return rows;
  }
}
module.exports = RecipeManager;
