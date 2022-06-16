const db = require('../models')
const Objective = db.objective

const crobj = async(req) => {
    const user_id = req.body.user_id
    const obj_desc = req.body.obj_desc

    const create = await Objective.create({ user_id, obj_desc })
    return create
}
module.exports = { crobj }