//// load app
const express = require('express')
const app = express();

const port = 8002;
// const {Client} = require('dotenv');

app.get('/', (req, res) => {
  res.sendFile(__dirname);
});

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`--> app is running in browser at localhost:${port} -->`)
});