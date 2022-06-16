const db = require('../models')
const Header = db.header

// services
const languageService = require('../services/languageService')

// ======-------Skill---------=========


// add new header
const addlanguage = async(req, res) => {
    // for category in dorp down
    await languageService.createLanguage(req)
        .then((result) => {
            res.send(result)

        })
        .catch((er) => {
            console.log(er)
            res.send(er)
        })
}

// Find SIngle Header With ID
const singleLanguage = async(req, res) => {
    // for category in dorp down
    await languageService.singleLanguage(req)
        .then((result) => {
            res.send(result)

        })
        .catch((er) => {
            console.log(er)
            res.send(er)
        })
}




module.exports = {

    addlanguage,
    singleLanguage

}