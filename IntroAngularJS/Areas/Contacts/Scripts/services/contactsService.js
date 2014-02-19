(function () {
    'use strict';

    var app = angular.module('app');
    // Array for pre-minifier - Minification.
    app.factory('contactsFactory', ['$http', function ($http) {
        var nextId = 3;
        // The business logic
        var getTheDate = function () {
            return Date.now();
        };

        var getContacts = function () {
            return contacts;
        };

        var saveContact = function (contact) {

            if (contact.id === undefined) {
                contact.id = nextId++;
                contacts.push(contact);
            } else {
                // Update the contact
                for (var i in contacts) {
                    if (contacts[i].id == contact.id) {
                        contacts[i] = contact;
                    }
                }
            }
            return contact;
        };

        var deleteContact = function (id) {
            for (var i in contacts) {
                if (contacts[i].id == id) {
                    contacts.splice(i, 1);
                }
            }
            return;
        };

        return {
            getTheDate: getTheDate,
            getContacts: getContacts,
            saveContact: saveContact,
            deleteContact: deleteContact
        };
    }]);
    var contacts = [
        {
            id: 0,
            'fullName': 'first last',
            'zip': '80221',
            'email': 'first@last.com',
            'phone': '303 333 4444'
        },
        {
            id: 1,
            'fullName': 'miss lady',
            'zip': '75077',
            'email': 'miss@lady.com',
            'phone': '303 444 3333'
        },
        {
            id: 2,
            'fullName': 'john doe',
            'zip': '92020',
            'email': 'john@doe.com',
            'phone': '691 555 5555'
        }
    ];
})();