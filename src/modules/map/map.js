var lat;
var lng;
var location;
var startLat;
var startLng;

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        startLat = position.coords.latitude;
        startLng = position.coords.longitude;
        console.log(startLat, startLng);
        initMap(startLat, startLng);
    });
} else {
    alert("Geolocation is not supported by this browser.");
}



function geocode(predict) {

    axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
            params: {
                address: predict,
                key: 'AIzaSyDuJS7fQ2SPtOuHckmQUPNZqplxULs4taY'
            }
        })
        .then(function (response) {
            // Log full response
            console.log(response);

            lat = response.data.results[0].geometry.location.lat;
            lng = response.data.results[0].geometry.location.lng;
            addMarker(lat, lng);

        })
        .catch(function (error) {
            console.log(error);
        });
}

function initMap(lat, lng) {
    initialize();
    var options = {
        zoom: 14,
        center: {
            lat: lat,
            lng: lng
        }
    }
    // New map
    var map = new google.maps.Map(document.getElementById('map'), options);

    // call marker function with the location given
    addMarker(lat, lng);

    // Add Marker Function
    function addMarker(lat, lng) {
        var marker = new google.maps.Marker({
            position: {
                lat: lat,
                lng: lng
            },
            map: map,
            //icon:props.iconImage
        });
    }

    $('.spanny').click(function () {
        $('.destin').append('<input type="text" name="destination" id="destin3">');
        $('.dots-map').append('<i class="fa fa-ellipsis-v fa-2x dots" aria-hidden="true"></i>')

    });
    $('#passage').click(function () {
        $('.destin span').append('<input type="text" name="destination" class="stop-place" id="destin3">');
        $('.dots-map').append('<i class="fa fa-ellipsis-v fa-2x dots" aria-hidden="true"></i>');



    });
}




function initialize() {
    var input = document.getElementById('pac-input');
    var autocomplete = new google.maps.places.Autocomplete(input);
    google.maps.event.addListener(autocomplete, 'place_changed', function () {
        var place = autocomplete.getPlace();
        lat = place.geometry.location.lat();
        lon = place.geometry.location.lng();
        $("#pac-input").html(place.formatted_address);
        $("#startLoc").html(place.formatted_address);
        initialize1();
        
    });
}

function initialize1() {
    var input = document.getElementById('destin2');
    var autocomplete = new google.maps.places.Autocomplete(input);
    google.maps.event.addListener(autocomplete, 'place_changed', function () {
        var place = autocomplete.getPlace();
        lat = place.geometry.location.lat();
        lon = place.geometry.location.lng();
        $("#destin2").html(place.formatted_address);
       
    });
}
