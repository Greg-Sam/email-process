
require('dotenv').config()

const express = require('express')
// var cors = require('cors')
const { prototype } = require('module')


const { join } = require('path')

const app = express()
// app.use(cors())

// Connect Database
app.use(express.urlencoded({ extended: true }))

app.use(express.json())



app.use(require('./routes'))



let port = process.env.PORT || 5000
require('./db')
.then(() => app.listen(port))
.catch(err => console.log(err))
console.log(`connected on port ${port}`)



