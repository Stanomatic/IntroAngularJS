(function () {
    'use strict';

    var app = angular.module('app');
    
    app.controller('contactsController', ['$scope', 'contactsFactory', function ($scope, contactsFactory) {
        $scope.contact = {};
        $scope.contacts = contactsFactory.getContacts();

        $scope.saveContact = function () {
            contactsFactory.saveContact($scope.contact);
            $scope.contact = {};
            $scope.form.$setPristine(); // Removes errors before ever entered.
        }

        $scope.delete = function (id) {
            contactsFactory.deleteContact(id);
            $scope.contact = {};
        }

        $scope.edit = function (id) {
            for (var i in $scope.contacts) {
                if ($scope.contacts[i].id == id) {
                    $scope.contact = angular.copy($scope.contacts[i]);
                }
            }
        }

        $scope.thedate = {};
        $scope.theDate = contactsFactory.getTheDate();
    }]);
})();