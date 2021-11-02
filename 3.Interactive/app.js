//// load app
const express = require('express')
const app = express();

const port = 8000;
// const {Client} = require('dotenv');
// const contentType = request.getHeader('content-type');

app.get('/', (req, res) => {
  res.sendFile(__dirname);
  // req.json();
  // res.json();
});

// homepage
app.get('/', (req, res) => {
  res.render('index.html');
});

// form
app.get('/form', (req, res) => {
  res.render('pages/form');
});

// color
app.get('/color', (req, res) => {
  res.render('pages/color');
});

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`--> app is running in browser at localhost:${port} -->`)
});
