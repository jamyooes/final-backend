const Sequelize = require("sequelize");
const db = require("../db");

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { isEmail: true },
  },

  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "",
  },

  gpa: {
    type: Sequelize.DOUBLE,
    allowNull: false,
    defaultValue: 0.0,
    validate: {
      min: 0.0,
      max: 4.0,
    },
  },
});

module.exports = Student;
