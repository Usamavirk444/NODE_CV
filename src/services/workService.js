const db = require('../models');
const Work = db.work;



//Create Category
const createWork = async(req) => {


    const newWork = await Work.create({
        user_id: req.body.user_id,
        works_name1: req.body.works_name1,
        work_start1: req.body.work_start1,
        work_end1: req.body.work_end1,
        work_desc1: req.body.work_desc1,
        work_name2: req.body.work_name2,
        work_start2: req.body.work_start2,
        work_end2: req.body.work_end2,
        work_desc2: req.body.work_desc2,

    })
    return newWork // return the value to controller


}

//Create Category
const singleHeader = async(req) => {

    //    console.log(req.params.id)
    const oneHeader = await Work.findByPk(req.params.id)
    return oneHeader // return the value to controller

}




module.exports = {
    createWork,
    singleHeader
}