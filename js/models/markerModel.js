define([
	'jquery', 
	'underscore', 
	'backbone'
	
],  function($, _, Backbone){

		var MarkerModel = Backbone.Model.extend({
			
			lat: 53.89,
			lon: 27.56666700000026,
			icon: 'images/Gas-Soldier-icon_40x40.png',

			initialize: function() {

				console.log("init marker model---->");

			},

		});

		return MarkerModel;
});