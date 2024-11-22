angular.module('myApp', ['ngRoute', 'pages'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        template: '<home-page></home-page>',
      })
      .when('/about', {
        template: '<about-page></about-page>',
      })
      .when('/contact', {
        template: '<contacts-page></contacts-page>',
      })
      .otherwise({
        redirectTo: '/home'
      });
  });
