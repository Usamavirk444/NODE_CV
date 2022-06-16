const db = require('../models')
const Header = db.header

// services
const workService = require('../services/workService')

// ======-------WORK---------=========


// add new header
const addwork = async(req, res) => {
    // for category in dorp down
    await workService.createWork(req)
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

    addwork,
    singleHeader

}