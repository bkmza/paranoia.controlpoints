define([ 
		'jquery',
		'underscore',
		'backbone',   
		'common/googleMapsUtility'
],
	function($, _, Backbone, GoogleMapsUtility) {
	
		var arrowOnMainMap = _.extend({}, Backbone.Events);
				
		var GoogleMapsView = Backbone.View.extend({

			events: {
				
			},
		
			initialize: function() {		
				this.renderedMarkers = [];

				_.bindAll(this, 'render');
				
				//GoogleMapsView.mapCanvas = this.options.mapElement;
			},
			
			addMapToCanvas : function (centreLat, centreLon) {

			    // set main map zoom size
				var zoomString = $("#zoomLevel").html();
				var zoomSize = 15;
				if (zoomString.length > 0)g
				{
					var zoomDigit = -1;
					zoomDigit = parseInt(zoomString, 10);
					if (zoomDigit != -1)
						zoomSize = zoomDigit;
				}
				
				GoogleMapsView.map = GoogleMapsUtility.addMapToCanvas( GoogleMapsView.mapCanvas.get( 0 ), centreLat, centreLon, zoomSize);
				
				var	geocoder = new google.maps.Geocoder();
				var latlng = new google.maps.LatLng(centreLat, centreLon);
				geocoder.geocode({'latLng': latlng}, function(results, status) {
					if (status == google.maps.GeocoderStatus.OK) {
					} 
				});
				this.markers = GoogleMapsUtility.generateMarkers(GoogleMapsView.map, this.collection);
			},
			
			render: function() {
				//this.toggleMap(this.model.get("showMap"), this.model.get("toggleMapCallback"));
				return this;
			}
		});
		return GoogleMapsView;
	}
);


