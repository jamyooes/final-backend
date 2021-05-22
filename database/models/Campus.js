const Sequelize = require("sequelize");
const db = require("../db");

const Campus = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://ephemeralnewyork.files.wordpress.com/2017/07/thomashunterhallhuntercollege.jpg",
  },

  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Campus;
