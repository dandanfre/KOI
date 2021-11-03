function initMap(){
    const bassengbakken = { lat: 63.4356808, lng: 10.4143181}
    var mapProp = {
        center: bassengbakken,
        zoom: 15,
    };
    const map = new google.maps.Map(document.getElementById("map"),mapProp);

    new google.maps.Marker({
        position: bassengbakken,
        map: map,
      });
}


