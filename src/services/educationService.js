const db = require('../models')
const Education = db.education

const createEducation = async(req, res) => {
    const user_id = req.body.user_id
    const degree_name1 = req.body.degree_name1
    const start_date1 = req.body.start_date1
    const end_date1 = req.body.end_date1
    const degree_name2 = req.body.degree_name1
    const start_date2 = req.body.start_date2
    const end_date2 = req.body.end_date2


    const newEducation = await Education.create({ user_id, degree_name1, start_date1, end_date1, degree_name2, start_date2, end_date2 })
        // console.log(user);
        // res.send(user)
    return newEducation
}
module.exports = { createEducation }