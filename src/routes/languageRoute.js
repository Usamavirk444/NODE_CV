const express = require('express');
const controller = require('../controllers/languageController')

const router = express.Router();


router
    .route('/add-language')
    .post(controller.addlanguage)

router
    .route('/:id')
    .post(controller.singleLanguage)

module.exports = router