const db = require('../models')
const Header = db.header

// services
const headerService = require('../services/headerService')

// home page of admin
const homePage = (req, res) => {
    console.log(res.locals.id)
    res.render('admin/index')
}

// ======-------Header---------=========


// add new header
const addHeader = async(req, res) => {
    // for category in dorp down
    await headerService.createHeader(req)
        .then((result) => {
            res.send(result)

        })
        .catch((er) => {
            console.log(er)
            res.send(er)
        })
}

// Find SIngle Header With ID
const singleHeader = async(req, res) => {
    // for category in dorp down
    await headerService.singleHeader(req)
        .then((result) => {
            res.send(result)

        })
        .catch((er) => {
            console.log(er)
            res.send(er)
        })
}




module.exports = {
    homePage,
    addHeader,
    singleHeader

}