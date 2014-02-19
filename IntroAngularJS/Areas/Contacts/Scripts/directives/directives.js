(function () {
    'use strict';
    var app = angular.module('app');

    app.directive('smNumberOptionalDecimal', function () {
        return {
            link: function (scope, element, attrs, ngModel) {
                element.on('keydown', function (event) {

                    //Set the default decimal place to two, if accuracy is not specified
                    var accuracy = parseInt(attrs.accuracy) || 0;
                    if (isCombo(event)) {
                        return true;
                    }

                    if (accuracy === 0) {
                        if (isNumericKeyCode(event.keyCode) || isNavigationKeycode(event.keyCode)) {
                            return true;
                        }

                    }
                    else {
                        if (isNumericKeyCode(event.keyCode) || isDecimal(event.keyCode) || isNavigationKeycode(event.keyCode)) {
                            return true;
                        }
                    }
                    return false;
                });
            }
        };

    });

    function isNumericKeyCode(keyCode) {
        return (event.keyCode >= 48 && event.keyCode <= 57)
            || (event.keyCode >= 96 && event.keyCode <= 105);
    }

    function isDecimal(keyCode) {
        return (event.keyCode === 190 || event.keyCode === 110);
    }

    function isCombo(event) {
        // c, v, x 
        if (event.ctrlKey && (event.keyCode === 67 || event.keyCode === 86 || event.keyCode === 88)) { return true; }
    }
    function isNavigationKeycode(keyCode) {
        switch (keyCode) {
            case 8: //backspace
            case 35: //end
            case 36: //home
            case 37: //left
            case 38: //up
            case 39: //right
            case 40: //down
            case 45: //ins
            case 46: //del
            case 109: //subtract
            case 189: //dash
            case 9: //tab
                return true;
            default:
                return false;
        }
    }
})();