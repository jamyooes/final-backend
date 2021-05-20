const express = require('express');
const router = express.Router();
const { Student, Campus } = require('../database/models');

//so we don't have to use try-catch for each request handler
const ash = require('express-async-handler');


/** GET CAMPUS BY ID*/
router.get('/:id', ash(async(req, res) => {
    let campus = await Campus.findByPk(req.params.id, {include: [Student]});
    res.status(200).json(campus);
}));

module.exports = router;