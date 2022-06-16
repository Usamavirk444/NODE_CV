const express = require('express');
const controller = require('../controllers/headerController')
const upload = require('../middlewares/upload')
const router = express.Router();


router
    .route('/add-header')
    .post(upload, controller.addHeader)

router
    .route('/:id')
    .post(controller.singleHeader)

module.exports = router