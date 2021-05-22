const Sequelize = require('sequelize');
const db = require('../db');

const Campus = db.define("campus", {

  name: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue:""
  },

  imageUrl:{
    type: Sequelize.STRING,
    defaultValue: ""
  },

  address:{
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue:""
  },

  description: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue:""
  }

});

module.exports = Campus;