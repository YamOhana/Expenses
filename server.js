

const express = require('express')
const moment = require('moment')
const path = require('path')
const bodyParser = require('body-parser')
const api = require('./server/routes/api')

const app = express()


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));




app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))





const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/expensesDB', { useNewUrlParser: true, useUnifiedTopology: true })


// //Run Once to load data
// const expensesData = require('./expenses.json')
// const Expense = require('./model/Expenses')
// expensesData.forEach(exp => {
//     const e = new Expense(exp)
//     e.save()
// });






app.use('/', api)


app.listen(3000, function () {
    console.log("Server running on 3000")
})


