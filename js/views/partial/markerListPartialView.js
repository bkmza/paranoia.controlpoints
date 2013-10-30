define([
    'jquery',
    'underscore',
    'backbone',    
    'text!templates/homeTemplate.html',
	'models/homeModel',
	'common/googleMapsUtility'

], function($, _, Backbone, homeTemplate, HomeModel, GoogleMapsUtility) {
	
	var MarkerListPartialView = Backbone.View.extend({

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
		}
	});		
	
	return HomeView;
});
