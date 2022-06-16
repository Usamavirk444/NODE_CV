const db = require('../models');
const Info = db.information

const createinfo = async(req) => {
    const user_id = req.body.user_id
    const user_DOB = req.body.user_DOB
    const user_phone = req.body.user_phone
    const user_email = req.body.user_email
    const user_location = req.body.user_location
    const user_link = req.body.user_link

    const createinfo = await Info.create({
        user_id,
        user_DOB,
        user_phone,
        user_email,
        user_location,
        user_link
    })
    return createinfo
}

const getinfo = async(req) => {
    const info = await db.findAll({
        where: { user_id: req.params.user_id }
    })
    return info
}

module.exports = { createinfo, getinfo }