const express = require('express');
const controller = require('../controllers/skillController')

const router = express.Router();


router
    .route('/add-skill')
    .post(controller.addSkill)

router
    .route('/:id')
    .post(controller.singleSkill)

module.exports = router