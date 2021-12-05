var myData = [ 10, 40, 30, 50, 20 ];
var circleSpacing = 100;

function update() {
  d3.select('g.container')
    .selectAll('circle')
    .data(myData)
    .join('circle')
    .attr('cx', function(d, i) {
      return i * circleSpacing;
    })
    .attr('r', function(d) {
      return d;
    });
}

function action(type) {
  switch(type) {
    case 'add':
      myData.push(50 * Math.random());
      break;
    case 'remove':
      myData.pop();
      break;
    case 'update':
      myData = myData.map(function(d) {
        return 50 * Math.random();
      });
      break;
  }
  update();  
}

update();

