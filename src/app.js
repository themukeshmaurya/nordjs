const express = require('express')
const app = express()
const port = process.env.PORT || 4000;
const path = require('path')

const static_path = path.join(__dirname, '../public')

app.use(express.static(static_path))

app.get('/', (req, res) => {
    res.send("Welcome Home Page")
})

app.get('/about', (req, res) => {
    res.send("Welcome About Page")
})

app.get('/wether', (req, res) => {
    res.send("Welcome Wether Page")
})

app.get('*', (req, res) => {
    res.send("404 Page Not Found")
})


app.listen(port, () => {
    console.log(`${port} server is runing...`)
})