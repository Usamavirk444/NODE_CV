const express = require('express');
const router = express.Router()
const controller = require('../controllers/educationController')

router
    .route('/add-education')
    .get(controller.getAlledu)
    .post(controller.createEducation)

module.exports = router