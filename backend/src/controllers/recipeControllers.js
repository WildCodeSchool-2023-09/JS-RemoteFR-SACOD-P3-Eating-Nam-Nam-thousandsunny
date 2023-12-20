const tables = require("../tables");

const show = async (req, res, next) => {
  try {
    const recipe = await tables.recipe.seeAll();

    res.json(recipe);
  } catch (err) {
    next(err);
  }
};
const see = async (req, res, next) => {
  try {
    const recipe = await tables.recipe.see(req.params.id);

    if (recipe == null) {
      res.sendStatus(404);
    } else {
      res.json(recipe);
    }
  } catch (err) {
    next(err);
  }
};
module.exports = { show, see };
