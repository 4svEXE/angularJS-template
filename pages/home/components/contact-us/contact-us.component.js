angular.module('pages')
    .component('contactUs', {
        templateUrl: 'pages/home/components/contact-us/contact-us.template.html',
        controller: function ContactUsController($scope) {
            $scope.contact = {
                email: '',
                message: ''
            };

            $scope.submitContactForm = function () {
                if ($scope.contact.email && $scope.contact.message) {
                    alert(`Message sent! Email: ${$scope.contact.email}, Message: ${$scope.contact.message}`);
                    $scope.contact.email = '';
                    $scope.contact.message = '';
                } else {
                    alert('Please fill in all fields before submitting!');
                }
            };
        }
    });
