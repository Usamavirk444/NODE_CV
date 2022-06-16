const db = require('../models')
const Header = db.header

// services
const skillService = require('../services/skillService')

// ======-------Skill---------=========


// add new header
const addSkill = async(req, res) => {
    // for category in dorp down
    await skillService.createSkill(req)
        .then((result) => {
            res.send(result)

        })
        .catch((er) => {
            console.log(er)
            res.send(er)
        })
}

// Find SIngle Header With ID
const singleSkill = async(req, res) => {
    // for category in dorp down
    await skillService.singleSkill(req)
        .then((result) => {
            res.send(result)

        })
        .catch((er) => {
            console.log(er)
            res.send(er)
        })
}




module.exports = {

    addSkill,
    singleSkill

}