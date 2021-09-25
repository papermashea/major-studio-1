//   Register to get your Mapbox access token https://docs.mapbox.com/help/glossary/access-token/
//   Code from https://docs.mapbox.com/help/tutorials/custom-markers-gl-js/ 

mapboxgl.accessToken = 'pk.eyJ1IjoicGFwZXJtYXNoZWEiLCJhIjoiY2szbnh6bGI4MXY1cjNjbjFkMnZvcjQ1ayJ9.MKO-bDpbg-5sZ2sIN8MJ5Q';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/papermashea/cktnnz6hp0gr318liv6t0ac2u',
    center: [-73, 40],
    zoom: 6
  });

  /*** load data ***/
  async function loadData() {
    const airports = await d3.csv('data/airports.csv');

    // add markers to map
    airports.forEach(function(d) {

    // create a HTML element for each feature
    var el = document.createElement('div');
    el.className = 'marker';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el)
      .setLngLat([d.longitude, d.latitude])
      .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
      .setHTML('<h3>' + d.name + '</h3>'))
      .addTo(map);
    });
  }

  loadData();