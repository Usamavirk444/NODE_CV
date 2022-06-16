const express = require('express');
const router = express.Router()
const objectiveController = require('../controllers/objectiveController')

router
    .route('/add-objective')
    .post(objectiveController.createObjective)

module.exports = router