const AbstractManager = require("./AbstractManager");

class RecipeManager extends AbstractManager {
  constructor() {
    super({ table: "recipe" });
  }

  async create(recipe, image, userId) {
    // Execute the SQL INSERT query to add a new user to the "recipe" table
    const [result] = await this.database.query(
      `insert into ${this.table} (user_id, name, title, prep_time, nb_people, difficulty, image, tag1, tag2, tag3,total_kcal) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?)`,
      [
        userId,
        recipe.name,
        recipe.title,
        recipe.prep_time,
        recipe.nb_people,
        recipe.difficulty,
        image,
        recipe.tag1,
        recipe.tag2,
        recipe.tag3,
        recipe.total_kcal,
      ]
    );

    // Return the id of the newly inserted recipe
    return result.insertId;
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);

    return rows;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT r.*, u.username from recipe AS r  
    JOIN user AS u ON u.id = r.user_id  
    WHERE r.id=?`,
      [id]
    );
    return rows[0];
  }

  async readByUser(id) {
    const [rows] = await this.database.query(
      `SELECT r.name, r.title, r.image FROM recipe AS r JOIN user AS u ON u.id = r.user_id WHERE u.id = ?`,
      [id]
    );
    return rows[0];
  }
}

module.exports = RecipeManager;
