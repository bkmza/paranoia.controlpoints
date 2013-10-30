define([
	'jquery', 
	'underscore', 
	'backbone',
	'models/markerModel'
	
],  function($, _, Backbone, MarkerModel){

		var MarkerCollection = Backbone.Model.extend({
			
			initialize: function() {

				console.log("init marker collection---->");
				console.log(MarkerModel)
				this.model = new MarkerModel.extend({});

			},

		});

		return MarkerCollection;
});