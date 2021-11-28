var typeCounts;
var typeTotal;

  // rita grammar
    var params = {
      ignoreStopWords: true,
      ignoreCase: true,
      ignorePunctuation: true
    };
    
    typeCounts = RiTa.concordance(types.join(" "), params); 
    // console.log(typeCounts);

    typeTotal = totalValues(typeCounts);
    // console.log("total typeCounts = " + typeTotal)

    for (var k in typeCounts) {
      if (typeCounts.hasOwnProperty(k)) {
        if (typeCounts[k]/typeTotal > .0001) {
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