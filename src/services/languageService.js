const db = require('../models');
const Language = db.language;



//Create Category
const createLanguage = async(req) => {

    // console.log(name + '=' + img) just checking its cooming 

    // after checking making req to create category in db
    const newLanguage = await Language.create({
        user_id: req.body.user_id,
        name1: req.body.name1,
        name2: req.body.name2,
        name3: req.body.name3,


    })
    return newLanguage // return the value to controller


}

//Create Category
const singleLanguage = async(req) => {

    //    console.log(req.params.id)
    const oneLanguage = await Header.findByPk(req.params.id)
    return oneLanguage // return the value to controller

}




module.exports = {
    createLanguage,
    singleLanguage
}