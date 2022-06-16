const objservice = require('../services/objectiveServices')


const createObjective = async(req, res) => {
    await objservice.crobj(req)
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

module.exports = { createObjective }