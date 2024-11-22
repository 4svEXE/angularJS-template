angular.module('pages')
    .component('homePage', {
        templateUrl: 'pages/home/home.template.html',
        controller: 'HomeController'
    })
    .controller('HomeController', function ($scope) {
        $scope.message = "Welcome to the Home page!";
    });
