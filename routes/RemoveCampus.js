const express = require('express');
const router = express.Router();
const {Campus} = require('../database/models');

//so we don't have to use try-catch for each request handler
//const ash = require('express-async-handler');

router.delete('/:id', function(req, res, next) {
    Campus.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(() => res.status(200).json("Deleted a campus!"))
      .catch(err => next(err));
  });


module.exports = router;