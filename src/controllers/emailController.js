import mailer from '../utils/mailer.js'

var sendMail = async(req, res) => {
    try {
        const { to, subject, body } = req.body

        await mailer.sendMail(to, subject, body)

        res.send('<h1>Your email has been sent successfully</h1>')
    } catch(error) {
        console.log(error)
        res.send(error)
    }
}

export default {sendMail: sendMail}

