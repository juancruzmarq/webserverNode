
const hbs = require('hbs');
const express = require('express')
const app = express()

//handlebars
hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine','hbs');
//Servir contenido estatico
app.use(express.static('public'));

// app.get('/', (req, res) => {
//         res.send('<h1>Home</h1>')
//     })

app.get('/', (req, res) => {
    res.render('index',{
        nombre: 'Juan',
        apellido: 'Marq',
        curso: 'Curso de Node'
    });
})

app.get('/generic', (req, res) => {
    res.render('generic',{
        nombre: 'Juan',
        apellido: 'Marq',
        curso: 'Curso de Node'
    });
})



app.get('/elements', (req, res) => {
    res.render('elements',{
        nombre: 'Juan',
        apellido: 'Marq',
        curso: 'Curso de Node'
    });
})

 
app.get('*', (req, res) => {
        res.sendFile(__dirname + '/public/404.html')
})
app.listen(8000)