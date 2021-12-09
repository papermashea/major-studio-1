d3.selectAll(".form-check-input").on("change", getWords);

var words = [];
function getWords(){
    let val = d3.select('input[name="exampleRadios"]:checked').property("value");
    console.log(val)
    while (words.length > 0) {
        words.pop();
    }
    if(val == "medium"){
      for (var i = 0; i < data.length; i++) {        
        let medium = (data[i].media).replace(/[!\.,:;\?]/g, '')
            .replace(' on ', " ").replace(' and ', " ").replace(' with ', " ").replace(' in ', " ")
            .split(' ')
        // let medium = mediums
        words.push.apply(words, medium)
      }
      } else {
      for (var i = 0; i < data.length; i++) {        
        let type = data[i].type
        words.push(type)
      }
    }
// console.log(words)
}

    // var medias = [];
    //   for (var i = 0; i < data.length; i++) {        
    //     let medium = (data[i].media)
                .replace(/[!\.,:;\?]/g, '').replace(' on ', " ").replace(' and ', " ").replace(' with ', " ").replace(' in ', " ").split(' ')
    //     medias.push.apply(medias, medium)
    //   }
    //   // console.log(medias)