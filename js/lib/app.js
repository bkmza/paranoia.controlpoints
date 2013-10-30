requirejs.config({
    baseUrl: "js",
    paths: {
        underscore: 'lib/underscore',
        backbone: 'lib/backbone',
        text: 'lib/text',
        async: 'lib/async',
    },
    shim: {
        'backbone': {
            //These script dependencies should be loaded before loading
            //backbone.js
            deps: ['underscore', 'jquery'],
            //Once loaded, use the global 'Backbone' as the
            //module value.
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        }
    }
});

//Then, later in a separate file, call it 'MyModel.js', a module is
//defined, specifying 'backbone' as a dependency. RequireJS will use
//the shim config to properly load 'backbone' and give a local
//reference to this module. The global Backbone will still exist on
//the page too.
define([
    'jquery', 
    'underscore', 
    'backbone', 
    'models/homeModel', 
    'views/homeView',
    'views/googleMapsView'
], function ($, _, Backbone, HomeModel, HomeView, GoogleMapsView) {
    
    console.log("start run method---->")

    var homeModel = new HomeModel();
    var homeView = new HomeView({
        model: homeModel,
        el: '.page-content'
    });
    homeView.render();
    homeView.addMapToCanvas(homeModel.lat, homeModel.lon);

    console.log("finished run method---->")

});