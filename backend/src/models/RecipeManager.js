const AbstractManager = require("./AbstractManager");

class RecipeManager extends AbstractManager {
  constructor() {
    super({ table: "recipe" });
  }

  async create(recipe) {
    // Execute the SQL INSERT query to add a new user to the "recipe" table
    const [result] = await this.database.query(
      `insert into ${this.table} (user_ID, name, title, prep_time, nb_people, difficulty, image, tag1, tag2, tag3) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        recipe.user_ID,
        recipe.name,
        recipe.title,
        recipe.prep_time,
        recipe.nb_people,
        recipe.difficulty,
        recipe.image,
        recipe.tag1,
        recipe.tag2,
        recipe.tag3,
      ]
    );

    // Return the ID of the newly inserted recipe
    return result.insertId;
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

  async readByUser(id) {
    const [rows] = await this.database.query(
      `SELECT r.name, r.title, r.image FROM recipe AS r JOIN user AS u ON u.ID = r.user_ID WHERE u.ID = ?`,
      [id]
    );
    return rows[0];
  }
}

module.exports = RecipeManager;
