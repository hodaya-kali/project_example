const axios = require('axios').default;
const https = require('https');

const httpsAgent = new https.Agent({ rejectUnauthorized: false });
const express = require('express')
const app = express()
app.use(express.static('static'))
app.use('/', express.static('index.html'))


app.get('/convert', async function (req, res) {
    //have convert date
    date = await convert(req.query.date)
    console.log(date)
    res.send(date.hebrew)
})

app.listen(4565)
console.log("server is listening in port 4565")

async function convert(g_date){
    res = await axios.get(`https://www.hebcal.com/converter?cfg=json&date=${g_date}&g2h=1&strict=1`,  { httpsAgent: httpsAgent })
    return res.data
}