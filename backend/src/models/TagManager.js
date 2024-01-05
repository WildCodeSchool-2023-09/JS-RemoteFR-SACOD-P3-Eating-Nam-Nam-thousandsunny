const AbstractManager = require("./AbstractManager");

class TagManager extends AbstractManager {
  constructor() {
    super({ table: "tag" });
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);

    return rows;
  }
}
module.exports = TagManager;
