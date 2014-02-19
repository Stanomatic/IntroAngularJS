// FOLDER SCRIPTS | FOLDER filters | FILE filters.js
(function () {
    'use strict';
    var app = angular.module('app');
    app.filter('nameCase', function () {
        return function (input) {
            input = input || ''; // Error check against undefined.
            var fullName = input.split(' ');
            for (var i = 0; i < fullName.length; i++) {
                fullName[i] = fullName[i].toLowerCase();
                fullName[i] = fullName[i].charAt(0).toUpperCase() + fullName[i].slice(1);
            }
            return fullName.join(' ');
        };
    });
})();