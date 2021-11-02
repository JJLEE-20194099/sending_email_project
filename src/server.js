import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express()


import initAPIs from './routes/index.js';

app.use(express.urlencoded({extended: true}))



initAPIs(app)

const port = 3002
app.listen(port, () => {
    console.log(`Running at localhost:${port}/`)
})

