(function () {
    'use strict';

    var app = angular.module('app');
    app.directive('dmSliderValue', function () {
        return {
            restrict: 'AE',
            replace: true,
            template: "<div><input type='range' ng-model='aNumber' value={{aNumber}} min='100' max='2000' step='25' style='width: 140px'><br /> " +
            "Change the number in the text box to demonstrate two way binding.<br /> " +
            "<input type='text' ng-model='aNumber' min='100' max='2000' value={{aNumber}} /></div>"
        };
    });
    app.directive('dmSliderIsolatedScope', function () {
        return {
            restrict: 'AE',
            replace: true,
            template: "<div><input type='range' ng-model='aNumber' value={{aNumber}} min='100' max='2000' step='25' style='width: 140px'><br /> " +
            "<input type='text' ng-model='aNumber' min='100' max='2000' value={{aNumber}}></div>",
            // Isolated scope using an attribute theNumber - the-number.
            scope: {
                aNumber: "=theNumber"
                // theNumber (the-number inside HTML) is an attribute where we pass in a $scope property and then assign to our
                // direcitive ng-model='aNumber'
                // Comment out scope: {aNumber: "=theNumber"} and all sliders are identical.
            }
        };
    });    
})();