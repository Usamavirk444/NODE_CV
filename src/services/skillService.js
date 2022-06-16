const db = require('../models');
const Skill = db.skill;



//Create Category
const createSkill = async(req) => {

    // console.log(name + '=' + img) just checking its cooming 

    // after checking making req to create category in db
    const newSkill = await Skill.create({
        user_id: req.body.user_id,
        name1: req.body.name1,
        name2: req.body.name2,
        name3: req.body.name3,
        name4: req.body.name4,

    })
    return newSkill // return the value to controller


}

//Create Category
const singleSkill = async(req) => {

    //    console.log(req.params.id)
    const oneHeader = await Header.findByPk(req.params.id)
    return oneHeader // return the value to controller

}




module.exports = {
    createSkill,
    singleSkill
}