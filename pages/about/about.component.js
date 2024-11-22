angular.module('pages')
    .component('aboutPage', {
        templateUrl: 'pages/about/about.template.html',
        controller: 'AboutController'
    })
    .controller('AboutController', function ($scope) {
        $scope.message = "Welcome to the About page!";
    });
