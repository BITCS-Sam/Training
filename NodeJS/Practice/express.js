const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    console.log(req.query.name)
    res.send('About Page')
})

//create a post request on about page which take username and return About username
app.post('/about', (req, res) => {
    const username = req.query.username
    res.send(`About ${username}`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})