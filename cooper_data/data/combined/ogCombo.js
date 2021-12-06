const jsonConcat = require('json-concat');
const fs = require('fs');
 
jsonConcat({
    src: ["1900_1.json", "1900_2.json", "1900_3.json", "1900_4.json", "1900_5.json", "1900_6.json", "1900_7.json", "1900_8.json", "1900_9.json", "1900_10.json"],
    dest: "./allOriginal.json"
}, function (json) {
    console.log(json);
});

// jq --slurp 'map(.objects[])' curl/*.json > allObjects.json