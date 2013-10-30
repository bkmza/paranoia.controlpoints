define([
	'jquery', 
	'underscore', 
	'backbone',
	'collections/markerCollection'
	
],  function($, _, Backbone, MarkerCollection){

		var HomeModel = Backbone.Model.extend({
			
			lat: 53.89,
			lon: 27.56666700000026,

			initialize: function() {

				console.log("init home model---->");

				this._markerCollection = new MarkerCollection.extend({});

			},

		});

		return HomeModel;
});