const tables = require("../tables");

const show = async (req, res, next) => {
  try {
    const users = await tables.recipe.seeAll();

    res.json(users);
  } catch (err) {
    next(err);
  }
};
module.exports = { show };
