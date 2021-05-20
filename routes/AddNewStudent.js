const express = require('express');
const router = express.Router();
const {Student} = require('../database/models');

//so we don't have to use try-catch for each request handler
const ash = require('express-async-handler');


//Add a new student??
router.post('/', function(req, res, next) {
    Student.create(req.body)
      .then(newStudent => res.status(200).json(newStudent))
      .catch(err => next(err));
});
  
module.exports = router;