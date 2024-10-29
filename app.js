const express = require('express')
const hbs = require('hbs')
const path = require('path');
require('dotenv').config();

const app = express()
const port = process.env.PORT

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


hbs.registerPartials(__dirname + '/views/partials')

//app.use(express.static('public'));
// Usa la ruta absoluta para mayor seguridad
app.use(express.static(path.join(__dirname, 'public_html')));
//app.use(express.static('public_html'))

app.get('/', (req, res)=>{
    res.render('home', {
        nombre: 'Cristian',
        apellido: 'Mendoza',
        nombreD: 'Cristian Mendoza',
        nombrecompleto: 'CRISTIAN MENDOZA',
        carne: '2290-21-20201',
        titulo: 'Portafolio',
        profesion: 'Ingenieria en Sistemas',
        ocupacion: 'Estudiante de Ingenieria'
    })
})
app.get('/sobremi', (req, res) => {
    res.render('sobremi', {
        nombre: 'Cristian',
        apellido: 'Mendoza',
        titulo: 'Sobre mi'
    });
});

app.get('/habilidades', (req, res) => {
    res.render('habilidades', {
        nombre: 'Cristian',
        apellido: 'Mendoza',
        titulo: 'Habilidades'
    });
});

app.get('/curriculum', (req, res) => {
    res.render('curriculum', {
        nombre: 'Cristian',
        apellido: 'Mendoza',
        titulo: 'curriculum'
    });
});

app.get('/portafolio', (req, res) => {
    res.render('portafolio', {
        nombre: 'Cristian',
        apellido: 'Mendoza',
        titulo: 'Portafolio'
    });
});

app.get('/veterinaria', (req, res) => {
    res.render('veterinaria', {
        nombre: 'Cristian',
        apellido: 'Mendoza',
        titulo: 'Portafolio'
    });
});

app.get('/administrador', (req, res) => {
    res.render('administrador', {
        nombre: 'Cristian',
        apellido: 'Mendoza',
        titulo: 'Portafolio'
    });
});

app.get('/paginaWeb', (req, res) => {
    res.render('paginaWeb', {
        nombre: 'Cristian',
        apellido: 'Mendoza',
        titulo: 'Portafolio'
    });
});

app.get('/compiladores', (req, res) => {
    res.render('compiladores', {
        nombre: 'Cristian',
        apellido: 'Mendoza',
        titulo: 'Portafolio'
    });
});

app.get('/raspberrypi', (req, res) => {
    res.render('raspberrypi', {
        nombre: 'Cristian',
        apellido: 'Mendoza',
        titulo: 'Portafolio'
    });
});

app.get('/YARGS', (req, res) => {
    res.render('YARGS', {
        nombre: 'Cristian',
        apellido: 'Mendoza',
        titulo: 'Portafolio'
    });
});

app.get('/webEtica', (req, res) => {
    res.render('webEtica', {
        nombre: 'Cristian',
        apellido: 'Mendoza',
        titulo: 'Portafolio'
    });
});

app.get('/MRU&MRUV', (req, res) => {
    res.render('MRU&MRUV', {
        nombre: 'Cristian',
        apellido: 'Mendoza',
        titulo: 'Portafolio'
    });
});

app.get('*', (req, res)=>{
    res.sendFile(__dirname + '/public_html/404.html')
})

app.listen(port, () => {
    console.log(`Ejemplo escuchando en http://localhost:${port}`);
})