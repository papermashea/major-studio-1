//// load app
// const express = require('express');
// const http = require('http');
// const fs = require('fs');
// const app = express();

import express from 'express';
import http from 'http';
import fs from 'fs';
import * as d3 from './node_modules/d3/dist/d3.js';
const app = express();

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const port = 8000;

app.get('/', (req, res) => {
  res.sendFile(__dirname);
});

app.use(express.static('node_modules'));

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`--> app is running in browser at localhost:${port} -->`)
});
