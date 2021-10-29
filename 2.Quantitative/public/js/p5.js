let bg;
var lines;
var counts;
var total;

function preload() {
  lines = loadStrings('data/types.txt');
}

function setup() {
  createCanvas(700, 540);
  background(255);  
  var params = {
    ignoreStopWords: true,
    ignoreCase: true,
    ignorePunctuation: true
  };
  counts = RiTa.concordance(lines.join(" "),
    params); 
  total = totalValues(counts);

  textAlign(CENTER, CENTER);
  textSize(48);
  noStroke();
  fill(000);
  noLoop();
}
function draw() {
  
  for (var k in counts) {
    if (counts.hasOwnProperty(k)) {
      if (counts[k]/total > 0.001) {
        fill(0);
        textSize((counts[k]/total) * 400);
        text(k, random(width), random(height));
        // text(k,(counts[k]/total), (counts[k]/total) * -1);
      }
    }
  }
}
function totalValues(obj) {
  var total = 0;
  for (var k in obj) {
    if (obj.hasOwnProperty(k)) {
      total += obj[k];
    }
  }
  return total;
}