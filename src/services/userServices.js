const db = require('../models')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const User = db.user

const addUser = async(req) => {
    console.log("ok");
    const bpass = await bcrypt.hash(req.body.password, 3);
    // console.log(bpass)            
    const name = req.body.name;
    const email = req.body.email;
    const password = bpass;
    const newUser = await User.create({ name, email, password })
        // console.log(newUser)

    return newUser
}
const finduser = async(req) => {
    console.log("ok");
    const email = req.body.email
    const password = req.body.password
    const user = await db.user.findOne({ email, password })
    return user
}


const loginUser = async(req, res) => {
    const { email, password } = req.body; // getting value
    const user = await User.findOne({ where: { email: email } }) //find email
    const id = user.id; // find id 
    // console.log(user.id + " " + user.email)

    const cpass = await bcrypt.compare(password, user.password) // compare pass
    console.log(cpass);

    if (cpass == true) {
        // generate Token with 2 days expiry age, payload is user id
        const tokenAge = 2 * 24 * 60 * 60 * 1000;
        const token = jwt.sign({ id }, 'tokensecret', {
            expiresIn: 2 * 24 * 60 * 60 //expires in 2 days
        });

        //send as cookie, httpOnly from server
        res.cookie('jwt', token, { httpOnly: true, maxAge: tokenAge });
        res.status(200)
            .json({
                status: true,
                data: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    isAdmin: user.isAdmin
                }
            });

    } else {
        res.send('email or password is incoorect')
    }
}

module.exports = { addUser, finduser, loginUser }