import path from 'path';

const __dirname = path.resolve()

var getHome = (req, res) => {
    return res.sendFile(path.join(`${__dirname}/src/views/master.html`))
}

export default {getHome: getHome}
