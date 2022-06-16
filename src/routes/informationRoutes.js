const express = require('express');
const router = express.Router()
const informationcontroller = require('../controllers/infoController')

router
    .route('/add-Info')
    .get(informationcontroller.getinfo)
    .post(informationcontroller.createInfo)

module.exports = router