import nodeMailer from 'nodemailer';

import dotenv from 'dotenv';
dotenv.config();

const adminEmail = process.env.adminEmail
const adminPassword = process.env.adminPassword

const mailHost = 'smtp.gmail.com'
const mailPort = 587

const sendMail = (to, subject, htmlContent) => {
    const transporter = nodeMailer.createTransport({
        host: mailHost,
        port: mailPort,
        secure: false,
        auth: {
            user: adminEmail,
            pass: adminPassword
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    const options = {
        from: adminEmail,
        to: to,
        subject: subject,
        html: htmlContent
    }

    return transporter.sendMail(options)
}


export default {sendMail: sendMail}



