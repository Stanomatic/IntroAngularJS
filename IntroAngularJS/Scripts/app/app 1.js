/*#######################################################################
    Normally like to break AngularJS apps into the following folder structure
  at a minimum:

  /app
      /controllers      
      /directives
      /services
      /views
  #######################################################################*/

// Javascript Module Pattern
(function () {
    'use strict';
    var app = angular.module('app', ['ngRoute']); // AngularJS dependency injection.

    //This configures the routes and associates each route with a view and a controller
    app.config(function ($routeProvider) {
        $routeProvider
            .when('/',
                {
                    controller: 'demoController',
                    templateUrl: '/Scripts/app/views/home.html'
                })
            .when('/slider',
                {
                    controller: 'demoController',
                    templateUrl: '/Scripts/app/views/slider.html'
                })
            .when('/hello',
                {
                    controller: 'demoController',
                    templateUrl: '/Scripts/app/views/hello.html'
                })
            .when('/controller',
                {
                    controller: 'demoController',
                    templateUrl: '/Scripts/app/views/controller.html'
                })
            .when('/mini',
                {
                    controller: 'demoController',
                    templateUrl: '/Scripts/app/views/minification.html'
                })
            .when('/directiveslider',
                {
                    controller: 'demoController',
                    templateUrl: '/Scripts/app/views/directiveSlider.html'
                })
            .when('/directivesliderisoscope',
                {
                    controller: 'demoController',
                    templateUrl: '/Scripts/app/views/directiveIsolatedScope.html'
                })
            .when('/customfilter',
                {
                    controller: 'demoController',
                    templateUrl: '/Scripts/app/views/customfilter.html'
                })
            .when('/providers',
                {
                    controller: 'providersController',
                    templateUrl: '/Scripts/app/views/providerHome.html'
                })
            .otherwise({ redirectTo: '/' }); // Default
    });
})();

// TODO: Need to work through ngroute in MVC Areas
// http://stackoverflow.com/questions/20730102/asp-net-mvc-and-angularjs