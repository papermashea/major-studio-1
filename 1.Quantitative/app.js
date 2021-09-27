//// load app
const express = require('express')
const app = express();

const port = 8000;
// const {Client} = require('dotenv');

app.get('/', (req, res) => {
  res.sendFile(__dirname);
});

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
