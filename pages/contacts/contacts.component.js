angular.module('pages')
    .component('contactsPage', {
        templateUrl: 'pages/contacts/contacts.template.html',
        controller: 'ContactsController'
    })
    .controller('ContactsController', function ($scope) {
        $scope.message = "Welcome to the Contacts page!";
    });
