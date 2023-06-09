const express = require('express')
const hbs = require('hbs');
require('dotenv').config()

const port = process.env.PORT
const app = express()

app.use(express.static('public'))

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.get('/', function(req, res) {
    res.render('home', {
        titulo: 'Curso de Node',
        nombre: 'Iván Fonseca'
    })
})

app.get('/generic', function(req, res) {
    res.render('generic', {
        titulo: 'Curso de Node',
        nombre: 'Iván Fonseca'
    })
})

app.get('/elements', function(req, res) {
    res.render('elements', {
        titulo: 'Curso de Node',
        nombre: 'Iván Fonseca'
    })
})

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port)