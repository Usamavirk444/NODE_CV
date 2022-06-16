const infoService = require('../services/infoService');

const createInfo = async(req, res) => {
    await infoService.createinfo(req)
        .then((result) => {

            console.log(result);
            res.send(result)

        }).catch((err) => {
            console.log(err);
            res.send(err)
        });
}

const getinfo = async(req, res) => {
    await infoservice.getinfo(req)
        .then((result) => {

            console.log(result);
            res.send(result)

        }).catch((err) => {
            console.log(err);
            res.send(err)
        });
}

module.exports = { createInfo, getinfo }