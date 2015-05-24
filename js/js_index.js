$(document).ready(function()
{

	google.maps.event.addDomListener(window, 'load', initialize);

});


function initialize()
{
	var mapOptions = {
          center: { lat: 28.36155, lng: -16.36935},
          zoom: 20
        };

	/*document.getElementById('map-canvas')*/

        var map = new google.maps.Map($('#map-canvas')[0],
            mapOptions);
}
      