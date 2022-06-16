const userService = require('../services/userServices')
const finduser = async(req, res) => {
    const user = await userService.finduser(req)
    console.log(user);
    res.send(user)
}

const creatUser = async(req, res) => {
    await userService.addUser(req)
        .then((result) => {
            res.send(result)
        })
        .catch((error) => {
            res.send(error)
        })
}


const login = async(req, res) => {
    await userService.loginUser(req)
        .then((result) => {
            res.send(result)
        })
        .catch((error) => {
            res.send(error)
        })

}
module.exports = { creatUser, finduser, login }