(function () {
    'use strict';

    var app = angular.module('app');
    // Array for pre-minifier - Minification.
    app.factory('demoFactory', ['$http', function ($http) {

        return {
            // The business logic
            getTheDate: function () {
                return Date.now();
            }
        };
    }]);

    app.value('theCount', 10);

    app.factory('providerFactory', ['$http', 'theCount', function ($http, theCount) {
        return {
            theCount: theCount,

            // The business logic
            increment: function (quantity) {
                this.theCount += quantity;
            },
            
            decrement: function (quantity) {
                this.theCount -= quantity;
            }
        };
    }]);

    app.service('providerService', ['theCount', function (theCount) {
        this.theCount = theCount;
        this.increment = function (quantity) {
            this.theCount += quantity;
        };
        this.decrement = function (quantity) {
            this.theCount -= quantity;
        };
    }]);
})();