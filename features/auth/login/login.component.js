angular.module('myApp').component('loginForm', {
    templateUrl: 'features/auth/login/login.template.html',
    controller: function LoginController($scope) {
        $scope.credentials = {
            username: '',
            password: ''
        };

        $scope.login = function () {
            if ($scope.credentials.username && $scope.credentials.password) {
                console.log('Logging in:', $scope.credentials);
            } else {
                alert('Please fill in all fields!');
            }
        };
    }
});
