let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 35.357871, lng: -119.043732 },
    zoom: 11
  });
}

initMap();
