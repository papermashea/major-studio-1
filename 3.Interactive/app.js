//// load app
const express = require('express');
const http = require('http');
const fs = require('fs');
const app = express();

const port = 8000;

app.get('/', (req, res) => {
  res.sendFile(__dirname);
});

// homepage
// app.get('/', (req, res) => {
//   res.render('index.html');
// });

// form
// app.get('/form', (req, res) => {
//   res.render('pages/form.html');
// });

// color
// app.get('/color', (req, res) => {
//   res.render('pages/color.html');
// });

app.use(express.static('node_modules'));

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`--> app is running in browser at localhost:${port} -->`)
});
