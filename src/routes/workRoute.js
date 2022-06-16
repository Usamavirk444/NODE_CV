const express = require('express');
const controller = require('../controllers/workController')

const router = express.Router();


router
    .route('/add-work')
    .post(controller.addwork)

router
    .route('/:id')
    .post(controller.singleHeader)

module.exports = router