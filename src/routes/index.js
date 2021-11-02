import express from 'express'
const router = express.Router()

import homeController from '../controllers/homeController.js';
import emailController from '../controllers/emailController.js'

var initAPIs = (app) => {
    router.get('/', homeController.getHome)

    router.post('/send-email', emailController.sendMail)

    return app.use('/', router)
}

export default initAPIs