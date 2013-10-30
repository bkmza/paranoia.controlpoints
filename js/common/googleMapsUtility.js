define(
	[
    "async!http://maps.googleapis.com/maps/api/js?sensor=false&libraries=drawing&language=en!callback"
	],
	
	function () {

	    var GoogleMaps = {

	    	marker: undefined,
	    	mtype: undefined,
	    	micon: undefined,

	        addMapToCanvas: function (mapCanvas, lat, lon, zoomSize) {
	            var myOptions = {
	                center: new google.maps.LatLng(lat, lon),
	                zoom: zoomSize,
	                mapTypeId: google.maps.MapTypeId.ROADMAP,
					panControl: true,
					zoomControl: true,
					scaleControl: true
	            };

	            var map = new google.maps.Map(mapCanvas[0], myOptions);

	            var drawingManager = new google.maps.drawing.DrawingManager({
				  drawingMode: google.maps.drawing.OverlayType.MARKER,
				  drawingControl: true,
				  drawingControlOptions: {
				    position: google.maps.ControlPosition.TOP_CENTER,
				    drawingModes: [
				    	google.maps.drawing.OverlayType.CIRCLE,
				    	google.maps.drawing.OverlayType.POLYGON
				    	]
				  },
				  markerOptions: {
				    icon: new google.maps.MarkerImage('http://www.example.com/icon.png')
				  },
				  circleOptions: {
				    fillColor: '#ffff00',
				    fillOpacity: 0.3,
				    strokeWeight: 5,
				    clickable: false,
				    zIndex: 1,
				    editable: true
				  },
				  polygonOptions: {
				  	fillColor: '#1E90FF',
				  	fillOpacity: 0.3,
				  	clickable: true,
				  	zIndex: 1,
				  	editable: true,
				  	draggable: true,
				  	geodesic: true
				  }
				});
				drawingManager.setMap(map);

	            return map;
	        },

	        addHandlerMapRightClick: function(map, latTextBox, lonTextBox){

	        	var that = this;

				google.maps.event.addListener(map, "rightclick", function(event) {
				    var lat = event.latLng.lat(),
				        lng = event.latLng.lng(),
				        position = new google.maps.LatLng(lat, lng);
				    
				    this.micon = 'images/Gas-Soldier-icon_40x40.png';

				    if(typeof that.marker === 'undefined'){
					    that.marker = new google.maps.Marker({
					      position: position,
					      map: map,
					      title:"Hello World!",
					      icon: this.micon
					  	});	
				    }
				    else{
				    	that.marker.setPosition(position);	
				    }

				  	$(latTextBox).val(lat);
				    $(lonTextBox).val(lng);
				});
        	},

        	updateMarkerIcon: function(){

        		this.marker.setIcon(this.micon);

        	}
	    };
	    return GoogleMaps;
	}
);