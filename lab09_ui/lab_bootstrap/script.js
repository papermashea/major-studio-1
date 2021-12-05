var myCarousel = document.getElementById('carouselExampleIndicators')

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

myCarousel.addEventListener('slide.bs.carousel', function () {
    document.style.body.background = getRandomColor();
})