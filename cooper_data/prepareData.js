// // this one condenses a saved json
// 'use strict';

// const fs = require('fs')
// const request = require('request');

// function readFilesSync(dir) {
//   const allObjects = [];

//   fs.readdirSync(dir).forEach(filename => {
//     const name = path.parse(filename).name;
//     const ext = path.parse(filename).ext;
//     const filepath = path.resolve(dir, filename);
//     const stat = fs.statSync(filepath);
//     const isFile = stat.isFile();

//     if (isFile) files.push({ filepath, name, ext, stat });
//   });

//   files.sort((a, b) => {
//     // natural sort alphanumeric strings
//     // https://stackoverflow.com/a/38641281
//     return a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' });
//   });

//   return files;
// }


jq -s $nonLoop/*.json > $allObjects


jq -s $nonLoop/*.json 

jq -n '[inputs.[]]' 1821-1921*.json

jq -s $nonLoop/1821-1921*.json flatten

jq -n '[inputs | .. | select(type=="array" and .!=[] and all(.[]; type!="array"))]' nonLoop/1821-1921*.json > allObjects0.json

jq -n 'inputs | .. | select(type=="array" and .!=[] and all(.[]; type!="array"))' nonLoop/1821-1921*.json > allObjects2.json

jq -n 'inputs | ..' nonLoop/1821-1921*.json > allObjects3.json


jq -n 'inputs | .. | select(type=="object" and .!=[] and all(.[]; type!="array"))' nonLoop/1821-1921*.json > allObjects4.json

jq -n 'inputs | .. | select(type=="array")' nonLoop/1821-1921*.json > allObjects6.json

jq -n 'inputs | .. | select(type=="object")' nonLoop/1821-1921*.json > allObjects7.json

jq -n 'inputs | select(type=="array")' nonLoop/1821-1921*.json > allObjects8.json

jq -n '[inputs| .. | select(type=="object")]' nonLoop/1821-1921*.json > allObjects.json

jq -n '[inputs| .. | select(type=="object" and .country_id!= null)]' nonLoop/1821-1921*.json > allObjects11.json

jq -n '[inputs| .. | select(type=="object" and . != null)]' nonLoop/1821-1921*.json > allObjects13.json

jq -n '[inputs| .. | select(type=="object" and .country_id!= null)]' nonLoop/1821-1921*.json > allObjects.json

