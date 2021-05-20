const express = require('express');
const router = express.Router();
const {Campus } = require('../database/models');

//so we don't have to use try-catch for each request handler
const ash = require('express-async-handler');

/**Add a new campus?*/
router.post('/', function(req, res, next) {
    Campus.create(req.body)
      .then(newCampus => res.status(200).json(newCampus))
      .catch(err => next(err));
  });
  



module.exports = router;