function myMap() {
  var myLatLng = {lat: 48.190909, lng: 16.337674};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: myLatLng

  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Mount Everest - Travel Agency'
  });
}


$('.carousel').carousel({
    interval: 2000
})
