define([
    'jquery',
    'underscore',
    'backbone',    
    'text!templates/homeTemplate.html',
	'models/homeModel',
	'common/googleMapsUtility'

], function($, _, Backbone, homeTemplate, HomeModel, GoogleMapsUtility) {
	
	var HomeView = Backbone.View.extend({

		events: {
			"click label.type-marker" : "handlerTypeMarker",
			"click input#AddMarker" : "handlerAddMarker",
		},

		mapCanvas: '#map-container',

		initialize: function() {

			_.bindAll(this, 'render');
			this.template = _.template(homeTemplate, this.model);
		},

		render: function() {

			console.log("render home view---->")

			this.$el.html(this.template);

			return this;
		},

		addMapToCanvas : function (centreLat, centreLon) {

			var zoomSize = 12;
			this.map = GoogleMapsUtility.addMapToCanvas($(this.mapCanvas), centreLat, centreLon, zoomSize);
			var	geocoder = new google.maps.Geocoder();
			var latlng = new google.maps.LatLng(centreLat, centreLon);
			geocoder.geocode({'latLng': latlng}, function(results, status) {
				if (status == google.maps.GeocoderStatus.OK) {
				} 
			});

			GoogleMapsUtility.addHandlerMapRightClick(this.map,'#tbLatitude', '#tbLongtitude');

			var request = {
			    location: pyrmont,
			    radius: 500,
			    types: ['store']
			  };
			placesList = $('.list-added-markers')[0];
			var service = new google.maps.places.PlacesService(map)
			service.nearbySearch(request, callback);
	
		},

		handlerTypeMarker: function(event){

			GoogleMapsUtility.mtype = $(event.target).children()[0].id;
		  	if(GoogleMapsUtility.mtype === 'point'){
		  	
		  		GoogleMapsUtility.micon = 'images/Gas-Soldier-icon_40x40.png';
		  	
			} else {
				
				GoogleMapsUtility.micon = 'images/Gas_Soldier_with_Weapon_40x40.png';

			}
			GoogleMapsUtility.updateMarkerIcon();
		},

		handlerAddMarker: function(event){

/*			$('.list-added-markers').prepend($("<a href=\"javascript:void(0);\" class=\"list-group-item\">			  
        			<span class=\"badge\">14</span>
				  Cras justo odio
				</a>");*/
		},

		
		updateMarkerList: function(){
			$("#name").html("Person: " + this.model.first_name + " " + this.model.last_name);
		}
	});		
	
	return HomeView;
});

function callback(results, status, pagination) {
  if (status != google.maps.places.PlacesServiceStatus.OK) {
    return;
  } else {
    createMarkers(results);

    if (pagination.hasNextPage) {
      var moreButton = document.getElementById('more');

      moreButton.disabled = false;

      google.maps.event.addDomListenerOnce(moreButton, 'click',
          function() {
        moreButton.disabled = true;
        pagination.nextPage();
      });
    }
  }
}

