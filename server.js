require('dotenv').config()
const express = require('express')
const fs = require('fs')
const os = require('os')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const { showDateTime } = require('./my_modules/my_modules.js')
const PORT = process.env.PORT || 5000
const Router = require('./routes/routes')
const path = require('path')

const app = express()

// We are setting our view engine, ejs
app.set('view engine', 'ejs')

// Serving static files in express
app.use(express.static('public'))
// serving static files

app.use(express.static('public/assets'))
app.set('view engine', 'ejs')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


// connect mongodb with the server
mongoose.connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    err => {
        if (err) return console.log(err)
        console.log('The server is connected to MongoDB database')
    }
)

// Middleware which run whenever the app is running
app.use((req, res, next) => {
    const user = os.hostname
    const page = req.url
    const date = showDateTime()
    const content = `${user} access ${page} page on ${date}\n`
    fs.appendFile('log.txt', content, err => {
        if (err) throw err
        // console.log('content has been saved')
    })
    // must thing to do
    next()
})


app.use('/', Router)

// listen port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`)
})