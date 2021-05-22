const express = require('express');
const router = express.Router();
const { Student, Campus } = require('../database/models');

const ash = require('express-async-handler');

/** GET ALL CAMPUSES */
router.get('/', ash(async(req, res) => {
  let campuses = await Campus.findAll({include: [Student]});
  res.status(200).json(campuses);
}));

/** GET CAMPUS BY ID*/
router.get('/:id', ash(async(req, res) => {
  let campus = await Campus.findByPk(req.params.id, {include: [Student]});
  res.status(200).json(campus);
}));

/**Add a new campus?*/
router.post('/', function(req, res, next) {
  Campus.create(req.body)
    .then(newCampus => res.status(200).json(newCampus))
    .catch(err => next(err));
});

/**Remove a campus */
router.delete('/:id', function(req, res, next) {
  Campus.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(() => res.status(200).json("Deleted a campus!"))
    .catch(err => next(err));
});

// Export our router, so that it can be imported to construct our apiRouter;
module.exports = router;