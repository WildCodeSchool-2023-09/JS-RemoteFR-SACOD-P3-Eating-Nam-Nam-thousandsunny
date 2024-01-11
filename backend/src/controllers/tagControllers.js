const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const tags = await tables.tag.readAll();

    res.json(tags);
  } catch (err) {
    next(err);
  }
};
module.exports = {
  browse,
};
