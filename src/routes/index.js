const express = require('express');
//auth and user
const headerRoute = require('./headerRoute')
const workRoute = require('./workRoute')
const skillRoute = require('./skillRoute')
const languageRoute = require('./languageRoute')
const educationRoute = require('./educationRoutes')
const userRoute = require('./userRoutes')
const objectiveRoute = require('./objectiveRoutes')
const informationRoute = require('./informationRoutes')

const router = express.Router();

const routes = [

    {
        path: '/header',
        route: headerRoute
    },
    {
        path: '/work',
        route: workRoute
    },
    {
        path: '/skill',
        route: skillRoute
    },
    {
        path: '/language',
        route: languageRoute
    },
    {
        path: '/education',
        route: educationRoute
    },
    {
        path: '/user',
        route: userRoute
    },
    {
        path: '/objective',
        route: objectiveRoute
    },
    {
        path: '/information',
        route: informationRoute
    }



]

routes.forEach(element => {
    router.use(element.path, element.route)

});

module.exports = router