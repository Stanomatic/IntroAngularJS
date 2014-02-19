// Controllers purpose - 
// Set up the initial state of the $scope object.
// Add behavior to the $scope object.
// Coordinate interaction between View and Model

// Module pattern
(function () {
    'use strict';

    var app = angular.module('app');

    // Minification works in this instance but nothing is gained as the minifier will not
    // shrink the function names and p arameters
    // (function(){\'use strict\'; var app = angular.module(\'app\'); function demoController($scope,demoFactory){$scope.helloWorldMessage = \'Hello World\';$scope.nameOfUserGroup = \'Boulder .NET User Group\'; $scope.whatAmI = \'I am a factory\'; $scope.thedate ={};$scope.theDate = demoFactory.getTheDate();};app.controller(\'demoController\',demoController);     })();
    //function demoController($scope, demoFactory) {
    //    // Hello World example
    //    $scope.helloWorldMessage = 'Hello World';
    //    $scope.nameOfUserGroup = 'Boulder .NET User Group';

    //    // Minification
    //    $scope.whatAmI = 'I am a factory';

    //    // Copyright on footer
    //    $scope.thedate = {};
    //    $scope.theDate = demoFactory.getTheDate();
    //};
    //app.controller('demoController', demoController);


    // Use an array inside the controller function to safe gaurd against minification.
    // NODE - install ngmin to pre-minifier your js files. Example: $ npm install -g ngmin
    // https://github.com/btford/ngmin
    // To pri-minifier: $ ngmin app.js app.min.js
    // Online minifier http://jscompress.com/, http://www.minifier.com/ and http://marijnhaverbeke.nl/uglifyjs. Others exists, query the Internet.
    //!function(){"use strict";var a=angular.module("app");a.controller("demoController",["$scope","demoFactory",function(a,b){a.helloWorldMessage="Hello World",a.nameOfUserGroup="Boulder .NET User Group",a.whatAmI="I am a factory",a.thedate={},a.theDate=b.getTheDate()}])}();
    app.controller('demoController', ['$scope', 'demoFactory', function ($scope, demoFactory) {

        // Unsafe for minification.
        //(function () { "use strict"; var e = angular.module("app"); e.controller("demoController", function (e, t) { e.helloWorldMessage = "Hello World"; e.nameOfUserGroup = "Boulder .NET User Group"; e.whatAmI = "I am a factory"; e.properController = "A more common way to construct the controller is by creating the application (app) then call controller function passing in the " + "name of the controller followed by an array of variable(s) and then ending with a function call passing in the same variables"; e.thedate = {}; e.theDate = t.getTheDate() }) })()
        //app.controller('demoController', function ($scope, demoFactory) {

        // Slider two way binding
        //$scope.aNumber = $scope.aNumber.val();
        //var ranger = element.find("input");
        //ranger.bind("change", function () {
        //    $scope.$apply(function () {
        //        $scope.aNumber = ranger.val();
        //    });
        //});

        // Hello World example
        $scope.helloWorldMessage = 'Hello World';
        $scope.nameOfUserGroup = 'User Group';

        // Minification
        $scope.whatAmI = 'I am a factory';

        // Controller message
        $scope.properController = 'A more common pattern to construct the controller is by creating the application (app) then call controller ' +
            'function passing in the name of the controller followed by injecting an array of variable(s) and then ending with a function call passing in the same variables';

        $scope.aNumber = 100;
        $scope.firstNumber = 100;
        $scope.secondNumber = 1500;
        $scope.thirdNumber = 2000;

        // Copyright on footer
        $scope.thedate = {};
        $scope.theDate = demoFactory.getTheDate();
    }]);

    // value/object can only be accessed by services, not providers.
    app.value("myValue", { message: "I am so valuable." });

    // constants cannot be changed.
    app.constant("myConstant", "I constantly try to change but I can't.")

    app.controller('providersController', ['$scope', 'myValue', 'myConstant', 'theCount', 'providerFactory', 'providerService',
        function ($scope, myValue, myConstant, theCount, providerFactory, providerService) {
            // Service by VALUE
            $scope.myValue = myValue.message;

            $scope.myConstant = myConstant;

            $scope.providersArray = [
            { name: 'Constant', value: 1 },
            { name: 'Value', value: 2 },
            { name: 'Factory', value: 3 },
            { name: 'Service', value: 4 },
            { name: 'Provider', value: 5 }
            ];
            
            // Both factory and service will use theCount
            $scope.theCount = theCount;
            // For factory example
            $scope.providerFactory = providerFactory;
            $scope.factoryIncrease = function (quantity) {
                $scope.providerFactory.increment(quantity);
            }
            $scope.factoryDecrease = function (quantity) {
                $scope.providerFactory.decrement(quantity);
            }

            // For service example
            $scope.providerService = providerService;
            $scope.serviceIncrease = function () {
                $scope.providerService.increment(1);
            };
            $scope.serviceDecrease = function () {
                $scope.providerService.decrement(1);
            };

            // Set Provider drop down list
            $scope.selectedItem = $scope.providersArray[2];
        }]);

    app.controller('providerController2', ['$scope', 'providerService', function ($scope, providerService) {
        $scope.serviceIncrease = function () {
            providerService.increment(5);
        };
        $scope.serviceDecrease = function () {
            providerService.decrement(5);
        };
    }]);
})();

