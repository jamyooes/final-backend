const express = require('express');
const router = express.Router();
const { Student, Campus } = require('../database/models');

//so we don't have to use try-catch for each request handler
const ash = require('express-async-handler');

/** GET STUDENT BY ID */
router.get('/:id', ash(async(req, res) => {
    let student = await Student.findByPk(req.params.id, {include: [Campus]});
    res.status(200).json(student);
  }));


module.exports = router;