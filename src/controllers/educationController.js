const educationService = require('../services/educationService');

const getAlledu = async(req, res) => {
    const findUser = await db.education.findAll()
    console.log(user);
    res.send(findUser)
}

const createEducation = async(req, res) => {
    await educationService.createEducation(req)
        .then((result) => {
            if (result) {
                console.log(result);
                res.send(result)
            }
        }).catch((err) => {
            console.log(err);
            res.send(err)
        });

}

module.exports = { getAlledu, createEducation }