const db = require('../models');
const Header = db.header;



//Create Category
const createHeader = async(req) => {

    // console.log(name + '=' + img) just checking its cooming 

    // after checking making req to create category in db
    const newHeader = await Header.create({
        user_id: req.body.user_id,
        name: req.body.name,
        // Image: req.file.filename,
        professional: req.body.professional
    })
    return newHeader // return the value to controller


}

//Create Category
const singleHeader = async(req) => {

    //    console.log(req.params.id)
    const oneHeader = await Header.findByPk(req.params.id)
    return oneHeader // return the value to controller

}




module.exports = {
    createHeader,
    singleHeader
}