angular.module('pages', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/home', {
                template: '<home-page></home-page>'
            })
            .when('/about', {
                template: '<about-page></about-page>'
            })
            .when('/contacts', {
                template: '<contacts-page></contacts-page>'
            })
            .otherwise({
                redirectTo: '/home'
            });
    }]);
